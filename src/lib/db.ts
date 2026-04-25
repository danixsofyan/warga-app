import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '@/db/schema'

type DbInstance = ReturnType<typeof drizzle>

const globalForDb = global as unknown as {
  _pg?: ReturnType<typeof postgres>
  _db?: DbInstance
}

function getDb(): DbInstance {
  if (globalForDb._db) return globalForDb._db

  const url = process.env.DATABASE_URL
  if (!url) {
    
    throw new Error(
      'DATABASE_URL is not set. Please configure your Supabase connection in .env.local'
    )
  }

  const client = globalForDb._pg ?? postgres(url, { prepare: false })
  if (process.env.NODE_ENV !== 'production') globalForDb._pg = client

  const instance = drizzle(client, { schema })
  if (process.env.NODE_ENV !== 'production') globalForDb._db = instance

  return instance
}

export const db = new Proxy({} as DbInstance, {
  get(_, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

export type DB = DbInstance
