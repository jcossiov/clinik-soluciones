import React from "react";
import { GraduationCap, Award, Send, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { SIMULATION_PRODUCTS } from "../data/products";

export default function SimulacionSection({ onOpenQuote }) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Educación Médica & Entrenamiento Clínico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Línea de Simulación Clínica & RCP
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl">
            Simuladores anatómicos y tecnología pedagógica para facultades de salud, cuerpos de bomberos, brigadas de emergencia y centros de capacitación acreditados.
          </p>
        </div>

        <button
          onClick={() => onOpenQuote({ name: "Dotación Completa Centro de Simulación", sku: "CK-SIM-FULL" })}
          className="flex items-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5 text-[#6BCDB2]" />
          <span>Cotizar Equipos de Simulación</span>
        </button>
      </div>

      {/* GRILLA DE PRODUCTOS DE SIMULACIÓN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SIMULATION_PRODUCTS.map((sim) => (
          <div
            key={sim.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-[#00758D] dark:text-[#6BCDB2] uppercase tracking-wider block mb-2">
                {sim.brand}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 leading-snug">
                {sim.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {sim.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Precio Estimado</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">{sim.price}</span>
              </div>
              <button
                onClick={() => onOpenQuote(sim)}
                className="text-xs font-bold text-[#00758D] dark:text-[#6BCDB2] hover:underline"
              >
                Cotizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
