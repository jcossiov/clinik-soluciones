// =========================================================================
// [DATA-v2.1] — MÓDULO DE AMBULANCIAS TAB & TAM (RESOLUCIÓN 3100 DE 2019)
// Contiene el listado literal de la Resolución 3100 de 2019 (Págs. 219-221)
// adjunto en AJUSTES PAG CLINIK.docx + Doble modalidad (Con Vehículo vs Solo Dotación)
// =========================================================================

export const AMBULANCE_OUTFITTING = {
  title: "Dotación Integral de Ambulancias TAB & TAM",
  tagline: "Cumplimiento estricto del Estándar de Dotación de la Resolución 3100 de 2019 (MinSalud).",
  desc: "Cotiza de forma diferenciada la adquisición de la Ambulancia Completa (Vehículo + Dotación) o exclusivamente el paquete/equipos de Dotación Biomédica para Transporte Asistencial Básico (TAB) y Medicalizado (TAM).",
  modalities: [
    {
      tipo: "TAB",
      nombre: "Transporte Asistencial Básico (TAB)",
      complejidad: "Complejidad Baja • Criterio 31 (Resolución 3100 de 2019)",
      enfoque:
        "Modalidades extramural y telemedicina — prestador remisor. Para las ambulancias terrestres, fluviales y marítimas que cumplen con los criterios definidos para todos los servicios y adicionalmente cuentan con:",
      norma: "Resolución 3100 de 2019 • Criterio 31 (31.1 a 31.25)",
      equiposClave: [
        "31.1. Desfibrilador externo automático (DEA), incluyendo electrodos adhesivos para adultos y pediátricos, con fecha de vencimiento vigente.",
        "31.2. Fonendoscopio adulto y pediátrico.",
        "31.3. Tensiómetro adulto y pediátrico.",
        "31.4. Equipo eléctrico de aspiración de urgencia con todos sus accesorios (manguera de succión y sondas de aspiración de varios tamaños).",
        "31.5. Aspirador nasal manual.",
        "31.6. Glucómetro.",
        "31.7. Torniquetes para el control de hemorragias.",
        "31.8. Camilla principal con sistema de anclaje y cinturones de seguridad o correas para asegurar el paciente.",
        "31.9. Camilla secundaria para inmovilización espinal y correas para asegurar el paciente.",
        "31.10. Tabla espinal corta o chaleco de extracción vehicular.",
        "31.11. Atril portasuero de dos ganchos.",
        "31.12. Silla de ruedas portátil, liviana y plegable, con capacidad de carga de mínimo 120 kg y mínimo dos cinturones de sujeción.",
        "31.13. Pinzas de Magill.",
        "31.14. Tijeras de material o cortatodo.",
        "31.15. Riñonera.",
        "31.16. Pato para mujeres.",
        "31.17. Pato para hombres.",
        "31.18. Lámpara de mano (linterna) con baterías de repuesto.",
        "31.19. Manta térmica aluminizada.",
        "31.20. Oxígeno medicinal con capacidad total de almacenamiento de mínimo tres (3) metros cúbicos permanentes disponibles.",
        "31.21. Oxígeno medicinal portátil de mínimo 0.5 metros cúbicos para permitir el desplazamiento de las camillas manteniendo el suministro.",
        "31.22. Conjunto para inmovilización: inmovilizadores cervicales graduables adulto (2) y pediátrico (2), inmovilizadores laterales de cabeza y para extremidades superiores e inferiores.",
        "31.23. Resucitador pulmonar manual.",
        "31.24. Sistema de fijación específico al vehículo para los equipos biomédicos sin detrimento de su operación.",
        "31.25. Monitor de signos vitales con accesorios adultos y pediátricos que cuenta como mínimo con: (31.25.1) Trazado electrocardiográfico si no está incorporado en el desfibrilador, (31.25.2) Presión no invasiva y (31.25.3) Saturación de oxígeno integrada o externa."
      ]
    },
    {
      tipo: "TAM",
      nombre: "Transporte Asistencial Medicalizado (TAM)",
      complejidad: "Complejidad Mediana • Criterios 32, 33 y 34 (Resolución 3100 de 2019)",
      enfoque:
        "Cumple con todos los criterios definidos para la baja complejidad (TAB) y adicionalmente cuenta con el equipamiento biomédico de soporte vital avanzado exigido por la Resolución 3100 de 2019:",
      norma: "Resolución 3100 de 2019 • Criterios 32, 33 y 34",
      equiposClave: [
        "32.0. Incluye la totalidad de la dotación exigida para Baja Complejidad (TAB - Numerales 31.2 a 31.25).",
        "32.1. Desfibrilador bifásico con capacidad de realizar cardioversión sincrónica y marcapasos transcutáneo, baterías mínimas para 4 horas con paletas (adulto y pediátrico). Reemplaza el DEA de baja complejidad.",
        "32.2. Ventilador para traslado (adulto y pediátrico) con: (32.2.1) Dos modos de volumen y modos de presión, (32.2.2) Batería mínimo para 4 horas, (32.2.3) FiO2, (32.2.4) Indicación de volumen corriente y minuto.",
        "32.2 (Cont.). Ventilador con: (32.2.5) Indicación de presión máxima y plateau, (32.2.6) PEEP y frecuencia respiratoria máxima, (32.2.7) Alarmas auditivas/visuales de presión, volumen, apnea, aire, O2 y batería baja.",
        "32.2 (Cont.). Ventilador con: (32.2.8) Conexión rápida a oxígeno medicinal y aire medicinal (o turbina integrada al equipo) y (32.2.9) Modos de control, asistido/control y CPAP.",
        "32.3. Equipo de órganos de los sentidos, con baterías de repuesto.",
        "32.4. Dos bombas de infusión o una con dos canales, con batería mínimo para 4 horas.",
        "32.5. Medidor de pico flujo.",
        "32.6. Laringoscopio con hojas rectas y curvas neonatales, pediátricas y adulto.",
        "33.1 (Traslado Neonatal). Incubadora pediátrica / neonatal portátil.",
        "33.2 (Traslado Neonatal). Ventilador mecánico neonatal con control de flujo y tiempo inspiratorio.",
        "34 (Ambulancias Aéreas). Capacidad extendida de O2 medicinal para contingencias, camilla asegurada a la estructura de la aeronave y equipos biomédicos con certificados EMI (interferencia electromagnética) y RFI (radiofrecuencia)."
      ]
    }
  ],
  quoteOptions: [
    {
      id: "solo-dotacion",
      title: "Opción 1: Cotizar Solo la Dotación Biomédica",
      subtitle: "Para instituciones que ya cuentan con el vehículo",
      desc: "Suministro completo o por ítem de los equipos biomédicos, inmovilización y rescate exigidos por la Resolución 3100 de 2019 para ambulancia Básica (TAB) o Medicalizada (TAM), con garantía de 12 meses y registro INVIMA."
    },
    {
      id: "vehiculo-completo",
      title: "Opción 2: Cotizar Ambulancia Completa (Con Vehículo)",
      subtitle: "Vehículo carrozado homologado + Dotación Res. 3100",
      desc: "Adquisición integral de la ambulancia completa incluyendo el vehículo carrozado bajo norma técnica junto con todo el equipamiento biomédico TAB o TAM instalado y calibrado."
    }
  ],
  ventajas: [
    {
      title: "Modalidad 100% Flexible",
      desc: "Cotiza únicamente los equipos de dotación que te hagan falta o solicita la ambulancia completa con vehículo incluido."
    },
    {
      title: "Fidelidad Resolución 3100",
      desc: "Cada ítem suministrado responde punto por punto a los numerales 31, 32, 33 y 34 del Manual de Habilitación."
    },
    {
      title: "Garantía Fija de 12 Meses",
      desc: "Todos los equipos biomédicos de transporte cuentan con 12 meses de garantía directa y registro sanitario INVIMA."
    },
    {
      title: "Metrología y Soporte",
      desc: "Entrega con certificado de calibración metrológica inicial y soporte técnico especializado a nivel nacional."
    }
  ]
};
