export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/host/:path*",
    "/profile/:path*",
    "/bookings/:path*",
    "/wishlist/:path*",
  ],
};