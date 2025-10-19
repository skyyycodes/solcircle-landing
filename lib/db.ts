import { createClient } from '@libsql/client';

// Initialize Turso client
export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

// Initialize database schema
export async function initDatabase() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// Add email to waitlist
export async function addToWaitlist(email: string) {
  try {
    const result = await turso.execute({
      sql: 'INSERT INTO waitlist (email) VALUES (?)',
      args: [email],
    });
    return { success: true, id: result.lastInsertRowid };
  } catch (error: any) {
    if (error.message?.includes('UNIQUE constraint failed')) {
      throw new Error('Email already registered');
    }
    throw error;
  }
}

// Get all waitlist emails (optional - for admin use)
export async function getWaitlistEmails() {
  const result = await turso.execute('SELECT email, created_at FROM waitlist ORDER BY created_at DESC');
  return result.rows;
}

// Get total count of waitlist entries
export async function getWaitlistCount(): Promise<number> {
  const result = await turso.execute('SELECT COUNT(*) as count FROM waitlist');
  const row = (result.rows as any[])[0] as any;
  const value = row?.count;
  // Handle possible BigInt from libsql
  if (typeof value === 'bigint') return Number(value);
  if (typeof value === 'string') return parseInt(value, 10);
  if (typeof value === 'number') return value;
  return 0;
}
