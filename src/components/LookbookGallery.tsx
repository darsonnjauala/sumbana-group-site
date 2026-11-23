import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";

export function LookbookGallery() {
  const { lookbook } = SITE_DATA;

  return (
    <section id="lookbook" className="py-12 md:py-28 bg-obsidian border-b border-white/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <div className="max-w-2xl">
            <span className="label-eyebrow">Lookbook de Obras</span>
            <h2 className="mt-2 md:mt-3 font-normal text-travertine">
              Espaços Reais Concluídos.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-travertine/60 max-w-md mt-2 md:mt-0 font-light">
            Deslize para explorar transformações reais entregues pelo Sumbana Group na
            Grande Maputo.
          </p>
        </div>

        {/* =========================================
            MOBILE NATIVO (< 768px):
            Horizontal Snap Rail touch-friendly (swipe com polegar)
            Evita rolagem vertical infinita e dá sensação de app/galeria
            ========================================= */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-5 px-5 pb-4 no-scrollbar">
          {lookbook.map((item) => (
            <div
              key={item.id}
              className="w-[82vw] shrink-0 snap-center rounded-2xl overflow-hidden bg-obsidian-surface border border-white/10 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="82vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-brand-orange font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-travertine/50 font-light">
                    {item.location}
                  </span>
                </div>
                <h3 className="text-base font-normal text-travertine">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            DESKTOP (>= 768px): Grelha Arquitetónica
            ========================================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {lookbook.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-obsidian-surface border border-white/10 flex flex-col justify-between hover:border-brand-orange/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-brand-orange font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-travertine/50 font-light">
                    {item.location}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-normal text-travertine group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
