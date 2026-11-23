import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";
import { ArrowUpRight } from "lucide-react";

export function CuratedCatalog() {
  return (
    <section id="catalogo" className="py-12 md:py-28 bg-obsidian border-b border-white/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <div className="max-w-2xl">
            <span className="label-eyebrow">Curadoria de Peças</span>
            <h2 className="mt-2 md:mt-3 font-normal text-travertine text-2xl md:text-4xl">
              Mobiliário sob medida & autor.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-travertine/60 max-w-md mt-2 md:mt-0 font-light">
            Transparência de valores expressos em Meticais (MT). Fabricamos sob medida
            com madeiras nobres e tecidos premium em Maputo.
          </p>
        </div>

        {/* =========================================
            GRELHA 2 COLUNAS NATIVA NO MOBILE (< 768px)
            E 3 COLUNAS NO DESKTOP (>= 1024px)
            Ergonomia MEDG 390px: visualização em grelha compacta 2x,
            sem rolagem vertical infinita de cards gigantes.
            ========================================= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {SITE_DATA.catalog.map((item) => (
            <div
              key={item.id}
              className="card-atelier flex flex-col justify-between group overflow-hidden p-0 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 rounded-xl md:rounded-2xl bg-obsidian-surface"
            >
              {/* Fotografia Real do Produto */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60" />
                
                {/* Preço em Tag Flutuante Compacta */}
                <div className="absolute top-2 right-2 md:top-3.5 md:right-3.5 bg-obsidian/90 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/15">
                  <span className="font-display text-xs md:text-sm font-semibold text-brand-orange">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Informações da Peça: Adaptadas para Mobile vs Desktop */}
              <div className="p-3 md:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-brand-orange font-semibold block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-sm md:text-xl font-normal text-travertine mb-1.5 md:mb-2 group-hover:text-brand-orange transition-colors line-clamp-1 md:line-clamp-none">
                    {item.name}
                  </h3>

                  {/* Descrição: Ocultada no mobile compacto para preservar densidade editorial, visível em telas maiores */}
                  <p className="hidden md:block text-xs md:text-sm text-travertine/70 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Especificações Técnicas: Ocultadas no mobile para evitar sobrecarga */}
                  <div className="hidden md:block space-y-1.5 mb-6 pt-3 border-t border-white/5">
                    {item.specs.map((spec, sIdx) => (
                      <p key={sIdx} className="text-[11px] text-travertine/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                        <span className="truncate">{spec}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-2 md:pt-0">
                  <a
                    href={`${SITE_DATA.brand.whatsappUrl}?text=${encodeURIComponent(
                      `Olá Sumbana Group! Gostaria de encomendar e personalizar o ${item.name} (${item.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-[11px] md:text-xs py-2 md:py-2.5 px-2 md:px-4 min-h-[38px] md:min-h-[44px]"
                  >
                    <span>Personalizar</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 hidden sm:inline" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
