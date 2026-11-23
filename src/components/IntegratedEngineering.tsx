import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";

export function IntegratedEngineering() {
  const { engineering } = SITE_DATA;

  return (
    <section id="engenharia" className="py-12 md:py-28 bg-obsidian border-b border-white/5">
      <div className="container-site">
        <div className="max-w-2xl mb-8 md:mb-16">
          <span className="label-eyebrow">{engineering.eyebrow}</span>
          <h2 className="mt-2 md:mt-3 mb-2 md:mb-4 font-normal text-travertine text-2xl md:text-4xl">
            {engineering.title}
          </h2>
          <p className="text-xs md:text-sm text-travertine/70 font-light leading-relaxed">
            {engineering.desc}
          </p>
        </div>

        {/* =========================================
            MOBILE NATIVO (< 768px): Horizontal Touch-Snap Rail
            DESKTOP (>= 768px): Grelha 3 Colunas Arquitetónica
            ========================================= */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-4 no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-0">
          {engineering.solutions.map((item, idx) => (
            <div
              key={idx}
              className="w-[82vw] md:w-auto shrink-0 snap-center card-atelier overflow-hidden p-0 flex flex-col justify-between group border border-white/10 hover:border-brand-orange/40 transition-all duration-300 rounded-xl md:rounded-2xl bg-obsidian-surface"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 82vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-4 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-brand-orange font-semibold block mb-1 md:mb-2">
                    0{idx + 1} • Engenharia
                  </span>
                  <h3 className="text-base md:text-xl font-normal text-travertine mb-2 md:mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-travertine/70 font-light leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 md:pt-4 border-t border-white/5">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-sand font-medium">
                    Instalação Técnica Integrada
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
