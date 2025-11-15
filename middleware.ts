import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  const { pathname, origin } = req.nextUrl;

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup";

  const needsAuth = pathname.includes("/code-snippets/add");


  if (!auth && needsAuth) {
    return NextResponse.redirect(
      `${origin}/auth/login?message=Login to add a snippet`,
    );
  }

  if (isAuthPage && auth) {
    return NextResponse.redirect(`${origin}/code-snippets`);
  }

  return NextResponse.next();
}
