import React from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck,
  Award,
  HeartPulse,
  Truck,
  FileText,
  BadgeCheck,
  ExternalLink,
  Lock
} from "lucide-react";
import { COMPANY_INFO } from "../data/products";

export default function Footer({
  onSelectView,
  onOpenPdfModal,
  onOpenDistributorModal
}) {
  const handleNav = (viewId) => {
    if (onSelectView) {
      onSelectView(viewId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400 text-xs mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* COLUMNA 1 & 2: IDENTIDAD CORPORATIVA */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="./images/clinik-logo-original.png"
                alt="Clinik Soluciones"
                className="h-11 sm:h-12 w-auto max-w-[210px] object-contain dark:brightness-110"
              />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.slogan} Soluciones B2B con registro INVIMA, metrología NTC-ISO 17025 y cumplimiento de la Ley 1831 de 2017.
            </p>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-slate-900 dark:hover:text-white">
                  PBX: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="hover:text-slate-900 dark:hover:text-white">
                  {COMPANY_INFO.emailGeneral}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] font-bold text-xs hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Descargar Portafolio Oficial (PDF)</span>
              </button>
            </div>
          </div>

          {/* COLUMNA 3: VENTANAS DEL SISTEMA */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              Módulos Principales
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav("inicio")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer">
                  Inicio & Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("catalogo")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer">
                  Catálogo de Equipos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("cardioprotegidos")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer">
                  Espacios Cardioprotegidos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("ambulancias")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer">
                  Dotación Ambulancias TAB/TAM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("servicios")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer">
                  Servicios & Metrología
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("clinikos")} className="hover:text-[#00758D] dark:hover:text-[#6BCDB2] text-left cursor-pointer flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
                  <Lock className="w-3 h-3" />
                  <span>CliniK OS (Admin)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: SERVICIOS & NORMATIVA */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              Normativa & Calidad
            </h4>
            <ul className="space-y-2">
              <li><span>Resolución 3100 de 2019</span></li>
              <li><span>Ley 1831 de 2017 (DEA)</span></li>
              <li><span>Decreto 1465 de 2019</span></li>
              <li><span>NTC-ISO 17025 Calibración</span></li>
              <li><span>IEC 60601 Seguridad Eléctrica</span></li>
              <li>
                <button onClick={onOpenDistributorModal} className="text-[#00758D] dark:text-[#6BCDB2] font-semibold hover:underline text-left cursor-pointer">
                  Red de Distribuidores
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMNA 5: DATOS CORPORATIVOS */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              Acreditación Legal
            </h4>
            <div className="space-y-2">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] text-slate-400 block font-bold uppercase">CIIU 4659</span>
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Comercio Equipos Médicos</span>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] text-slate-400 block font-bold uppercase">Cámara de Comercio</span>
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Aburrá Sur • Sabaneta</span>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] text-slate-400 block font-bold uppercase">INVIMA</span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Registros Vigentes</span>
              </div>
            </div>
          </div>

        </div>

        {/* DELIMITACIÓN DE ACTIVIDAD (REGLA ESTRICTA DE NO ALUCINACIÓN) */}
        <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-[10px] leading-relaxed text-slate-500 mb-6">
          <strong className="text-slate-700 dark:text-slate-300">Aviso Legal:</strong>{" "}
          CLINIK SOLUCIONES COLOMBIA S.A.S. (NIT 901.074.678-9) es una empresa de Ingeniería Biomédica B2B, Venta y Dotación de Equipos Médicos, Metrología, Habilitación en Salud (Res. 3100 de 2019) y Espacios Cardioprotegidos (Ley 1831 de 2017). No es una IPS, clínica ni hospital asistencial; no presta consulta médica ambulatoria ni despacho de ambulancias de urgencias a particulares.
        </div>

        {/* COPYRIGHT & CRÉDITOS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>Sabaneta, Antioquia • Colombia</span>
            <span>•</span>
            <span className="font-semibold text-[#00758D] dark:text-[#6BCDB2]">{COMPANY_INFO.closingTagline}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
