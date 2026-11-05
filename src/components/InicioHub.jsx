import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Truck,
  Activity,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  Send
} from "lucide-react";
import HeroSection from "./HeroSection";
import ClientesSection from "./ClientesSection";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function InicioHub({
  onNavigate,
  onOpenQuote,
  onOpenPdfModal,
  onSelectProduct
}) {
  const whatsAppGeneralUrl = buildWhatsAppQuoteUrl({
    name: "Asesoría Comercial General de Equipamiento Biomédico",
    sku: "CONSULTA-GENERAL",
    brand: "CliniK Soluciones",
    category: "Atención Inmediata",
    modality: "Venta Directa B2B"
  });

  // C1-C6 Awwwards Optimization:
  // >=68% photo height (h-56), <=12 words per card, 2 semantic Data Chips, max 2 icons per card
  const hubWindows = [
    {
      id: "catalogo",
      title: "Catálogo Biomédico",
      chips: ["10 Líneas Médicas", "Rescate & NASCO"],
      image: "./images/products/monitor-im70.jpg",
      tag: "Venta B2B",
      icon: Stethoscope,
      border: "border-slate-200/80 dark:border-slate-800 hover:border-[#00758D]"
    },
    {
      id: "cardioprotegidos",
      title: "Cardioprotección",
      chips: ["Res. 3316 de 2019", "5 Paquetes DEA"],
      image: "./images/products/dea-mindray-c1a.jpg",
      tag: "Espacio Cardioprotegido",
      icon: HeartPulse,
      border: "border-slate-200/80 dark:border-slate-800 hover:border-rose-500"
    },
    {
      id: "ambulancias",
      title: "Ambulancias TAB y TAM",
      chips: ["Res. 3100 de 2019", "Dotación o Vehículo"],
      image: "./images/products/rescate-camilla-ambulancia.png",
      tag: "Criterios 31 al 34",
      icon: Truck,
      border: "border-slate-200/80 dark:border-slate-800 hover:border-[#00758D]"
    },
    {
      id: "servicios",
      title: "Servicios y Metrología",
      chips: ["Mantenimiento", "Calibración & BLS"],
      image: "./images/products/desfibrilador-i2.png",
      tag: "Soporte Técnico",
      icon: Activity,
      border: "border-slate-200/80 dark:border-slate-800 hover:border-[#69a53c]"
    }
  ];

  return (
    <div className="w-full space-y-12 animate-in fade-in duration-300">
      {/* 1. HERO COMPACTO & PROFESIONAL */}
      <HeroSection
        onOpenQuote={onOpenQuote}
        onOpenPdfModal={onOpenPdfModal}
        onNavigate={onNavigate}
      />

      {/* 2. VENTANAS PRINCIPALES DE NAVEGACIÓN MODULAR — BENTO MINIMALISTA AWWWARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-[10px] font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Ecosistema Biomédico B2B</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Líneas de Especialidad
            </h2>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Garantía 12 Meses • Cobertura Nacional
          </span>
        </div>

        {/* GRILLA BENTO 4 COLUMNAS — >=68% FOTO + CHIPS + CERO PÁRRAFOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubWindows.map((win) => {
            const Icon = win.icon;
            return (
              <div
                key={win.id}
                onClick={() => onNavigate(win.id)}
                className={`group rounded-3xl bg-white dark:bg-slate-900 border ${win.border} shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden`}
              >
                {/* C1: LIENZO FOTOGRÁFICO PROTAGONISTA (h-56 = 224px) */}
                <div className="relative h-56 w-full bg-gradient-to-b from-slate-50/90 to-white dark:from-slate-800/60 dark:to-slate-900 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                  {/* PÍLDORA ÚNICA SUPERIOR TRANSLÚCIDA */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#00758D] dark:text-[#6BCDB2] border border-slate-200/70 dark:border-slate-700/70 shadow-2xs">
                      <Icon className="w-3 h-3 text-[#69a53c]" />
                      <span>{win.tag}</span>
                    </span>
                  </div>

                  {/* BOTÓN CIRCULAR FLOTANTE DE ACCIÓN */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-[#00758D] group-hover:text-white group-hover:border-[#00758D] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <img
                    src={win.image}
                    alt={win.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                </div>

                {/* C2 & C5: TÍTULO + DATA CHIPS (CERO PÁRRAFOS LARGOS) */}
                <div className="p-5">
                  <h3 className="font-black text-slate-900 dark:text-white text-lg tracking-tight mb-2.5 group-hover:text-[#00758D] dark:group-hover:text-[#6BCDB2] transition-colors">
                    {win.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {win.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100/90 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BARRA GLASSMORPHISM COMPACTA DE CONVERSIÓN DIRECTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-6 py-5 rounded-3xl bg-gradient-to-r from-[#005071] via-[#00758D] to-[#00687d] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <span className="hidden sm:flex w-3 h-3 rounded-full bg-[#69a53c] ring-4 ring-[#69a53c]/30 shrink-0"></span>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                ¿Requiere Cotización Institucional o Asesoría Biomédica?
              </h3>
              <p className="text-xs text-teal-100/90">
                Atención directa • (+57) 300 251 1990 • ventas@cliniksoluciones.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-extrabold py-3 px-5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs font-bold py-3 px-4 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Formulario B2B</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. MURO DE CONFIANZA: CLIENTES REALES */}
      <ClientesSection />
    </div>
  );
}
