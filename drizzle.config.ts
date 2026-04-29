import { defineConfig } from 'drizzle-kit'

const getDbConfig = () => {
  const env = process.env.NODE_ENV || 'development'

  if (env === 'development') {
    return {
      host: process.env.DB_HOST || '',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
    }
  }

  // Return empty config for other environments (production, staging, etc.)
  return {
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  }
}

export default defineConfig({
  dialect: 'mysql',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dbCredentials: getDbConfig(),
})
