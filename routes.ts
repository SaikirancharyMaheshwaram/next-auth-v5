/**
 * js docs public
 * An array of routes that are accessible to the public and doesnot  require login
 * @type {string[]}
 */
export const publicRoutes = ["/", "/api", "/trpc"];

/**
 * These routes are protected routes and need authencated to visit them
 * and these routes will redirect loggedin users to home page
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

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
