-- Check if your user has a profile
-- Replace 'your-email@example.com' with your actual email

SELECT * FROM profiles WHERE email = 'your-email@example.com';

-- If no profile exists, create one with this command:
-- Replace the values with your actual user information

-- First, get your user ID from auth:
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- Then insert the profile (replace UUID with your actual user ID):
INSERT INTO profiles (id, email, full_name, role)
VALUES (
  'your-user-id-here',  -- Replace with actual UUID from above query
  'your-email@example.com',
  'Your Full Name',
  'manufacturer'
);

-- Verify the profile was created:
SELECT * FROM profiles WHERE email = 'your-email@example.com';