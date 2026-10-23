import React, { useState, useMemo } from "react";
import { DollarSign, TrendingUp, Clock, ShieldCheck, Send, Sparkles } from "lucide-react";

export default function RoiCalculator({ onOpenQuote }) {
  const [bedsCount, setBedsCount] = useState(45);
  const [annualMaintenanceBudget, setAnnualMaintenanceBudget] = useState(140); // millions COP

  const calculatedSavings = useMemo(() => {
    const directMaintenanceSavings = Math.round(annualMaintenanceBudget * 0.28);
    const downtimeCostSavings = Math.round(bedsCount * 2.4);
    const totalSavings = directMaintenanceSavings + downtimeCostSavings;
    const hoursSaved = Math.round(bedsCount * 14.5);
    return {
      direct: directMaintenanceSavings,
      downtime: downtimeCostSavings,
      total: totalSavings,
      hoursSaved
    };
  }, [bedsCount, annualMaintenanceBudget]);

  return (
    <section id="calculadora" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block mb-2">
          Análisis Financiero de Ingeniería Clínica
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Simulador de Ahorro y Renting Hospitalario
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
          Calcule el impacto económico de tercerizar la metrología, mantenimiento preventivo y renting tecnológico con CliniK Soluciones.
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#eaf6f2]/80 via-[#f4fbf8] to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-teal-100/90 dark:border-slate-800 shadow-xl shadow-teal-900/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* CONTROLES / SLIDERS */}
          <div className="lg:col-span-7 space-y-8">
            {/* SLIDER 1: CAMAS / PUESTOS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Número de Camas / Puestos de Atención Médica:
                </label>
                <span className="text-lg font-extrabold text-[#00758D] dark:text-[#6BCDB2] font-mono">
                  {bedsCount} Camas
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={bedsCount}
                onChange={(e) => setBedsCount(Number(e.target.value))}
                className="w-full accent-[#00758D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>10 Camas (IPS Básica)</span>
                <span>250 Camas (Hospital Alta Complejidad)</span>
              </div>
            </div>

            {/* SLIDER 2: PRESUPUESTO ANUAL MANTENIMIENTO */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Presupuesto Anual Actual de Mantenimiento y Calibración:
                </label>
                <span className="text-lg font-extrabold text-[#69a53c] font-mono">
                  ${annualMaintenanceBudget}M COP
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={annualMaintenanceBudget}
                onChange={(e) => setAnnualMaintenanceBudget(Number(e.target.value))}
                className="w-full accent-[#69a53c] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>$30M COP</span>
                <span>$500M COP</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs">
              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 block">Reducción de Fallas Críticas</span>
                <strong className="text-slate-900 dark:text-white font-bold text-sm">Hasta un 42%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 block">Disponibilidad de Parque</span>
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">≥ 99.5% Uptime</strong>
              </div>
            </div>
          </div>

          {/* TARJETA DE RESULTADO DE AHORRO */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#00758D] to-[#005063] text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#6BCDB2] block mb-1">
                Ahorro Anual Proyectado
              </span>
              <div className="text-4xl font-extrabold font-mono mb-2">
                ${calculatedSavings.total}M <span className="text-lg font-sans font-medium text-teal-200">COP/año</span>
              </div>
              <p className="text-xs text-teal-100/90 leading-relaxed mb-6">
                Ahorro consolidado mediante contratos preventivos estructurados, mitigación de lucro cesante por cama inactiva y renting deducible tributariamente.
              </p>

              <div className="space-y-3 mb-6 text-xs border-y border-white/15 py-4">
                <div className="flex justify-between">
                  <span className="text-teal-200">Ahorro Directo Mantenimiento:</span>
                  <strong className="font-mono text-white">${calculatedSavings.direct}M COP</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-200">Ahorro Reducción Downtime:</span>
                  <strong className="font-mono text-white">${calculatedSavings.downtime}M COP</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-200">Horas de Ingeniería Recuperadas:</span>
                  <strong className="font-mono text-white">{calculatedSavings.hoursSaved} Horas</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote({ name: `Plan de Optimización Financiera para ${bedsCount} Camas`, sku: "CK-ROI-OPTIM" })}
              className="w-full flex items-center justify-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Plan de Renting Personalizado</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
