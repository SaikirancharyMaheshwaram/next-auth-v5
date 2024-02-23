/**
 * js docs public
 * An array of routes that are accessible to the public and doesnot  require login
 * @type {string[]}
 */
export const publicRoutes = ["/", "/api", "/trpc", "/auth/new-verification"];

/**
 * These routes are protected routes and need authencated to visit them
 * and these routes will redirect loggedin users to home page
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/reset-password",
];

/**
 * api routes are public routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth/";

/**
 * default redirect path after user login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
