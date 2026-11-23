/**
 * Analytics privacy-first (Plausible).
 * Plugável: lê NEXT_PUBLIC_PLAUSIBLE_DOMAIN; sem env, no-op.
 *
 * Sem cookies, sem tracking pessoal. Substituir por Umami/Fathom é trocar
 * este componente.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const host =
    process.env.NEXT_PUBLIC_PLAUSIBLE_HOST || "https://plausible.io";

  if (!domain) return null;

  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      defer
      data-domain={domain}
      src={`${host}/js/script.js`}
    />
  );
}
