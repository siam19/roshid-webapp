import { auth0 } from "@/lib/auth0";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Debug: Log available methods
    console.log("Auth0 client methods:", Object.getOwnPropertyNames(auth0));
    
    // The correct method name is callback, not handleCallback
    return await auth0.callback(req);
  } catch (error) {
    console.error("Callback error:", error);
    return new Response(JSON.stringify({ error: "Callback failed", details: error instanceof Error ? error.message : String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}