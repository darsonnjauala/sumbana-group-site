import { NextResponse } from "next/server";
import { sendContact } from "@/lib/contact";

export const runtime = "nodejs";

type Body = { name?: string; business?: string; message?: string };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON inválido" },
      { status: 400 },
    );
  }

  const name = (body.name || "").trim();
  const business = (body.business || "").trim();
  const message = (body.message || "").trim();

  if (!name || !business || !message) {
    return NextResponse.json(
      { ok: false, error: "Campos em falta." },
      { status: 400 },
    );
  }
  if (message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Mensagem demasiado longa." },
      { status: 400 },
    );
  }

  const result = await sendContact({ name, business, message });
  if (!result.ok) {
    return NextResponse.json(result, { status: 502 });
  }
  return NextResponse.json(result, { status: 200 });
}
