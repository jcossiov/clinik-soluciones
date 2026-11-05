import React, { useState } from "react";
import {
  BadgeCheck,
  GraduationCap,
  Wrench,
  Settings,
  Send,
  MessageSquare,
  ClipboardList,
  Plus
} from "lucide-react";
import { CLINIK_SERVICES } from "../data/products";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function ServiciosSection({ onOpenQuote, onSelectProduct }) {
  const [equipmentListText, setEquipmentListText] = useState("");

  const iconMap = {
    Wrench,
    Settings,
    BadgeCheck,
    GraduationCap
  };

  // Fotografías representativas para cada una de las 4 subcategorías de servicio
  const serviceImages = {
    "serv-preventivo": "./images/products/monitor-im70.jpg",
    "serv-correctivo": "./images/products/anestesia-boaray700.jpg",
    "serv-calibracion": "./images/products/desfibrilador-i2.png",
    "serv-capacitacion": "./images/products/sim-smart-stat.webp"
  };

  // Chips cortos de 2-3 palabras (suprimiendo listas verticales de 4 oraciones)
  const serviceChips = {
    "serv-preventivo": ["Cada 6 Meses", "Inspección Funcional", "Hoja de Vida"],
    "serv-correctivo": ["Diagnóstico Electrónico", "Repuestos", "Pruebas de Carga"],
    "serv-calibracion": ["Trazabilidad", "Certificado Metrológico", "Res. 3100"],
    "serv-capacitacion": ["Soporte Vital BLS", "Práctica con DEA", "Certificado"]
  };

  const handleSendEquipmentListWhatsApp = () => {
    const url = buildWhatsAppQuoteUrl({
      name: "Cotización de Servicios Biomédicos por Listado de Equipos",
      sku: "SERV-LISTADO-B2B",
      brand: "CliniK Soluciones",
      category: "Servicios y Metrología",
      modality: "Servicio Técnico Especializado",
      customNote: equipmentListText
        ? `Listado de equipos / requerimiento: ${equipmentListText}`
        : "Deseo enviar el listado de equipos biomédicos de mi institución para cotizar mantenimiento y/o calibración."
    });
    window.open(url, "_blank");
  };

  return (
    <section
      id="servicios"
      className="py-12 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* CABECERA COMPACTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2] block mb-1.5">
              Soporte Técnico Especializado y Formación
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Servicios y Metrología
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            4 líneas especializadas de ingeniería biomédica. Cotice por equipo individual o envíe el listado completo de su institución.
          </p>
        </div>

        {/* GRILLA BENTO 4 COLUMNAS — >=68% FOTO + TÍTULO + DATA CHIPS + ACCIÓN DUAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIK_SERVICES.map((serv, index) => {
            const ServIcon = iconMap[serv.icon] || Wrench;
            const servImage = serviceImages[serv.id] || "./images/products/desfibrilador-i2.png";
            const chips = serviceChips[serv.id] || ["Soporte Biomédico", "Res. 3100"];

            const servWhatsAppUrl = buildWhatsAppQuoteUrl({
              name: serv.title,
              sku: `SERV-0${index + 1}`,
              brand: "CliniK Soluciones",
              category: "Servicios y Metrología",
              modality: "Cotización por Listado de Equipos"
            });

            const modalDetail = {
              name: serv.title,
              brand: "CliniK Ingeniería Biomédica",
              sku: `SERV-0${index + 1}`,
              image: servImage,
              warranty: "Soporte Certificado",
              microDesc: serv.desc,
              pills: chips,
              specs: serv.highlights.map((h, i) => ({
                label: `Alcance 0${i + 1}`,
                value: h
              })),
              accessories: serv.highlights
            };

            return (
              <div
                key={serv.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#00758D] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* C1: LIENZO FOTOGRÁFICO PROTAGONISTA (h-56) */}
                  <div
                    onClick={() => onSelectProduct && onSelectProduct(modalDetail)}
                    className="relative h-56 w-full bg-gradient-to-b from-slate-50/90 to-white dark:from-slate-800/60 dark:to-slate-900 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                  >
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 text-[#00758D] dark:text-[#6BCDB2] border border-slate-200/70 dark:border-slate-700 shadow-2xs">
                        <ServIcon className="w-3 h-3 text-[#69a53c]" />
                        <span>Servicio 0{index + 1}</span>
                      </span>
                    </div>

                    <img
                      src={servImage}
                      alt={serv.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                  </div>

                  {/* C2 & C5: TÍTULO + DATA CHIPS (CERO PÁRRAFOS LARGOS EN TARJETA) */}
                  <div className="p-5 pb-3">
                    <h3
                      onClick={() => onSelectProduct && onSelectProduct(modalDetail)}
                      className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2.5 leading-snug group-hover:text-[#00758D] dark:group-hover:text-[#6BCDB2] transition-colors cursor-pointer"
                    >
                      {serv.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                      {chips.map((chip, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* C6: BOTONES DUALES CONCISOS */}
                <div className="p-5 pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      onSelectProduct
                        ? onSelectProduct(modalDetail)
                        : onOpenQuote({ name: serv.title, sku: `SERV-0${index + 1}` })
                    }
                    className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span>Detalle</span>
                  </button>

                  <a
                    href={servWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-extrabold text-white bg-[#69a53c] hover:bg-[#588d32] shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BARRA INTERACTIVA COMPACTA PARA ENVIAR LISTADO DE EQUIPOS */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#005071] via-[#00758D] to-[#006075] text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[#6BCDB2] text-[10px] font-bold uppercase tracking-wider mb-2">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Cotización Rápida por Listado</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black leading-snug">
                Envíe su Listado de Equipos para Mantenimiento o Calibración
              </h3>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={equipmentListText}
                onChange={(e) => setEquipmentListText(e.target.value)}
                placeholder="Ej: 3 Monitores, 2 Desfibriladores, 5 Tensiómetros en Medellín..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/95 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#69a53c]"
              />
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleSendEquipmentListWhatsApp}
                  className="flex items-center gap-1.5 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-extrabold py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() =>
                    onOpenQuote({
                      name: "Cotización de Servicios por Listado de Equipos",
                      sku: "SERV-LISTADO",
                      initialNotes: equipmentListText
                    })
                  }
                  className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-bold py-3 px-4 rounded-xl border border-white/25 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Formulario</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
