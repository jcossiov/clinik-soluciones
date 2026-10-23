import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Mail,
  Key,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowLeft
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CliniKLogin({ onLoginSuccess, onCancel }) {
  const [email, setEmail] = useState("ingenieria@cliniksoluciones.com");
  const [password, setPassword] = useState("clinik2026");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      // Demo validation: any email with @ and non-empty password
      if (email.includes("@") && password.length >= 4) {
        setIsLoading(false);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
        onLoginSuccess({
          name: "Ing. Jesús Cossio",
          role: "Director de Ingeniería Biomédica",
          email: email,
          id: "ENG-COL-901"
        });
      } else {
        setIsLoading(false);
        setError("Credenciales no válidas. Ingrese un correo corporativo y contraseña.");
      }
    }, 400);
  };

  const handleQuickDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      onLoginSuccess({
        name: "Ing. Jesús Cossio",
        role: "Director de Ingeniería Biomédica",
        email: "ingenieria@cliniksoluciones.com",
        id: "ENG-COL-901"
      });
    }, 200);
  };

  return (
    <div className="w-full max-w-md mx-auto py-12 px-4 animate-in fade-in duration-300">
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl p-7 sm:p-9 relative overflow-hidden">
        {/* RESPLANDOR AMBIENTAL */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* CABECERA */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <img
              src="./images/clinik-logo-original.png"
              alt="Clinik Soluciones"
              className="h-12 sm:h-14 w-auto max-w-[200px] object-contain dark:brightness-110"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500 font-semibold mb-2">
            <Lock className="w-3 h-3 text-[#00758D] dark:text-[#6BCDB2]" />
            <span>ÁREA ADMINISTRATIVA RESTRINGIDA</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Acceso a CliniK OS
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Plataforma de Operaciones, Trazabilidad Metrológica e Hojas de Vida Res. 3100
          </p>
        </div>

        {/* MENSAJE DE ERROR SI APLICA */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 flex items-center gap-2 text-rose-700 dark:text-rose-300 text-xs mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Correo Institucional
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@cliniksoluciones.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00758D]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Contraseña de Acceso
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00758D]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#00758D] hover:bg-[#005063] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <span>Validando Credenciales...</span>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>Ingresar al Sistema de Control</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* ACCESO RÁPIDO DEMOSTRACIÓN */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block mb-2 uppercase font-bold tracking-wider">
            ¿Revisando la plataforma?
          </span>
          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ingreso Demo (Ingeniero Biomédico)</span>
          </button>
        </div>

        {/* CANCELAR Y REGRESAR */}
        {onCancel && (
          <div className="mt-4 text-center">
            <button
              onClick={onCancel}
              className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center gap-1 mx-auto cursor-pointer font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al Portal Comercial</span>
            </button>
          </div>
        )}

        {/* SELLO DE SEGURIDAD */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Acceso cifrado • Trazabilidad NTC-ISO 17025</span>
        </div>
      </div>
    </div>
  );
}
