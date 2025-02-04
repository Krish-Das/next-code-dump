import { redis } from "@/lib/redis"

export type TStorageAdapter = {
  get: (key: string) => Promise<string | null>
  set: (key: string, value: string, ttl?: number) => Promise<void>
  delete: (key: string) => Promise<void>
}

export const storageAdapter: TStorageAdapter = {
  async get(key) {
    try {
      const value = await redis.get(key)

      if (!value) return null
      return typeof value === "string" ? value : JSON.stringify(value)
    } catch (err) {
      console.error(
        `[AUTH-REDIS ERROR] Unable to retrieve the key "${key}" from Redis:`,
        err
      )
      return null
    }
  },
  async set(key, value, ttl) {
    try {
      const options = ttl ? { ex: ttl } : undefined
      await redis.set(key, value, options)
    } catch (err) {
      console.error(
        `[AUTH-REDIS ERROR] Unable to set the key "${key}" in Redis:`,
        err
      )
    }
  },
  async delete(key) {
    try {
      await redis.del(key)
    } catch (err) {
      console.error(
        `[AUTH-REDIS ERROR] Unable to delete the key "${key}" from Redis:`,
        err
      )
    }
  },
}

