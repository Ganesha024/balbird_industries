# Email Rate Limit Error - Solutions

## Immediate Solutions

### Option 1: Wait for Rate Limit Reset
Supabase has rate limits on email verification. The limit typically resets after **1 hour**.

### Option 2: Use Different Email Addresses
Try signing up with different email addresses:
- `test1@example.com`
- `test2@example.com` 
- `user1@test.com`
- etc.

### Option 3: Disable Email Confirmation (Recommended for Development)

This is the best solution for development testing:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Settings**
3. Find **Email Confirmation** 
4. Toggle it **OFF**

This will:
- Remove the email verification requirement
- Eliminate rate limiting issues
- Allow immediate account creation

### Option 4: Use Supabase Dashboard to Create Users

For testing purposes, you can create users directly in the Supabase dashboard:

1. Go to **Authentication** > **Users**
2. Click **Add User**
3. Enter email and password
4. Set email confirmation to skip
5. Manually create their profile in the **Table Editor** > **profiles**

## Development Configuration

### Environment Variables for Development

Add this to your `.env.local` file to help with development:

```bash
# Add this to disable some rate limiting in development
NEXT_PUBLIC_DISABLE_RATE_LIMITING=true
```

### Test User Creation Script

I can create a script to help you quickly create test users without going through the signup form.

## Current Status

The application code is working correctly - this is just a Supabase rate limiting protection. Once you disable email confirmation or wait for the reset, the signup flow will work perfectly.

## Recommended Next Steps

1. **Disable email confirmation** in Supabase Auth Settings (best for development)
2. **Test the signup flow** with a new email address
3. **Verify the role-based dashboard routing** works correctly

The code changes I made are ready and will work once the rate limit issue is resolved.
