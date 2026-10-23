import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  Send,
  Download,
  FileText,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  PhoneCall,
  Mail,
  Building2,
  MapPin,
  MessageSquare,
  Package,
  Layers,
  Award,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function Modals({
  selectedProduct,
  setSelectedProduct,
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  quoteProduct,
  isDistributorModalOpen,
  setIsDistributorModalOpen,
  isPdfModalOpen,
  setIsPdfModalOpen
}) {
  // Pestañas activas dentro de la Ficha Técnica Modal
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' | 'accessories' | 'regulatory'
  const [selectedModality, setSelectedModality] = useState("1 Unidad (Compra Directa)");

  // Estado local del formulario de cotización
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    institution: "",
    contactName: "",
    email: "",
    phone: "",
    city: "Medellín / Sabaneta",
    notes: ""
  });

  // Estado local del formulario de distribuidor
  const [distributorSuccess, setDistributorSuccess] = useState(false);
  const [distributorForm, setDistributorForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    coverageArea: "Antioquia & Eje Cafetero",
    message: ""
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSuccess(true);
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleDistributorSubmit = (e) => {
    e.preventDefault();
    setDistributorSuccess(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const currentWhatsAppData = selectedProduct
    ? buildWhatsAppQuoteUrl({
        name: selectedProduct.name,
        sku: selectedProduct.sku,
        brand: selectedProduct.brand,
        category: selectedProduct.categoryLabel || selectedProduct.category,
        modality: selectedModality
      })
    : "#";

  return (
    <>
      {/* ========================================================
          1. MODAL / SLIDE-OVER: FICHA TÉCNICA VISUAL DEL PRODUCTO
         ======================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] overflow-y-auto">
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* SECCIÓN VISUAL SUPERIOR: FOTO + DATOS PRINCIPALES */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              {/* IMAGEN DEL EQUIPO (CUBRE LA TOTALIDAD DEL MARCO) */}
              <div className="sm:col-span-5 h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800 shadow-sm relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* METADATOS Y MARCA */}
              <div className="sm:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#00758D] dark:text-[#6BCDB2] bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-lg">
                    {selectedProduct.brand}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    SKU: {selectedProduct.sku}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {selectedProduct.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {selectedProduct.microDesc || selectedProduct.shortDesc}
                </p>

                {/* PILLS TÉCNICAS */}
                {selectedProduct.pills && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selectedProduct.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                )}

                {/* REGISTRO INVIMA */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#69a53c]" />
                    <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300">
                      INVIMA: {selectedProduct.invimaReg}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    Vigente
                  </span>
                </div>
              </div>
            </div>

            {/* SELECTOR DE PESTAÑAS INTERACTIVAS */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
              <button
                onClick={() => setActiveTab("specs")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "specs"
                    ? "bg-[#00758D] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>1. Especificaciones Técnicas</span>
              </button>

              <button
                onClick={() => setActiveTab("accessories")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "accessories"
                    ? "bg-[#00758D] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>2. Accesorios & Dotación</span>
              </button>

              <button
                onClick={() => setActiveTab("regulatory")}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "regulatory"
                    ? "bg-[#00758D] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>3. Respaldo & Res. 3100</span>
              </button>
            </div>

            {/* CONTENIDO DE LA PESTAÑA SELECCIONADA */}
            <div className="mb-6 min-h-[140px]">
              {activeTab === "specs" && (
                <div className="space-y-2 animate-in fade-in">
                  {selectedProduct.specs &&
                    selectedProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs flex flex-col sm:flex-row justify-between gap-1 sm:gap-4"
                      >
                        <span className="text-slate-500 font-medium shrink-0">
                          {s.label}:
                        </span>
                        <strong className="text-slate-800 dark:text-slate-200 sm:text-right font-normal">
                          {s.value}
                        </strong>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === "accessories" && (
                <div className="space-y-2.5 animate-in fade-in">
                  <p className="text-xs text-slate-500 mb-2">
                    Inclusiones de fábrica y accesorios garantizados para entrega inmediata:
                  </p>
                  {selectedProduct.accessories &&
                    selectedProduct.accessories.map((acc, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#69a53c] shrink-0" />
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {acc}
                        </span>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === "regulatory" && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/40">
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                      <span>Certificación Sanitaria & Metrológica Oficial</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProduct.regulatory ||
                        "Equipo avalado por el INVIMA bajo clase de riesgo médico, entregado con protocolo metrológico de entrada calibrado, Hoja de Vida según Res. 3100 de 2019 y garantía directa en Colombia."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Garantía</span>
                      <strong className="text-slate-800 dark:text-slate-200">12 a 24 Meses</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Metrología</span>
                      <strong className="text-slate-800 dark:text-slate-200">NTC-ISO 17025</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Soporte</span>
                      <strong className="text-slate-800 dark:text-slate-200">Sabaneta / Nacional</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SELECTOR DE MODALIDAD DE COTIZACIÓN */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Seleccione la Modalidad de Cotización:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "1 Unidad (Compra Directa)",
                  "2 a 5 Unidades (Dotación)",
                  "Dotación Institucional",
                  "Alquiler / Renting"
                ].map((mod) => (
                  <button
                    key={mod}
                    type="button"
                    onClick={() => setSelectedModality(mod)}
                    className={`p-2 rounded-xl text-[11px] font-bold text-center border transition-all cursor-pointer ${
                      selectedModality === mod
                        ? "bg-[#00758D] text-white border-[#00758D] shadow-xs"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-teal-400"
                    }`}
                  >
                    {mod}
                  </button>
                ))}
              </div>
            </div>

            {/* BOTÓN PRIMARIO DE ACCIÓN (COTIZACIÓN INDEXADA + WHATSAPP DIRECTO) */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    Cotización Indexada al Día
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Stock inmediato en Sabaneta y despachos a todo el país.
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={currentWhatsAppData}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3 px-5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Cotizar por WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const prod = selectedProduct;
                    setSelectedProduct(null);
                    setIsQuoteModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00758D]" />
                  <span>Correo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. MODAL: COTIZACIÓN INSTITUCIONAL POR FORMULARIO
         ======================================================== */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsQuoteModalOpen(false);
                setQuoteSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {quoteSuccess ? (
              <div className="text-center py-8 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  ¡Solicitud Enviada con Éxito!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Un ingeniero biomédico de CliniK Soluciones se comunicará con su institución en menos de 2 horas hábiles con la propuesta técnica y comercial formal.
                </p>
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(false);
                    setQuoteSuccess(false);
                  }}
                  className="bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Send className="w-3 h-3" />
                  <span>Cotización Inmediata B2B</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                  Cotización de Equipamiento Biomédico
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  {quoteProduct ? `Interés en: ${quoteProduct.name}` : "Reciba propuesta técnica formal con flete y garantía"}
                </p>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Nombre de la Institución o Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Clínica Las Américas / Colegio San José"
                      value={quoteForm.institution}
                      onChange={(e) => setQuoteForm({ ...quoteForm, institution: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Nombre de Contacto *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dra. María Restrepo"
                        value={quoteForm.contactName}
                        onChange={(e) => setQuoteForm({ ...quoteForm, contactName: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+57 300 000 0000"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Correo Electrónico Institucional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="compras@institucion.com"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Ciudad o Municipio de Entrega
                    </label>
                    <input
                      type="text"
                      placeholder="Medellín / Sabaneta / Bogotá / Cali"
                      value={quoteForm.city}
                      onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Requerimientos Específicos o Cantidades
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Indique si requiere compra directa o renting, cantidad de equipos o dudas sobre habilitación Res. 3100 / Ley 1831."
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud a Ingeniería Biomédica</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          3. MODAL: VISOR DE PORTAFOLIO OFICIAL EN PDF
         ======================================================== */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col h-[90vh] overflow-hidden">
            {/* BARRA SUPERIOR DEL VISOR PDF */}
            <div className="p-4 sm:px-6 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#00758D] dark:text-[#6BCDB2]" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                    Portafolio Oficial — CliniK Soluciones Colombia S.A.S.
                  </h3>
                  <span className="text-[10px] text-slate-500">
                    Documento Oficial • 39 Páginas • Sabaneta, Antioquia
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="./Portafolio-Clinik-Soluciones.pdf"
                  download="Portafolio-Clinik-Soluciones.pdf"
                  className="flex items-center gap-1.5 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-1.5 px-3 sm:px-4 rounded-xl shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Descargar PDF (2.8 MB)</span>
                  <span className="sm:hidden">Descargar</span>
                </a>

                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CONTENEDOR VISOR EMBEBIDO */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 relative">
              <iframe
                src="./Portafolio-Clinik-Soluciones.pdf#toolbar=1&navpanes=1&scrollbar=1"
                title="Portafolio CliniK Soluciones Colombia"
                className="w-full h-full border-0"
              />
            </div>

            {/* PIE DEL MODAL CON BOTÓN DE COTIZACIÓN */}
            <div className="p-3 sm:px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 hidden sm:inline">
                ¿Interesado en alguna de las líneas del portafolio?
              </span>
              <button
                onClick={() => {
                  setIsPdfModalOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="text-[#00758D] dark:text-[#6BCDB2] font-bold hover:underline flex items-center gap-1 ml-auto cursor-pointer"
              >
                <span>Solicitar Asesoría de este Portafolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. MODAL: DISTRIBUIDOR OFICIAL
         ======================================================== */}
      {isDistributorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsDistributorModalOpen(false);
                setDistributorSuccess(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {distributorSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  ¡Solicitud de Alianza Recibida!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Nuestra gerencia comercial evaluará su cobertura territorial y le enviará la lista de precios mayorista y condiciones de canal.
                </p>
                <button
                  onClick={() => {
                    setIsDistributorModalOpen(false);
                    setDistributorSuccess(false);
                  }}
                  className="bg-[#00758D] text-white text-xs font-bold py-2.5 px-6 rounded-xl cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                  Red de Distribuidores CliniK
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Únase a la red de comercialización de tecnología médica en Colombia con respaldo metrológico directo.
                </p>

                <form onSubmit={handleDistributorSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Nombre de la Empresa Comercializadora *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Suministros Médicos del Oriente SAS"
                      value={distributorForm.companyName}
                      onChange={(e) => setDistributorForm({ ...distributorForm, companyName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Representante Legal o Comercial *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Carlos Pérez"
                      value={distributorForm.contactName}
                      onChange={(e) => setDistributorForm({ ...distributorForm, contactName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+57 310 000 0000"
                        value={distributorForm.phone}
                        onChange={(e) => setDistributorForm({ ...distributorForm, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Correo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ventas@distribuidor.com"
                        value={distributorForm.email}
                        onChange={(e) => setDistributorForm({ ...distributorForm, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Zona o Región de Cobertura
                    </label>
                    <input
                      type="text"
                      placeholder="Costa Atlántica / Santanderes / Eje Cafetero"
                      value={distributorForm.coverageArea}
                      onChange={(e) => setDistributorForm({ ...distributorForm, coverageArea: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#00758D] text-white text-xs font-bold py-3 px-4 rounded-xl cursor-pointer"
                  >
                    Enviar Solicitud de Distribución
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
