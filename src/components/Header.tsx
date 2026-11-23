"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SITE_DATA, NavItem } from "@/data/site-content";
import { Phone, ChevronDown } from "lucide-react";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Fecha dropdown ao clicar fora ou pressionar Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 bg-obsidian/95 backdrop-blur-md border-b border-white/5 transition-all"
    >
      <div className="container-site flex items-center justify-between h-16 lg:h-18">
        {/* Logo & Marca Oficial (Sempre em linha única, sem quebras) */}
        <a href="#" className="flex items-center gap-2.5 md:gap-3 group shrink-0">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-brand-orange/40 shrink-0">
            <Image
              src={SITE_DATA.brand.logoImage}
              alt={SITE_DATA.brand.name}
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-display text-base md:text-lg lg:text-xl font-normal tracking-tight text-travertine group-hover:text-brand-orange transition-colors">
              {SITE_DATA.brand.name}
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-brand-orange font-semibold">
              Interiores • Maputo
            </span>
          </div>
        </a>

        {/* Menu Desktop Enxuto com Dropdowns (Portfólio ▾ | Soluções ▾ | Showroom) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-xs uppercase tracking-[0.14em] font-medium text-travertine/80 whitespace-nowrap">
          {SITE_DATA.nav.map((item: NavItem) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openDropdown === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors py-1 cursor-pointer focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-orange" : "text-travertine/50"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Flutuante */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-obsidian-surface/98 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex flex-col gap-1">
                        {item.children!.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="group/item flex flex-col p-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
                          >
                            <span className="text-xs font-medium text-travertine group-hover/item:text-brand-orange transition-colors tracking-normal normal-case">
                              {child.label}
                            </span>
                            <span className="text-[11px] text-travertine/60 font-light mt-0.5 tracking-normal normal-case leading-snug">
                              {child.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-brand-orange transition-colors py-1"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Ações Rápidas (Telefone e Botão de Orçamento protegidos contra quebra) */}
        <div className="flex items-center gap-3 xl:gap-4 shrink-0 whitespace-nowrap">
          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 text-xs text-travertine/80 hover:text-brand-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span className="tracking-wide">{SITE_DATA.brand.phone}</span>
          </a>

          {/* No mobile: atalho para o catálogo; No desktop: CTA de orçamento */}
          <a
            href="#catalogo"
            className="lg:hidden text-[11px] px-3.5 py-1.5 rounded-full bg-obsidian-surface border border-white/15 text-travertine font-medium hover:border-brand-orange transition-all"
          >
            Catálogo
          </a>

          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-[11px] px-4 xl:px-5 py-2.5 min-h-[40px] xl:min-h-[42px]"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
