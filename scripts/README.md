# Waitlist Seed Script

This script populates the Turso database with fake waitlist entries for testing purposes.

## Usage

Make sure you have your Turso credentials set in `.env`:

```env
TURSO_DATABASE_URL=your_turso_url
TURSO_AUTH_TOKEN=your_auth_token
```

Then run:

```bash
npm run seed:waitlist
```

## What it does

- Generates 219 realistic fake email addresses using `@faker-js/faker`
- Inserts them into the `waitlist` table
- Handles duplicates automatically
- Shows progress every 25 entries
- Displays final statistics

## Output

The script will show:
- Current waitlist count before seeding
- Progress updates during insertion
- Final summary with success/error counts
- Total entries in database

## Notes

- Emails are generated with common providers (Gmail, Yahoo, Outlook, etc.)
- The script skips duplicates and retries with new emails
- Safe to run multiple times (won't create duplicates)
