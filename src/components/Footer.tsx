import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";
import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-12 md:pt-20 pb-28 md:pb-12 bg-obsidian text-travertine/70 text-xs border-t border-white/5">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 md:pb-16 border-b border-white/5">
          {/* Coluna Marca com Logo Oficial */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-orange/40 shrink-0">
                <Image
                  src={SITE_DATA.brand.logoImage}
                  alt={SITE_DATA.brand.name}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-2xl font-normal text-travertine">
                {SITE_DATA.brand.name}
              </span>
            </div>

            <p className="text-xs text-travertine/70 max-w-sm font-light leading-relaxed mb-6">
              {SITE_DATA.brand.tagline}. Transformamos ambientes residenciais e
              corporativos com rigor técnico e sofisticação de autor.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_DATA.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{SITE_DATA.brand.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Coluna Navegação */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.16em] text-brand-orange font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5">
              {SITE_DATA.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Contacto & Endereço */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.16em] text-brand-orange font-semibold block mb-4">
              Showroom & Atelier
            </span>
            <p className="text-travertine/80 font-light mb-1">
              {SITE_DATA.brand.address}
            </p>
            <p className="text-travertine/60 font-light mb-4">
              Maputo, Moçambique
            </p>
            <a
              href={SITE_DATA.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_DATA.brand.phone}</span>
            </a>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-travertine/50">
          <p>© {new Date().getFullYear()} Sumbana Group. Todos os direitos reservados.</p>
          <p className="tracking-wide">
            Design & Arquitetura Digital por Broadware
          </p>
        </div>
      </div>
    </footer>
  );
}
