import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Initialize the Auth0 client
export const auth0 = new Auth0Client({
  // Basic configuration
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  domain: process.env.AUTH0_DOMAIN,
  baseURL: process.env.APP_BASE_URL,
  secret: process.env.AUTH0_SECRET,
  
  // Required openid scope
  authorizationParameters: {
    scope: 'openid profile email',
    // Don't use empty audience
    // audience: process.env.AUTH0_AUDIENCE
  },
  
  // Configure routes
  routes: {
    callback: '/api/auth/callback',
    login: '/api/auth/login',
    logout: {
      path: '/api/auth/logout',
      returnTo: process.env.LANDING_SITE_URL || 'http://localhost:3001'
    }
  },
  
  // Session configuration
  session: {
    rolling: true,
    absoluteDuration: 24 * 60 * 60, // 24 hours
  }
});