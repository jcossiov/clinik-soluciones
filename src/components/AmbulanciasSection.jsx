import React, { useState, useMemo } from "react";
import {
  Truck,
  ShieldCheck,
  Activity,
  Send,
  MessageSquare,
  Package,
  Search,
  HeartPulse,
  Wind,
  LifeBuoy,
  Wrench,
  Layers
} from "lucide-react";
import { AMBULANCE_OUTFITTING } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function AmbulanciasSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("TAB");
  const [clinicalGroup, setClinicalGroup] = useState("todos");
  const [searchItem, setSearchItem] = useState("");

  const currentModality =
    AMBULANCE_OUTFITTING.modalities.find((m) => m.tipo === activeTab) ||
    AMBULANCE_OUTFITTING.modalities[0];

  // Clasificador inteligente de los numerales de la Resolución 3100 en 4 sistemas clínicos
  const categorizeItem = (text) => {
    const lower = text.toLowerCase();
    if (
      lower.includes("desfibrilador") ||
      lower.includes("monitor") ||
      lower.includes("fonendoscopio") ||
      lower.includes("tensiómetro") ||
      lower.includes("glucómetro") ||
      lower.includes("bomba") ||
      lower.includes("órganos")
    ) {
      return "monitoreo";
    }
    if (
      lower.includes("oxígeno") ||
      lower.includes("ventilador") ||
      lower.includes("aspirador") ||
      lower.includes("resucitador") ||
      lower.includes("laringoscopio") ||
      lower.includes("flujo") ||
      lower.includes("incubadora")
    ) {
      return "via-aerea";
    }
    if (
      lower.includes("camilla") ||
      lower.includes("silla") ||
      lower.includes("inmovilizaci") ||
      lower.includes("tabla") ||
      lower.includes("collar") ||
      lower.includes("torniquete")
    ) {
      return "inmovilizacion";
    }
    return "instrumental";
  };

  const clinicalTabs = [
    { id: "todos", label: "Todos los Requisitos", icon: Layers },
    { id: "monitoreo", label: "Monitoreo & Reanimación", icon: HeartPulse },
    { id: "via-aerea", label: "Vía Aérea, O2 & Ventilación", icon: Wind },
    { id: "inmovilizacion", label: "Camillas & Inmovilización", icon: LifeBuoy },
    { id: "instrumental", label: "Instrumental & Mobiliario", icon: Wrench }
  ];

  const filteredItems = useMemo(() => {
    return currentModality.equiposClave.filter((item) => {
      const matchesGroup =
        clinicalGroup === "todos" || categorizeItem(item) === clinicalGroup;
      const matchesSearch = item
        .toLowerCase()
        .includes(searchItem.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [currentModality, clinicalGroup, searchItem]);

  // Opción 1: Cotizar SOLO la Dotación Biomédica (sin vehículo)
  const whatsAppDotacionOnlyUrl = buildWhatsAppQuoteUrl({
    name: `Solo Dotación Biomédica y de Rescate para Ambulancia ${currentModality.tipo} (${currentModality.nombre})`,
    sku: `CK-AMB-DOT-${currentModality.tipo}`,
    brand: "CliniK Soluciones",
    category: "Dotación Ambulancias Res. 3100 de 2019",
    modality: `Solo Equipamiento Biomédico (${currentModality.tipo}) — Ya cuento con el vehículo`
  });

  // Opción 2: Cotizar Ambulancia Completa (Vehículo + Dotación)
  const whatsAppCompletaUrl = buildWhatsAppQuoteUrl({
    name: `Ambulancia Completa (Vehículo Carrozado + Dotación Biomédica) ${currentModality.tipo}`,
    sku: `CK-AMB-FULL-${currentModality.tipo}`,
    brand: "CliniK Soluciones",
    category: "Proyecto Integral de Ambulancia Res. 3100 de 2019",
    modality: `Vehículo + Dotación Biomédica Completa (${currentModality.tipo})`
  });

  return (
    <section
      id="ambulancias"
      className="py-12 bg-slate-50/70 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* CABECERA COMPACTA + SELECTOR TAB / TAM INTEGRADO */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-[11px] font-bold uppercase tracking-wider mb-2.5">
              <Truck className="w-3.5 h-3.5" />
              <span>Resolución 3100 de 2019 • Páginas 219 a 221</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {AMBULANCE_OUTFITTING.title}
            </h2>
          </div>

          {/* SELECTOR MACRO TAB vs TAM */}
          <div className="p-1.5 bg-slate-200/90 dark:bg-slate-800 rounded-2xl flex items-center gap-1.5 shadow-inner sm:w-auto w-full">
            <button
              onClick={() => {
                setActiveTab("TAB");
                setClinicalGroup("todos");
              }}
              className={`flex-1 sm:flex-initial py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "TAB"
                  ? "bg-[#69a53c] text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Ambulancia TAB (Básica)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("TAM");
                setClinicalGroup("todos");
              }}
              className={`flex-1 sm:flex-initial py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "TAM"
                  ? "bg-[#00758D] text-white shadow-md"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Ambulancia TAM (Medicalizada)</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            1. LAS 2 OPCIONES DE COTIZACIÓN EN BENTO CARDS VISUALES (CON FOTO + CHIPS)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OPCIÓN 1: SOLO DOTACIÓN BIOMÉDICA */}
          <div className="group rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-200/80 dark:border-emerald-900/60 hover:border-[#69a53c] p-6 shadow-xs hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-36 rounded-2xl bg-slate-50 dark:bg-slate-800 p-3 border border-slate-100 dark:border-slate-700 shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="./images/products/desfibrilador-i2.png"
                alt="Solo Dotación Biomédica"
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-[#69a53c] mb-2">
                <Package className="w-3 h-3" />
                <span>Opción 01 • Sin Vehículo</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
                Solo Dotación Biomédica ({currentModality.tipo})
              </h3>

              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-4">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Total o por Ítems
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Res. 3100
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Garantía 12M
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href={whatsAppDotacionOnlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Cotizar Dotación</span>
                </a>
                <button
                  onClick={() =>
                    onOpenQuote({
                      name: `Solo Dotación Biomédica Ambulancia ${currentModality.tipo}`,
                      sku: `CK-AMB-DOT-${currentModality.tipo}`
                    })
                  }
                  className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-3.5 rounded-xl transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#69a53c]" />
                  <span>Formulario</span>
                </button>
              </div>
            </div>
          </div>

          {/* OPCIÓN 2: AMBULANCIA COMPLETA (VEHÍCULO + DOTACIÓN) */}
          <div className="group rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-200/80 dark:border-teal-900/60 hover:border-[#00758D] p-6 shadow-xs hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-36 rounded-2xl bg-slate-50 dark:bg-slate-800 p-3 border border-slate-100 dark:border-slate-700 shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="./images/products/rescate-camilla-ambulancia.png"
                alt="Ambulancia Completa con Vehículo"
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-[#00758D] dark:text-[#6BCDB2] mb-2">
                <Truck className="w-3 h-3" />
                <span>Opción 02 • Proyecto Integral</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1.5">
                Ambulancia Completa + Vehículo ({currentModality.tipo})
              </h3>

              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-4">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Vehículo Carrozado
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Dotación Completa
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Garantía 12M
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href={whatsAppCompletaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Cotizar Completa</span>
                </a>
                <button
                  onClick={() =>
                    onOpenQuote({
                      name: `Ambulancia Completa con Vehículo + Dotación ${currentModality.tipo}`,
                      sku: `CK-AMB-FULL-${currentModality.tipo}`
                    })
                  }
                  className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-3.5 rounded-xl transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#00758D]" />
                  <span>Formulario</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. EXPLORADOR INTERACTIVO DE LA RESOLUCIÓN 3100 DE 2019
               (AGRUPADO POR SISTEMA CLÍNICO + BUSCADOR + CHIPS NUMÉRICOS)
           ======================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {/* BARRA SUPERIOR DEL EXPLORADOR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2]">
                  {currentModality.norma}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  {filteredItems.length} de {currentModality.equiposClave.length} numerales
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight mt-0.5">
                Checklist Normativo — {currentModality.nombre} ({currentModality.tipo})
              </h3>
            </div>

            {/* BUSCADOR RÁPIDO DENTRO DE LA RESOLUCIÓN */}
            <div className="relative w-full md:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Filtrar numeral (ej. DEA, oxígeno, camilla)..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
              />
            </div>
          </div>

          {/* FILTROS POR SISTEMA CLÍNICO (SUPRIMIENDO EL MURO DE TEXTO CONTINUO) */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {clinicalTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = clinicalGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setClinicalGroup(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#00758D] text-white shadow-xs"
                      : "bg-slate-100/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70"
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {currentModality.notaBase && (
            <div className="mb-4 px-4 py-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800 text-xs font-bold text-[#00758D] dark:text-[#6BCDB2] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#69a53c]" />
              <span>{currentModality.notaBase}</span>
            </div>
          )}

          {/* GRILLA BENTO 2 COLUMNAS CON PÍLDORA DE NUMERAL (C3: CERO LLUVIA DE CHECKMARKS REPETIDOS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[440px] overflow-y-auto pr-1">
            {filteredItems.map((eq, i) => {
              const parts = eq.split(":");
              const hasCode = parts.length > 1 && parts[0].length <= 12;
              const codeBadge = hasCode ? parts[0].trim() : `#${i + 1}`;
              const textBody = hasCode ? parts.slice(1).join(":").trim() : eq;

              return (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 hover:border-teal-400 transition-colors flex items-start gap-3"
                >
                  <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[#00758D] dark:text-[#6BCDB2] border border-slate-200/80 dark:border-slate-700 shrink-0 mt-0.5">
                    {codeBadge}
                  </span>
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium leading-snug">
                    {textBody}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
