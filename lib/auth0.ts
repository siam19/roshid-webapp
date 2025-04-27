import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Initialize the Auth0 client 
export const auth0 = new Auth0Client({
  // Options are loaded from environment variables by default
  authorizationParameters: {
    // Include required openid scope along with any other scopes from environment
    // TODO: Look into using a more secure way to handle scopes
    scope: process.env.AUTH0_SCOPE ? `openid ${process.env.AUTH0_SCOPE}` : 'openid profile email',
  },
  // Configure logout to redirect to LANDING_SITE_URL
  routes: {
    logout: {
      returnTo: process.env.LANDING_SITE_URL,
    }
  }
});