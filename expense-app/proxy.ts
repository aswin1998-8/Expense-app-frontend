import  {NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")?.value;

  // If NOT authenticated → redirect to /expense-tracker
  if (!authToken) {
    return NextResponse.redirect(new URL("/expense-tracker", request.url));
  }

  // Allow request to continue if authenticated
  return NextResponse.next();
  
}
export const config = {
  matcher: [
    "/",                // protect homepage
    "/dashboard/:path*", 
    // DO NOT protect /expense-tracker
  ],
};
