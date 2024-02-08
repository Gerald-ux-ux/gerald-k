import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuth = req.cookies.has("auth");
  const requestedPath = req.nextUrl.pathname;

  if (
    isAuth &&
    (requestedPath === "/auth/login" || requestedPath === "/auth/signup")
  ) {
    return NextResponse.redirect(
      // Protecting the auth route
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/code-snippets?"
        : "https://gerald-k.vercel.app/code-snippets",
    );
  }

  return NextResponse.next();
}
