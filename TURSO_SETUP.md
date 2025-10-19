# Turso Waitlist Setup

This project uses Turso (libSQL) to store waitlist emails.

## Setup Instructions

1. **Create a Turso account** at [https://turso.tech](https://turso.tech)

2. **Install Turso CLI** (optional, for local development):
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

3. **Create a database**:
   ```bash
   turso db create solcircle-waitlist
   ```

4. **Get your database URL**:
   ```bash
   turso db show solcircle-waitlist --url
   ```

5. **Create an auth token**:
   ```bash
   turso db tokens create solcircle-waitlist
   ```

6. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Add your Turso credentials to `.env.local`:
     ```
     TURSO_DATABASE_URL=libsql://your-database.turso.io
     TURSO_AUTH_TOKEN=your-auth-token-here
     ```

7. **The database table will be created automatically** when the first email is submitted.

## Database Schema

The `waitlist` table has the following structure:
- `id` - Auto-incrementing primary key
- `email` - Unique email address
- `created_at` - Timestamp of when the email was added

## Query Waitlist Emails (Optional)

To view all waitlist emails:
```bash
turso db shell solcircle-waitlist
SELECT * FROM waitlist ORDER BY created_at DESC;
```

Or use the Turso dashboard at [https://app.turso.tech](https://app.turso.tech)
