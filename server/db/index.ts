import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

let db: ReturnType<typeof drizzle<typeof schema>> | null = null

const getDbCredentials = () => {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'azhura',
  }
}

export async function initializeDb() {
  if (db) return db

  const credentials = getDbCredentials()

  if (!credentials.host || !credentials.user || !credentials.password || !credentials.database) {
    throw new Error('Database credentials not configured. Check environment variables.')
  }

  const pool = mysql.createPool(credentials)
  db = drizzle(pool, { schema, mode: 'default' })
  return db
}

export function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDb() first.')
  }
  return db
}
