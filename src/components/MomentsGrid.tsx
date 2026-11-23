import React from "react";
import { SITE_DATA } from "@/data/site-content";

export function MomentsGrid() {
  return (
    <section className="py-12 md:py-28 bg-obsidian-surface border-b border-white/5">
      <div className="container-site">
        <div className="max-w-2xl mb-8 md:mb-12">
          <span className="label-eyebrow">Momentos de Transformação</span>
          <h2 className="mt-2 md:mt-3 mb-2 md:mb-4 font-normal text-travertine text-2xl md:text-4xl">
            Quando nos deve chamar.
          </h2>
          <p className="text-xs md:text-sm text-travertine/70 font-light">
            O design de interiores não é um capricho estético; é a resposta certa
            nos momentos decisivos do seu património residencial.
          </p>
        </div>

        {/* =========================================
            MOBILE NATIVO (< 768px): Horizontal Touch-Snap Rail
            DESKTOP (>= 768px): Grelha 3 Colunas Arquitetónica
            Elimina o empilhamento vertical cansativo no telemóvel.
            ========================================= */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-4 no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-0">
          {SITE_DATA.moments.map((moment) => (
            <div
              key={moment.id}
              className="w-[82vw] md:w-auto shrink-0 snap-center p-5 md:p-8 rounded-2xl bg-obsidian border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-3xl md:text-4xl font-light text-brand-orange">
                    {moment.number}
                  </span>
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.16em] text-brand-orange/90 font-semibold px-2 py-0.5 rounded bg-brand-orange/10">
                    {moment.scenario}
                  </span>
                </div>

                <h3 className="text-lg md:text-2xl font-normal text-travertine mb-2 md:mb-3">
                  {moment.question}
                </h3>
                <p className="text-xs md:text-sm text-travertine/70 font-light leading-relaxed mb-4 md:mb-6">
                  {moment.solution}
                </p>
              </div>

              <div className="pt-3 md:pt-4 border-t border-white/5">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-semibold text-sand block">
                  {moment.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
