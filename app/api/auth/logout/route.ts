import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  try {
    // Build Auth0 logout URL with federated parameter
    const url = new URL('/v2/logout', `https://${process.env.AUTH0_DOMAIN}`);
    
    // Add returnTo parameter for redirect after logout
    url.searchParams.append('returnTo', process.env.LANDING_SITE_URL || 'http://localhost:3001');
    url.searchParams.append('client_id', process.env.AUTH0_CLIENT_ID || '');
    // Add federated=true to log out from Auth0 completely
    url.searchParams.append('federated', 'true');
    
    // Clear the session cookies
    const response = NextResponse.redirect(url);
    
    // Clear auth cookies
    response.cookies.set('appSession', '', { 
      maxAge: 0,
      expires: new Date(0),
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    return response;
  } catch (error) {
    console.error("Logout error:", error instanceof Error ? error.message : String(error));
    
    return new Response(JSON.stringify({ 
      error: "Logout failed", 
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}