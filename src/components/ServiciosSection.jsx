import React from "react";
import {
  Stethoscope,
  BadgeCheck,
  GraduationCap,
  RefreshCw,
  Wrench,
  HeartPulse,
  CheckCircle2,
  Send,
  ArrowRight
} from "lucide-react";
import { CLINIK_SERVICES } from "../data/products";

export default function ServiciosSection({ onOpenQuote }) {
  const iconMap = {
    Stethoscope,
    BadgeCheck,
    GraduationCap,
    RefreshCw,
    Wrench,
    HeartPulse
  };

  return (
    <section id="servicios" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block mb-2">
            Ingeniería Biomédica & Consultoría Hospitalaria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Los 6 Pilares Oficiales de CliniK Soluciones
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Desde la venta de equipamiento nuevo con registro INVIMA hasta contratos integrales de metrología, mantenimiento y acreditación institucional en salud.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIK_SERVICES.map((serv) => {
            const ServIcon = iconMap[serv.icon] || Stethoscope;
            return (
              <div
                key={serv.id}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] flex items-center justify-center mb-5 shadow-sm">
                    <ServIcon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {serv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#00758D] dark:text-[#6BCDB2] mb-3">
                    {serv.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {serv.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {serv.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#69a53c] shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenQuote({ name: serv.title, sku: `SERV-${serv.id}` })}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#00758D] dark:text-[#6BCDB2] bg-teal-50/80 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors cursor-pointer"
                  >
                    <span>Solicitar Asesoría de este Servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
