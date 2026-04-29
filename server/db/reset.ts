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

async function reset() {
  const credentials = getDbCredentials()

  console.log('🔄 Connecting to database...')

  try {
    const connection = await mysql.createConnection(credentials)

    console.log('🗑️  Dropping existing tables...')
    await connection.query('DROP TABLE IF EXISTS `users`')
    console.log('✅ Tables dropped')

    const migrationDir = path.resolve(process.cwd(), 'server/db/migrations')
    const sqlFiles = fs
      .readdirSync(migrationDir)
      .filter((f) => f.endsWith('.sql') && !f.startsWith('_'))
      .sort()

    console.log(`\n📋 Running ${sqlFiles.length} migration file(s)`)

    for (const file of sqlFiles) {
      const filePath = path.join(migrationDir, file)
      const sql = fs.readFileSync(filePath, 'utf-8')

      console.log(`⏳ Running: ${file}`)
      await connection.query(sql)
      console.log(`✅ Done: ${file}`)
    }

    await connection.end()
    console.log('\n✅ Database reset completed successfully!')
  } catch (error) {
    console.error('❌ Reset failed:', error)
    process.exit(1)
  }
}

reset()
