import React, { useState } from "react";
import { Building2, ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";
import { HOSPITAL_CLIENTS } from "../data/products";

export default function ClientesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="clientes" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Confianza Institucional Comprobada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nuestros Clientes en Colombia
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
            Más de 40 entidades de primer nivel confían en CliniK Soluciones para sus espacios cardioprotegidos, mantenimiento y dotación biomédica.
          </p>
        </div>

        {/* PESTAÑAS DE SECTORES */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {HOSPITAL_CLIENTS.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#00758D] text-white shadow-md shadow-teal-900/10"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 hover:text-slate-900"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* GRILLA DE CLIENTES DEL SECTOR ACTIVO */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {HOSPITAL_CLIENTS[activeTab].clients.map((client, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:border-teal-300 transition-all shadow-sm"
            >
              <div className="flex items-start gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs leading-snug">
                    {client.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    {client.badge}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>Cliente Verificado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
