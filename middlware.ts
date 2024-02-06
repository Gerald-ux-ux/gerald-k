import { NextRequest, NextResponse } from "next/server";

/**
 * Redirect logged in users back to the code-snippets page
 *
 */
export function middleware(req: NextRequest) {
  const isAuth = req.cookies.get("auth");

  if (isAuth) {
    return NextResponse.redirect("/code-snippets");
  }
}

// Only run on this router
export const config = {
  matcher: "/code-snippets",
};
