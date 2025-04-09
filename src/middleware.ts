import { NextRequest, NextResponse } from "next/server";

// Define public routes that don't require authentication
const publicRoutes = ["/", "/sign-in"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to public routes without authentication
  if (
    publicRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    )
  ) {
    return NextResponse.next();
  }

  // For non-public routes, we'll rely on client-side auth checks via useUser
  // This middleware doesn't block requests, just passes them through
  // The actual protection happens in the components using useUser from Clerk
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
