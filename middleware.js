import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // PESERTA LOMBA CHECKER
  if (user) {
    const { data: userdata, error: usererror } = await supabase
      .from('users')
      .select('jenis')
      .eq('email', user.email)
      .single();

    if (req.nextUrl.pathname.startsWith('/file-collection')) {
      if (userdata && userdata.jenis == 'LOMBA DESIGN') {
        return res;
      }
      else {
        return NextResponse.redirect(new URL('/profile', req.url));
      }
    }
  }

  // ADMIN CHECKER
  if (user) {
    const { data: userdata, error: usererror } = await supabase
      .from('users')
      .select('is_admin')
      .eq('email', user.email)
      .single();

    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (userdata && userdata.is_admin) {
        return res;
      }
      else {
        return NextResponse.redirect(new URL('/profile', req.url));
      }
    }
  }
  else {
    if (!user && req.nextUrl.pathname == '/admin/login' || req.nextUrl.pathname.startsWith('/admin/register')) {
      return res;
    }
    else if (!user && req.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}

export const config = {
  matcher: ['/', '/profile', '/file-collection', '/admin/:path*'],
};