export { default } from 'next-auth/middleware'

// Secures the matching routes
export const config = { matcher: ['/'] }
