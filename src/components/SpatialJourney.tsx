"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/site-content";
import { Check } from "lucide-react";

export function SpatialJourney() {
  const [activeTab, setActiveTab] = useState<string>(SITE_DATA.spatialRooms[0].id);

  const currentRoom =
    SITE_DATA.spatialRooms.find((r) => r.id === activeTab) ||
    SITE_DATA.spatialRooms[0];

  return (
    <section id="ambientes" className="py-12 md:py-28 bg-obsidian-surface border-b border-white/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="max-w-2xl">
            <span className="label-eyebrow">Spatial Journey</span>
            <h2 className="mt-2 md:mt-3 font-normal text-travertine text-2xl md:text-4xl">
              O espaço desenhado para o seu bem-estar.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-travertine/60 max-w-md mt-2 md:mt-0 font-light">
            Não decoramos apenas com móveis soltos; articulamos iluminação, acústica,
            tecidos e marcenaria sob medida em Maputo.
          </p>
        </div>

        {/* Abas Táteis MEDG 390px */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 md:mb-8 no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {SITE_DATA.spatialRooms.map((room) => {
            const isActive = room.id === activeTab;
            return (
              <button
                key={room.id}
                onClick={() => setActiveTab(room.id)}
                className={`min-h-[42px] px-4 md:px-5 py-2 rounded-full text-[11px] md:text-xs uppercase tracking-[0.12em] font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-obsidian text-travertine/70 border border-white/5 hover:border-brand-orange/40"
                }`}
              >
                {room.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Display do Ambiente Selecionado: No mobile, imagem vem no topo (ordem visual direta) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center bg-obsidian rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 border border-white/10">
          {/* Fotografia Real do Ambiente Selecionado (Primeiro no mobile para feedback imediato do clique da aba) */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-obsidian-surface border border-white/10 shadow-xl">
            <Image
              src={currentRoom.image}
              alt={currentRoom.title}
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 z-10">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold block mb-0.5">
                Registo de Obra
              </span>
              <p className="text-xs md:text-sm font-medium text-travertine">
                {currentRoom.caption}
              </p>
            </div>
          </div>

          {/* Informações Narrativas do Ambiente */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-brand-orange font-semibold block mb-1">
                Ambiente Assinado
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-normal text-travertine mb-2 md:mb-4">
                {currentRoom.title}
              </h3>
              <p className="text-xs md:text-base text-travertine/80 font-light leading-relaxed mb-4 md:mb-8">
                {currentRoom.description}
              </p>

              {/* Destaques Técnicos */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-10">
                {currentRoom.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-brand-orange" />
                    </div>
                    <span className="text-xs md:text-sm text-travertine/80 font-light">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={`${SITE_DATA.brand.whatsappUrl}?text=${encodeURIComponent(
                  `Olá Sumbana Group! Gostaria de consultar um projeto de interiores para ${currentRoom.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Personalizar Ambiente
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
