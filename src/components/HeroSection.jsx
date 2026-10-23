import React from "react";
import {
  HeartPulse,
  Activity,
  ShieldCheck,
  FileText,
  ArrowRight,
  Send,
  CheckCircle2,
  BadgeCheck,
  Award,
  Zap,
  Radio,
  Stethoscope,
  QrCode
} from "lucide-react";
import { COMPANY_INFO } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function HeroSection({ onOpenQuote, onOpenPdfModal, onNavigate }) {
  const handleHeroWhatsApp = () => {
    const url = buildWhatsAppQuoteUrl({
      name: "Dotación Hospitalaria Integral / Espacio Cardioprotegido",
      sku: "HERO-CONSULTA",
      brand: "CliniK Soluciones",
      category: "Asesoría Integral",
      modality: "Equipamiento Completo"
    });
    window.open(url, "_blank");
  };

  return (
    <section id="inicio" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
      {/* ESCENARIO CONTENIDO REDONDEADO */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-teal-100/90 dark:border-teal-900/40 bg-gradient-to-b from-[#eaf6f2]/90 via-[#f4fbf8] to-white dark:from-[#0b1420] dark:via-[#0e1929] dark:to-[#080d15] p-6 sm:p-10 lg:p-12 shadow-xl shadow-teal-950/5 transition-colors">
        {/* RESPLANDOR AMBIENTAL SUTIL */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-teal-200/30 via-emerald-100/15 to-transparent blur-3xl pointer-events-none -z-0"></div>

        {/* LAYOUT SPLIT HERO ASIMÉTRICO (60% IZQUIERDA / 40% DERECHA) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ========================================================
              COLUMNA IZQUIERDA: VALOR DIRECTO & CONCISO (SIN RELLENO)
             ======================================================== */}
          <div className="lg:col-span-7 text-left">
            {/* BADGE DE AUTORIDAD */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-teal-200 dark:border-teal-800/60 shadow-2xs text-[11px] font-bold text-[#00758D] dark:text-[#6BCDB2] mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#69a53c]" />
              <span>Ingeniería Biomédica B2B • NIT {COMPANY_INFO.nit}</span>
            </div>

            {/* TITULAR PRINCIPAL CONCISO */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Dotación Biomédica &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00758D] via-[#009bb8] to-[#69a53c]">
                Cardioprotección
              </span>
            </h1>

            {/* SUBTÍTULO RESUMIDO SIN RELLENO */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
              Tecnología médica certificada con <strong>registro INVIMA vigente</strong>, metrología hospitalaria <strong>Res. 3100</strong> e implementación integral de la <strong>Ley 1831 de 2017</strong>.
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
                className="flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                <span>Portafolio PDF</span>
              </button>
            </div>

            {/* 4 PÍLDORAS CLAVE RESUMIDAS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-center">
              <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Habilitación</span>
                <span className="text-xs font-extrabold text-[#00758D] dark:text-[#6BCDB2]">Res. 3100</span>
              </div>
              <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Cardioprotegidos</span>
                <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400">Ley 1831</span>
              </div>
              <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Metrología</span>
                <span className="text-xs font-extrabold text-[#69a53c]">ISO 17025</span>
              </div>
              <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Trayectoria</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">Desde 2017</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMNA DERECHA: BENTO SHOWCASE CON IMAGEN REAL
             ======================================================== */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* CARD 1: PRODUCTO ESTRELLA - LEY 1831 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-teal-100 dark:border-slate-800 shadow-xs card-hover-tilt">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="p-1 rounded-md bg-rose-50 dark:bg-rose-950/50 text-rose-600">
                    <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Ley 1831 de 2017
                  </span>
                </div>
                <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-bold">
                  Autotest Diario
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2.5">
                <img
                  src="./images/products/dea-i7-plus.png"
                  alt="DEA i7 Plus AMOUL"
                  className="w-14 h-14 object-contain bg-slate-50 dark:bg-slate-800/80 rounded-xl p-1 border border-slate-200/60 dark:border-slate-700/60 shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight mb-1">
                    Espacio Cardioprotegido Llave en Mano
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    DEA bifásico, gabinete con alarma, capacitación BLS y habilitación.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Radicación SSSA
                </span>
                <button
                  onClick={() => onNavigate ? onNavigate("cardioprotegidos") : (window.location.hash = "#cardioprotegidos")}
                  className="text-[#00758D] dark:text-[#6BCDB2] font-bold hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <span>Ver Solución</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* CARD 2: TELEMETRÍA QUIRÓFANO & UCI */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-teal-100 dark:border-slate-800 shadow-xs card-hover-tilt">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#69a53c] animate-ping"></span>
                  Telemetría UCI & Urgencias
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  EDAN iM20 / X8
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">72</span>
                <span className="text-xs text-slate-500 font-medium">LPM • Ritmo Sinusal Normal</span>
              </div>

              {/* TRAZO ECG SVG */}
              <div className="w-full h-8 bg-slate-950 rounded-lg p-1 overflow-hidden relative border border-teal-900/40">
                <svg viewBox="0 0 300 30" className="w-full h-full stroke-emerald-400 fill-none stroke-[2]">
                  <path d="M 0 15 L 40 15 L 45 5 L 50 25 L 55 10 L 60 18 L 65 15 L 120 15 L 125 5 L 130 25 L 135 10 L 140 18 L 145 15 L 200 15 L 205 5 L 210 25 L 215 10 L 220 18 L 225 15 L 300 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
