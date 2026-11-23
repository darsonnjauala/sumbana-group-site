import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";

export function HeroSpatial() {
  const { hero } = SITE_DATA;

  return (
    <section className="relative border-b border-white/5 overflow-hidden">
      {/* =========================================
          VERSÃO MOBILE NATIVA (< 1024px / 390px)
          Capa cinematográfica de ecrã inteiro (82vh),
          vídeo real em auto-play mudo contínuo e botões na zona do polegar.
          ========================================= */}
      <div className="lg:hidden relative min-h-[82vh] flex flex-col justify-end p-5 pb-8 sm:p-6 sm:pb-12 bg-obsidian">
        {/* Vídeo / Imagem de Fundo Imersiva Mobile */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={hero.heroImage}
            className="w-full h-full object-cover object-center"
          >
            <source src={hero.heroVideo} type="video/mp4" />
          </video>
          {/* Gradiente dramático de leitura */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/30 pointer-events-none" />
        </div>

        {/* Conteúdo na Zona de Leitura e Polegar */}
        <div className="relative z-10 flex flex-col items-start">
          <span className="label-eyebrow mb-2">
            {hero.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-4xl font-normal leading-[1.12] mb-3 text-travertine">
            Transformamos metros quadrados em{" "}
            <span className="italic font-normal text-brand-orange">
              ambientes extraordinários.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-travertine/80 font-light mb-5 line-clamp-3 leading-relaxed">
            {hero.description}
          </p>

          {/* Par de Botões Emparelhados Lado a Lado (Toque 48px) */}
          <div className="grid grid-cols-2 gap-2.5 w-full mb-5">
            <a
              href={SITE_DATA.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center justify-center text-xs px-2.5 sm:px-4"
            >
              {hero.ctaPrimary}
            </a>
            <a href="#lookbook" className="btn-secondary text-center justify-center text-xs px-2.5 sm:px-4">
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Hairline Indicators Mobile */}
          <div className="grid grid-cols-3 gap-2 w-full pt-3.5 border-t border-white/10 text-center">
            <div>
              <span className="text-xs font-semibold text-brand-orange">01</span>
              <p className="text-[10px] uppercase tracking-wider text-travertine/80">3D</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-brand-orange">02</span>
              <p className="text-[10px] uppercase tracking-wider text-travertine/80">Marcenaria</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-brand-orange">03</span>
              <p className="text-[10px] uppercase tracking-wider text-travertine/80">Turnkey</p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          VERSÃO DESKTOP (>= 1024px / 1440px)
          Composição arquitetónica Split-Screen Monolith
          ========================================= */}
      <div className="hidden lg:block container-site py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Coluna Texto */}
          <div className="col-span-6 flex flex-col items-start">
            <span className="label-eyebrow mb-4 block">
              {hero.eyebrow}
            </span>

            <h1 className="mb-6 font-normal text-travertine">
              Transformamos metros quadrados em{" "}
              <span className="italic font-normal text-brand-orange">
                ambientes extraordinários.
              </span>
            </h1>

            <p className="text-lg text-travertine/80 font-light mb-8 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            <div className="flex items-center gap-4 mb-12">
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {hero.ctaPrimary}
              </a>
              <a href="#lookbook" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full">
              <div>
                <span className="font-display text-xl text-brand-orange block font-normal">
                  01
                </span>
                <p className="text-xs uppercase tracking-[0.1em] font-medium text-travertine mt-1">
                  Projetos 3D
                </p>
                <p className="text-[11px] text-travertine/60 font-light">
                  Visualização prévia
                </p>
              </div>

              <div>
                <span className="font-display text-xl text-brand-orange block font-normal">
                  02
                </span>
                <p className="text-xs uppercase tracking-[0.1em] font-medium text-travertine mt-1">
                  Marcenaria
                </p>
                <p className="text-[11px] text-travertine/60 font-light">
                  Móveis sob medida
                </p>
              </div>

              <div>
                <span className="font-display text-xl text-brand-orange block font-normal">
                  03
                </span>
                <p className="text-xs uppercase tracking-[0.1em] font-medium text-travertine mt-1">
                  Turnkey
                </p>
                <p className="text-[11px] text-travertine/60 font-light">
                  Entrega de chaves
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Vídeo / Fotografia Real Arquitetónica */}
          <div className="col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-obsidian">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={hero.heroImage}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              >
                <source src={hero.heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold block mb-1">
                  Obra Real • Maputo
                </span>
                <p className="text-sm font-medium text-travertine">
                  {hero.heroImageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
