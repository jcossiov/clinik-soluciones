import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import InicioHub from "./components/InicioHub";
import CardioprotegidosSection from "./components/CardioprotegidosSection";
import AmbulanciasSection from "./components/AmbulanciasSection";
import ServiciosSection from "./components/ServiciosSection";
import CatalogSection from "./components/CatalogSection";
import RescateSection from "./components/RescateSection";
import SimulacionSection from "./components/SimulacionSection";
import AccesoriosSection from "./components/AccesoriosSection";
import CliniKOSAdmin from "./components/CliniKOSAdmin";
import CliniKLogin from "./components/CliniKLogin";
import Modals from "./components/Modals";
import Footer from "./components/Footer";
import {
  ArrowUp,
  ArrowLeft,
  Stethoscope,
  HeartPulse,
  Truck,
  Activity,
  Lock,
  Layers,
  LifeBuoy,
  Package,
  GraduationCap
} from "lucide-react";
import { INITIAL_KANBAN_TICKETS } from "./data/products";

export default function App() {
  // Ventanas activas: 'inicio' | 'catalogo' | 'cardioprotegidos' | 'ambulancias' | 'servicios' | 'clinikos'
  const [currentView, setCurrentView] = useState("inicio");

  // Estado de autenticación para CliniK OS
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem("clinik_auth") === "true";
    } catch {
      return false;
    }
  });

  const [userSession, setUserSession] = useState(() => {
    try {
      const saved = sessionStorage.getItem("clinik_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Tema visual (por defecto claro)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Modales
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Pestaña secundaria dentro del catálogo ('equipos' | 'rescate' | 'accesorios' | 'simulacion')
  const [catalogSubTab, setCatalogSubTab] = useState("equipos");

  // Tickets de Kanban en CliniK OS
  const [tickets, setTickets] = useState(INITIAL_KANBAN_TICKETS);

  // Botón volver arriba
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sincronizar clase 'dark' con <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Manejo de Login y Logout para CliniK OS
  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUserSession(userData);
    try {
      sessionStorage.setItem("clinik_auth", "true");
      sessionStorage.setItem("clinik_user", JSON.stringify(userData));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserSession(null);
    try {
      sessionStorage.removeItem("clinik_auth");
      sessionStorage.removeItem("clinik_user");
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleMoveTicket = (ticketId, nextStatus) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              status: nextStatus,
              progress: nextStatus === "certified" ? 100 : t.progress
            }
          : t
      )
    );
  };

  // Título e ícono según la ventana activa
  const viewMeta = {
    inicio: { title: "Portal Principal", icon: Layers },
    catalogo: { title: "Catálogo de Equipamiento Biomédico", icon: Stethoscope },
    cardioprotegidos: { title: "Cardioprotección (Resolución 3316 de 2019)", icon: HeartPulse },
    ambulancias: { title: "Dotación Ambulancias TAB y TAM (Resolución 3100 de 2019)", icon: Truck },
    servicios: { title: "Servicios de Ingeniería Biomédica y Metrología", icon: Activity },
    clinikos: { title: "CliniK OS • Centro de Mando Biomédico", icon: Lock }
  };

  const currentMeta = viewMeta[currentView] || viewMeta.inicio;
  const CurrentIcon = currentMeta.icon;

  const catalogMacroTabs = [
    {
      id: "equipos",
      label: "Equipos Médicos",
      sub: "10 Subcategorías Biomédicas",
      icon: Stethoscope
    },
    {
      id: "rescate",
      label: "Rescate y Atención Prehospitalaria",
      sub: "Camillas, Inmovilización y APH",
      icon: LifeBuoy
    },
    {
      id: "accesorios",
      label: "Accesorios y Consumibles",
      sub: "Parches, Baterías y Sensores",
      icon: Package
    },
    {
      id: "simulacion",
      label: "Simulación y Educación",
      sub: "Línea NASCO Healthcare",
      icon: GraduationCap
    }
  ];

  return (
    <div className="w-full max-w-[100vw] min-h-screen flex flex-col bg-white dark:bg-[#080d15] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden">
      {/* 1. NAVBAR FIJA CON NAVEGACIÓN POR VENTANAS */}
      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenQuote={handleOpenQuote}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        isAuthenticated={isAuthenticated}
      />

      {/* 2. CONTENIDO PRINCIPAL SEGÚN LA VENTANA SELECCIONADA */}
      <main className="w-full flex-1 pt-20 sm:pt-24">
        {/* SUB-BARRA DE NAVEGACIÓN CON BREADCRUMB (SOLO EN VENTANAS SECUNDARIAS) */}
        {currentView !== "inicio" && (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
            <div className="p-3 sm:px-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setCurrentView("inicio");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Inicio</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-slate-300 dark:text-slate-700">/</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <CurrentIcon className="w-3.5 h-3.5 text-[#00758D] dark:text-[#6BCDB2]" />
                    <span>{currentMeta.title}</span>
                  </div>
                </div>
              </div>

              {/* SELECTOR RÁPIDO ENTRE VENTANAS */}
              <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                <span>Cambiar ventana:</span>
                {[
                  { id: "catalogo", label: "Catálogo" },
                  { id: "cardioprotegidos", label: "Cardioprotección" },
                  { id: "ambulancias", label: "Ambulancias" },
                  { id: "servicios", label: "Servicios" }
                ]
                  .filter((w) => w.id !== currentView)
                  .map((w) => (
                    <button
                      key={w.id}
                      onClick={() => {
                        setCurrentView(w.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-2 py-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                    >
                      {w.label}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VENTANA 1: INICIO & HUB CENTRAL
           ======================================================== */}
        {currentView === "inicio" && (
          <InicioHub
            onNavigate={(viewId) => {
              setCurrentView(viewId);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenQuote={handleOpenQuote}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {/* ========================================================
            VENTANA 2: CATÁLOGO DE EQUIPAMIENTO BIOMÉDICO
            (CON 4 MACRO-BOTONES GRANDES Y VISIBLES EN COLORES DE MARCA)
           ======================================================== */}
        {currentView === "catalogo" && (
          <div className="w-full space-y-6 animate-in fade-in duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="text-center mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00758D] dark:text-[#6BCDB2]">
                  Seleccione la Línea del Catálogo que Desea Explorar
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {catalogMacroTabs.map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = catalogSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCatalogSubTab(tab.id)}
                      className={`p-4 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3.5 border-2 ${
                        isActive
                          ? "bg-gradient-to-r from-[#00758D] to-[#69a53c] text-white border-transparent shadow-lg shadow-teal-900/15 scale-[1.01]"
                          : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#69a53c]"
                      }`}
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-teal-50 dark:bg-slate-800 text-[#00758D] dark:text-[#6BCDB2]"
                        }`}
                      >
                        <TabIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-extrabold text-sm sm:text-base leading-tight truncate">
                          {tab.label}
                        </span>
                        <span
                          className={`block text-[11px] font-medium mt-0.5 truncate ${
                            isActive ? "text-teal-100" : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {tab.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {catalogSubTab === "equipos" && (
              <CatalogSection
                onSelectProduct={setSelectedProduct}
                onOpenQuote={handleOpenQuote}
              />
            )}

            {catalogSubTab === "rescate" && (
              <RescateSection
                onSelectProduct={setSelectedProduct}
                onOpenQuote={handleOpenQuote}
              />
            )}

            {catalogSubTab === "accesorios" && (
              <AccesoriosSection
                onSelectProduct={setSelectedProduct}
                onOpenQuote={handleOpenQuote}
              />
            )}

            {catalogSubTab === "simulacion" && (
              <SimulacionSection
                onSelectProduct={setSelectedProduct}
                onOpenQuote={handleOpenQuote}
              />
            )}
          </div>
        )}

        {/* ========================================================
            VENTANA 3: CARDIOPROTECCIÓN (RESOLUCIÓN 3316 DE 2019)
           ======================================================== */}
        {currentView === "cardioprotegidos" && (
          <div className="w-full animate-in fade-in duration-300">
            <CardioprotegidosSection
              onOpenQuote={handleOpenQuote}
              onSelectProduct={setSelectedProduct}
            />
          </div>
        )}

        {/* ========================================================
            VENTANA 4: DOTACIÓN DE AMBULANCIAS TAB Y TAM
           ======================================================== */}
        {currentView === "ambulancias" && (
          <div className="w-full animate-in fade-in duration-300">
            <AmbulanciasSection
              onOpenQuote={handleOpenQuote}
              onSelectProduct={setSelectedProduct}
            />
          </div>
        )}

        {/* ========================================================
            VENTANA 5: SERVICIOS BIOMÉDICOS Y METROLOGÍA (SIN RENTING)
           ======================================================== */}
        {currentView === "servicios" && (
          <div className="w-full animate-in fade-in duration-300">
            <ServiciosSection
              onOpenQuote={handleOpenQuote}
              onSelectProduct={setSelectedProduct}
            />
          </div>
        )}

        {/* ========================================================
            VENTANA 6: CLINIK OS (ADMINISTRATIVO CON LOGIN GATE)
           ======================================================== */}
        {currentView === "clinikos" && (
          <div className="w-full animate-in fade-in duration-300">
            {isAuthenticated ? (
              <CliniKOSAdmin
                tickets={tickets}
                onMoveTicket={handleMoveTicket}
                userSession={userSession}
                onLogout={handleLogout}
              />
            ) : (
              <CliniKLogin
                onLoginSuccess={handleLoginSuccess}
                onCancel={() => setCurrentView("inicio")}
              />
            )}
          </div>
        )}
      </main>

      {/* 3. MODALES GLOBALES */}
      <Modals
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isQuoteModalOpen={isQuoteModalOpen}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        quoteProduct={quoteProduct}
        isDistributorModalOpen={isDistributorModalOpen}
        setIsDistributorModalOpen={setIsDistributorModalOpen}
        isPdfModalOpen={isPdfModalOpen}
        setIsPdfModalOpen={setIsPdfModalOpen}
      />

      {/* 4. FOOTER CORPORATIVO CON NAVEGACIÓN MODULAR */}
      <Footer
        onSelectView={(viewId) => {
          setCurrentView(viewId);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenDistributorModal={() => setIsDistributorModalOpen(true)}
      />

      {/* 5. BOTÓN FLOTANTE VOLVER ARRIBA */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#00758D] text-white shadow-xl hover:bg-[#005063] transition-all cursor-pointer animate-in fade-in"
          title="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
