// =========================================================================
// [DATA-v2.1] — MÓDULO DE SERVICIOS & METROLOGÍA (4 SUBCATEGORÍAS OFICIALES)
// Simplificado según acuerdo en reunión [00:41:30 - 00:43:42]:
// 1. Mantenimiento Preventivo | 2. Mantenimiento Correctivo | 3. Calibración | 4. Capacitación BLS
// =========================================================================

export const CLINIK_SERVICES = [
  {
    id: "mantenimiento-preventivo",
    title: "1. Mantenimiento Preventivo de Equipo Médico",
    categoryTag: "Preventivo Programado",
    tagline: "Visitas programadas recomendadas cada 6 meses para continuidad operativa y cumplimiento Res. 3100.",
    desc: "Ejecución de protocolos preventivos por ingenieros biomédicos especializados: limpieza interna y externa, ajustes mecánicos, verificación funcional, pruebas de seguridad eléctrica y actualización de Hojas de Vida del equipamiento.",
    icon: "Wrench",
    requiresEquipmentList: true,
    ctaLabel: "Solicitar Cotización de Mantenimiento Preventivo",
    highlights: [
      "Frecuencia recomendada: cada 6 meses según cronograma institucional",
      "Inspección física, funcional y pruebas de seguridad eléctrica IEC 60601",
      "Entrega de reporte técnico individual y hoja de vida actualizada",
      "Envíanos tu listado de equipos (nombre, marca/modelo y cantidad) para cotizar"
    ]
  },
  {
    id: "mantenimiento-correctivo",
    title: "2. Mantenimiento Correctivo Especializado",
    categoryTag: "Diagnóstico & Reparación",
    tagline: "Diagnóstico electrónico avanzado y reparación con repuestos originales garantizados.",
    desc: "Intervención técnica oportuna para equipos biomédicos fuera de servicio o con fallas operativas. Contamos con laboratorio de ingeniería biomédica en Sabaneta y suministro directo de tarjetas, sensores, baterías y repuestos.",
    icon: "Activity",
    requiresEquipmentList: true,
    ctaLabel: "Solicitar Diagnóstico / Mantenimiento Correctivo",
    highlights: [
      "Atención prioritaria para equipos críticos de urgencias, cirugía y hospitalización",
      "Diagnóstico técnico detallado con cotización previa de repuestos",
      "Pruebas de verificación funcional post-reparación antes de entrega",
      "Soporte multimarca para monitores, desfibriladores, bombas, ventiladores y más"
    ]
  },
  {
    id: "calibracion-metrologia",
    title: "3. Calibración y Metrología Biomédica",
    categoryTag: "Trazabilidad & Res. 3100",
    tagline: "Verificación metrológica anual con patrones trazables y certificados oficiales.",
    desc: "Calibración y comprobación metrológica de equipos médicos conforme a los lineamientos de la Resolución 3100 de 2019. Emitimos certificados individuales con trazabilidad y estampilla de verificación para auditorías de Secretarías de Salud.",
    icon: "BadgeCheck",
    requiresEquipmentList: true,
    ctaLabel: "Solicitar Cotización de Calibración",
    highlights: [
      "Frecuencia recomendada: cada 12 meses para cumplimiento de habilitación",
      "Analizadores y simuladores patrones con trazabilidad certificada",
      "Certificado metrológico individual y sticker de control en cada equipo",
      "Cotización ágil por lote de equipos médicos de tu institución"
    ]
  },
  {
    id: "capacitacion-bls",
    title: "4. Capacitación (Soporte Vital Básico & Uso de DEA)",
    categoryTag: "Formación Certificada",
    tagline: "Entrenamiento teórico-práctico en Soporte Vital Básico (BLS), RCP y manejo de equipos.",
    desc: "Capacitación presencial y práctica dirigida a brigadas de emergencia, primeros respondientes y personal asistencial en reanimación cardiopulmonar (RCP), operación segura del Desfibrilador Externo Automático (DEA) e inducción técnica de equipos biomédicos.",
    icon: "GraduationCap",
    requiresEquipmentList: false,
    ctaLabel: "Solicitar Cotización de Capacitación BLS",
    highlights: [
      "Prácticas reales con simuladores de RCP y DEAs de entrenamiento",
      "Certificado de asistencia y aprobación para cada participante",
      "Alineado con los requisitos de formación de la Resolución 3316 de 2019",
      "Grupos empresariales, colegios, universidades, hoteles e instituciones de salud"
    ]
  }
];
