-- SQL script to delete all users from the database
-- Run this in your Supabase SQL Editor

-- Delete all profiles first (due to foreign key constraints)
DELETE FROM profiles;

-- Delete all users from auth.users
-- Note: This requires service role key access
-- You may need to run this through Supabase dashboard or API

-- Alternative: Delete from auth schema directly
DELETE FROM auth.users WHERE true;
