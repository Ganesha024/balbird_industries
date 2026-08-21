# Database Setup Instructions for Balbird Application

## Step 1: Set Up Database Schema

1. Go to your Supabase project dashboard (https://supabase.com/dashboard)
2. Navigate to the **SQL Editor** in the left sidebar
3. Click "New Query"
4. Copy the entire contents of `database_schema.sql`
5. Paste it into the SQL Editor
6. Click **Run** to execute the schema creation

## Step 2: Verify Schema Creation

After running the SQL script, verify that the tables were created:

1. Go to **Table Editor** in the left sidebar
2. You should see the following tables:
   - `profiles` (main user profiles)
   - `manufacturer_profiles`
   - `oem_profiles`
   - `association_profiles`
   - `strategic_partner_profiles`
   - `retailer_profiles`
   - `student_profiles`

## Step 3: Configure Supabase Auth Settings

1. Navigate to **Authentication** > **Settings**
2. Under **Site URL**, add: `http://localhost:3000`
3. Under **Redirect URLs**, add:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/signup`
   - `http://localhost:3000/login`

## Step 4: Disable Email Confirmation (for local development)

1. In **Authentication** > **Settings**
2. Find **Email Confirmation** 
3. Toggle it **OFF** (this allows immediate signup without email verification)

## Step 5: Test the Application

1. Start the development server (if not already running):
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/signup`

3. Create a test account:
   - Enter name, email, password
   - Select a role (e.g., Manufacturer)
   - Click "Sign Up"

4. You should be automatically redirected to:
   - `http://localhost:3000/dashboard/manufacturer/overview`

## Troubleshooting

### "Could not find the table 'public.profiles'"
- Ensure you've run the `database_schema.sql` script in your Supabase SQL Editor
- Check that the tables were created in the Table Editor

### Auth redirect errors
- Verify your Redirect URLs in Supabase Auth settings
- Ensure the SITE_URL is set correctly

### Permission errors
- Make sure RLS policies were created (included in the schema script)
- Check that your anon/public keys are correctly configured in `.env.local`

## Environment Variables

Ensure your `.env.local` file contains:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

You can find these values in your Supabase project dashboard under **Settings** > **API**.
