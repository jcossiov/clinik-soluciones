import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Truck,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  MessageSquare,
  Award,
  ChevronRight
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
    modality: "Venta Directa / Renting"
  });

  const hubWindows = [
    {
      id: "catalogo",
      title: "Catálogo de Equipamiento",
      subtitle: "13 Líneas con Registro INVIMA",
      desc: "Monitores multiparámetro, DEAs, ventiladores, bombas de infusión y succionadores.",
      image: "./images/products/monitor-x8-co2.png",
      tag: "Venta & Renting",
      icon: Stethoscope,
      accent: "from-teal-500/10 to-teal-500/5",
      border: "border-teal-200 dark:border-teal-800/60"
    },
    {
      id: "cardioprotegidos",
      title: "Espacios Cardioprotegidos",
      subtitle: "Ley 1831 de 2017 • Solución 7-en-1",
      desc: "Dotación obligatoria de DEAs, cabina con alarma, kit trauma, capacitación BLS y habilitación.",
      image: "./images/products/dea-i7-plus.png",
      tag: "Obligatoriedad Legal",
      icon: HeartPulse,
      accent: "from-rose-500/10 to-rose-500/5",
      border: "border-rose-200 dark:border-rose-800/60"
    },
    {
      id: "ambulancias",
      title: "Dotación de Ambulancias",
      subtitle: "Resolución 3100 de 2019",
      desc: "Equipamiento normativo para Transporte Asistencial Básico (TAB) y Medicalizado (TAM).",
      image: "./images/products/monitor-im20.png",
      tag: "Norma EN1789",
      icon: Truck,
      accent: "from-blue-500/10 to-blue-500/5",
      border: "border-blue-200 dark:border-blue-800/60"
    },
    {
      id: "servicios",
      title: "Servicios & Metrología",
      subtitle: "NTC-ISO 17025 • Res. 3100",
      desc: "Calibración metrológica, mantenimiento semestral, hojas de vida QR y capacitación.",
      image: "./images/products/desfibrilador-i6.png",
      tag: "Trazabilidad Oficial",
      icon: Activity,
      accent: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-200 dark:border-emerald-800/60"
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

      {/* 2. VENTANAS PRINCIPALES DE NAVEGACIÓN MODULAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Módulos del Portafolio Institucional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seleccione el Área de Interés
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Navegue directamente por ventana temática sin desplazamientos infinitos.
          </p>
        </div>

        {/* GRILLA DE LAS 4 VENTANAS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubWindows.map((win) => {
            const Icon = win.icon;
            return (
              <div
                key={win.id}
                onClick={() => onNavigate(win.id)}
                className={`group rounded-3xl bg-white dark:bg-slate-900 border ${win.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer card-hover-tilt overflow-hidden relative`}
              >
                <div>
                  {/* IMAGEN DE REFERENCIA (CUBRE LA TOTALIDAD DEL MARCO) */}
                  <div className="h-44 w-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden mb-4 border border-slate-100 dark:border-slate-800 relative">
                    <img
                      src={win.image}
                      alt={win.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2] flex items-center gap-1">
                      <Icon className="w-3.5 h-3.5" />
                      {win.tag}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-1 group-hover:text-[#00758D] dark:group-hover:text-[#6BCDB2] transition-colors">
                    {win.title}
                  </h3>

                  <p className="text-[11px] font-semibold text-slate-400 mb-2">
                    {win.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {win.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#00758D] dark:text-[#6BCDB2]">
                  <span>Abrir Ventana</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BANNER DE COTIZACIÓN RÁPIDA WHATSAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#005071] via-[#00758D] to-[#00899e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200 block mb-1">
              Atención Comercial Inmediata • Sabaneta, Antioquia
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              ¿Requiere Asesoría Técnica o Cotización Indexada?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl">
              Nuestros ingenieros biomédicos le entregan la propuesta formal con registro INVIMA y soporte normativo en minutos.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Directo (+57 300 202 1894)</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-3.5 px-5 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <span>Formulario B2B</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. MURO DE CONFIANZA: CLIENTES REALES (UPB, NUTRESA, METROSALUD, BOMBEROS) */}
      <ClientesSection />
    </div>
  );
}
