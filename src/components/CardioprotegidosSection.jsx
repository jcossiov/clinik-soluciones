import React from "react";
import {
  HeartPulse,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  RefreshCw,
  Building2,
  GraduationCap,
  Box,
  AlertTriangle,
  MessageSquare,
  Sparkles,
  Plus
} from "lucide-react";
import { CARDIOPROTEGIDOS_DETAILS } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function CardioprotegidosSection({ onOpenQuote, onSelectProduct }) {
  const iconMap = {
    HeartPulse,
    Box,
    ShieldCheck,
    AlertTriangle,
    GraduationCap,
    Clock,
    Award,
    RefreshCw,
    Zap
  };

  const packagesList =
    CARDIOPROTEGIDOS_DETAILS.paquetesCotizables ||
    CARDIOPROTEGIDOS_DETAILS.paquetesDea ||
    [];

  const lifecycleStages =
    CARDIOPROTEGIDOS_DETAILS.cicloSostenibilidad?.etapas ||
    CARDIOPROTEGIDOS_DETAILS.cicloRecurrente ||
    [];

  return (
    <section
      id="cardioprotegidos"
      className="py-12 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-[#080d15] dark:to-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* CABECERA CONCISA Y DE ALTO IMPACTO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/60 text-[11px] font-bold uppercase tracking-wider mb-3">
              <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
              <span>{CARDIOPROTEGIDOS_DETAILS.normativa}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Espacios Cardioprotegidos{" "}
              <span className="text-[#00758D] dark:text-[#6BCDB2]">Res. 3316 de 2019</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            Seleccione la referencia de Desfibrilador Externo Automático (DEA) para su institución o el paquete complementario si ya dispone del equipo.
          </p>
        </div>

        {/* ========================================================
            1. TIRA BENTO HORIZONTAL: LOS 5 COMPONENTES DEL PAQUETE (ICONO + FOTO + NOMBRE)
           ======================================================== */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2]">
              ¿Qué incluye el Espacio Cardioprotegido? (5 Componentes Normativos)
            </span>
            <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">
              Garantía 12 Meses • Todo en Español
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {(CARDIOPROTEGIDOS_DETAILS.componentes || []).map((comp) => {
              const CompIcon = iconMap[comp.icon] || HeartPulse;
              return (
                <div
                  key={comp.num}
                  onClick={() =>
                    onSelectProduct &&
                    onSelectProduct({
                      name: comp.titulo,
                      brand: comp.brand,
                      sku: comp.sku,
                      image: comp.image,
                      warranty: "12 Meses",
                      microDesc: comp.desc,
                      pills: comp.pills,
                      specs: (comp.pills || []).map((p, i) => ({
                        label: `Atributo 0${i + 1}`,
                        value: p
                      })),
                      accessories: [comp.titulo]
                    })
                  }
                  className="group p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#00758D] shadow-2xs hover:shadow-md transition-all cursor-pointer flex items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 p-1.5 border border-slate-100 dark:border-slate-700 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={comp.image}
                      alt={comp.titulo}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#00758D] dark:text-[#6BCDB2] uppercase">
                      <CompIcon className="w-3 h-3 text-[#69a53c] shrink-0" />
                      <span>0{comp.num}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-xs leading-snug line-clamp-2 group-hover:text-[#00758D] dark:group-hover:text-[#6BCDB2] transition-colors">
                      {comp.titulo}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            2. LOS 5 PAQUETES COTIZABLES — ESTÁNDAR AWWWARDS C1-C6
               (>=68% FOTO HD + TÍTULO + 2 DATA CHIPS + BARRA DUAL FICHA / COTIZAR)
           ======================================================== */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Paquetes Disponibles para Cotización
            </h3>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              5 Opciones • Venta Directa
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {packagesList.map((pkg) => {
              const displayName = pkg.name || pkg.packageTitle;
              const displayModel = pkg.model || pkg.modelName;
              const chipsToRender = pkg.chips || (pkg.highlights || []).slice(0, 2);

              const pkgWhatsAppUrl = buildWhatsAppQuoteUrl({
                name: displayName,
                sku: pkg.sku,
                brand: pkg.brand,
                category: "Cardioprotección (Res. 3316 de 2019)",
                modality: pkg.includesDea
                  ? "Paquete Completo con DEA"
                  : "Paquete Complementario (Sin DEA)"
              });

              const productForModal = {
                name: displayName,
                brand: pkg.brand,
                sku: pkg.sku,
                image: pkg.image,
                invimaReg: pkg.invimaReg || "Registro Sanitario Vigente",
                warranty: pkg.warranty || "12 Meses",
                microDesc: pkg.shortDesc,
                pills: pkg.highlights,
                specs: pkg.specs,
                accessories: pkg.includedItems || pkg.highlights,
                regulatory:
                  pkg.warningNote ||
                  pkg.disclaimerNote ||
                  "Cumplimiento de los lineamientos de la Resolución 3316 de 2019 para Espacios Cardioprotegidos."
              };

              return (
                <div
                  key={pkg.id}
                  className={`group rounded-3xl bg-white dark:bg-slate-900 border ${
                    pkg.includesDea
                      ? "border-slate-200/80 dark:border-slate-800 hover:border-[#00758D]"
                      : "border-amber-300/90 dark:border-amber-800/70 hover:border-amber-500"
                  } shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  <div>
                    {/* C1: LIENZO FOTOGRÁFICO PROTAGONISTA (h-60 = 240px) CON 1 PÍLDORA TRANSLÚCIDA */}
                    <div
                      onClick={() => onSelectProduct && onSelectProduct(productForModal)}
                      className="relative h-60 w-full bg-gradient-to-b from-slate-50/90 to-white dark:from-slate-800/60 dark:to-slate-900 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                    >
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs ${
                            pkg.includesDea
                              ? "bg-white/95 dark:bg-slate-900/95 text-[#00758D] dark:text-[#6BCDB2] border border-slate-200/70 dark:border-slate-700"
                              : "bg-amber-500 text-white"
                          }`}
                        >
                          {pkg.includesDea ? pkg.brand : "Sin Equipo DEA"}
                        </span>
                      </div>

                      <img
                        src={pkg.image}
                        alt={displayName}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                      />
                    </div>

                    {/* C2 & C5: TÍTULO CORTO + DATA CHIPS (CERO PÁRRAFOS NI LISTAS VERTICALES) */}
                    <div className="p-4 pb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5 truncate">
                        {displayModel}
                      </span>

                      <h4
                        onClick={() => onSelectProduct && onSelectProduct(productForModal)}
                        className="font-black text-slate-900 dark:text-white text-sm sm:text-base leading-snug mb-2.5 line-clamp-2 group-hover:text-[#00758D] dark:group-hover:text-[#6BCDB2] transition-colors cursor-pointer"
                      >
                        {pkg.includesDea ? `Paquete ${displayModel}` : "Paquete Sin DEA"}
                      </h4>

                      {/* DATA CHIPS ULTRA-COMPACTOS */}
                      <div className="flex flex-wrap gap-1">
                        {chipsToRender.map((chip, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              pkg.includesDea
                                ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                : "bg-amber-100/80 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300"
                            }`}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* C6: BOTONES DE ACCIÓN CORTOS (1 PALABRA + 1 ICONO) */}
                  <div className="p-4 pt-1 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct && onSelectProduct(productForModal)}
                      className="flex items-center justify-center gap-1 py-2.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                      <span>Ficha</span>
                    </button>

                    <a
                      href={pkgWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-extrabold shadow-xs transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            3. LÍNEA DE TIEMPO COMPACTA: SOSTENIBILIDAD POST-VENTA (6 / 12 / 24 / 48 MESES)
           ======================================================== */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block">
                Servicios y Recambios Adicionales Cotizables
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Ciclo Recomendado de Sostenibilidad del DEA
              </h3>
            </div>

            <button
              onClick={() =>
                onOpenQuote({
                  name: "Mantenimiento, Calibración o Consumibles para DEA",
                  sku: "SERV-MANT-DEA"
                })
              }
              className="self-start md:self-center inline-flex items-center gap-1.5 bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 text-[#00758D] dark:text-[#6BCDB2] text-xs font-extrabold py-2.5 px-4 rounded-xl border border-teal-200/60 dark:border-teal-800 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#69a53c]" />
              <span>Cotizar Soporte / Insumos</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {lifecycleStages.map((ciclo, i) => {
              const StageIcon = iconMap[ciclo.icon] || Clock;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <StageIcon className="w-3.5 h-3.5 text-[#69a53c] shrink-0" />
                    <span className="text-xs font-black text-[#00758D] dark:text-[#6BCDB2]">
                      {ciclo.periodo}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug line-clamp-2">
                    {ciclo.accion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            4. MURO COMPACTO DE LOS 8 CLIENTES INSIGNIA
           ======================================================== */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
              Casos de Éxito Destacados en Cardioprotección
            </span>
            <span className="text-[11px] font-bold text-[#69a53c]">
              8 Referentes Corporativos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(CARDIOPROTEGIDOS_DETAILS.instalacionesReales || []).map((inst, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 transition-all flex items-center gap-3 shadow-2xs"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-black text-slate-900 dark:text-white block truncate">
                    {inst.entidad}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 block truncate">
                    {inst.sede}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
