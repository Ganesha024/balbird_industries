# Instructions to Delete All Users from Database

Since this requires elevated permissions, you'll need to perform this action directly in your Supabase dashboard.

## Method 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to the **SQL Editor** (in the left sidebar)
3. Click "New Query"
4. Run the following SQL commands:

```sql
-- First, delete all profiles (application data)
DELETE FROM profiles;

-- Then, delete all users from the auth system
-- Note: This requires admin access through the dashboard interface
```

## Method 2: Using Supabase Dashboard UI

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Users**
3. Select all users (click the checkbox at the top)
4. Click "Delete" to remove all users

## Method 3: Using Supabase CLI (if configured)

If you have the Supabase CLI installed with service role access:

```bash
supabase db reset
```

This will reset your entire database, including all users.

## Important Notes

- ⚠️ **This action is irreversible** - all user data will be permanently deleted
- After deleting users, the signup flow will work with the new role-based routing
- Test the signup process to ensure users are redirected to the correct dashboard
