import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const supportedLanguages = ["ro-RO", "ru-RU"];

export function middleware(request: NextRequest) {
  const langFromCookies = request.cookies.get("locale")?.value || "ro-RO";

  const language = supportedLanguages.includes(String(langFromCookies))
    ? langFromCookies
    : "ro-RO";

  const response = NextResponse.next();
  response.cookies.set("locale", String(language), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
  });

  const currentPath = request.nextUrl.pathname;
  if (!currentPath.startsWith(`/${language}`)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${language}${currentPath}`;
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|public|sitemap.xml|bb_logo.jpg|docs).*)",
  ],
};
