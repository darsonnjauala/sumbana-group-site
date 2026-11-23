import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

export function ShowroomSection() {
  const { showroom } = SITE_DATA;

  return (
    <section id="showroom" className="py-12 md:py-28 bg-obsidian-surface border-b border-white/5">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="label-eyebrow">{showroom.eyebrow}</span>
            <h2 className="mt-2 md:mt-3 mb-3 md:mb-6 font-normal text-travertine text-2xl md:text-4xl">
              {showroom.title}
            </h2>
            <p className="text-xs md:text-base text-travertine/80 font-light leading-relaxed mb-6 md:mb-8 max-w-xl">
              {showroom.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-10">
              <div className="flex items-start gap-3 p-3.5 md:p-5 rounded-xl md:rounded-2xl bg-obsidian border border-white/10">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.14em] font-semibold text-travertine">
                    Endereço
                  </p>
                  <p className="text-xs md:text-sm text-travertine/80 font-light">
                    {showroom.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 md:p-5 rounded-xl md:rounded-2xl bg-obsidian border border-white/10">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.14em] font-semibold text-travertine">
                    Horário
                  </p>
                  <p className="text-xs md:text-sm text-travertine/80 font-light">
                    {showroom.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Par de Botões MEDG */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${SITE_DATA.brand.whatsappUrl}?text=${encodeURIComponent(
                  "Olá Sumbana Group! Gostaria de agendar uma visita ao vosso showroom na Av. Milagre Mabote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                {showroom.ctaAppointment}
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Milagre+Mabote,+Maputo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center justify-center"
              >
                <span>{showroom.ctaLocation}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-obsidian border border-white/10 shadow-2xl">
            <Image
              src="/images/espelho-organico.jpg"
              alt="Showroom Sumbana Group"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold block mb-0.5">
                Atelier & Loja
              </span>
              <h3 className="font-display text-lg md:text-2xl font-normal text-travertine mb-1">
                Av. Milagre Mabote
              </h3>
              <p className="text-xs text-travertine/70 font-light">
                Maputo • Moçambique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
