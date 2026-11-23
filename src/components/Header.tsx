import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-obsidian/95 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="container-site flex items-center justify-between h-16 lg:h-18">
        {/* Logo & Marca Oficial */}
        <a href="#" className="flex items-center gap-2.5 md:gap-3.5 group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-brand-orange/40 shrink-0">
            <Image
              src={SITE_DATA.brand.logoImage}
              alt={SITE_DATA.brand.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-display text-lg lg:text-xl font-normal tracking-tight text-travertine group-hover:text-brand-orange transition-colors">
              {SITE_DATA.brand.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-orange font-semibold">
              Interiores • Maputo
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium text-travertine/70 whitespace-nowrap">
          {SITE_DATA.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-orange transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações Rápidas */}
        <div className="flex items-center gap-3 xl:gap-4 shrink-0 whitespace-nowrap">
          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 text-xs text-travertine/80 hover:text-brand-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span className="tracking-wide">{SITE_DATA.brand.phone}</span>
          </a>

          {/* No mobile: atalho para o catálogo; No desktop: CTA de orçamento */}
          <a
            href="#catalogo"
            className="md:hidden text-[11px] px-3.5 py-1.5 rounded-full bg-obsidian-surface border border-white/15 text-travertine font-medium hover:border-brand-orange transition-all"
          >
            Catálogo
          </a>

          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-[11px] px-4 xl:px-5 py-2.5 min-h-[40px] xl:min-h-[42px]"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
