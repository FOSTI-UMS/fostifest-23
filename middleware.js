import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  process.env.TZ = 'Asia/Jakarta'
  const base_url = process.env.base_url;
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const sekarang = new Date().getTime();
  const d = await fetch(base_url + '/api/pendaftaran');
  const daftar = await d.json();

  const {
    data: { user },
  } = await supabaseMiddleware.auth.getUser();

  if (req.nextUrl.pathname == '/register') {
    if (sekarang < new Date(daftar.timer.time_start).getTime()) {
      return NextResponse.redirect(new URL('/soon', req.url));
    }
    else if (sekarang > new Date(daftar.timer.time_end).getTime()) {
      return NextResponse.redirect(new URL('/end', req.url));
    }
    else {
      return res;
    }
  }

  // PESERTA LOMBA CHECKER
  if (user) {
    const { data: userdata } = await supabaseMiddleware
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
    const { data: userdata } = await supabaseMiddleware
      .from('users')
      .select('is_admin')
      .eq('email', user.email)
      .single();

    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (userdata?.is_admin) {
        return res;
      }
      else {
        return NextResponse.redirect(new URL('/profile', req.url));
      }
    }
  }
  else if (!user) {
    if (req.nextUrl.pathname == '/admin/login' || req.nextUrl.pathname.startsWith('/admin/register')) {
      return res;
    }
    else if (req.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}

export const config = {
  matcher: ['/', '/profile', '/file-collection', '/admin/:path*', '/register'],
};