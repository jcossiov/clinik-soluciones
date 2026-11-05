import React, { useState } from "react";
import { Building2, Award } from "lucide-react";
import { HOSPITAL_CLIENTS } from "../data/products";

export default function ClientesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="clientes"
      className="py-14 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA COMPACTA + PESTAÑAS DE SECTORES */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Award className="w-3 h-3 text-[#69a53c]" />
              <span>Confianza Institucional Comprobada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Instituciones que Confían en CliniK
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {HOSPITAL_CLIENTS.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#00758D] text-white shadow-xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 hover:text-slate-900"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLA BENTO COMPACTA DE CLIENTES (C3: CERO REPETICIÓN DE CHECKMARKS EN CADA TARJETA) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {HOSPITAL_CLIENTS[activeTab].clients.map((client, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 transition-all shadow-2xs flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-black text-slate-900 dark:text-white text-xs leading-snug truncate">
                  {client.name}
                </h4>
                <span className="text-[10px] font-semibold text-slate-400 block truncate">
                  {client.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
