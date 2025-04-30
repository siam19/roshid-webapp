import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  // Handle Auth0-specific routes
  const authResponse = await auth0.middleware(request);
  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    return authResponse;
  }

  // Protect other routes: redirect to Auth0 login if no session
  const session = await auth0.getSession(request);
  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl.origin));
  }

  return authResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};