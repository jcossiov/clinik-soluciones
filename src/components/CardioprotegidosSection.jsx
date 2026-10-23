import React from "react";
import {
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
  Clock,
  RefreshCw,
  Users,
  Send,
  Building2,
  GraduationCap,
  FileCheck2,
  Box,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Check
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
    Wrench: RefreshCw,
    FileCheck2
  };

  const whatsappPaqueteUrl = buildWhatsAppQuoteUrl({
    name: "Paquete Espacio Cardioprotegido Llave en Mano (Ley 1831)",
    sku: "CLINIK-C1A-1831",
    brand: "CliniK / AMOUL Medical",
    category: "Espacios Cardioprotegidos (Ley 1831)",
    modality: "Paquete Integral Llave en Mano 7-en-1"
  });

  return (
    <section id="cardioprotegidos" className="py-20 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/40 dark:from-slate-900/60 dark:via-slate-900/40 dark:to-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
            <span>Solución Insignia de Ingeniería Biomédica</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Implementación de Espacios Cardioprotegidos{" "}
            <span className="text-[#00758D] dark:text-[#6BCDB2]">(Ley 1831 de 2017)</span>
          </h2>
          
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            De acuerdo a la <strong>Ley 1831 de 2017</strong> y al <strong>Decreto 1465 de 2019</strong>, implementamos la dotación integral para centros comerciales, terminales, colegios, universidades, hoteles e industrias con respaldo metrológico y radicación oficial ante la Secretaría de Salud.
          </p>
        </div>

        {/* ========================================================
            LOS 7 COMPONENTES DEL PAQUETE INTEGRAL — 80% VISUAL
           ======================================================== */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              ¿Qué incluye el Paquete Integral Llave en Mano?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Solución 7-en-1 con registro INVIMA Clase III, instalación física, capacitación formal y habilitación territorial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CARDIOPROTEGIDOS_DETAILS.componentes.map((comp) => {
              const CompIcon = iconMap[comp.icon] || HeartPulse;
              return (
                <div
                  key={comp.num}
                  className="group rounded-3xl bg-white dark:bg-slate-900 border border-teal-100/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* IMAGEN DEL COMPONENTE (CUBRE LA TOTALIDAD DEL MARCO) */}
                    {comp.image && (
                      <div className="relative h-48 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="w-7 h-7 rounded-lg bg-[#00758D] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                            #{comp.num}
                          </span>
                        </div>

                        {comp.sku && (
                          <div className="absolute top-2.5 right-2.5 z-10">
                            <span className="font-mono text-[9px] font-semibold text-slate-700 dark:text-slate-200 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs">
                              {comp.sku}
                            </span>
                          </div>
                        )}

                        <img
                          src={comp.image}
                          alt={comp.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                        />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <CompIcon className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2] shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2]">
                          {comp.brand || "CliniK Soluciones"}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2 leading-snug">
                        {comp.titulo}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {comp.microDesc || comp.desc}
                      </p>

                      {/* 3 PILLS TÉCNICAS */}
                      {comp.pills && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {comp.pills.map((pill, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Incluido Llave en Mano</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">100% Norma</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* TARJETA DESTACADA DE COTIZACIÓN INMEDIATA (ZERO PRECIOS FIJOS) */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#00758D] via-[#006075] to-[#004859] text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#6BCDB2] border border-white/15 text-[10px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>Oferta Institucional Especial</span>
                </div>

                <h4 className="text-xl font-extrabold mb-2 leading-snug">
                  Paquete Cardioprotegido C1A / i7 Plus
                </h4>

                <p className="text-xs text-teal-100/90 leading-relaxed mb-4">
                  Suministro de DEA bifásico, cabina mural con alarma acústica/visual, señalética fotoluminiscente ILCOR, capacitación BLS y radicación ante Secretaría de Salud.
                </p>

                {/* BADGE DE COTIZACIÓN DINÁMICA INDEXADA AL DÍA */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                      Cotización Indexada al Día
                    </span>
                  </div>
                  <div className="text-lg font-black text-white tracking-tight">
                    Stock & Importación Directa
                  </div>
                  <div className="text-[11px] text-teal-200 mt-0.5">
                    Garantía 5-7 años • Entrega Inmediata en Antioquia y Envíos a Nivel Nacional
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={whatsappPaqueteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Cotizar Paquete por WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuote({ name: "Paquete Espacio Cardioprotegido Ley 1831 (DEA AMOUL i7 Plus)", sku: "CLINIK-C1A-1831" })}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer border border-white/15"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Formulario Institucional</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CICLO RECURRENTE POST-VENTA
           ======================================================== */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block mb-1">
              Garantía Operativa Continua
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Ciclo de Mantenimiento & Sostenibilidad del DEA
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              La venta del DEA inicia un ciclo de acompañamiento técnico para asegurar disponibilidad permanente ante cualquier emergencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CARDIOPROTEGIDOS_DETAILS.cicloRecurrente.map((ciclo, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <span className="text-xs font-extrabold text-[#00758D] dark:text-[#6BCDB2] block mb-1">
                  {ciclo.periodo}
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                  {ciclo.accion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            INSTALACIONES REALES VERIFICADAS
           ======================================================== */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Casos Reales de Espacios Cardioprotegidos Instalados
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Instalaciones ejecutadas por los ingenieros biomédicos de CliniK Soluciones en Antioquia y todo el país
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDIOPROTEGIDOS_DETAILS.instalacionesReales.map((inst, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {inst.entidad}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#00758D] dark:text-[#6BCDB2] block mb-1">
                    {inst.sede}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {inst.ubicacion}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Instalación Certificada</span>
                  <span className="text-emerald-600 font-bold">100% Operativo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
