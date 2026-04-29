import { initializeDb } from './index'
import { users } from './schema'

const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Full stack developer passionate about web technologies',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    bio: 'Product designer and UX enthusiast',
  },
  {
    name: 'Muhammad Azzura',
    email: 'azzura@example.com',
    bio: 'Portfolio showcasing projects and skills',
  },
]

async function seed() {
  try {
    console.log('🌱 Starting database seed...')
    const db = await initializeDb()!

    if (!db) {
      throw new Error('Database not initialized. Cannot seed data.')
    }

    console.log('📝 Clearing existing users...')
    await db.delete(users)

    console.log('➕ Inserting sample users...')
    for (const user of sampleUsers) {
      await db.insert(users).values(user)
    }

    console.log('✅ Database seeding completed successfully!')
    console.log(`📊 Inserted ${sampleUsers.length} users`)
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  }
}

seed()
