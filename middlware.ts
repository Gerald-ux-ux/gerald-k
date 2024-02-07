import { NextRequest, NextResponse } from "next/server";

/**
 * Redirect logged in users back to the code-snippets page
 *
 */
export function middleware(req: NextRequest) {
  const isAuth = req.cookies.has("auth");

  console.log("cookie", req.cookies.has("auth"));

  if (isAuth) {
    return NextResponse.redirect("/code-snippets");
  }

  return NextResponse.next();
}

// Only run on this router
// export const config = {
//   matcher: "/",
// };
