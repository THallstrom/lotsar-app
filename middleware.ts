import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const MAINTENANCE_ENABLED =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true" ||
  process.env.MAINTENANCE_MODE === "true";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_ENABLED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/maintenance")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|maintenance).*)",
  ],
};
