import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuth = req.cookies.has("auth");
  const url = req.nextUrl.clone();
  const snippetUrl = (url.pathname = "/code-snippets");

  console.log("url: ", url);

  console.log("cookie", isAuth);
  if (
    isAuth &&
    (url.pathname === "/auth/login" || url.pathname === "/auth/signup")
  ) {
    // Redirect to "/code-snippets" if the user is logged in and trying to access "/auth/login" or "/auth/signup"
    return NextResponse.rewrite(snippetUrl);
  }

  // Allow the request to continue unchanged if the user is not logged in or is accessing other paths
  return NextResponse.next();
}
