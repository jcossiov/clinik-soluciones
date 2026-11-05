import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  Send,
  Download,
  FileText,
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageSquare,
  Package,
  Layers,
  Award
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "../data/products";
import { buildWhatsAppQuoteUrl, OFFICIAL_SALES_EMAIL } from "../utils/whatsapp";

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

  // Estado local del formulario de cotización (Incluye Razón Social y Nombre Comercial obligatorios)
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    razonSocial: "",
    nombreComercial: "",
    contactName: "",
    email: "",
    phone: "",
    city: "Medellín / Antioquia",
    notes: ""
  });

  useEffect(() => {
    if (quoteProduct && quoteProduct.initialNotes) {
      setQuoteForm((prev) => ({ ...prev, notes: quoteProduct.initialNotes }));
    }
  }, [quoteProduct]);

  // Estado local del formulario de distribuidor
  const [distributorSuccess, setDistributorSuccess] = useState(false);
  const [distributorForm, setDistributorForm] = useState({
    razonSocial: "",
    nombreComercial: "",
    contactName: "",
    email: "",
    phone: "",
    coverageArea: "Antioquia y Eje Cafetero",
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

  const handleSendQuoteViaWhatsApp = () => {
    const url = buildWhatsAppQuoteUrl({
      name: quoteProduct ? quoteProduct.name : "Solicitud de Cotización Institucional",
      sku: quoteProduct?.sku || "COT-FORM-B2B",
      brand: quoteProduct?.brand || "CliniK Soluciones",
      category: "Cotización Formal B2B",
      modality: "Venta Directa",
      clientData: quoteForm
    });
    window.open(url, "_blank");
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
        category: selectedProduct.categoryLabel || selectedProduct.category || "Catálogo CliniK",
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
              {/* IMAGEN DEL EQUIPO */}
              <div className="sm:col-span-5 h-60 sm:h-68 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 shadow-sm relative p-4 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* METADATOS Y MARCA */}
              <div className="sm:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#00758D] dark:text-[#6BCDB2] bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-lg">
                    {selectedProduct.brand}
                  </span>
                  {selectedProduct.sku && (
                    <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      SKU: {selectedProduct.sku}
                    </span>
                  )}
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-lg">
                    Garantía: 12 Meses
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {selectedProduct.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {selectedProduct.microDesc || selectedProduct.shortDesc || selectedProduct.desc}
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
                      INVIMA: {selectedProduct.invimaReg || "Registro Sanitario Vigente"}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    Modalidad Venta
                  </span>
                </div>
              </div>
            </div>

            {/* SELECTOR DE PESTAÑAS INTERACTIVAS */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
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
                <span>2. Accesorios y Dotación</span>
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
                <span>3. Garantía y Normativa</span>
              </button>
            </div>

            {/* CONTENIDO DE LA PESTAÑA SELECCIONADA */}
            <div className="mb-6 min-h-[140px]">
              {activeTab === "specs" && (
                <div className="space-y-2 animate-in fade-in">
                  {selectedProduct.specs && selectedProduct.specs.length > 0 ? (
                    selectedProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs flex flex-col sm:flex-row justify-between gap-1 sm:gap-4"
                      >
                        <span className="text-slate-500 font-medium shrink-0">
                          {s.label}:
                        </span>
                        <strong className="text-slate-800 dark:text-slate-200 sm:text-right font-semibold">
                          {s.value}
                        </strong>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-300">
                      {selectedProduct.microDesc || selectedProduct.desc || "Especificaciones técnicas certificadas de fábrica con respaldo de ingeniería biomédica."}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "accessories" && (
                <div className="space-y-2.5 animate-in fade-in">
                  <p className="text-xs text-slate-500 mb-2">
                    Inclusiones estándar y configuración para entrega:
                  </p>
                  {selectedProduct.accessories && selectedProduct.accessories.length > 0 ? (
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
                    ))
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#69a53c] shrink-0" />
                      <span>Manual de operación y configuración completa de fábrica lista para uso.</span>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "regulatory" && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/40">
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                      <span>Respaldo Normativo y Técnico CliniK Soluciones</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProduct.regulatory ||
                        "Producto comercializado con cumplimiento de los requisitos establecidos en la Resolución 3100 de 2019 / Resolución 3316 de 2019 y garantía directa de 12 meses."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Garantía Oficial</span>
                      <strong className="text-emerald-700 dark:text-emerald-400">12 Meses</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Modalidad</span>
                      <strong className="text-slate-800 dark:text-slate-200">Venta Directa</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 text-xs">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Cobertura</span>
                      <strong className="text-slate-800 dark:text-slate-200">Nacional</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SELECTOR DE CANTIDAD / ALCANCE DE COMPRA (SOLO VENTA) */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Seleccione el Alcance de su Compra (Modalidad Venta):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  "1 Unidad (Compra Directa)",
                  "2 a 5 Unidades (Dotación)",
                  "Dotación Institucional / Mayorista"
                ].map((mod) => (
                  <button
                    key={mod}
                    type="button"
                    onClick={() => setSelectedModality(mod)}
                    className={`p-2.5 rounded-xl text-[11px] font-bold text-center border transition-all cursor-pointer ${
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

            {/* BOTÓN PRIMARIO DE ACCIÓN */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    Asesoría Comercial Directa • Garantía 12 Meses
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Despachos a todo el país • {COMPANY_INFO.emailGeneral}
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
                    setSelectedProduct(null);
                    setIsQuoteModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00758D]" />
                  <span>Formulario</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. MODAL: COTIZACIÓN INSTITUCIONAL POR FORMULARIO
             (CON RAZÓN SOCIAL Y NOMBRE COMERCIAL OBLIGATORIOS)
         ======================================================== */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] overflow-y-auto">
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
                  ¡Solicitud Registrada con Éxito!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Nuestro equipo comercial (<strong>{OFFICIAL_SALES_EMAIL}</strong>) procesará la cotización para <strong>{quoteForm.razonSocial}</strong> ({quoteForm.nombreComercial}). Si desea atención inmediata, también puede enviarla en un clic a nuestro WhatsApp.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleSendQuoteViaWhatsApp}
                    className="bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3 px-5 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmar también por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setQuoteSuccess(false);
                    }}
                    className="bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Send className="w-3 h-3" />
                  <span>Cotización Institucional B2B • Modalidad Venta</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                  Solicitud Formal de Cotización
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  {quoteProduct
                    ? `Interés en: ${quoteProduct.name}`
                    : `Atención directa: ${OFFICIAL_SALES_EMAIL} • (+57) 300 251 1990`}
                </p>

                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Razón Social *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Inversiones Médicas del Sur S.A.S."
                        value={quoteForm.razonSocial}
                        onChange={(e) => setQuoteForm({ ...quoteForm, razonSocial: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Nombre Comercial *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Clínica del Sur / Colegio San José"
                        value={quoteForm.nombreComercial}
                        onChange={(e) => setQuoteForm({ ...quoteForm, nombreComercial: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Nombre de Contacto *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dra. María Restrepo / Ing. Juan Pérez"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        Ciudad o Municipio *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Medellín / Sabaneta / Bogotá / Cali"
                        value={quoteForm.city}
                        onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Equipos Requeridos, Cantidades o Listado para Servicio Técnico
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indique los equipos, accesorios, simuladores o servicios que desea cotizar y las cantidades requeridas."
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00758D]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Registrar Solicitud Formal</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendQuoteViaWhatsApp}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar Directo por WhatsApp</span>
                    </button>
                  </div>
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
                    Documento Oficial • Sabaneta, Antioquia • {OFFICIAL_SALES_EMAIL}
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
                  <span className="hidden sm:inline">Descargar PDF</span>
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
                <span>Solicitar Cotización de este Portafolio</span>
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
                  Nuestra gerencia comercial evaluará su solicitud y se pondrá en contacto a través de {OFFICIAL_SALES_EMAIL}.
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
                  Únase a la red de comercialización de tecnología médica en Colombia con respaldo directo.
                </p>

                <form onSubmit={handleDistributorSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Razón Social *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Suministros Médicos SAS"
                        value={distributorForm.razonSocial}
                        onChange={(e) => setDistributorForm({ ...distributorForm, razonSocial: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Nombre Comercial *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Medisur"
                        value={distributorForm.nombreComercial}
                        onChange={(e) => setDistributorForm({ ...distributorForm, nombreComercial: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      />
                    </div>
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
                  <div className="grid grid-cols-2 gap-3.5">
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
