import React, { useState, useMemo } from "react";
import {
  Search,
  Send,
  MessageSquare,
  Plus,
  HelpCircle
} from "lucide-react";
import { RESCATE_PRODUCTS, RESCATE_CATEGORIES, SPECIAL_REQUEST_BANNER } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function RescateSection({ onSelectProduct, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("todos-rescate");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return RESCATE_PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "todos-rescate" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.microDesc && p.microDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.sku && p.sku.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const specialRequestWhatsAppUrl = buildWhatsAppQuoteUrl({
    name: "Solicitud Especial — Equipo de Rescate y Atención Prehospitalaria",
    sku: "REQ-ESPECIAL-RESCATE",
    brand: "CliniK Soluciones",
    category: "Rescate y Atención Prehospitalaria",
    modality: "Venta Directa B2B",
    customNote:
      "Hola CliniK Soluciones, estoy buscando un elemento de rescate o atención prehospitalaria específico y deseo cotizarlo."
  });

  return (
    <section
      id="rescate"
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
                  name: "Solicitud Especial de Rescate y Atención Prehospitalaria",
                  sku: "REQ-ESPECIAL-RESCATE"
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
              Atención Prehospitalaria (APH), Brigadas y Ambulancias • Garantía 12 Meses
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Rescate y Atención Prehospitalaria
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar camilla, inmovilizador, botiquín..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D] shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* PÍLDORAS DE CATEGORÍAS DE RESCATE */}
        <div className="flex flex-wrap items-center gap-2">
          {RESCATE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-[#69a53c] text-white shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[#69a53c]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-white/25 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* GRILLA AWWWARDS C1-C6: >=68% FOTO (h-64) + 1 PÍLDORA + TÍTULO + ACCIÓN DUAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => {
            const whatsAppUrl = buildWhatsAppQuoteUrl({
              name: prod.name,
              sku: prod.sku,
              brand: prod.brand,
              category: prod.categoryLabel || "Rescate y Atención Prehospitalaria",
              modality: "Venta Directa B2B"
            });

            return (
              <div
                key={prod.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#00758D] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div
                    onClick={() => onSelectProduct && onSelectProduct(prod)}
                    className="relative h-64 w-full bg-gradient-to-b from-slate-50/90 to-white dark:from-slate-800/60 dark:to-slate-900 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                  >
                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00758D] dark:text-[#6BCDB2] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-2xs border border-slate-200/70 dark:border-slate-700">
                        {prod.brand}
                      </span>
                    </div>

                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                  </div>

                  <div className="p-5 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1 truncate">
                      {prod.categoryLabel}
                    </span>

                    <h3
                      onClick={() => onSelectProduct && onSelectProduct(prod)}
                      className="font-black text-slate-900 dark:text-white text-sm sm:text-base leading-snug line-clamp-2 hover:text-[#00758D] dark:hover:text-[#6BCDB2] transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct && onSelectProduct(prod)}
                    className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span>Ficha</span>
                  </button>

                  <a
                    href={whatsAppUrl}
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
