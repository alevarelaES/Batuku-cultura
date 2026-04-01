import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matches all pathnames except for
  // - /api
  // - /_next
  // - /_vercel
  // - all files with an extension (e.g. .svg, .png)
  matcher: ['/', '/(fr|pt|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};