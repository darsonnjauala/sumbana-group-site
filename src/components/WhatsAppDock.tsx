"use client";

import React from "react";
import { SITE_DATA } from "@/data/site-content";
import { MessageSquare, Phone } from "lucide-react";

export function WhatsAppDock() {
  return (
    <>
      {/* =========================================
          BARRA DE AÇÃO INFERIOR NATIVA NO MOBILE (< 768px)
          Ancorada na zona do polegar (Thumb Zone Ergonomics),
          com suporte a Safe Area no iOS/Android.
          Permite ligar direto ou abrir WhatsApp com 1 toque.
          ========================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2.5 shadow-2xl">
        <a
          href={`tel:${SITE_DATA.brand.phone.replace(/\s+/g, "")}`}
          className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-obsidian-surface border border-white/15 text-travertine text-xs font-medium hover:border-brand-orange transition-colors shrink-0 min-h-[44px]"
          aria-label="Ligar para o Sumbana Group"
        >
          <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
          <span className="text-[11px] uppercase tracking-wider">Ligar</span>
        </a>

        <a
          href={SITE_DATA.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 flex-grow px-4 py-2.5 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-[0.1em] hover:bg-brand-orangeHover transition-all active:scale-[0.98] shadow-lg shadow-brand-orange/20 min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Pedir Orçamento</span>
        </a>
      </div>

      {/* =========================================
          BOTÃO FLUTUANTE NO DESKTOP (>= 768px)
          Discreto no canto inferior direito
          ========================================= */}
      <aside
        aria-label="Atendimento rápido via WhatsApp"
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-3"
      >
        <a
          href={SITE_DATA.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-brand-orange text-white shadow-2xl font-body text-xs font-semibold uppercase tracking-[0.1em] hover:bg-brand-orangeHover transition-all hover:scale-105 active:scale-95 border border-white/20"
        >
          <MessageSquare className="w-4 h-4 text-white shrink-0" />
          <span>Falar no WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
