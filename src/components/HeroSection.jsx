import React from "react";
import {
  HeartPulse,
  ShieldCheck,
  FileText,
  ArrowRight,
  Send,
  Stethoscope
} from "lucide-react";
import { COMPANY_INFO, HERO_COPY } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function HeroSection({ onOpenQuote, onOpenPdfModal, onNavigate }) {
  const handleHeroWhatsApp = () => {
    const url = buildWhatsAppQuoteUrl({
      name: "Dotación Biomédica y Cardioprotección",
      sku: "HERO-CONSULTA",
      brand: "CliniK Soluciones",
      category: "Asesoría Integral (Res. 3100 / Res. 3316)",
      modality: "Venta Directa B2B"
    });
    window.open(url, "_blank");
  };

  return (
    <section id="inicio" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
      {/* ESCENARIO CONTENIDO REDONDEADO CON IMAGEN PANORÁMICA 16:9 */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-teal-100/90 dark:border-teal-900/40 min-h-[480px] lg:min-h-[540px] p-5 sm:p-8 lg:p-10 shadow-xl shadow-teal-950/5 flex items-center">
        {/* IMAGEN DE FONDO COMPLETA */}
        <img
          src={HERO_COPY.featuredCard.image}
          alt={HERO_COPY.featuredCard.title}
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        />

        {/* DEGRADADO PROTECTOR SUAVE */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-white/40 lg:bg-gradient-to-r lg:from-white/35 lg:via-transparent lg:to-transparent dark:from-[#080d15]/92 dark:via-[#080d15]/78 dark:to-[#080d15]/45 pointer-events-none" />

        {/* LAYOUT SPLIT HERO (50% GLASS IZQUIERDA / 50% VISUAL DESPEJADO DERECHA) */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ========================================================
              COLUMNA IZQUIERDA: TARJETA GLASSMORPHISM CONTENIDA EN 50%
             ======================================================== */}
          <div className="lg:col-span-6 flex items-center">
            <div className="w-full max-w-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/80 dark:border-slate-700/70 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
              {/* BADGE DE AUTORIDAD */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-teal-200 dark:border-teal-800/60 shadow-2xs text-[11px] font-bold text-[#00758D] dark:text-[#6BCDB2] mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#69a53c]" />
                <span>
                  {HERO_COPY.badge
                    ? `${HERO_COPY.badge} • NIT ${COMPANY_INFO.nit}`
                    : HERO_COPY.authorityBadge}
                </span>
              </div>

              {/* TITULAR PRINCIPAL EXACTO: "Dotación Biomédica y Cardioprotección" */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
                {HERO_COPY.titlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00758D] via-[#009bb8] to-[#69a53c]">
                  {HERO_COPY.titleHighlight}
                </span>
              </h1>

              {/* SUBTÍTULO LITERAL DE AJUSTES PAG CLINIK.DOCX */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {HERO_COPY.subtitle}
              </p>

              {/* BOTONES DE ACCIÓN RÁPIDA */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
                <button
                  onClick={() => onNavigate ? onNavigate("catalogo") : (window.location.hash = "#equipos")}
                  className="flex items-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-teal-900/15 transition-all cursor-pointer"
                >
                  <Stethoscope className="w-4 h-4 text-[#6BCDB2]" />
                  <span>Ver Catálogo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleHeroWhatsApp}
                  className="flex items-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-900/10 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Cotizar WhatsApp</span>
                </button>

                <button
                  onClick={onOpenPdfModal}
                  className="flex items-center gap-2 bg-white/95 dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xs transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                  <span>Portafolio PDF</span>
                </button>
              </div>

              {/* 4 PÍLDORAS CLAVE DEFINIDAS EN EL DOCUMENTO */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-center">
                {HERO_COPY.pills.map((pill, idx) => {
                  const valueColors = [
                    "text-slate-900 dark:text-white",
                    "text-[#00758D] dark:text-[#6BCDB2]",
                    "text-[#69a53c]",
                    "text-teal-700 dark:text-teal-300"
                  ];
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/70"
                    >
                      <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wider">
                        {pill.label}
                      </span>
                      <span className={`text-xs font-extrabold ${valueColors[idx % valueColors.length]}`}>
                        {pill.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMNA DERECHA: ÁREA VISUAL DESPEJADA + PÍLDORA FLOTANTE
             ======================================================== */}
          <div className="lg:col-span-6 min-h-[220px] sm:min-h-[260px] lg:min-h-full flex items-end justify-end">
            <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/80 dark:border-slate-700/70 rounded-2xl px-4 py-2.5 shadow-lg inline-flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-600">
                  <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
                </span>
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-100">
                  {HERO_COPY.featuredCard.normBadge} • Espacio Cardioprotegido
                </span>
              </div>

              <button
                onClick={() => onNavigate ? onNavigate("cardioprotegidos") : (window.location.hash = "#cardioprotegidos")}
                className="inline-flex items-center gap-1 text-xs font-extrabold text-[#00758D] dark:text-[#6BCDB2] hover:underline cursor-pointer"
              >
                <span>{HERO_COPY.featuredCard.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA HORIZONTAL EXTERIOR: TELEMETRÍA UCI Y URGENCIAS */}
      <div className="mt-4 p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-teal-100 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#69a53c] animate-ping"></span>
            Telemetría UCI y Urgencias
          </span>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
            EDAN iM70 / X12
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-slate-900 dark:text-white font-mono leading-none">72</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">LPM • Ritmo Sinusal Normal</span>
          </div>
        </div>

        {/* TRAZO ECG SVG */}
        <div className="w-full md:w-72 lg:w-96 h-9 bg-slate-950 rounded-xl px-2 py-1 overflow-hidden relative border border-teal-900/40 shrink-0">
          <svg viewBox="0 0 300 30" preserveAspectRatio="none" className="w-full h-full stroke-emerald-400 fill-none stroke-[2]">
            <path d="M 0 15 L 40 15 L 45 5 L 50 25 L 55 10 L 60 18 L 65 15 L 120 15 L 125 5 L 130 25 L 135 10 L 140 18 L 145 15 L 200 15 L 205 5 L 210 25 L 215 10 L 220 18 L 225 15 L 300 15" />
          </svg>
        </div>
      </div>
    </section>
  );
}
