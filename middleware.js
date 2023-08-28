import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import supabase from '@/api/supabase';

async function getTime(codename) {
  const timer = {
    time_start: "",
    time_end: ""
  };
  const getTimer = await supabase.from("timer").select("time_start, time_end").eq('codename', codename);
  if (getTimer.data.length > 0) {
    timer.time_start = getTimer.data[0].time_start;
    timer.time_end = getTimer.data[0].time_end;
  }

  return timer;
}

export async function middleware(req) {
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const sekarang = new Date().toISOString().split('.')[0].slice(0, -3);
  const daftar = await getTime('pendaftaran');
  const upload = await getTime('pengumpulan');

  const {
    data: { user },
  } = await supabaseMiddleware.auth.getUser();
  
  if (req.nextUrl.pathname == '/register') {
    if (sekarang < daftar.time_start) {
      return NextResponse.redirect(new URL('/soon', req.url));
    }
    else if (sekarang > daftar.time_end) {
      return NextResponse.redirect(new URL('/end', req.url));
    }
    else {
      return res;
    }
  }

  // PESERTA LOMBA CHECKER
  if (user) {
    const { data: userdata, error: usererror } = await supabaseMiddleware
      .from('users')
      .select('jenis')
      .eq('email', user.email)
      .single();

    if (req.nextUrl.pathname.startsWith('/file-collection')) {
      if (sekarang < upload.time_start) {
        return NextResponse.redirect(new URL('/upload/soon', req.url));
      }
      else if (sekarang > upload.time_end) {
        return NextResponse.redirect(new URL('/upload/end', req.url));
      }
      else {
        if (userdata && userdata.jenis == 'LOMBA DESIGN') {
          return res;
        }
        else {
          return NextResponse.redirect(new URL('/profile', req.url));
        }
      }
    }
  }

  // ADMIN CHECKER
  if (user) {
    const { data: userdata, error: usererror } = await supabaseMiddleware
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
  matcher: ['/', '/profile', '/file-collection', '/admin/:path*', '/register'],
};