import React from "react";
import { MapPin, Award, BadgeCheck, PhoneCall, Mail } from "lucide-react";
import { COMPANY_INFO } from "../data/products";

export default function TopAnnouncementBar({ onOpenQuote }) {
  return (
    <div className="bg-[#00758D] text-white text-[11px] py-1.5 px-4 font-medium border-b border-teal-800/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-teal-100">
            <MapPin className="w-3.5 h-3.5 text-[#6BCDB2]" />
            <span>Sabaneta, Antioquia • Cobertura Nacional</span>
          </span>
          <span className="hidden md:inline-block text-teal-300">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-teal-100">
            <Award className="w-3.5 h-3.5 text-[#6BCDB2]" />
            <span>NIT {COMPANY_INFO.nit} • Fundada en 2017 • {COMPANY_INFO.yearsOfExperience} Años de Trayectoria</span>
          </span>
          <span className="hidden lg:inline-block text-teal-300">•</span>
          <span className="hidden lg:flex items-center gap-1.5 text-teal-100">
            <BadgeCheck className="w-3.5 h-3.5 text-[#6BCDB2]" />
            <span>Habilitación & Metrología Res. 3100 de 2019</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-teal-100">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#6BCDB2]" />
            <span>PBX: {COMPANY_INFO.phoneDisplay}</span>
          </a>
          <span className="hidden sm:inline-block text-teal-300">•</span>
          <a
            href={`mailto:${COMPANY_INFO.emailGeneral}`}
            className="hidden xl:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-[#6BCDB2]" />
            <span>{COMPANY_INFO.emailGeneral}</span>
          </a>
          <a
            href={`https://wa.me/573002511994?text=Hola%20CliniK%20Soluciones,%20solicito%20asesor%C3%ADa%20en%20equipos%20biom%C3%A9dicos%20y%20Espacios%20Cardioprotegidos.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#69a53c] hover:bg-[#588d32] text-white px-2.5 py-0.5 rounded font-bold transition-colors shadow-sm"
          >
            <span>WhatsApp Asesoría</span>
          </a>
        </div>
      </div>
    </div>
  );
}
