import React, { useState } from "react";
import {
  HeartPulse,
  Truck,
  Stethoscope,
  Activity,
  Sun,
  Moon,
  Send,
  Menu,
  X,
  ShieldCheck,
  Lock,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import { buildWhatsAppQuoteUrl } from "../utils/whatsapp";

export default function Navbar({
  currentView,
  onSelectView,
  isDarkMode,
  setIsDarkMode,
  onOpenQuote,
  onOpenPdfModal,
  isAuthenticated
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navWindows = [
    { id: "inicio", label: "Inicio" },
    { id: "catalogo", label: "Catálogo", icon: Stethoscope },
    { id: "cardioprotegidos", label: "Cardioprotegidos", icon: HeartPulse },
    { id: "ambulancias", label: "Ambulancias", icon: Truck },
    { id: "servicios", label: "Servicios & Metrología", icon: Activity },
    { id: "clinikos", label: "CliniK OS", icon: Lock, isRestricted: true }
  ];

  const handleWhatsAppQuick = () => {
    const url = buildWhatsAppQuoteUrl({
      name: "Consulta General sobre Equipamiento Biomédico",
      sku: "NAVBAR-QUICK",
      brand: "CliniK Soluciones",
      category: "Atención Inmediata",
      modality: "Venta Directa / Renting"
    });
    window.open(url, "_blank");
  };

  const handleNavClick = (viewId) => {
    onSelectView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* BARRA SUPERIOR DE AUTORIDAD ULTRA-COMPACTA */}
      <div className="bg-[#005071] text-white text-[10px] sm:text-[11px] py-1 px-4 border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 text-teal-100 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#6BCDB2]" />
              <span>NIT 901.074.678-9 • Sabaneta, Antioquia</span>
            </span>
            <span className="hidden md:inline text-teal-400/60">•</span>
            <span className="hidden md:inline text-teal-200">
              Res. 3100 de 2019 / Ley 1831
            </span>
          </div>

          <div className="flex items-center gap-3 text-teal-100">
            <a
              href="tel:+573002511994"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#6BCDB2]" />
              <span className="font-mono text-[10px]">PBX (+57) 300 251 1994</span>
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL FLOTANTE */}
      <nav className="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          
          {/* LOGO CORPORATIVO ORIGINAL CLINIK */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center cursor-pointer group py-1"
            title="Clinik Soluciones - Volver al Inicio"
            aria-label="Clinik Soluciones"
          >
            <img
              src="./images/clinik-logo-original.png"
              alt="Clinik Soluciones"
              className="h-10 sm:h-11 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-110"
            />
          </button>

          {/* MENÚ DE VENTANAS / MÓDULOS (ESCRITORIO) */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-slate-100/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            {navWindows.map((win) => {
              const Icon = win.icon;
              const isActive = currentView === win.id;

              return (
                <button
                  key={win.id}
                  onClick={() => handleNavClick(win.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#00758D] text-white shadow-xs font-extrabold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800"
                  }`}
                >
                  {Icon && (
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : win.isRestricted ? "text-amber-500" : "text-[#00758D] dark:text-[#6BCDB2]"}`} />
                  )}
                  <span>{win.label}</span>
                  {win.isRestricted && (
                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
                      {isAuthenticated ? "Activo" : "Admin"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ACCIONES DERECHAS: TEMA & WHATSAPP */}
          <div className="flex items-center gap-2">
            {/* TEMA CLARO / OSCURO */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Cambiar tema visual"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* BOTÓN WHATSAPP COMPACTO */}
            <button
              onClick={handleWhatsAppQuick}
              className="hidden sm:flex items-center gap-1.5 bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            {/* BOTÓN MENÚ MÓVIL */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-2 animate-in slide-in-from-top-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block px-2 mb-1">
              Ventanas de Navegación
            </span>
            {navWindows.map((win) => {
              const Icon = win.icon;
              const isActive = currentView === win.id;

              return (
                <button
                  key={win.id}
                  onClick={() => handleNavClick(win.id)}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[#00758D] text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{win.label}</span>
                  </div>
                  {win.isRestricted && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                      Restringido
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <button
                onClick={handleWhatsAppQuick}
                className="flex-1 flex items-center justify-center gap-2 bg-[#69a53c] text-white text-xs font-bold py-2.5 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+57 300 202 1894)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
