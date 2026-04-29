import mysql from 'mysql2/promise'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

const getDbCredentials = () => {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'azhura',
  }
}

async function migrate() {
  const credentials = getDbCredentials()

  console.log('🔄 Connecting to database...')
  console.log(`   Host: ${credentials.host}`)
  console.log(`   Database: ${credentials.database}`)

  try {
    const connection = await mysql.createConnection(credentials)

    const migrationDir = path.resolve(process.cwd(), 'server/db/migrations')
    const sqlFiles = fs
      .readdirSync(migrationDir)
      .filter((f) => f.endsWith('.sql') && !f.startsWith('_'))
      .sort()

    console.log(`\n📋 Found ${sqlFiles.length} migration file(s)`)

    for (const file of sqlFiles) {
      const filePath = path.join(migrationDir, file)
      const sql = fs.readFileSync(filePath, 'utf-8')

      console.log(`\n⏳ Running migration: ${file}`)
      try {
        await connection.query(sql)
        console.log(`✅ Migration successful: ${file}`)
      } catch (error: any) {
        if (error.code === 'ER_TABLE_EXISTS_ERROR') {
          console.log(`⚠️  Table already exists (skipping): ${file}`)
        } else {
          throw error
        }
      }
    }

    await connection.end()
    console.log('\n✅ Database migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
