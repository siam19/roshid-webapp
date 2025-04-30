import { auth0 } from "@/lib/auth0";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Force a login prompt even if the user has an existing session
    return await auth0.startInteractiveLogin(req, {
      authorizationParams: {
        prompt: 'login', // Force login prompt
        // You can also specify connection if you want to default to a specific login method
        // connection: 'google-oauth2'
      }
    });
  } catch (error) {
    console.error("Login error:", error instanceof Error ? error.message : String(error));
    
    return new Response(JSON.stringify({ 
      error: "Authentication failed", 
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}