/**
 * Declaration merge to store login state as session data
 */

declare module "express-session" {
    interface SessionData {
        authenticated: boolean
    }
}

export {}