/**
 * Server-side: envio do formulário de contacto.
 *
 * Stub env-driven. Se RESEND_API_KEY estiver presente, envia via Resend.
 * Se não, logga TODO e devolve sucesso (não bloqueia formulário em dev).
 *
 * Mudar para outro provider (Postmark, SES, SMTP) só substitui esta função.
 */
import { meta } from "@content/site";

export type ContactPayload = {
  name: string;
  business: string;
  message: string;
};

export type ContactResult =
  | { ok: true; stubbed: boolean }
  | { ok: false; error: string };

export async function sendContact(p: ContactPayload): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // eslint-disable-next-line no-console
    console.log(
      "[contact] TODO: configurar provider de email (env em falta).",
      { to, from, hasKey: Boolean(apiKey), payload: p },
    );
    return { ok: true, stubbed: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `[${meta.brandName}] Contacto de ${p.name} — ${p.business}`,
        text: `Nome: ${p.name}\nNegócio: ${p.business}\n\n${p.message}`,
      }),
    });
    if (!res.ok) {
      return { ok: false, error: `Provider devolveu ${res.status}` };
    }
    return { ok: true, stubbed: false };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "erro desconhecido",
    };
  }
}
