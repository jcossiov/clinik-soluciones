// =========================================================================
// CLINIK SOLUCIONES COLOMBIA S.A.S. — ORQUESTADOR MODULAR DE DATOS Y CONTENIDO
// Arquitectura Modular Versionada: COPY-v2.2 | DATA-v2.1 | UI-AWWWARDS-v2.3
// Tel: +57 300 251 1990 | ventas@cliniksoluciones.com
// =========================================================================

export { VERSION_REGISTRY } from "./versionRegistry";
export { COMPANY_INFO, HERO_COPY, SPECIAL_REQUEST_BANNER } from "./siteCopy";
export { CARDIOPROTEGIDOS_DETAILS } from "./cardioproteccionData";
export { AMBULANCE_OUTFITTING } from "./ambulanciasData";
export { CLINIK_SERVICES } from "./serviciosData";
export {
  CATEGORIES,
  CLINIK_PRODUCTS,
  RESCATE_CATEGORIES,
  RESCATE_PRODUCTS,
  ACCESSORIES_CATEGORIES,
  ACCESSORIES_CATALOG,
  SIMULATION_CATEGORIES,
  SIMULATION_PRODUCTS
} from "./catalogData";

// =========================================================================
// 1. MARCAS MÉDICAS Y ALIADOS GLOBALES
// =========================================================================
export const PARTNER_BRANDS = [
  { name: "Mindray Medical", origin: "Líder Global en Desfibriladores, DEAs C1A/C2 y Anestesia", logoText: "MINDRAY" },
  { name: "EDAN Instruments", origin: "Líder en Monitoreo Multiparámetro, Ecografía y ECG", logoText: "EDAN" },
  { name: "Medcaptain Medical", origin: "Sistemas de Infusión Continua HP-60 y UCI", logoText: "MEDCAPTAIN" },
  { name: "AMOUL Medical", origin: "Desfibriladores i7 Plus, i2 y Ventilación Pulmonar", logoText: "AMOUL" },
  { name: "Primedic Medical", origin: "Ingeniería Alemana en Desfibrilación HeartSave YA", logoText: "PRIMEDIC" },
  { name: "NASCO Healthcare", origin: "Simulación Clínica Avanzada y Entrenadores Médicos", logoText: "NASCO" },
  { name: "Ningbo David", origin: "Incubadoras Neonatales Estacionarias y de Transporte", logoText: "NINGBO DAVID" },
  { name: "Welch Allyn / Riester", origin: "Diagnóstico Clínico, Órganos de los Sentidos y Tensiometría", logoText: "WELCH ALLYN" }
];

// =========================================================================
// 2. CLIENTES REALES VERIFICADOS (INSTITUCIONES Y CORPORACIONES)
// =========================================================================
export const HOSPITAL_CLIENTS = [
  {
    category: "Grandes Corporaciones y Espacios Cardioprotegidos",
    clients: [
      { name: "COCA COLA FEMSA", badge: "Industria de Bebidas" },
      { name: "POSTOBÓN S.A.", badge: "Planta Industrial y Sedes" },
      { name: "GRUPO NUTRESA", badge: "Multinacional de Alimentos" },
      { name: "UNIVERSIDAD UPB", badge: "Campus Cardioprotegido" },
      { name: "CENTRO COMERCIAL OVIEDO", badge: "Gran Superficie El Poblado" },
      { name: "COLEGIO THE COLUMBUS SCHOOL", badge: "Educación Internacional" },
      { name: "METROPARQUES", badge: "Parques Recreativos Medellín" },
      { name: "UNIVERSIDAD NACIONAL DE COLOMBIA", badge: "Educación Superior" },
      { name: "Argos S.A.", badge: "Industria Cementera" },
      { name: "Fábrica de Licores de Antioquia (FLA)", badge: "Empresa Departamental" },
      { name: "Colcafé / Zenú / Noel", badge: "Producción Alimentaria" },
      { name: "Grupo Familia (Essity)", badge: "Cuidado Personal" },
      { name: "Colanta", badge: "Sector Lácteo Nacional" }
    ]
  },
  {
    category: "Sector Salud y Hospitalario",
    clients: [
      { name: "Metrosalud E.S.E.", badge: "Red Pública Hospitalaria" },
      { name: "Cedimed Diagnóstico Médico", badge: "Imágenes y Diagnóstico" },
      { name: "Clínica Soma", badge: "Clínica de Alta Complejidad" },
      { name: "Clínica Panamericana Urabá", badge: "Especialidades Médicas" },
      { name: "Auna Salud", badge: "Red Asistencial Integral" },
      { name: "Respirar IPS", badge: "Cuidado Respiratorio" },
      { name: "Mebi Diagnóstico", badge: "Medicina Especializada" },
      { name: "CEM Salud", badge: "Centros Médicos Especializados" }
    ]
  },
  {
    category: "Organismos de Socorro y Ambulancias TAB/TAM",
    clients: [
      { name: "Cuerpo de Bomberos Voluntarios Sabaneta", badge: "Atención Prehospitalaria" },
      { name: "Cuerpo de Bomberos Voluntarios La Estrella", badge: "Rescate y Atención" },
      { name: "Cuerpo de Bomberos Itagüí", badge: "Respuesta a Emergencias" },
      { name: "Cuerpo de Bomberos Envigado", badge: "Protección Ciudadana" },
      { name: "Cuerpo de Bomberos Rionegro", badge: "Emergencias Oriente" },
      { name: "ESPADES Gestión del Riesgo", badge: "Gestión de Desastres" }
    ]
  },
  {
    category: "Educación, Centros Comerciales y Turismo",
    clients: [
      { name: "Universidad CES", badge: "Facultad de Medicina" },
      { name: "SENA Regional Antioquia", badge: "Formación Técnica" },
      { name: "Universidad Católica Luis Amigó", badge: "Sedes Nacionales" },
      { name: "Plaza Mayor Medellín", badge: "Centro de Convenciones" },
      { name: "Centro Comercial Santafé Medellín", badge: "Gran Superficie" },
      { name: "Centro Comercial San Diego / Los Molinos", badge: "Centros Comerciales" },
      { name: "Parque Explora", badge: "Museo de Ciencias" },
      { name: "Hoteles Holiday Inn / Poblado Coveñas", badge: "Sector Hotelero" }
    ]
  }
];

// =========================================================================
// 3. AUTOMATIZACIONES Y ROADMAP DIGITAL PARA CLINIK OS
// =========================================================================
export const AUTOMATIONS_ROADMAP = [
  {
    id: "auto-alerts",
    title: "Motor de Alertas Preventivas Predictivas",
    desc: "Notificaciones automáticas programadas por WhatsApp y correo electrónico a los directores médicos y biomédicos antes de cualquier vencimiento normativo.",
    intervals: [
      { trigger: "Cada 6 meses", action: "Aviso de Mantenimiento Preventivo Semestral", channel: "WhatsApp + Email" },
      { trigger: "Cada 12 meses", action: "Aviso de Calibración Metrológica Res. 3100", channel: "WhatsApp + Email" },
      { trigger: "A partir de 24 meses", action: "Revisión de caducidad de Electrodos / Parches DEA", channel: "WhatsApp Bot" },
      { trigger: "A partir de 48 meses", action: "Revisión de reemplazo de Batería de Litio DEA", channel: "Email + Asesor" }
    ],
    status: "Activo en Simulación"
  },
  {
    id: "auto-qr",
    title: "Generador de Hojas de Vida con Código QR Dinámico",
    desc: "Cada equipo intervenido por CliniK Soluciones cuenta con un código QR adherido al chasís. Los inspectores verifican al instante el registro INVIMA, protocolos de calibración, certificados de seguridad eléctrica y cronograma de mantenimiento.",
    status: "Operativo en CliniK OS"
  },
  {
    id: "auto-ai",
    title: "Asistente Virtual Biomédico y Triage Comercial",
    desc: "Asistente entrenado en la Resolución 3100 de 2019 y Resolución 3316 de 2019 que clasifica las necesidades de la institución (IPS, Colegio, Empresa, Ambulancia) y genera un pre-dimensionamiento de equipamiento con cotización en tiempo real.",
    status: "En Proceso de Despliegue"
  }
];

// =========================================================================
// 4. TICKETS KANBAN INICIALES PARA EL PANEL DE CLINIK OS
// =========================================================================
export const INITIAL_KANBAN_TICKETS = [
  {
    id: "TCK-801",
    equipment: "DEA Mindray BeneHeart C1A (Espacio Cardioprotegido)",
    client: "UNIVERSIDAD UPB — Campus Laureles",
    location: "Campus Central, Bloque 7",
    serviceType: "Calibración Anual Metrológica (Res. 3100 / Res. 3316)",
    status: "certified",
    date: "2026-10-22",
    technician: "Ing. Biomédico Carlos Mario Restrepo",
    invimaReg: "2020EBC-0021540",
    batteryLevel: 98,
    progress: 100
  },
  {
    id: "TCK-802",
    equipment: "DEA Mindray BeneHeart C2 (Pantalla Color)",
    client: "COCA COLA FEMSA — Planta Medellín",
    location: "Planta de Producción y Logística",
    serviceType: "Mantenimiento Preventivo Semestral",
    status: "in-progress",
    date: "2026-10-23",
    technician: "Ing. Biomédica Laura Gómez",
    invimaReg: "2020EBC-0021540",
    batteryLevel: 96,
    progress: 70
  },
  {
    id: "TCK-803",
    equipment: "Dotación Biomédica Ambulancia TAM (Res. 3100)",
    client: "Cuerpo de Bomberos Voluntarios Sabaneta",
    location: "Estación Central Sabaneta",
    serviceType: "Verificación Criterios 32, 33 y 34 Res. 3100",
    status: "in-progress",
    date: "2026-10-23",
    technician: "Ing. Biomédico Santiago Vélez",
    invimaReg: "Múltiples registros INVIMA vigentes",
    batteryLevel: 100,
    progress: 80
  },
  {
    id: "TCK-804",
    equipment: "Bomba de Infusión Táctil Medcaptain HP-60",
    client: "Clínica Soma Medellín",
    location: "UCI Adultos Cama 14",
    serviceType: "Mantenimiento Preventivo y Calibración de Flujo",
    status: "pending",
    date: "2026-10-24",
    technician: "Ing. Biomédico Carlos Restrepo",
    invimaReg: "2019EBC-0019482",
    batteryLevel: 92,
    progress: 20
  },
  {
    id: "TCK-805",
    equipment: "DEA Primedic HeartSave YA (Espacio Cardioprotegido)",
    client: "POSTOBÓN S.A. — Centro Operativo",
    location: "Bloque Administrativo Principal",
    serviceType: "Verificación de Electrodos y Capacitación BLS",
    status: "pending",
    date: "2026-10-25",
    technician: "Especialista Biomédico CliniK",
    invimaReg: "2021EBC-0023810",
    batteryLevel: 99,
    progress: 0
  }
];
