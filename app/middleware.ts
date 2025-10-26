import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth?.token;

    // Protect /admin routes
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (!token || token.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // user must be logged in
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"], // applies middleware to all /admin routes
};
