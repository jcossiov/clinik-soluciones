import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ShieldCheck,
  FileText,
  Send,
  ExternalLink,
  Tag,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { CLINIK_PRODUCTS, CATEGORIES } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function CatalogSection({ onSelectProduct, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return CLINIK_PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "todos" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.microDesc && p.microDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.sku && p.sku.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.invimaReg && p.invimaReg.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="equipos" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-[11px] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tecnología Hospitalaria Certificada & Stock Inmediato</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Catálogo de Equipamiento Biomédico
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl">
              Portafolio oficial con registros sanitarios INVIMA vigentes, protocolo metrológico de fábrica y cotización indexada en tiempo real.
            </p>
          </div>

          {/* BUSCADOR REACTIVO */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por equipo, SKU, marca..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* PESTAÑAS DE CATEGORÍA */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-[#00758D] text-white shadow-md shadow-teal-900/10"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* CONTADOR DE RESULTADOS */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>Mostrando <strong>{filteredProducts.length}</strong> equipos certificados</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#00758D] dark:text-[#6BCDB2] font-semibold hover:underline cursor-pointer"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>

        {/* GRILLA DE PRODUCTOS — 80% VISUAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const whatsAppUrl = buildWhatsAppQuoteUrl({
              name: prod.name,
              sku: prod.sku,
              brand: prod.brand,
              category: prod.categoryLabel || prod.category,
              modality: "Venta Directa / Cotización del Día"
            });

            return (
              <div
                key={prod.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* IMAGEN DEL PRODUCTO (CUBRE LA TOTALIDAD DEL MARCO) */}
                  <div className="relative h-60 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
                    {/* BADGES SUPERIORES FLOTANTES */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <span className="text-[10px] font-bold text-[#00758D] dark:text-[#6BCDB2] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-xs border border-teal-100/60 dark:border-teal-900/40">
                        {prod.brand}
                      </span>
                      {prod.badge && (
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50/95 dark:bg-emerald-950/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                          {prod.badge}
                        </span>
                      )}
                    </div>

                    {/* IMAGEN CUBRIENDO EL MARCO CON ZOOM AL HOVER */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />

                    {/* OVERLAY DE APERTURA RÁPIDA */}
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#00758D] hover:text-white cursor-pointer"
                      title="Ver ficha técnica en detalle"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* CONTENIDO DESCRIPTIVO COMPACTO */}
                  <div className="p-5">
                    {/* SKU & DISPONIBILIDAD */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 px-2 py-0.5 rounded-md border border-teal-200/50 dark:border-teal-900/50">
                        SKU: {prod.sku}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {prod.availability || "Stock Inmediato"}
                      </span>
                    </div>

                    {/* NOMBRE DEL EQUIPO */}
                    <h3
                      onClick={() => onSelectProduct(prod)}
                      className="font-extrabold text-slate-900 dark:text-white text-base mb-2 leading-snug line-clamp-2 hover:text-[#00758D] dark:hover:text-[#6BCDB2] transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>

                    {/* MICRO-DESCRIPCIÓN (≤ 90 CARACTERES) */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
                      {prod.microDesc || prod.shortDesc}
                    </p>

                    {/* 3 PILLS TÉCNICAS CLAVE */}
                    {prod.pills && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {prod.pills.map((pill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* REGISTRO SANITARIO INVIMA */}
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] mb-4">
                      <div className="flex items-center gap-1.5 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#69a53c] shrink-0" />
                        <span className="text-slate-500 dark:text-slate-400 text-[10px] font-mono truncate">
                          INVIMA: {prod.invimaReg}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-teal-700 dark:text-teal-300 uppercase shrink-0">
                        Vigente
                      </span>
                    </div>

                    {/* ESTADO DE COTIZACIÓN DINÁMICA (ZERO PRECIOS FIJOS) */}
                    <div className="py-2.5 px-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/50 flex items-center justify-between text-xs mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[11px] font-bold text-emerald-900 dark:text-emerald-200">
                          Cotización del Día
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                        Índice TRM / Stock
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOTONES DE ACCIÓN DUAL */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span>Ficha (+)</span>
                  </button>

                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold transition-all shadow-sm shadow-emerald-900/10 cursor-pointer"
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
