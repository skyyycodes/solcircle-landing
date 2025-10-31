#!/usr/bin/env tsx
/**
 * Seed script to populate the waitlist with fake data
 * Usage: npm run seed:waitlist
 */

import { createClient } from '@libsql/client';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Check for required environment variables
if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
  console.error('❌ Error: Missing required environment variables!');
  console.error('\nPlease create a .env file with:');
  console.error('  TURSO_DATABASE_URL=your_database_url');
  console.error('  TURSO_AUTH_TOKEN=your_auth_token\n');
  process.exit(1);
}

// Initialize Turso client
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Number of entries to create
const ENTRIES_TO_CREATE = 219;

// Generate a realistic fake email
function generateFakeEmail(): string {
  const providers = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'protonmail.com', 'icloud.com'];
  const randomProvider = providers[Math.floor(Math.random() * providers.length)];
  
  // Use faker to generate realistic names
  const firstName = faker.person.firstName().toLowerCase();
  const lastName = faker.person.lastName().toLowerCase();
  const separator = Math.random() > 0.5 ? '.' : '';
  const number = Math.random() > 0.7 ? Math.floor(Math.random() * 999) : '';
  
  return `${firstName}${separator}${lastName}${number}@${randomProvider}`;
}

async function seedWaitlist() {
  console.log('🌱 Starting waitlist seed...\n');
  
  try {
    // Check if table exists, create if not
    await turso.execute(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Get current count
    const countResult = await turso.execute('SELECT COUNT(*) as count FROM waitlist');
    const currentCount = Number((countResult.rows[0] as any).count || 0);
    console.log(`📊 Current waitlist count: ${currentCount}`);
    
    // Generate and insert emails
    let successCount = 0;
    let duplicateCount = 0;
    let errorCount = 0;
    
    console.log(`\n📧 Generating ${ENTRIES_TO_CREATE} fake emails...\n`);
    
    for (let i = 0; i < ENTRIES_TO_CREATE; i++) {
      const email = generateFakeEmail();
      
      try {
        await turso.execute({
          sql: 'INSERT INTO waitlist (email) VALUES (?)',
          args: [email],
        });
        successCount++;
        
        // Show progress every 25 entries
        if ((successCount) % 25 === 0) {
          console.log(`✅ Inserted ${successCount} entries...`);
        }
      } catch (error: any) {
        if (error.message?.includes('UNIQUE constraint')) {
          duplicateCount++;
          // Retry with a different email
          i--;
        } else {
          errorCount++;
          console.error(`❌ Error inserting email ${email}:`, error.message);
        }
      }
    }
    
    // Final count
    const finalCountResult = await turso.execute('SELECT COUNT(*) as count FROM waitlist');
    const finalCount = Number((finalCountResult.rows[0] as any).count || 0);
    
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Seed completed!');
    console.log('='.repeat(50));
    console.log(`✅ Successfully inserted: ${successCount}`);
    console.log(`⚠️  Duplicates skipped: ${duplicateCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📊 Total entries in DB: ${finalCount}`);
    console.log(`📈 New entries added: ${finalCount - currentCount}`);
    console.log('='.repeat(50) + '\n');
    
  } catch (error) {
    console.error('💥 Fatal error during seeding:', error);
    process.exit(1);
  }
}

// Run the seed
seedWaitlist()
  .then(() => {
    console.log('✨ Seed script finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seed script failed:', error);
    process.exit(1);
  });
