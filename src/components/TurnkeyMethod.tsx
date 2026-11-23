import React from "react";
import { SITE_DATA } from "@/data/site-content";

export function TurnkeyMethod() {
  return (
    <section id="metodo" className="py-12 md:py-28 bg-obsidian-surface border-b border-white/5">
      <div className="container-site">
        <div className="max-w-2xl mb-8 md:mb-16">
          <span className="label-eyebrow">Método de Trabalho</span>
          <h2 className="mt-2 md:mt-3 mb-2 md:mb-4 font-normal text-travertine text-2xl md:text-4xl">
            Do briefing à entrega das chaves.
          </h2>
          <p className="text-xs md:text-sm text-travertine/70 font-light">
            Eliminamos a incerteza de carpinteiros avulsos ou compras avulsas.
            Processo 100% estruturado em 4 etapas rigorosas:
          </p>
        </div>

        {/* =========================================
            MATRIZ 2x2 COMPACTA NO MOBILE (< 640px)
            E 4 COLUNAS NO DESKTOP (>= 1024px)
            Permite visualizar todas as 4 etapas num único ecrã mobile.
            ========================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6 mb-8 md:mb-16">
          {SITE_DATA.method.map((m) => (
            <div
              key={m.step}
              className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-obsidian border border-white/5 hover:border-brand-orange/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-2xl md:text-4xl font-light text-brand-orange block mb-2 md:mb-4">
                  {m.step}
                </span>
                <h3 className="text-sm md:text-xl font-medium text-travertine mb-1.5 md:mb-3">
                  {m.title}
                </h3>
                <p className="text-[11px] md:text-sm text-travertine/70 font-light leading-relaxed line-clamp-3 md:line-clamp-none">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card de Conversão */}
        <div className="p-5 md:p-12 rounded-2xl md:rounded-3xl bg-obsidian border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.16em] text-brand-orange font-semibold block mb-1">
              Visita Técnica Presencial
            </span>
            <h3 className="text-lg md:text-2xl font-normal text-travertine mb-1 md:mb-2">
              Pronto para avaliar o seu espaço em Maputo?
            </h3>
            <p className="text-xs md:text-sm text-travertine/70 font-light">
              Nossa equipa vai até si para medir, ouvir as suas ideias e orientar a melhor solução.
            </p>
          </div>
          <a
            href={`${SITE_DATA.brand.whatsappUrl}?text=${encodeURIComponent(
              "Olá Sumbana Group! Gostaria de agendar uma visita técnica de medição no meu espaço."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 w-full md:w-auto text-center"
          >
            Agendar Medição
          </a>
        </div>
      </div>
    </section>
  );
}
