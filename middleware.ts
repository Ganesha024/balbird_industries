import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Temporarily disable middleware to debug sign-in issues
  console.log('Middleware disabled for debugging sign-in')
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
