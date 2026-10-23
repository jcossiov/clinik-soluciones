import React, { useState } from "react";
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  Clock,
  QrCode,
  Send,
  Zap,
  TrendingUp,
  Cpu,
  Radio,
  FileCheck2,
  MessageSquare,
  Sparkles,
  AlertTriangle,
  ChevronRight,
  ExternalLink,
  Printer,
  LogOut,
  UserCheck
} from "lucide-react";
import { AUTOMATIONS_ROADMAP } from "../data/products";

export default function CliniKOSAdmin({ tickets, onMoveTicket, userSession, onLogout }) {
  const [activeTab, setActiveTab] = useState("kanban"); // 'kanban' | 'automatizaciones' | 'qr'
  const [simulatedAlertSent, setSimulatedAlertSent] = useState(false);
  const [selectedTicketForQr, setSelectedTicketForQr] = useState(tickets[0] || null);

  const columns = [
    { id: "pending", title: "Pendiente de Calibración / Mantenimiento", count: tickets.filter((t) => t.status === "pending").length, color: "border-amber-400" },
    { id: "in-progress", title: "En Proceso Metrológico en Sitio", count: tickets.filter((t) => t.status === "in-progress").length, color: "border-teal-500" },
    { id: "certified", title: "Certificado Emitido & Calibrado", count: tickets.filter((t) => t.status === "certified").length, color: "border-emerald-500" }
  ];

  const handleSimulateAlert = () => {
    setSimulatedAlertSent(true);
    setTimeout(() => setSimulatedAlertSent(false), 5000);
  };

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full animate-in fade-in duration-300">
      
      {/* CABECERA DEL PANEL ADMINISTRATIVO */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>CliniK OS • Centro de Mando Biomédico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Panel de Gestión & Automatizaciones INVIMA
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Plataforma para directores de ingeniería clínica, trazabilidad metrológica (Res. 3100) y automatizaciones de servicio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {userSession && (
            <div className="flex items-center gap-2.5 p-2 px-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <div className="text-left">
                <span className="font-extrabold text-slate-900 dark:text-white block text-xs leading-tight">
                  {userSession.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {userSession.role}
                </span>
              </div>
            </div>
          )}

          {onLogout && (
            <button
              onClick={onLogout}
              className="p-2.5 px-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Cerrar sesión administrativa"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Cerrar Sesión</span>
            </button>
          )}
        </div>
      </div>

      {/* NAVEGACIÓN DE PESTAÑAS EN CLINIK OS */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold mb-8 w-fit">
          <button
            onClick={() => setActiveTab("kanban")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "kanban"
                ? "bg-[#00758D] text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Tablero Kanban
          </button>
          <button
            onClick={() => setActiveTab("automatizaciones")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "automatizaciones"
                ? "bg-[#00758D] text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6BCDB2]" />
            <span>Automatizaciones</span>
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "qr"
                ? "bg-[#00758D] text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <QrCode className="w-3.5 h-3.5 text-[#6BCDB2]" />
            <span>Generador QR</span>
          </button>
        </div>

      {/* METRICAS KPI CLAVE */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Equipos Activos en Red
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            148 <span className="text-xs font-sans text-emerald-600 font-bold">+12%</span>
          </div>
          <span className="text-[10px] text-slate-500">Con telemetría CliniK Connect</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Cumplimiento Res. 3100
          </span>
          <div className="text-2xl font-extrabold text-[#00758D] dark:text-[#6BCDB2] font-mono">
            99.2%
          </div>
          <span className="text-[10px] text-slate-500">Certificación metrológica al día</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Red de DEAs Ley 1831
          </span>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
            54 Unidades
          </div>
          <span className="text-[10px] text-emerald-600 font-semibold">100% Autotest Diario OK</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Tickets en Gestión
          </span>
          <div className="text-2xl font-extrabold text-amber-600 font-mono">
            {tickets.length} Tickets
          </div>
          <span className="text-[10px] text-slate-500">Flujo activo de mantenimiento</span>
        </div>
      </div>

      {/* ========================================================
          VISTA 1: TABLERO KANBAN DE CALIBRACIONES & MANTENIMIENTOS
         ======================================================== */}
      {activeTab === "kanban" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => {
            const colTickets = tickets.filter((t) => t.status === col.id);
            return (
              <div
                key={col.id}
                className="p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col"
              >
                <div className={`flex items-center justify-between pb-3 mb-4 border-b-2 ${col.color}`}>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs">
                    {col.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {colTickets.length}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  {colTickets.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-xs"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-[#00758D] dark:text-[#6BCDB2] text-[11px]">
                          {t.id}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {t.date}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                        {t.equipment}
                      </h4>
                      <p className="text-[11px] text-[#00758D] dark:text-[#6BCDB2] font-semibold mb-1">
                        {t.client}
                      </p>
                      <p className="text-[10px] text-slate-500 mb-3">
                        {t.location} • {t.serviceType}
                      </p>

                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[10px] space-y-1 mb-3">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Técnico Asignado:</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">{t.technician}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">INVIMA:</span>
                          <span className="font-mono text-slate-600 dark:text-slate-400">{t.invimaReg}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Batería:</span>
                          <span className="font-mono font-bold text-emerald-600">{t.batteryLevel}%</span>
                        </div>
                      </div>

                      {/* BOTONES DE AVANCE DE ESTADO */}
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        {t.status === "pending" && (
                          <button
                            onClick={() => onMoveTicket(t.id, "in-progress")}
                            className="w-full py-1.5 px-3 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] text-[11px] font-bold hover:bg-teal-100 transition-colors"
                          >
                            Iniciar Calibración →
                          </button>
                        )}
                        {t.status === "in-progress" && (
                          <button
                            onClick={() => onMoveTicket(t.id, "certified")}
                            className="w-full py-1.5 px-3 rounded-lg bg-[#69a53c] hover:bg-[#588d32] text-white text-[11px] font-bold transition-colors shadow-sm"
                          >
                            Emitir Certificado QR ✓
                          </button>
                        )}
                        {t.status === "certified" && (
                          <div className="w-full py-1 text-center text-emerald-600 font-bold text-[10px] flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Protocolo Metrológico Firmado</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================
          VISTA 2: CENTRO DE AUTOMATIZACIONES (ROADMAP DIGITAL)
         ======================================================== */}
      {activeTab === "automatizaciones" && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Motor de Alertas Preventivas Predictivas (WhatsApp & Email)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Automatiza el ciclo post-venta cada 6 y 12 meses para evitar que las IPS y empresas incumplan la habilitación de MinSalud.
                </p>
              </div>

              <button
                onClick={handleSimulateAlert}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#69a53c] hover:bg-[#588d32] text-white text-xs font-bold shadow-md transition-all cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Simular Disparo de Alerta</span>
              </button>
            </div>

            {/* FEEDBACK DE SIMULACIÓN */}
            {simulatedAlertSent && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Alerta Programada Ejecutada con Éxito</strong>
                  <p className="mt-1">
                    Se envió notificación vía API WhatsApp a <em>Directora de Compras — Universidad Pontificia Bolivariana (UPB)</em>:
                  </p>
                  <blockquote className="mt-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 font-mono text-[11px]">
                    "Estimada UPB, su DEA Mindray BeneHeart C1A (Serie #CK-UPB-202) cumple 11 meses de servicio el 15 de Noviembre. Su calibración metrológica según Resolución 3100 de 2019 ha sido pre-agendada con el Ing. Biomédico Carlos Restrepo para mantener su certificación activa."
                  </blockquote>
                </div>
              </div>
            )}

            {/* TABLA DE DISPARADORES AUTOMATIZADOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AUTOMATIONS_ROADMAP[0].intervals.map((inter, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[10px] font-bold text-[#00758D] dark:text-[#6BCDB2] uppercase block mb-1">
                    Disparador {i + 1}
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white text-xs mb-1">
                    {inter.trigger}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-2">
                    {inter.action}
                  </p>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Canal: {inter.channel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROADMAP ADICIONAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#00758D] dark:text-[#6BCDB2]" />
                <span>Hojas de Vida con Código QR Res. 3100</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                El sistema genera automáticamente el código QR adhesivo para cada equipo dotado. Inspectores de la Secretaría de Salud escanean el QR en sitio y verifican la declaración de importación, el registro INVIMA y el cronograma de calibración.
              </p>
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-[11px] text-[#00758D] dark:text-[#6BCDB2] font-semibold">
                ✓ 100% Reducción de carpetas físicas y cero pérdidas documentales
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#69a53c]" />
                <span>Asistente Virtual Biomédico & Triage Comercial</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Chatbot de IA especializado en la Ley 1831 y Res. 3100. Guía a directores médicos, comités de compras y bomberos en el dimensionamiento exacto de equipos (TAB vs TAM, cantidad de DEAs requeridos por aforo) y pre-genera la cotización institucional en segundos.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold">
                ✓ Agiliza la tasa de conversión B2B y cualifica clientes 24/7
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          VISTA 3: GENERADOR DE CÓDIGO QR PARA HOJA DE VIDA
         ======================================================== */}
      {activeTab === "qr" && (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm animate-in fade-in duration-200 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Generador de Sticker Metrológico con Código QR Dinámico
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Seleccione un equipo para generar la etiqueta digital oficial conforme a la Resolución 3100 de 2019.
            </p>
          </div>

          {/* SELECTOR DE EQUIPO */}
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
              Seleccionar Equipo Activo:
            </label>
            <select
              value={selectedTicketForQr?.id || ""}
              onChange={(e) => {
                const found = tickets.find((t) => t.id === e.target.value);
                setSelectedTicketForQr(found || null);
              }}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
            >
              {tickets.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.id} — {t.equipment} ({t.client})
                </option>
              ))}
            </select>
          </div>

          {/* VISTA PREVIA DEL STICKER QR DE HABILITACIÓN */}
          {selectedTicketForQr && (
            <div className="p-6 rounded-2xl border-2 border-dashed border-[#00758D] dark:border-[#6BCDB2] bg-slate-50/50 dark:bg-slate-800/40 flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-200 shrink-0 flex flex-col items-center">
                <QrCode className="w-28 h-28 text-[#00758D]" />
                <span className="text-[9px] font-mono font-bold text-slate-400 mt-1">
                  ID: {selectedTicketForQr.id}
                </span>
              </div>

              <div className="flex-1 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#00758D] dark:text-[#6BCDB2] text-sm">
                    CLINIK SOLUCIONES COLOMBIA
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    CERTIFICADO VIGENTE
                  </span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  {selectedTicketForQr.equipment}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Entidad:</strong> {selectedTicketForQr.client}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Ubicación:</strong> {selectedTicketForQr.location}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Registro INVIMA:</strong> {selectedTicketForQr.invimaReg}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Responsable Técnico:</strong> {selectedTicketForQr.technician}
                </p>
                <div className="pt-2 text-[10px] text-slate-400">
                  Válido para auditorías de Habilitación en Salud • Secretaría de Salud
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={() => alert("Comando de impresión térmica de etiqueta QR enviado.")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00758D] hover:bg-[#005063] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir Etiqueta Metrológica</span>
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
