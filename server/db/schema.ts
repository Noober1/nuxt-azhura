import { mysqlTable, int, varchar, text, timestamp } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('users', {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  bio: text(),
  createdAt: timestamp().defaultNow().notNull(),
})
