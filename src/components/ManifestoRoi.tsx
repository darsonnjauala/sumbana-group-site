import React from "react";
import { SITE_DATA } from "@/data/site-content";

export function ManifestoRoi() {
  const { manifesto } = SITE_DATA;

  return (
    <section className="py-12 md:py-28 bg-obsidian border-b border-white/5 relative">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="label-eyebrow">{manifesto.eyebrow}</span>
          <blockquote className="mt-4 md:mt-6 mb-4 md:mb-6 font-display text-xl md:text-4xl lg:text-5xl font-normal leading-snug text-travertine">
            &ldquo;{manifesto.quote}&rdquo;
          </blockquote>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.16em] text-champagne/80 font-medium">
            {manifesto.author}
          </span>
        </div>

        {/* =========================================
            MOBILE NATIVO (< 768px): Horizontal Touch Snap Rail
            DESKTOP (>= 768px): Grelha 3 Colunas
            ========================================= */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-5 px-5 pb-4 no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-0">
          {manifesto.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="w-[82vw] md:w-auto shrink-0 snap-center p-5 md:p-8 rounded-xl md:rounded-2xl bg-obsidian-surface/60 border border-white/5 hover:border-brand-orange/30 transition-all"
            >
              <span className="font-display text-2xl md:text-3xl font-light text-brand-orange mb-2 md:mb-4 block">
                {pillar.number}
              </span>
              <h3 className="text-base md:text-xl font-medium text-travertine mb-2 md:mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-sm text-travertine/70 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
