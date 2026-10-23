import React from "react";
import { Package, ShieldCheck, CheckCircle2, Send, Tag } from "lucide-react";
import { ACCESSORIES_CATALOG } from "../data/products";

export default function AccesoriosSection({ onOpenQuote }) {
  return (
    <section id="accesorios" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block mb-2">
            Consumibles & Repuestos Originales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accesorios, Sensores & Baterías Biomédicas
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl">
            Repuestos garantizados para equipos de monitoreo, electrodos para DEAs Ley 1831, baterías de litio y mangueras de succión con despacho inmediato.
          </p>
        </div>

        <button
          onClick={() => onOpenQuote({ name: "Cotización Lote de Consumibles y Repuestos", sku: "CK-ACC-LOTE" })}
          className="flex items-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5 text-[#6BCDB2]" />
          <span>Cotizar Lote de Accesorios</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACCESSORIES_CATALOG.map((acc) => (
          <div
            key={acc.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#00758D] dark:text-[#6BCDB2] bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded font-bold">
                  {acc.sku}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Stock Inmediato
                </span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 leading-snug">
                {acc.name}
              </h3>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-4">
                <p>
                  <strong className="text-slate-700 dark:text-slate-300">Equipo:</strong> {acc.equipmentFor}
                </p>
                <p>
                  <strong className="text-slate-700 dark:text-slate-300">Compatibilidad:</strong> {acc.compatibility}
                </p>
                <p>
                  <strong className="text-slate-700 dark:text-slate-300">Garantía:</strong> {acc.warranty}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Precio Unitario</span>
                <span className="text-sm font-extrabold text-[#00758D] dark:text-[#6BCDB2]">{acc.price}</span>
              </div>
              <button
                onClick={() => onOpenQuote(acc)}
                className="py-1.5 px-3 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-xs font-bold hover:bg-teal-100 transition-colors"
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
