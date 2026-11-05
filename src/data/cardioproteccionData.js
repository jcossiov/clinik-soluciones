// =========================================================================
// [DATA-v2.1] & [COPY-v2.2] — MÓDULO DE CARDIOPROTECCIÓN (RES. 3316 DE 2019)
// Incluye: 4 Paquetes con DEA + 1 Paquete Sin DEA + 5 Componentes + 8 Clientes Top
// =========================================================================

const PAQUETES_DATA = [
  {
    id: "pkg-mindray-c1",
    model: "Mindray C1 (BeneHeart C1A)",
    modelName: "Mindray C1 (BeneHeart C1A)",
    name: "Paquete Espacio Cardioprotegido — DEA Mindray C1",
    packageTitle: "Paquete Espacio Cardioprotegido — DEA Mindray C1",
    brand: "Mindray Medical",
    sku: "PKG-3316-MINDRAY-C1",
    image: "./images/products/dea-mindray-c1a.jpg",
    invimaReg: "2020EBC-0021540",
    warranty: "12 Meses",
    badge: "QShock™ <8s",
    includesDea: true,
    chips: ["Bifásico 360J", "Garantía 12M"],
    highlights: ["Bifásico 360J", "QShock™ <8s", "Garantía 12M"],
    includedItems: [
      "DEA Mindray BeneHeart C1A Bifásico hasta 360J (Garantía 12 meses)",
      "Gabinete mural normalizado con alarma sonora 100dB y luz estroboscópica",
      "Kit de bioseguridad y RCP rápida (máscara RCP, tijeras trauma, rasuradora, guantes)",
      "Señalética institucional personalizada en español con logo de la entidad",
      "Capacitación certificada en Soporte Vital Básico (BLS) e instalación física"
    ],
    shortDesc:
      "Implementación completa Res. 3316 de 2019 con DEA Mindray C1 bifásico hasta 360J, tecnología ResQNavi™ con guía adaptativa en español y selector rápido Adulto/Pediátrico.",
    specs: [
      { label: "Modelo de DEA Incluido", value: "Mindray BeneHeart C1A (C1) Bifásico hasta 360 Joules" },
      { label: "Velocidad de Primera Descarga", value: "Tecnología QShock™ en menos de 8 segundos" },
      { label: "Modo Pediátrico", value: "Conmutador físico directo Adulto/Niño con electrodos pre-conectados" },
      { label: "Protección y Robustez", value: "Grado IP55 contra agua/polvo y resistencia a caídas de 1.5 m" },
      { label: "Elementos del Paquete", value: "DEA Mindray C1 + Gabinete con alarma + Kit Bioseguridad + Señalética personalizada + Capacitación BLS + Instalación" },
      { label: "Garantía Comercial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "pkg-mindray-c2",
    model: "Mindray C2 (BeneHeart C2)",
    modelName: "Mindray C2 (BeneHeart C2)",
    name: "Paquete Espacio Cardioprotegido — DEA Mindray C2",
    packageTitle: "Paquete Espacio Cardioprotegido — DEA Mindray C2",
    brand: "Mindray Medical",
    sku: "PKG-3316-MINDRAY-C2",
    image: "./images/products/dea-mindray-c2.png",
    invimaReg: "2020EBC-0021540",
    warranty: "12 Meses",
    badge: "Pantalla Color 7\"",
    includesDea: true,
    chips: ["Pantalla 7\" HD", "Garantía 12M"],
    highlights: ["Pantalla Color 7\"", "Bifásico 360J", "Garantía 12M"],
    includedItems: [
      "DEA Mindray BeneHeart C2 con Pantalla Color TFT de 7\" (Garantía 12 meses)",
      "Gabinete mural normalizado con alarma sonora 100dB y luz estroboscópica",
      "Kit de bioseguridad y RCP rápida (máscara RCP, tijeras trauma, rasuradora, guantes)",
      "Señalética institucional personalizada en español con logo de la entidad",
      "Capacitación certificada en Soporte Vital Básico (BLS) e instalación física"
    ],
    shortDesc:
      "Paquete integral Res. 3316 de 2019 con DEA Mindray C2 equipado con pantalla a color de 7 pulgadas, animaciones gráficas paso a paso y descarga bifásica de 360J.",
    specs: [
      { label: "Modelo de DEA Incluido", value: "Mindray BeneHeart C2 con Pantalla TFT Color de 7\"" },
      { label: "Asistencia Visual y Voz", value: "Animaciones de RCP en pantalla color + guía de voz ResQNavi™" },
      { label: "Energía de Descarga", value: "Bifásica BTE escalable hasta 360 Joules (Adulto/Pediátrico)" },
      { label: "Protección Ambiental", value: "IP55 y autoverificación automática diaria, semanal y mensual" },
      { label: "Elementos del Paquete", value: "DEA Mindray C2 + Gabinete con alarma + Kit Bioseguridad + Señalética personalizada + Capacitación BLS + Instalación" },
      { label: "Garantía Comercial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "pkg-amoul-i7",
    model: "AMoul i7 Plus",
    modelName: "AMoul i7 Plus",
    name: "Paquete Espacio Cardioprotegido — DEA AMoul i7 Plus",
    packageTitle: "Paquete Espacio Cardioprotegido — DEA AMoul i7 Plus",
    brand: "AMoul Medical",
    sku: "PKG-3316-AMOUL-I7",
    image: "./images/products/dea-i7-plus.png",
    invimaReg: "2020EIB-0018590",
    warranty: "12 Meses",
    badge: "Bifásico 360J",
    includesDea: true,
    chips: ["Autotest Diario", "Garantía 12M"],
    highlights: ["Autotest Diario", "Bifásico 360J", "Garantía 12M"],
    includedItems: [
      "DEA AMoul i7 Plus Bifásico 100-360J con autotest diario (Garantía 12 meses)",
      "Gabinete mural normalizado con alarma sonora 100dB y luz estroboscópica",
      "Kit de bioseguridad y RCP rápida (máscara RCP, tijeras trauma, rasuradora, guantes)",
      "Señalética institucional personalizada en español con logo de la entidad",
      "Capacitación certificada en Soporte Vital Básico (BLS) e instalación física"
    ],
    shortDesc:
      "Dotación integral Res. 3316 de 2019 con DEA AMoul i7 Plus bifásico inteligente, autotest diario de batería y electrodos multifuncionales pre-conectados.",
    specs: [
      { label: "Modelo de DEA Incluido", value: "AMoul i7 Plus Bifásico 100J a 360J con registro INVIMA Clase III" },
      { label: "Autoverificación", value: "Autotest diario automático de estado de batería, circuitos y parches" },
      { label: "Guía de Reanimación", value: "Indicaciones audibles en español y metrónomo luminoso de compresiones" },
      { label: "Modo Adulto / Infantil", value: "Cambio inmediato a modo pediátrico sin reemplazar los electrodos" },
      { label: "Elementos del Paquete", value: "DEA AMoul i7 Plus + Gabinete con alarma + Kit Bioseguridad + Señalética personalizada + Capacitación BLS + Instalación" },
      { label: "Garantía Comercial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "pkg-primedic-ya",
    model: "Primedic HeartSave YA",
    modelName: "Primedic HeartSave YA",
    name: "Paquete Espacio Cardioprotegido — DEA Primedic HeartSave YA",
    packageTitle: "Paquete Espacio Cardioprotegido — DEA Primedic HeartSave YA",
    brand: "Primedic Germany",
    sku: "PKG-3316-PRIMEDIC-YA",
    image: "./images/products/dea-primedic-ya.webp",
    invimaReg: "2021EBC-0023810",
    warranty: "12 Meses",
    badge: "Ingeniería Alemana",
    includesDea: true,
    chips: ["Tecnología Alemana", "Garantía 12M"],
    highlights: ["Tecnología Alemana", "Bifásico 360J", "Garantía 12M"],
    includedItems: [
      "DEA Primedic HeartSave YA (Ingeniería Alemana) Bifásico 360J (Garantía 12 meses)",
      "Gabinete mural normalizado con alarma sonora 100dB y luz estroboscópica",
      "Kit de bioseguridad y RCP rápida (máscara RCP, tijeras trauma, rasuradora, guantes)",
      "Señalética institucional personalizada en español con logo de la entidad",
      "Capacitación certificada en Soporte Vital Básico (BLS) e instalación física"
    ],
    shortDesc:
      "Implementación Res. 3316 de 2019 con DEA alemán Primedic HeartSave YA automático, botón pediátrico dedicado, ajuste automático de volumen ambiental y alta durabilidad.",
    specs: [
      { label: "Modelo de DEA Incluido", value: "Primedic HeartSave YA (Ingeniería Alemana) Bifásico hasta 360J" },
      { label: "Operación Inteligente", value: "Análisis automático de ECG y guía acústica con volumen autoadaptable" },
      { label: "Modo Infantil Directo", value: "Botón pediátrico dedicado sin necesidad de cambiar electrodos" },
      { label: "Protección Ambiental", value: "Certificación IP55 contra chorros de agua y polvo" },
      { label: "Elementos del Paquete", value: "DEA Primedic HeartSave YA + Gabinete con alarma + Kit Bioseguridad + Señalética personalizada + Capacitación BLS + Instalación" },
      { label: "Garantía Comercial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "pkg-sin-dea",
    model: "Complemento 5-en-1 (Sin DEA)",
    modelName: "Paquete Complementario (Sin DEA)",
    name: "Paquete de Espacio Cardioprotegido (Sin Equipo DEA)",
    packageTitle: "Paquete de Espacio Cardioprotegido (Para Clientes que ya tienen DEA)",
    brand: "CliniK Soluciones",
    sku: "PKG-3316-COMPLEMENTO-5EN1",
    image: "./images/products/gabinete-wap812.jpg",
    invimaReg: "Kit Normativo Res. 3316",
    warranty: "12 Meses",
    badge: "No Incluye DEA",
    includesDea: false,
    chips: ["No Incluye DEA", "5 Complementos"],
    highlights: ["No Incluye DEA", "Gabinete + Kit + Señalética", "Capacitación + Instalación"],
    warningNote:
      "Nota importante: Este paquete NO incluye el equipo Desfibrilador (DEA). Está diseñado para instituciones que ya cuentan con un DEA y desean implementar los demás requisitos de la Resolución 3316 de 2019.",
    disclaimerNote:
      "Nota importante: Este paquete NO incluye el equipo Desfibrilador (DEA). Está diseñado para instituciones que ya cuentan con un DEA.",
    includedItems: [
      "1. Señalética institucional personalizada en español con logo corporativo",
      "2. Gabinete mural normalizado con alarma sonora y luz estroboscópica",
      "3. Kit de bioseguridad y RCP rápida (máscara, tijeras trauma, rasuradora, guantes)",
      "4. Capacitación certificada en Soporte Vital Básico (BLS) y manejo del DEA",
      "5. Instalación física en sitio (*No incluye el equipo DEA*)"
    ],
    shortDesc:
      "¿Ya cuentas con un DEA en tu empresa o institución? Adquiere únicamente el paquete normativo de 5 componentes para completar tu Espacio Cardioprotegido bajo la Resolución 3316 de 2019.",
    specs: [
      { label: "Alcance del Paquete", value: "Exclusivo para instituciones que ya poseen un DEA (comprado con nosotros o con otro proveedor)" },
      { label: "Ítem 1 Incluido", value: "Señalética institucional personalizada en español" },
      { label: "Ítem 2 Incluido", value: "Gabinete mural normalizado con alarma sonora y luz estroboscópica" },
      { label: "Ítem 3 Incluido", value: "Kit de bioseguridad y RCP rápida (máscara, tijeras trauma, rasuradora, guantes)" },
      { label: "Ítem 4 y 5 Incluidos", value: "Capacitación certificada en Soporte Vital Básico (BLS) + Instalación física" },
      { label: "Aclaración Comercial", value: "No incluye el equipo Desfibrilador Externo Automático (DEA)" }
    ]
  }
];

const CICLO_ETAPAS = [
  {
    periodo: "Cada 6 Meses",
    tag: "Servicio Adicional Cotizable",
    accion: "Mantenimiento preventivo funcional e inspección técnica del equipo DEA.",
    icon: "Clock"
  },
  {
    periodo: "Cada 12 Meses",
    tag: "Servicio Adicional Cotizable",
    accion: "Calibración metrológica y certificación de energía de descarga con analizador.",
    icon: "Award"
  },
  {
    periodo: "Desde 24 Meses",
    tag: "Accesorio Adicional Cotizable",
    accion: "Revisión de fecha de caducidad y reemplazo de electrodos / parches de desfibrilación.",
    icon: "RefreshCw"
  },
  {
    periodo: "Desde 48 Meses",
    tag: "Accesorio Adicional Cotizable",
    accion: "Revisión de autonomía y reemplazo de batería de litio de larga duración.",
    icon: "Zap"
  }
];

export const CARDIOPROTEGIDOS_DETAILS = {
  normativa: "Resolución 3316 de 2019",
  tituloSeccion: "Implementación de Espacios Cardioprotegidos",
  subtituloNorma: "(Resolución 3316 de 2019)",
  proposito:
    "Para el cumplimiento de la Resolución 3316 de 2019 y contar con todos los requisitos habilitantes implementados, dotamos espacios cardioprotegidos integrales en empresas, centros comerciales, terminales, colegios, universidades, hoteles e industrias a nivel nacional.",
  garantiaEstandar: "12 Meses de Garantía Directa",

  // Los 5 componentes incluidos en el paquete de Espacio Cardioprotegido
  componentes: [
    {
      num: 1,
      titulo: "Desfibrilador Externo Automático (DEA)",
      brand: "Mindray / AMoul / Primedic",
      sku: "DEA-RES-3316",
      image: "./images/products/dea-mindray-c1a.jpg",
      microDesc: "Equipo DEA bifásico con autotest diario, guía por voz en español y electrodos adulto/pediátrico.",
      pills: ["Bifásico 200-360J", "Autotest Diario", "Garantía 12 Meses"],
      desc: "Desfibrilador Externo Automático con análisis inteligente de ritmo cardíaco, comandos de voz claros en español, batería de litio de larga duración y parches multifunción adulto/pediátrico con registro sanitario INVIMA vigente.",
      icon: "HeartPulse"
    },
    {
      num: 2,
      titulo: "Gabinete Mural con Alarma Sonora y Visual",
      brand: "WAP MEDICAL",
      sku: "001-0021-000014",
      image: "./images/products/gabinete-wap812.jpg",
      microDesc: "Gabinete normalizado con visor anti-impacto, alarma acústica de 100 dB y luz estroboscópica LED.",
      pills: ["Alarma 100dB", "Estrobo LED", "Visor Anti-Impacto"],
      desc: "Gabinete mural de alta resistencia con ventana de inspección rápida, bordes redondeados de seguridad y sistema de alarma sonora y luminosa que se activa automáticamente al abrir la puerta ante una emergencia.",
      icon: "Box"
    },
    {
      num: 3,
      titulo: "Kit de Bioseguridad y RCP Rápida",
      brand: "CLINIK RESCUE",
      sku: "KIT-BIO-RCP-3316",
      image: "./images/products/rescate-mascara-rcp.png",
      microDesc: "Máscara de reanimación RCP, tijeras cortatodo de trauma, rasuradora, guantes de nitrilo y toalla.",
      pills: ["Máscara RCP", "Tijeras Trauma", "Bioseguridad"],
      desc: "Kit reglamentario de intervención rápida para el primer respondiente: máscara unidireccional para ventilación segura, tijeras de trauma cortatodo, máquina de afeitar para asegurar adherencia de electrodos, guantes de nitrilo y toalla absorbente.",
      icon: "ShieldCheck"
    },
    {
      num: 4,
      titulo: "Señalética Institucional Personalizada",
      brand: "CLINIK SEÑALÉTICA",
      sku: "SIG-ILCOR-3316",
      image: "./images/products/gabinete-wap812.jpg",
      microDesc: "Señalética fotoluminiscente en español personalizada con el logo e identidad de su institución.",
      pills: ["Personalizada con Logo", "Fotoluminiscente", "100% Español"],
      desc: "Juego completo de señalización fotoluminiscente de ruta y ubicación de DEA en español, personalizada con la identidad visual y logotipo de su empresa o institución para máxima visibilidad en 360 grados.",
      icon: "AlertTriangle"
    },
    {
      num: 5,
      titulo: "Capacitación Certificada BLS e Instalación",
      brand: "CLINIK ACADEMY",
      sku: "CAP-BLS-DEA-3316",
      image: "./images/products/sim-aed-trainer.jpg",
      microDesc: "Entrenamiento en Soporte Vital Básico (BLS), uso del DEA, instalación física y documentación técnica.",
      pills: ["Soporte Vital Básico", "Instalación Física", "Documentación Res. 3316"],
      desc: "Jornada teórico-práctica en Soporte Vital Básico (BLS) y manejo seguro del DEA con certificado de asistencia, instalación física del gabinete y entrega de la documentación técnica del equipo según la Resolución 3316 de 2019.",
      icon: "GraduationCap"
    }
  ],

  // Soportamos ambos nombres de propiedad para máxima compatibilidad
  paquetesCotizables: PAQUETES_DATA,
  paquetesDea: PAQUETES_DATA,

  cicloSostenibilidad: {
    titulo: "Disponibilidad de Accesorios y Recomendación de Mantenimiento del DEA",
    aclaracion:
      "En CliniK Soluciones garantizamos la disponibilidad permanente de repuestos, accesorios y servicio técnico para el DEA que estás adquiriendo. Estos mantenimientos, calibraciones y recambios de consumibles son servicios adicionales cotizables según la necesidad de tu institución:",
    etapas: CICLO_ETAPAS
  },
  cicloRecurrente: CICLO_ETAPAS,

  // LOS 8 ESPACIOS CARDIOPROTEGIDOS IMPORTANTES (EXACTOS SEGÚN WORD PÁG. 2 Y REUNIÓN)
  instalacionesReales: [
    {
      entidad: "COCA COLA FEMSA",
      sede: "Plantas Industriales y Centros de Distribución",
      ubicacion: "Implementación de Espacios Cardioprotegidos corporativos bajo Resolución 3316 de 2019",
      sector: "Industria y Bebidas"
    },
    {
      entidad: "POSTOBÓN S.A.",
      sede: "Sedes Operativas y Administrativas",
      ubicacion: "Dotación de DEAs, gabinetes con alarma, señalética y capacitación de brigadas",
      sector: "Gran Industria Nacional"
    },
    {
      entidad: "GRUPO NUTRESA",
      sede: "Complejos Industriales y Corporativos",
      ubicacion: "Espacios Cardioprotegidos verificados por ingeniería biomédica CliniK Soluciones",
      sector: "Multinacional de Alimentos"
    },
    {
      entidad: "UNIVERSIDAD UPB",
      sede: "Universidad Pontificia Bolivariana — Campus Central",
      ubicacion: "Cobertura cardioprotegida en bloques académicos, deportivos y administrativos",
      sector: "Educación Superior"
    },
    {
      entidad: "CENTRO COMERCIAL OVIEDO",
      sede: "El Poblado — Medellín",
      ubicacion: "Puntos de cardioprotección de alto tráfico peatonal con respuesta inmediata",
      sector: "Centros Comerciales"
    },
    {
      entidad: "COLEGIO THE COLUMBUS SCHOOL",
      sede: "Campus Alto de Las Palmas",
      ubicacion: "Dotación de DEAs bifásicos adulto/pediátrico y entrenamiento de primer respondiente",
      sector: "Educación Internacional"
    },
    {
      entidad: "METROPARQUES",
      sede: "Parque Norte y Aeroparque Juan Pablo II",
      ubicacion: "Espacios cardioprotegidos para escenarios recreativos de afluencia masiva",
      sector: "Recreación y Parques"
    },
    {
      entidad: "UNIVERSIDAD NACIONAL DE COLOMBIA",
      sede: "Sede Medellín — Campus Universitario",
      ubicacion: "Instalación certificada de puntos DEA y capacitación en Soporte Vital Básico",
      sector: "Educación Pública Superior"
    }
  ]
};
