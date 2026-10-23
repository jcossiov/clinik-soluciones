import React, { useState } from "react";
import {
  Truck,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Activity,
  Send,
  Zap,
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { AMBULANCE_OUTFITTING } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function AmbulanciasSection({ onOpenQuote, onSelectProduct }) {
  const [activeTab, setActiveTab] = useState("TAB");

  const currentModality =
    AMBULANCE_OUTFITTING.modalities.find((m) => m.tipo === activeTab) ||
    AMBULANCE_OUTFITTING.modalities[0];

  const whatsAppUrl = buildWhatsAppQuoteUrl({
    name: `Dotación Integral para Ambulancia ${currentModality.tipo} (${currentModality.nombre})`,
    sku: `CK-AMB-${currentModality.tipo}`,
    brand: "CliniK / EDAN / AMOUL",
    category: "Dotación Ambulancias TAB / TAM",
    modality: `Kit Completo Ambulancia ${currentModality.tipo} Res. 3100`
  });

  return (
    <section
      id="ambulancias"
      className="py-20 bg-slate-50/70 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>Nicho de Alta Especialidad CliniK Soluciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {AMBULANCE_OUTFITTING.title}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {AMBULANCE_OUTFITTING.desc}
          </p>
        </div>

        {/* ========================================================
            SELECTOR INTERACTIVO: TAB (BÁSICA) vs TAM (MEDICALIZADA)
           ======================================================== */}
        <div className="flex justify-center mb-10">
          <div className="p-1 bg-slate-200/80 dark:bg-slate-800 rounded-2xl flex items-center gap-1 shadow-inner max-w-md w-full">
            <button
              onClick={() => setActiveTab("TAB")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "TAB"
                  ? "bg-white dark:bg-[#00758D] text-[#00758D] dark:text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Ambulancia TAB (Básica)</span>
            </button>
            <button
              onClick={() => setActiveTab("TAM")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "TAM"
                  ? "bg-[#00758D] text-white shadow-md font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Activity className="w-4 h-4 text-[#6BCDB2]" />
              <span>Ambulancia TAM (Medicalizada)</span>
            </button>
          </div>
        </div>

        {/* DETALLE DE LA MODALIDAD SELECCIONADA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
          {/* COLUMNA IZQUIERDA: RESUMEN NORMATIVO Y ENFOQUE */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-xs font-mono font-bold">
                  {currentModality.norma}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Código MinSalud
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {currentModality.nombre} ({currentModality.tipo})
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {currentModality.enfoque}
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69a53c] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Dotación Llave en Mano:</strong> Equipamos la unidad vacía con anclajes certificados norma EN1789 y cableado médico 12V.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#69a53c] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Vehículo + Dotación Completa:</strong> Alianzas con carroceros certificados para suministrar la ambulancia homologada lista para rodar.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÓN WHATSAPP DIRECTO */}
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3.5 px-5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotizar Ambulancia {currentModality.tipo} por WhatsApp</span>
              </a>

              <button
                onClick={() =>
                  onOpenQuote({
                    name: `Dotación Integral Ambulancia ${currentModality.tipo}`,
                    sku: `CK-AMB-${currentModality.tipo}`
                  })
                }
                className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#00758D]" />
                <span>Solicitud Formal por Correo</span>
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: LISTADO DE EQUIPAMIENTO INCLUIDO */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
              <span>Equipamiento Biomédico y de Rescate Requerido</span>
              <span className="text-xs font-normal text-slate-500">
                {currentModality.equiposClave.length} ítems reglamentarios
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {currentModality.equiposClave.map((eq, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-[#00758D] dark:text-[#6BCDB2] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-snug">
                    {eq}
                  </span>
                </div>
              ))}
            </div>

            {/* SELLO DE CUMPLIMIENTO */}
            <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-900/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00758D] dark:text-[#6BCDB2]" />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Cumplimiento de Habilitación Garantizado
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300">
                    Acompañamiento en carpeta documental y prueba de funcionamiento
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#69a53c] bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-teal-200/50">
                Res. 3100
              </span>
            </div>
          </div>
        </div>

        {/* 4 VENTAJAS DE DOTACIÓN CLINIKEY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AMBULANCE_OUTFITTING.ventajas.map((ven, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
            >
              <span className="text-xs font-extrabold text-[#00758D] dark:text-[#6BCDB2] block mb-1">
                {ven.title}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {ven.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
