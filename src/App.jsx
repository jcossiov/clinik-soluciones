import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import InicioHub from "./components/InicioHub";
import CardioprotegidosSection from "./components/CardioprotegidosSection";
import AmbulanciasSection from "./components/AmbulanciasSection";
import ServiciosSection from "./components/ServiciosSection";
import CatalogSection from "./components/CatalogSection";
import SimulacionSection from "./components/SimulacionSection";
import AccesoriosSection from "./components/AccesoriosSection";
import RoiCalculator from "./components/RoiCalculator";
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
  Sparkles
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

  // Pestaña secundaria dentro del catálogo ('equipos' | 'accesorios' | 'simulacion')
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
    cardioprotegidos: { title: "Espacios Cardioprotegidos (Ley 1831)", icon: HeartPulse },
    ambulancias: { title: "Dotación Ambulancias TAB & TAM (Res. 3100)", icon: Truck },
    servicios: { title: "Servicios Biomédicos & Metrología NTC-ISO 17025", icon: Activity },
    clinikos: { title: "CliniK OS • Centro de Mando Biomédico", icon: Lock }
  };

  const currentMeta = viewMeta[currentView] || viewMeta.inicio;
  const CurrentIcon = currentMeta.icon;

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
                  { id: "cardioprotegidos", label: "Cardioprotegidos" },
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
           ======================================================== */}
        {currentView === "catalogo" && (
          <div className="w-full space-y-8 animate-in fade-in duration-300">
            {/* SUB-PESTAÑAS DENTRO DEL CATÁLOGO: EQUIPOS / ACCESORIOS / SIMULACIÓN */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
              <div className="flex items-center justify-center">
                <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setCatalogSubTab("equipos")}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      catalogSubTab === "equipos"
                        ? "bg-[#00758D] text-white shadow-xs font-extrabold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Equipos Médicos Principales
                  </button>
                  <button
                    onClick={() => setCatalogSubTab("accesorios")}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      catalogSubTab === "accesorios"
                        ? "bg-[#00758D] text-white shadow-xs font-extrabold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Accesorios & Consumibles
                  </button>
                  <button
                    onClick={() => setCatalogSubTab("simulacion")}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      catalogSubTab === "simulacion"
                        ? "bg-[#00758D] text-white shadow-xs font-extrabold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Simulación & Educación RCP
                  </button>
                </div>
              </div>
            </div>

            {catalogSubTab === "equipos" && (
              <CatalogSection
                onSelectProduct={setSelectedProduct}
                onOpenQuote={handleOpenQuote}
              />
            )}

            {catalogSubTab === "accesorios" && (
              <AccesoriosSection onOpenQuote={handleOpenQuote} />
            )}

            {catalogSubTab === "simulacion" && (
              <SimulacionSection onOpenQuote={handleOpenQuote} />
            )}
          </div>
        )}

        {/* ========================================================
            VENTANA 3: ESPACIOS CARDIOPROTEGIDOS (LEY 1831)
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
            VENTANA 4: DOTACIÓN DE AMBULANCIAS TAB & TAM
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
            VENTANA 5: SERVICIOS BIOMÉDICOS & METROLOGÍA
           ======================================================== */}
        {currentView === "servicios" && (
          <div className="w-full space-y-8 animate-in fade-in duration-300">
            <ServiciosSection onOpenQuote={handleOpenQuote} />
            <RoiCalculator onOpenQuote={handleOpenQuote} />
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
