/**
 * EmailJS (https://www.emailjs.com/) — browser SDK, no backend.
 *
 * Set these in `.env.local` for development (never commit that file):
 *   VITE_EMAILJS_PUBLIC_KEY
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *
 * For production builds on GitHub Actions, define the same names as repository secrets
 * and pass them into `npm run build` (see `.github/workflows/deploy.yml`).
 */
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";

export function isEmailJsConfigured(): boolean {
  return Boolean(
    EMAILJS_PUBLIC_KEY.trim() && EMAILJS_SERVICE_ID.trim() && EMAILJS_TEMPLATE_ID.trim()
  );
}
