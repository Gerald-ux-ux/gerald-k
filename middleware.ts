import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.has("auth");
  const { pathname, origin } = req.nextUrl;

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup";

  if (isAuthPage && auth) {
    return NextResponse.redirect(`${origin}/code-snippets`);
  }


  return NextResponse.next();
}
