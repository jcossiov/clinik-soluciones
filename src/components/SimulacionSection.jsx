import React, { useState, useMemo } from "react";
import {
  Send,
  MessageSquare,
  Plus,
  HelpCircle,
  Search
} from "lucide-react";
import {
  SIMULATION_PRODUCTS,
  SIMULATION_CATEGORIES,
  SPECIAL_REQUEST_BANNER
} from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function SimulacionSection({ onOpenQuote, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState("todos-sim");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSimulators = useMemo(() => {
    return SIMULATION_PRODUCTS.filter((sim) => {
      const matchesCat =
        selectedCategory === "todos-sim" || sim.category === selectedCategory;
      const matchesSearch =
        sim.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (sim.desc && sim.desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        sim.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (sim.sku && sim.sku.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const specialRequestWhatsAppUrl = buildWhatsAppQuoteUrl({
    name: "Solicitud Especial — Simulador Clínico o Maniquí NASCO Healthcare",
    sku: "REQ-ESPECIAL-SIM",
    brand: "NASCO Healthcare / CliniK",
    category: "Simulación Clínica y Educación",
    modality: "Venta Directa B2B",
    customNote:
      "Hola CliniK Soluciones, estoy buscando un simulador médico, maniquí de enfermería o modelo anatómico específico y deseo cotizarlo."
  });

  return (
    <section
      id="simulacion"
      className="py-10 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* C4 & R6: BARRA GLASSMORPHISM DE 1 LÍNEA */}
        <div className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#005071] via-[#00758D] to-[#69a53c] text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <HelpCircle className="w-4 h-4 text-[#6BCDB2] shrink-0 hidden sm:inline" />
            <span className="text-xs sm:text-sm font-extrabold tracking-tight">
              {SPECIAL_REQUEST_BANNER.title} {SPECIAL_REQUEST_BANNER.highlight}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={specialRequestWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white text-[#00758D] hover:bg-teal-50 text-xs font-extrabold py-2 px-3.5 rounded-xl shadow-2xs transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#69a53c]" />
              <span>Pregúntanos aquí</span>
            </a>
            <button
              onClick={() =>
                onOpenQuote({
                  name: "Dotación de Laboratorio de Simulación Clínica (NASCO)",
                  sku: "REQ-ESPECIAL-SIM"
                })
              }
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-bold py-2 px-3 rounded-xl border border-white/25 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Formulario</span>
            </button>
          </div>
        </div>

        {/* CABECERA COMPACTA + BUSCADOR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#69a53c] block mb-1">
              Línea NASCO Healthcare • Educación Médica y Enfermería • Garantía 12 Meses
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Simulación Clínica, Maniquíes y Anatomía
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar simulador, maniquí, NASCO..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D] shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* CATEGORÍAS DE SIMULACIÓN NASCO */}
        <div className="flex flex-wrap items-center gap-2">
          {SIMULATION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#69a53c] text-white shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[#69a53c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRILLA AWWWARDS C1-C6: >=68% FOTO (h-64) + 1 PÍLDORA + TÍTULO + ACCIÓN DUAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSimulators.map((sim) => {
            const simWhatsAppUrl = buildWhatsAppQuoteUrl({
              name: sim.name,
              sku: sim.sku,
              brand: sim.brand,
              category: sim.categoryLabel || "Simulación Clínica",
              modality: "Venta Directa B2B"
            });

            const modalObj = {
              name: sim.name,
              brand: sim.brand,
              sku: sim.sku,
              image: sim.image,
              warranty: sim.warranty || "12 Meses",
              microDesc: sim.desc,
              pills: sim.pills,
              specs: sim.specs,
              accessories: [
                "Simulador clínico original con guía de instrucción y estuche/base de fábrica"
              ]
            };

            return (
              <div
                key={sim.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#00758D] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div
                    onClick={() => onSelectProduct && onSelectProduct(modalObj)}
                    className="relative h-64 w-full bg-gradient-to-b from-slate-50/90 to-white dark:from-slate-800/60 dark:to-slate-900 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                  >
                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-2xs border border-slate-200/70 dark:border-slate-700">
                        {sim.brand}
                      </span>
                    </div>

                    <img
                      src={sim.image}
                      alt={sim.name}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                  </div>

                  <div className="p-5 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1 truncate">
                      {sim.categoryLabel}
                    </span>
                    <h3
                      onClick={() => onSelectProduct && onSelectProduct(modalObj)}
                      className="font-black text-slate-900 dark:text-white text-sm sm:text-base leading-snug line-clamp-2 hover:text-[#00758D] dark:hover:text-[#6BCDB2] transition-colors cursor-pointer"
                    >
                      {sim.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct && onSelectProduct(modalObj)}
                    className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span>Ficha</span>
                  </button>

                  <a
                    href={simWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-extrabold transition-all shadow-xs cursor-pointer"
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
    </section>
  );
}
