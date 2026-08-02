import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Temporarily disabled for debugging
  // TODO: Re-enable after Supabase auth is working
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
