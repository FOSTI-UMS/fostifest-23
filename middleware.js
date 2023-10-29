import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const base_url = process.env.base_url;
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const gmt7TimeZone = 'Asia/Bangkok'; // GMT+7 timezone
  const now = new Date().toLocaleString('en-US', { timeZone: gmt7TimeZone });
  const sekarang = new Date(now).getTime();
  const d = await fetch(base_url + '/api/pendaftaran');
  const daftar = await d.json();

  const {
    data: { user },
  } = await supabaseMiddleware.auth.getUser();

  // ADMIN CHECKER
  if (user) {
    const { data: userdata } = await supabaseMiddleware
      .from('users')
      .select('is_admin')
      .eq('email', user.email)
      .single();

    if (!userdata?.is_admin) {
      if (req.nextUrl.pathname == '/admin' || req.nextUrl.pathname == '/profile') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
  }
  else if (!user) {
    if (req.nextUrl.pathname == '/admin') {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    else if (req.nextUrl.pathname.startsWith('/admin/login')) {
      return res;
    }
    else if (req.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}

export const config = {
  matcher: ['/', '/login', '/register', '/profile', '/file-collection', '/admin/:path*', '/register', '/payments'],
};