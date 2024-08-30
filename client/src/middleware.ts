import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user?.name) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && session.user?.name) {
    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/milk",
    "/cow/create",
    "/analytics",
    "/health",
    "/cow",
    "/login",
    "/",
  ],
};
