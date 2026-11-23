/**
 * WhatsApp deep-link builder.
 *
 * Lê o número de NEXT_PUBLIC_WHATSAPP_NUMBER (E.164 sem `+`). Sem env,
 * cai num placeholder para evitar partir UI em dev — o link continua válido
 * estruturalmente, só não chega a ninguém real.
 */
export function whatsappLink(prefilledText?: string): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "000000000000";
  const base = `https://wa.me/${number}`;
  if (!prefilledText) return base;
  return `${base}?text=${encodeURIComponent(prefilledText)}`;
}
