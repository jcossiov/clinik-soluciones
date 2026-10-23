import React from "react";
import {
  Activity,
  HeartPulse,
  Radio,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function TelemetriaSection() {
  return (
    <section id="telemetria" className="py-20 bg-white dark:bg-[#0b1320] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#00758D] dark:text-[#6BCDB2] border border-teal-200 dark:border-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#00758D] dark:text-[#6BCDB2]" />
              <span>CliniK Connect • Ecosistema IoT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Centro de Monitoreo & Telemetría Hospitalaria
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
              Supervisión en tiempo real del estado de baterías, autodiagnósticos de DEAs, curvas ventilatorias y trazabilidad metrológica para garantizar el 99.9% de disponibilidad operativa.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-bold shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>48 Equipos Conectados en Red</span>
          </div>
        </div>

        {/* ========================================================
            LAS 4 ESTACIONES INDEPENDIENTES DE TELEMETRÍA (DISEÑO ESPACIOSO)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* TARJETA 1: VENTILACIÓN PULMONAR UCI */}
          <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Estación UCI Adulto
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-100 dark:bg-teal-950/80 text-[#00758D] dark:text-[#6BCDB2]">
                  SIMV-PC
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Ventilador Pulmonar
              </h3>
              <p className="text-xs text-slate-500 mb-4">Cama 04 • Cuidado Intensivo</p>
              
              <div className="space-y-2.5 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Volumen Corriente:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">480 mL</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Presión PEEP:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">8 cmH2O</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">FiO2 Suministrada:</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">45%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Frecuencia Total:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">16 rpm</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Turbina Activa</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Uptime 99.9%</span>
            </div>
          </div>

          {/* TARJETA 2: QUIRÓFANO Y MONITOREO ECG */}
          <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Quirófano Quirúrgico
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  Estable
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Monitor Multiparámetro
              </h3>
              <p className="text-xs text-slate-500 mb-4">Quirófano 02 • Cirugía General</p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">72</span>
                <span className="text-xs text-slate-500">LPM Ritmo Sinusal</span>
              </div>

              <div className="space-y-2 mb-6 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">SpO2 Masimo:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Presión No Invasiva:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">120 / 80 mmHg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Capnografía EtCO2:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">38 mmHg</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Canales ECG</span>
              <span className="text-[#00758D] dark:text-[#6BCDB2] font-bold">12 Derivaciones</span>
            </div>
          </div>

          {/* TARJETA 3: RED DE DEAS LEY 1831 */}
          <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                  Espacio Cardioprotegido
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                  Ley 1831
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Red de DEAs CliniKey
              </h3>
              <p className="text-xs text-slate-500 mb-4">Centros Comerciales & Universidades</p>

              <div className="space-y-2.5 mb-6 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Estado Autodiagnóstico:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> OK Diario
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Nivel Batería Standby:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">98% (Litio 4 años)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Caducidad Parches:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">22 meses restantes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Estado Gabinete:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">Cerrado / Listo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Sensor de Apertura</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Alarma Armada</span>
            </div>
          </div>

          {/* TARJETA 4: TRAZABILIDAD QR & METROLOGÍA RES. 3100 */}
          <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-tilt flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Habilitación en Salud
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-100 dark:bg-teal-950/80 text-[#00758D] dark:text-[#6BCDB2]">
                  Res. 3100
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Trazabilidad Metrológica
              </h3>
              <p className="text-xs text-slate-500 mb-4">Hoja de Vida QR en Chasís</p>

              <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 mb-4">
                <QrCode className="w-10 h-10 text-[#00758D] dark:text-[#6BCDB2] shrink-0" />
                <div className="text-[11px]">
                  <strong className="block text-slate-900 dark:text-white">Escaneo en Sitio</strong>
                  <span className="text-slate-500">Auditores de Secretaría de Salud</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <span>Patrón Calibración:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">NTC-ISO 17025</span>
                </div>
                <div className="flex justify-between">
                  <span>Seguridad Eléctrica:</span>
                  <span className="font-mono font-bold text-emerald-600">IEC 60601 OK</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Sticker Digital</span>
              <span className="text-[#00758D] dark:text-[#6BCDB2] font-bold">Certificado Vigente</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
