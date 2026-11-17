// =========================================================================
// [DATA-v2.1] — CATÁLOGO GENERAL BIOMÉDICO, RESCATE, ACCESORIOS Y SIMULACIÓN
// Organizado según reunión (28-Oct):
// - Equipos Médicos: 10 subcategorías por tipo de equipo (incluye Diagnóstico)
// - Rescate y Atención Prehospitalaria: Referente Coral Médica
// - Accesorios y Consumibles: Espejando las categorías de equipos
// - Simulación y Educación: Referente NASCO Healthcare
// =========================================================================

export const CATEGORIES = [
  { id: "todos", label: "Todo Equipos Médicos" },
  { id: "bombas-infusion", label: "Bombas de Infusión" },
  { id: "desfibriladores", label: "Desfibriladores" },
  { id: "ecografos", label: "Ecógrafos" },
  { id: "electrocardiografos", label: "Electrocardiógrafos" },
  { id: "incubadoras", label: "Incubadoras" },
  { id: "monitores", label: "Monitores Multiparámetros" },
  { id: "anestesia", label: "Máquinas de Anestesia" },
  { id: "ventiladores", label: "Ventiladores" },
  { id: "succionadores", label: "Succionadores" },
  { id: "diagnostico", label: "Equipos de Diagnóstico" }
];

export const CLINIK_PRODUCTS = [
  // =====================================================================
  // 1. BOMBAS DE INFUSIÓN
  // =====================================================================
  {
    id: "prod-bomba-mp60",
    name: "Bomba de Infusión Volumétrica Peristáltica MP-60",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "EDAN / Medcaptain",
    sku: "001-0012-000002",
    image: "./images/products/bomba-mp60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Doble Micro-CPU",
    microDesc: "Doble micro-CPU con sistema anti-bolo automático y librería de fármacos clínicos.",
    pills: ["Doble Micro-CPU", "Anti-Bolo Automático", "Garantía 12 Meses"],
    specs: [
      { label: "Mecanismo de Bombeo", value: "Peristáltico lineal con compensación automática de flujo" },
      { label: "Rango de Flujo", value: "0.1 a 1200 mL/h con incrementos finos de 0.01 mL/h" },
      { label: "Seguridad Anti-Bolo", value: "Reducción automática de bolo tras liberación de oclusión en línea" },
      { label: "Sensores Ópticos", value: "Sensor ultrasónico de microburbujas de aire y presión de oclusión" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Sensor de gotas infrarrojo externo",
      "Abrazadera giratoria para atril de suero",
      "Cable de poder grado hospitalario"
    ],
    regulatory: "Cumple estándares de habilitación Resolución 3100 de 2019 para UCI, cirugía, hospitalización y ambulancias TAM."
  },
  {
    id: "prod-bomba-hp60",
    name: "Bomba de Infusión Modular de Alta Precisión HP-60",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-HP60-MOD",
    image: "./images/products/bomba-hp60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Pantalla Táctil Color",
    microDesc: "Bomba volumétrica inteligente con pantalla táctil, acople modular y batería de larga duración.",
    pills: ["Pantalla Touch", "Librería Fármacos", "Garantía 12 Meses"],
    specs: [
      { label: "Interfaz de Usuario", value: "Pantalla táctil a color resistiva operable con guantes quirúrgicos" },
      { label: "Precisión de Infusión", value: "±5% con sets universales calibrados y detección ultrasónica de aire" },
      { label: "Autonomía de Batería", value: "Más de 6 horas continuas a 25 mL/h (apta para traslado TAM)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Soporte de fijación multifuncional para atril o riel",
      "Batería interna de litio recargable",
      "Manual de operación y protocolo metrológico"
    ],
    regulatory: "Registro sanitario INVIMA vigente y respaldo técnico para habilitación en salud Res. 3100."
  },
  {
    id: "prod-bomba-sys6010",
    name: "Bomba de Infusión Peristáltica Portátil SYS-6010",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-SYS-6010",
    image: "./images/products/bomba-sys6010.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Hospitalización & TAM",
    microDesc: "Diseño compacto con puerta motorizada anti-flujo libre y múltiples modos de infusión.",
    pills: ["Puerta Motorizada", "Anti-Flujo Libre", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Infusión", value: "Modo velocidad, tiempo, peso corporal, secuencial y micro-infusión" },
      { label: "Seguridad Mecánica", value: "Puerta motorizada con abrazadera anti-flujo libre integrada" },
      { label: "Batería Integrada", value: "Batería Li-ion con autonomía superior a 5 horas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Abrazadera de fijación a portasueros",
      "Sensor de goteo óptico",
      "Cable de alimentación grado médico"
    ],
    regulatory: "Cumplimiento Resolución 3100 de 2019 con entrega de hoja de vida y certificado metrológico."
  },
  {
    id: "prod-bomba-mp30",
    name: "Bomba Perfusora de Jeringa Clínica MP-30",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-MP30-SYR",
    image: "./images/products/bomba-mp30.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Reconocimiento Jeringa",
    microDesc: "Perfusora de jeringa para fármacos vasoactivos, anestesia y neonatología con detección automática.",
    pills: ["Jeringas 5 a 60 mL", "Micro-Infusión UCI", "Garantía 12 Meses"],
    specs: [
      { label: "Compatibilidad de Jeringas", value: "Reconocimiento automático de jeringas de 5, 10, 20, 30 y 50/60 mL" },
      { label: "Incremento Mínimo", value: "0.01 mL/h ideal para infusión neonatal y fármacos inotrópicos" },
      { label: "Sistema de Alarmas", value: "Oclusión en 11 niveles, jeringa casi vacía, fin de infusión y desacople" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Soporte de anclaje rotatorio",
      "Batería recargable de litio",
      "Cable de alimentación hospitalario"
    ],
    regulatory: "Aprobada para UCI neonatal, pediátrica, adultos, salas de cirugía y ambulancias medicalizadas."
  },
  {
    id: "prod-bomba-hp30",
    name: "Bomba de Infusión de Jeringa Medcaptain HP-30",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-HP30-SYR",
    image: "./images/products/bomba-hp30.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Precisión ≤ ±0.5%",
    microDesc: "Bomba de jeringa inteligente con pantalla táctil de 3.0\", modos TIVA/PCA y librería de hasta 5.000 fármacos.",
    pills: ["Jeringas 2 a 60 mL", "Modos TIVA / PCA", "Garantía 12 Meses"],
    specs: [
      { label: "Compatibilidad", value: "Detección automática de jeringas de 2, 3, 5, 10, 20, 30 y 50/60 mL" },
      { label: "Rango de Flujo", value: "0.10 a 2200.0 mL/h con precisión mecánica ≤ ±0.5%" },
      { label: "Modos Avanzados", value: "Velocidad, Tiempo, Peso, Secuencial, Micro, TIVA, PCA y Dosis de Carga" },
      { label: "Autonomía", value: "Batería de litio recargable con hasta 10 horas de operación a 5 mL/h" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Soporte de anclaje rotatorio para atril", "Batería interna Li-ion de alta duración", "Cable de alimentación grado médico"],
    regulatory: "Cumple estándares Resolución 3100 de 2019 para UCI adulto, pediátrica, neonatal y quirófano."
  },
  {
    id: "prod-bomba-ep60",
    name: "Bomba de Infusión Enteral Medcaptain EP-60",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-EP60-ENT",
    image: "./images/products/bomba-ep60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Nutrición Enteral IP34",
    microDesc: "Bomba especializada de nutrición enteral con pantalla táctil de 4.0\", sistema anti-oclusión y batería de hasta 22 horas.",
    pills: ["Anti-Oclusión Auto", "Protección IP34", "Garantía 12 Meses"],
    specs: [
      { label: "Rango de Entrega", value: "1 a 1200 mL/h en incrementos de 1 mL/h con purga rápida de 2000 mL/h" },
      { label: "Seguridad Enteral", value: "Sistema automático anti-oclusión y opción de módulo calentador de fórmula" },
      { label: "Interfaz", value: "Pantalla táctil a color de 4.0 pulgadas con guías interactivas integradas" },
      { label: "Autonomía", value: "Hasta 22 horas continuas a 25 mL/h" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Abrazadera de fijación universal", "Set de administración enteral compatible", "Cable de poder hospitalario"],
    regulatory: "Registro sanitario INVIMA vigente para soporte nutricional hospitalario y domiciliario."
  },
  {
    id: "prod-bomba-hp80",
    name: "Estación de Acoplamiento Modular Medcaptain HP-80 / M-Station",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Medcaptain",
    sku: "MED-HP80-DOCK",
    image: "./images/products/bomba-hp80.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Estación Multicanal UCI",
    microDesc: "Estación de trabajo modular para acoplar, energizar y centralizar múltiples bombas HP-30 y HP-60 con un solo cable.",
    pills: ["Hasta 4-15 Canales", "Centralización HIS/CIS", "Garantía 12 Meses"],
    specs: [
      { label: "Arquitectura Modular", value: "Acoplamiento plug-and-play para bombas de jeringa HP-30 y volumétricas HP-60" },
      { label: "Gestión Eléctrica", value: "Fuente de poder unificada con respaldo y llamado de enfermería integrado" },
      { label: "Conectividad", value: "Wi-Fi, Ethernet RJ45 y USB para integración con sistemas HIS/CIS" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Módulos de acoplamiento multicanal", "Base rodante hospitalaria o abrazadera de riel UCI", "Cable único de alimentación"],
    regulatory: "Diseñada para Unidades de Cuidado Intensivo (UCI) y salas de cirugía bajo Resolución 3100."
  },
  {
    id: "prod-bomba-benefusion-evp",
    name: "Bomba de Infusión Volumétrica / Doble Canal Mindray BeneFusion eVP",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Mindray Medical",
    sku: "MINDRAY-EVP-INF",
    image: "./images/products/bomba-benefusion-evp.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "SmartRapid™ <4s",
    microDesc: "Bomba de infusión volumétrica apilable de alta precisión con pantalla táctil de 3.5\", librería DERS y acople multicanal.",
    pills: ["Apilable Multicanal", "Librería Fármacos DERS", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología de Inicio", value: "Encendido rápido SmartRapid™ en menos de 4 segundos y compensación de presión" },
      { label: "Rango de Flujo", value: "0.1 a 2300 mL/h adaptable a adulto, pediátrico y neonatal" },
      { label: "Configuración", value: "Operación individual o acoplamiento modular en estación de doble/múltiple canal" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Abrazadera giratoria de portasueros", "Batería interna recargable Li-ion", "Cable de alimentación hospitalario"],
    regulatory: "Cumple Resolución 3100 de 2019 para UCI, cirugía, hospitalización y ambulancias TAM."
  },
  {
    id: "prod-bomba-benefusion-esp",
    name: "Bomba de Infusión de Jeringa Mindray BeneFusion eSP (Acoplable Doble Canal)",
    category: "bombas-infusion",
    categoryLabel: "Bombas de Infusión",
    brand: "Mindray Medical",
    sku: "MINDRAY-ESP-SYR",
    image: "./images/products/bomba-benefusion-esp.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Micro-Infusión Mindray",
    microDesc: "Bomba perfusora de jeringa con pantalla táctil capacitiva, sistema de alarma de oclusión dinámica y acople modular.",
    pills: ["Precisión ±1.8%", "Acople Modular", "Garantía 12 Meses"],
    specs: [
      { label: "Jeringas Compatibles", value: "Reconocimiento automático de 2, 5, 10, 20, 30 y 50/60 mL con sistema anti-bolo" },
      { label: "Interfaz Clínica", value: "Pantalla táctil a color de 3.5 pulgadas con visualización intuitiva de dosis" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Soporte de anclaje para atril o estación modular", "Batería de litio recargable"],
    regulatory: "Registro INVIMA vigente y respaldo técnico para áreas críticas y transporte asistencial."
  },

  // =====================================================================
  // 2. DESFIBRILADORES (CLÍNICOS Y DEA)
  // =====================================================================
  {
    id: "prod-dea-mindray-c1",
    name: "Desfibrilador Externo Automático (DEA) Mindray C1 (BeneHeart C1A)",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-DEA-C1A",
    image: "./images/products/dea-mindray-c1a.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Res. 3316 / QShock™",
    microDesc: "DEA bifásico hasta 360J con descarga en <8s, guía adaptativa ResQNavi™ y modo Adulto/Pediátrico.",
    pills: ["Bifásico 360J", "QShock™ <8s", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología de Descarga", value: "Onda Bifásica Exponencial Truncada (BTE) hasta 360 Joules" },
      { label: "Tiempo a Primera Descarga", value: "Menos de 8 segundos gracias a tecnología QShock™" },
      { label: "Conmutador de Paciente", value: "Switch directo Adulto / Pediátrico sin cambiar electrodos" },
      { label: "Protección Ambiental", value: "Certificación IP55 y resistencia a caídas de 1.5 metros" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Parches multifunción Adulto/Pediátrico pre-conectados MR60",
      "Batería de litio de larga duración",
      "Guía rápida en español"
    ],
    regulatory: "Cumplimiento integral de la Resolución 3316 de 2019 y Resolución 3100 de 2019 (Ambulancias TAB)."
  },
  {
    id: "prod-dea-mindray-c2",
    name: "Desfibrilador Externo Automático (DEA) Mindray C2 con Pantalla 7\"",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-DEA-C2",
    image: "./images/products/dea-mindray-c2.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Pantalla Color 7\"",
    microDesc: "DEA bifásico 360J con pantalla TFT color de 7 pulgadas y animaciones gráficas de RCP.",
    pills: ["Pantalla Color 7\"", "Bifásico 360J", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla Asistencial", value: "TFT a color de 7 pulgadas con ajuste automático de brillo y guía animada" },
      { label: "Energía Bifásica", value: "Escalable de 100J a 360J adulto y 10J a 100J pediátrico" },
      { label: "Guía Inteligente", value: "Tecnología ResQNavi™ con retroalimentación visual y por voz en español" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Electrodos pre-conectados Adulto/Pediátrico",
      "Batería de alta capacidad Li-MnO2",
      "Certificado de verificación metrológica"
    ],
    regulatory: "Acreditado para Espacios Cardioprotegidos (Res. 3316 de 2019) y transporte asistencial (Res. 3100)."
  },
  {
    id: "prod-dea-i7",
    name: "Desfibrilador Externo Automático (DEA) AMoul i7 Plus",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "AMoul Medical",
    sku: "001-0013-000014",
    image: "./images/products/dea-i7-plus.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Res. 3316 de 2019",
    microDesc: "DEA bifásico 100-360J con autotest diario de batería y electrodos pre-conectados.",
    pills: ["100-360J Bifásico", "Autotest Diario", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología de Descarga", value: "Bifásica truncada exponencial (BTE) 100J a 360J inteligente" },
      { label: "Tiempo de Carga", value: "<8 segundos a 200J / <10 segundos a 360J" },
      { label: "Autotests Diarios", value: "Verificación automática de batería, condensadores y electrodos" },
      { label: "Selector de Modo", value: "Conmutador rápido Adulto/Pediátrico sin cambio de parches" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Electrodos multifunción Adulto/Pediátrico pre-conectados",
      "Batería de litio grado médico",
      "Maletín rígido de transporte"
    ],
    regulatory: "Cumplimiento 100% de la Resolución 3316 de 2019 y Resolución 3100 de 2019."
  },
  {
    id: "prod-dea-primedic-ya",
    name: "Desfibrilador Externo Automático (DEA) Primedic HeartSave YA",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Primedic",
    sku: "PRIMEDIC-HS-YA",
    image: "./images/products/dea-primedic-ya.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Ingeniería Alemana",
    microDesc: "DEA alemán bifásico automático con botón pediátrico directo, metrónomo RCP y protección IP55.",
    pills: ["Tecnología Alemana", "Botón Pediátrico", "Garantía 12 Meses"],
    specs: [
      { label: "Origen y Tecnología", value: "Ingeniería alemana Primedic con onda bifásica controlada por corriente (CCD)" },
      { label: "Energía de Descarga", value: "Escalado automático hasta 360J según impedancia del paciente" },
      { label: "Modo Infantil", value: "Botón pediátrico dedicado sin necesidad de cambiar parches" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Electrodos pre-conectados SavePads Adulto/Pediátrico",
      "Batería de litio de larga vida útil",
      "Kit de emergencia y guía de usuario"
    ],
    regulatory: "Cumple con los lineamientos de la Resolución 3316 de 2019 para espacios cardioprotegidos."
  },
  {
    id: "prod-desfibrilador-i6",
    name: "Desfibrilador Monitor 4 en 1 AMoul i6 (Con Marcapasos)",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "AMoul Medical",
    sku: "AMOUL-I6-4IN1",
    image: "./images/products/desfibrilador-i6.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "4-en-1: TAM & Cirugía",
    microDesc: "Monitor desfibrilador 4-en-1: DEA, desfibrilación manual, cardioversión sincrónica y marcapasos.",
    pills: ["Bifásico 360J", "Marcapasos Transcutáneo", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Operación", value: "Desfibrilación manual, DEA, Cardioversión sincrónica y Marcapasos transcutáneo" },
      { label: "Descarga de Energía", value: "Tecnología bifásica escalable de 1J a 360 Joules" },
      { label: "Monitorización", value: "ECG, SpO2, PNI e impresora térmica integrada de 80 mm" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Palas externas convertibles adulto/pediátrico integradas",
      "Cable ECG de 5 derivaciones y sensor SpO2",
      "Electrodos para marcapasos y papel térmico"
    ],
    regulatory: "Cumple Criterio 32.1 de la Resolución 3100 de 2019 para Ambulancias Medicalizadas (TAM), UCI y Quirófano."
  },
  {
    id: "prod-desfibrilador-i2",
    name: "Desfibrilador Monitor Clínico Bifásico AMoul i2",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "AMoul Medical",
    sku: "AMOUL-I2-CLINIC",
    image: "./images/products/desfibrilador-i2.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "Carro de Paro & UCI",
    microDesc: "Desfibrilador monitor hospitalario con pantalla de 7 pulgadas, palas externas adultas/pediátricas e impresora.",
    pills: ["Pantalla 7\" HD", "Palas Convertibles", "Garantía 12 Meses"],
    specs: [
      { label: "Aplicación Clínica", value: "Carros de paro hospitalarios, salas de urgencias, cirugía y traslado" },
      { label: "Pantalla", value: "TFT LCD a color de 7 pulgadas con visualización nítida de curvas ECG" },
      { label: "Autonomía", value: "Batería recargable de alta capacidad para más de 4 horas de monitoreo" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Juego de palas externas adulto/pediátrico",
      "Cable troncal ECG y electrodos",
      "Rollo de papel termosensible"
    ],
    regulatory: "Entregado con registro sanitario INVIMA, hoja de vida y certificado de calibración Res. 3100."
  },
  {
    id: "prod-dea-i9-plus",
    name: "Desfibrilador Externo Automático (DEA) AMoul i9 Plus (Con Pantalla LCD)",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "AMoul Medical",
    sku: "AMOUL-I9-PLUS",
    image: "./images/products/dea-i9-plus.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Pantalla + Feedback RCP",
    microDesc: "DEA bifásico 360J con pantalla a color, metrónomo de RCP en tiempo real, autotest diario y selector Adulto/Pediátrico.",
    pills: ["Bifásico 360J", "Pantalla Color LCD", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología de Descarga", value: "Onda bifásica exponencial truncada (BTE) de 100J a 360J con análisis rápido de ritmo" },
      { label: "Asistencia Visual", value: "Pantalla a color de alta visibilidad con indicaciones gráficas paso a paso y voz en español" },
      { label: "Selector de Paciente", value: "Botón directo Adulto / Pediátrico sin cambio de electrodos" },
      { label: "Protección", value: "Grado de sellado IP55 contra polvo y salpicaduras" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Parches multifunción adulto/pediátrico pre-conectados", "Batería de litio de larga duración", "Maletín rígido de transporte"],
    regulatory: "Cumplimiento integral de la Resolución 3316 de 2019 (Espacios Cardioprotegidos) y Res. 3100."
  },
  {
    id: "prod-desfibrilador-mindray-d30",
    name: "Desfibrilador Monitor Clínico Mindray BeneHeart D30",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-BHD30",
    image: "./images/products/desfibrilador-mindray-d30.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "QShock™ <5s • Pantalla 8\"",
    microDesc: "Monitor desfibrilador táctil de 8\" con carga en <5s hasta 360J, DEA, cardioversión, marcapasos y monitoreo avanzado.",
    pills: ["Pantalla Táctil 8\"", "QShock™ <5s 360J", "Garantía 12 Meses"],
    specs: [
      { label: "Modos Clínicos", value: "Desfibrilación manual (1-360J), DEA, Cardioversión sincrónica y Marcapasos externo" },
      { label: "Velocidad de Carga", value: "Tecnología QShock™ con encendido y análisis ultra rápido en menos de 5 segundos" },
      { label: "Monitorización", value: "ECG, SpO2, PNI, EtCO2 opcional, análisis de RCP e impresora térmica integrada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Palas externas convertibles adulto/pediátrico", "Cable ECG, sensor SpO2 y brazalete PNI", "Batería inteligente Li-ion y papel térmico"],
    regulatory: "Cumple Resolución 3100 de 2019 para Ambulancias TAM, Urgencias, UCI y Salas de Cirugía."
  },
  {
    id: "prod-desfibrilador-mindray-d60",
    name: "Desfibrilador Monitor Avanzado Mindray BeneHeart D60",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-BHD60",
    image: "./images/products/desfibrilador-mindray-d60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Alta Complejidad UCI",
    microDesc: "Estación de desfibrilación de alta gama con pantalla táctil capacitiva de 8.4\", ECG 12 derivaciones, ultrasonido POCUS opcional y 360J.",
    pills: ["Pantalla 8.4\" Full Touch", "12 Derivaciones ECG", "Garantía 12 Meses"],
    specs: [
      { label: "Desfibrilación", value: "Bifásica hasta 360J, marcapasos transcutáneo y cardioversión con palas inteligentes" },
      { label: "Monitoreo Crítico", value: "ECG 3/5/12 derivaciones, SpO2, PNI, 2-Temp, 2-IBP y capnografía EtCO2" },
      { label: "Resistencia", value: "IP55 contra agua y polvo, diseñado para traslado crítico intrahospitalario y TAM" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Palas externas adulto/pediátrico con indicador de contacto", "Set de cables ECG, SpO2, PNI y parches multifunción", "Batería recargable de alta autonomía"],
    regulatory: "Habilitado para UCI, urgencias de alta complejidad, hemodinamia y ambulancias medicalizadas."
  },
  {
    id: "prod-desfibrilador-comen-s5",
    name: "Desfibrilador Monitor 4 en 1 Comen S5",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Comen Medical",
    sku: "COMEN-S5-4IN1",
    image: "./images/products/desfibrilador-comen-s5.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "4-en-1 Compacto TAM",
    microDesc: "Monitor desfibrilador portátil 4-en-1 (Manual, DEA, Marcapasos y Monitorización) hasta 360J con palas adulto/pediátricas.",
    pills: ["4 en 1 Bifásico 360J", "Marcapasos Integrado", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Trabajo", value: "Desfibrilación manual (1-360J), DEA, Cardioversión sincrónica y Marcapasos fijo/demanda" },
      { label: "Pantalla", value: "TFT a color de 7 pulgadas con despliegue simultáneo de curvas y signos vitales" },
      { label: "Parámetros", value: "ECG, SpO2, PNI y registrador térmico incorporado" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Palas externas integradas adulto/pediátrico", "Cable ECG de 5 puntas y sensor SpO2", "Parches multifunción y batería Li-ion"],
    regulatory: "Cumple criterios de habilitación Res. 3100 para Ambulancias Medicalizadas (TAM) y carros de paro."
  },
  {
    id: "prod-desfibrilador-comen-s8",
    name: "Desfibrilador Monitor Clínico Avanzado Comen S8",
    category: "desfibriladores",
    categoryLabel: "Desfibriladores",
    brand: "Comen Medical",
    sku: "COMEN-S8-PRO",
    image: "./images/products/desfibrilador-comen-s8.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "Pantalla Táctil 8.4\"",
    microDesc: "Desfibrilador monitor hospitalario con pantalla táctil de 8.4\", hasta 360J bifásicos, ECG 12 derivaciones y opción EtCO2/IBP.",
    pills: ["Pantalla Touch 8.4\"", "Bifásico 360J", "Garantía 12 Meses"],
    specs: [
      { label: "Energía y Carga", value: "Descarga bifásica BTE de 1J a 360J con carga a 200J en menos de 4 segundos" },
      { label: "Monitoreo Integral", value: "ECG (hasta 12 derivaciones), SpO2, PNI, Resp, Temp y módulo opcional EtCO2/IBP" },
      { label: "Almacenamiento", value: "Grabación continua de eventos, tendencias y exportación USB" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Palas externas convertibles adulto/pediátrico", "Set de cables ECG, SpO2, PNI y rollo térmico", "Batería de litio recargable"],
    regulatory: "Certificado para salas de urgencias, cirugía, UCI y carros de reanimación bajo Res. 3100."
  },

  // =====================================================================
  // 3. ECÓGRAFOS
  // =====================================================================
  {
    id: "prod-ecografo-ax3",
    name: "Ecógrafo Doppler Color Portátil EDAN Acclarix AX3",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-AX3-DOPPLER",
    image: "./images/products/ecografo-ax3.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Doppler Color Dual",
    microDesc: "Sistema de ultrasonido portátil con doble pantalla (monitor HD 15.6\" + pantalla táctil de comando) y doble conector.",
    pills: ["Monitor 15.6\" + Touch", "Doble Conector Sonda", "Garantía 12 Meses"],
    specs: [
      { label: "Arquitectura de Imagen", value: "Plataforma Acclarix con Doppler Color, Power Doppler, PW y CW" },
      { label: "Pantallas", value: "Monitor principal de 15.6\" Full HD + pantalla táctil gestual de 10.1\"" },
      { label: "Conectores de Transductor", value: "Doble puerto activo para cambio instantáneo de sonda" },
      { label: "Batería Integrada", value: "Batería Li-ion para escaneo autónomo en urgencias y hospitalización" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Transductor convexo abdominal/obstétrico y lineal vascular (según configuración)",
      "Batería interna recargable",
      "Maletín o carro rodante ergonómico opcional"
    ],
    regulatory: "Registro INVIMA vigente para radiología, ginecobstetricia, medicina interna y urgencias (POCUS)."
  },
  {
    id: "prod-ecografo-lx9",
    name: "Ecógrafo Estacionario de Alta Gama EDAN Acclarix LX9",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-LX9-CART",
    image: "./images/products/ecografo-lx9.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Monitor 21.5\" Full HD",
    microDesc: "Sistema estacionario de ultrasonido avanzado para cardiología, ginecología 3D/4D e imagen general.",
    pills: ["Monitor 21.5\" Articulado", "Cardiología & 3D/4D", "Garantía 12 Meses"],
    specs: [
      { label: "Monitor Clínico", value: "Pantalla médica de 21.5 pulgadas con brazo articulado omnidireccional" },
      { label: "Panel de Control", value: "Consola motorizada regulable en altura con pantalla táctil de 13.3\"" },
      { label: "Puertos de Sonda", value: "4 puertos activos de transductor + soporte calienta-gel integrado" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Configuración personalizada de transductores (Convexo, Lineal, Endocavitario, Sectorial)",
      "Calentador de gel ultrasonográfico",
      "Conectividad DICOM 3.0 completa"
    ],
    regulatory: "Equipamiento de diagnóstico por imagen certificado bajo Resolución 3100 de 2019."
  },
  {
    id: "prod-ecografo-nano",
    name: "Ecógrafo Inalámbrico de Bolsillo EDAN Nano L12 / C5 EXP",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-NANO-POCUS",
    image: "./images/products/ecografo-nano-l12.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Ultrasonido Wireless IP67",
    microDesc: "Transductor de ultrasonido inalámbrico POCUS para accesos vasculares, FAST en urgencias y cuidado crítico.",
    pills: ["100% Inalámbrico", "Protección IP67", "Garantía 12 Meses"],
    specs: [
      { label: "Conectividad", value: "Wi-Fi de alta velocidad compatible con tablets y smartphones iOS / Android" },
      { label: "Aplicaciones", value: "Guía de punción vascular, ecografía pulmonar, FAST en trauma y obstetricia" },
      { label: "Desinfección", value: "Grado de impermeabilidad IP67 para inmersión y limpieza hospitalaria" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Base de carga magnética rápida",
      "App clínica con herramientas de medición y exportación DICOM",
      "Estuche protector de transporte"
    ],
    regulatory: "Registro INVIMA vigente, ideal para urgencias, UCI, anestesiología y atención extramural."
  },
  {
    id: "prod-ecografo-ax8",
    name: "Ecógrafo Portátil Doppler Color Avanzado EDAN Acclarix AX8",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-AX8-PORT",
    image: "./images/products/ecografo-ax8.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Doble Pantalla + 3D/4D",
    microDesc: "Ecógrafo portátil de gama alta en chasis de magnesio con monitor HD 15.6\", panel táctil dual y elastografía/cardiología.",
    pills: ["Monitor 15.6\" HD", "Doble Batería 2h+", "Garantía 12 Meses"],
    specs: [
      { label: "Plataforma de Imagen", value: "Arquitectura Acclarix con Doppler Color, PW, CW, PDI, TDI, eSRI y Compound" },
      { label: "Diseño Ergonómico", value: "Chasis ultraligero en aleación de magnesio con pantalla principal 15.6\" y touch gestual" },
      { label: "Puertos Activos", value: "Doble puerto activo para transductores de alta densidad" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductores según especialidad (Convexo, Lineal, Endocavitario, Sectorial)", "Carro rodante con elevación opcional y doble batería", "Exportación DICOM 3.0"],
    regulatory: "Registro INVIMA vigente para radiología, ginecobstetricia, cardiología y cuidado crítico."
  },
  {
    id: "prod-ecografo-lx3",
    name: "Ecógrafo Estacionario Doppler Color EDAN Acclarix LX3",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-LX3-CART",
    image: "./images/products/ecografo-lx3.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Monitor 21.5\" + 4 Puertos",
    microDesc: "Ecógrafo estacionario sobre carro con monitor médico de 21.5\", pantalla táctil de 14\" y 4 puertos activos de transductor.",
    pills: ["Monitor 21.5\" HD", "4 Puertos Activos", "Garantía 12 Meses"],
    specs: [
      { label: "Visualización", value: "Monitor médico LED de 21.5 pulgadas articulado + pantalla táctil de comando de 14\"" },
      { label: "Conectividad", value: "4 puertos activos de sonda, DICOM 3.0 completo, USB y calienta-gel" },
      { label: "Aplicaciones", value: "Abdomen, obstetricia, ginecología, vascular, partes blandas, urología y MSK" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductores multifrecuencia configurables", "Calentador de gel integrado", "Soporte para impresora térmica"],
    regulatory: "Apto para servicios de imágenes diagnósticas y consulta especializada bajo Res. 3100."
  },
  {
    id: "prod-ecografo-u60",
    name: "Ecógrafo Doppler Color Portátil EDAN U60",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-U60-COL",
    image: "./images/products/ecografo-u60.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Doppler Color 15\"",
    microDesc: "Sistema de ultrasonido portátil Doppler Color de 15\" con imagen armónica tisular (THI) y reducción de moteado eSRI.",
    pills: ["Pantalla 15\" LCD", "Doppler Color / PW", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Imagen", value: "B, M, Color Doppler, Power Doppler, PW, Imagen Armónica Tisular (THI) y Trapecio" },
      { label: "Conectores", value: "2 puertos de transductor integrados con almacenamiento SSD rápido" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductor convexo y/o lineal", "Batería interna recargable y maletín de transporte"],
    regulatory: "Equipamiento certificado con registro INVIMA vigente para diagnóstico multipropósito."
  },
  {
    id: "prod-ecografo-u50-prime",
    name: "Ecógrafo Portátil Doppler Color EDAN U50 Prime",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-U50-PRIME",
    image: "./images/products/ecografo-u50-prime.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Multipropósito Compacto",
    microDesc: "Ecógrafo Doppler Color compacto con pantalla de 12.1\", doble conector de sonda y flujo de trabajo ágil en consultorio.",
    pills: ["Doppler Color", "Doble Puerto Sonda", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla", value: "Monitor LED médico de alta resolución de 12.1 pulgadas antirreflejo" },
      { label: "Tecnologías", value: "Phased Inversion Harmonic Imaging, Spatial Compounding y reducción de ruido eSRI" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Configuración de transductores clínicos", "Batería recargable integrada"],
    regulatory: "Cumple Resolución 3100 de 2019 para consulta externa, ginecología y urgencias."
  },
  {
    id: "prod-ecografo-dus60",
    name: "Ecógrafo Digital Portátil EDAN DUS 60 (Con Doppler Pulsado PW)",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-DUS60-PW",
    image: "./images/products/ecografo-dus60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Costo-Efectivo B/N + PW",
    microDesc: "Sistema de ultrasonido digital compacto blanco y negro con Doppler Pulsado (PW), 2 conectores y batería integrada.",
    pills: ["Doppler Pulsado PW", "2 Puertos Sonda", "Garantía 12 Meses"],
    specs: [
      { label: "Imagen", value: "Pantalla TFT-LCD de 12.1\", imagen armónica tisular eSRI y PW Doppler" },
      { label: "Portabilidad", value: "Peso liviano (~7.1 kg) con batería Li-ion para brigadas y consulta rural" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sonda convexa o endocavitaria/lineal", "Maletín de transporte"],
    regulatory: "Registro sanitario INVIMA vigente para tamizaje obstétrico, abdominal y atención primaria."
  },
  {
    id: "prod-ecografo-mindray-dp30",
    name: "Ecógrafo Portátil Mindray DP-30 / DP-50 (Power Doppler & PW)",
    category: "ecografos",
    categoryLabel: "Ecógrafos",
    brand: "Mindray Medical",
    sku: "MINDRAY-DP30-50",
    image: "./images/products/ecografo-mindray-dp30.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Power Doppler Mindray",
    microDesc: "Ecógrafo portátil Mindray con pantalla LED inclinable de 12.1\"/15\", Power Doppler, PW e iClear™ para imagen de alta nitidez.",
    pills: ["iClear™ & iTouch™", "Power Doppler + PW", "Garantía 12 Meses"],
    specs: [
      { label: "Optimización", value: "Herramientas iTouch™ (optimización en 1 clic), iClear™ (reducción de ruido) e iBeam™" },
      { label: "Modos", value: "Modo B, M, B/M, Doppler Pulsado (PW) y Power Doppler direccional" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductores multifrecuencia Mindray", "Carro móvil UMT opcional y batería recargable"],
    regulatory: "Equipamiento certificado bajo Resolución 3100 de 2019."
  },

  // =====================================================================
  // 4. ELECTROCARDIÓGRAFOS
  // =====================================================================
  {
    id: "prod-ecg-se301",
    name: "Electrocardiógrafo Digital Portátil 12 Derivaciones EDAN SE-301",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE301",
    image: "./images/products/ecg-se301.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "12 Derivaciones Touch",
    microDesc: "Ultracompacto con pantalla táctil a color de 5\", algoritmo Glasgow/SEMIP y exportación PDF/DICOM.",
    pills: ["12 Derivaciones", "Pantalla Touch 5\"", "Garantía 12 Meses"],
    specs: [
      { label: "Derivaciones", value: "Adquisición simultánea de las 12 derivaciones estándar con interpretación" },
      { label: "Pantalla", value: "TFT color táctil de 5 pulgadas de alta resolución" },
      { label: "Peso y Portabilidad", value: "Menos de 1 kg con batería de litio integrada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Cable de paciente de 10 latiguillos",
      "6 chupas precordiales y 4 pinzas de extremidades",
      "Papel térmico y batería recargable"
    ],
    regulatory: "Certificado bajo norma NTC-IEC 60601-2-25 y Resolución 3100 de 2019."
  },
  {
    id: "prod-ecg-se1201",
    name: "Electrocardiógrafo de 12 Canales EDAN SE-1201 PRO",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE1201-PRO",
    image: "./images/products/ecg-se1201-pro.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "12 Canales + Teclado",
    microDesc: "Electrocardiógrafo avanzado de 12 canales con pantalla abatible a color, teclado alfanumérico e impresión A4.",
    pills: ["12 Canales Simultáneos", "Impresión A4 Completa", "Garantía 12 Meses"],
    specs: [
      { label: "Impresión", value: "Registrador térmico de formato amplio A4 para las 12 derivaciones simultáneas" },
      { label: "Algoritmo Clínico", value: "Interpretación automática Glasgow validada por edad y género" },
      { label: "Memoria y Red", value: "Almacenamiento interno para más de 500 estudios y exportación USB/LAN/WiFi" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Cable de paciente de 12 derivaciones con protección contra desfibrilación",
      "Set completo de electrodos precordiales y de miembros",
      "Paquete de papel termosensible Z-fold"
    ],
    regulatory: "Cumplimiento normativo para servicios de cardiología, consulta externa y hospitalización."
  },
  {
    id: "prod-ecg-se3",
    name: "Electrocardiógrafo Digital de 3 Canales EDAN SE-3",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE3-3CH",
    image: "./images/products/ecg-se3.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Alta Confiabilidad",
    microDesc: "Electrocardiógrafo de 3 canales con pantalla plegable LCD, filtros digitales avanzados y batería integrada.",
    pills: ["3 Canales Impresión", "12 Derivaciones", "Garantía 12 Meses"],
    specs: [
      { label: "Registro", value: "12 derivaciones simultáneas con impresión térmica nítida en 3 canales (80 mm)" },
      { label: "Filtros Digitales", value: "Filtro AC, EMG y deriva de línea base para trazos libres de ruido" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Cable ECG de 10 puntas",
      "Electrodos de succión y pinzas de extremidades",
      "Rollo de papel térmico de 80 mm"
    ],
    regulatory: "Registro INVIMA vigente y certificado de calibración metrológica inicial incluido."
  },
  {
    id: "prod-ecg-se1200",
    name: "Electrocardiógrafo de 12 Canales EDAN SE-1200 Express",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE1200-EXP",
    image: "./images/products/ecg-se1200.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "12 Canales A4 + Glasgow",
    microDesc: "Electrocardiógrafo clínico de 12 canales con pantalla color de 8\", teclado alfanumérico, algoritmo Glasgow e impresora A4.",
    pills: ["12 Canales A4", "Algoritmo Glasgow", "Garantía 12 Meses"],
    specs: [
      { label: "Adquisición", value: "12 derivaciones simultáneas con frecuencia de muestreo de 16.000 Hz y detección de marcapasos" },
      { label: "Impresión y Archivo", value: "Registrador térmico formato A4/Carta (210 mm) y memoria para 800 ECGs" },
      { label: "Conectividad", value: "Exportación PDF/XML/SCP/DICOM vía USB, LAN o Wi-Fi" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable troncal ECG de 10 latiguillos", "6 chupas precordiales y 4 pinzas de extremidades", "Resma de papel Z-fold A4"],
    regulatory: "Cumple norma NTC-IEC 60601-2-25 y Resolución 3100 de 2019."
  },
  {
    id: "prod-ecg-se601c",
    name: "Electrocardiógrafo Digital de 6 Canales EDAN SE-601C",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE601C",
    image: "./images/products/ecg-se601c.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "6 Canales • 110 mm",
    microDesc: "Electrocardiógrafo compacto de 6 canales con pantalla LCD color de 5.7\", teclado completo e interpretación automática SEMIP.",
    pills: ["6 Canales Simultáneos", "Papel 110 mm", "Garantía 12 Meses"],
    specs: [
      { label: "Registro", value: "Adquisición de 12 derivaciones e impresión térmica de 3/6 canales en papel de 110 mm" },
      { label: "Almacenamiento", value: "Memoria interna para 200 exámenes con transferencia USB a PC" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable ECG de 10 puntas", "Juego completo de chupas y pinzas", "Papel termosensible de 110 mm"],
    regulatory: "Registro INVIMA vigente para consulta externa, medicina interna y urgencias."
  },
  {
    id: "prod-ecg-se1",
    name: "Electrocardiógrafo Portátil de 1 Canal EDAN SE-1",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "EDAN Instruments",
    sku: "EDAN-SE1-1CH",
    image: "./images/products/ecg-se1.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Ultraportátil 1 Canal",
    microDesc: "Electrocardiógrafo compacto de 1 canal con filtros digitales anti-interferencia, batería recargable e impresión de 50 mm.",
    pills: ["Papel 50 mm", "Batería Integrada", "Garantía 12 Meses"],
    specs: [
      { label: "Impresión", value: "Registrador térmico de alta resolución en papel de 50 mm con modo automático y manual" },
      { label: "Filtros", value: "Filtros digitales EMG, AC y línea base con protección contra desfibrilación" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable paciente ECG 10 latiguillos", "Chupas precordiales, pinzas y rollo de papel 50 mm"],
    regulatory: "Ideal para consultorios médicos, atención domiciliaria y brigadas bajo Res. 3100."
  },
  {
    id: "prod-ecg-mindray-r3",
    name: "Electrocardiógrafo Digital de 3 Canales Mindray BeneHeart R3",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "Mindray Medical",
    sku: "MINDRAY-BHR3",
    image: "./images/products/ecg-mindray-r3.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Algoritmo Glasgow • 1.2 kg",
    microDesc: "Electrocardiógrafo ultraligero de 3 canales con pantalla a color de 5\", análisis Glasgow y soporte para papel en rollo o Z-fold.",
    pills: ["Peso 1.2 kg", "Algoritmo Glasgow", "Garantía 12 Meses"],
    specs: [
      { label: "Diagnóstico", value: "Algoritmo de interpretación clínica de la Universidad de Glasgow integrado" },
      { label: "Impresión", value: "Papel térmico de 80 mm en rollo o Z-fold con vista previa en pantalla antes de imprimir" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable ECG Mindray de 10 latiguillos", "Juego de electrodos precordiales y pinzas", "Batería de litio recargable"],
    regulatory: "Cumple Resolución 3100 de 2019 con entrega de certificado metrológico."
  },
  {
    id: "prod-ecg-mindray-r12",
    name: "Electrocardiógrafo de 12 Canales Mindray BeneHeart R12",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "Mindray Medical",
    sku: "MINDRAY-BHR12",
    image: "./images/products/ecg-mindray-r12.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "12 Canales + Arritmias",
    microDesc: "Electrocardiógrafo de 12 canales con pantalla de 8\", análisis Glasgow, vista previa en tiempo real y conectividad DICOM/HL7.",
    pills: ["Pantalla 8\" Color", "Impresión A4", "Garantía 12 Meses"],
    specs: [
      { label: "Velocidad de Arranque", value: "Encendido en menos de 7 segundos con diagrama anatómico de colocación de electrodos" },
      { label: "Capacidad", value: "Almacenamiento interno de hasta 800 estudios con exportación PDF/XML" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable ECG 10 puntas resistente a desfibrilación", "Electrodos reutilizables y papel A4"],
    regulatory: "Certificado para servicios de cardiología, urgencias y cuidado crítico."
  },
  {
    id: "prod-ecg-comen-cm300",
    name: "Electrocardiógrafo Digital de 3 Canales Comen CM300",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "Comen Medical",
    sku: "COMEN-CM300",
    image: "./images/products/ecg-comen-cm300.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "3 Canales + 12 Deriv.",
    microDesc: "Electrocardiógrafo portátil de 3 canales con pantalla LCD, filtros digitales avanzados, interpretación automática e impresora térmica.",
    pills: ["3 Canales 80 mm", "Memoria 300 ECGs", "Garantía 12 Meses"],
    specs: [
      { label: "Adquisición", value: "12 derivaciones simultáneas con análisis automático de parámetros y arritmias" },
      { label: "Batería", value: "Batería Li-ion recargable con capacidad para más de 200 registros continuos" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable de paciente de 10 latiguillos", "Set de 6 chupas y 4 pinzas", "Rollo de papel 80 mm"],
    regulatory: "Cumple Resolución 3100 de 2019 para consultorios, urgencias y hospitales."
  },
  {
    id: "prod-ecg-comen-cm1200",
    name: "Electrocardiógrafo de 12 Canales Comen CM1200",
    category: "electrocardiografos",
    categoryLabel: "Electrocardiógrafos",
    brand: "Comen Medical",
    sku: "COMEN-CM1200",
    image: "./images/products/ecg-comen-cm1200.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "Pantalla Táctil 12.1\"",
    microDesc: "Electrocardiógrafo de altas prestaciones con pantalla táctil abatible de 12.1\", impresora A4 anti-atasco y análisis avanzado.",
    pills: ["Pantalla Abatible 12.1\"", "Impresión A4", "Garantía 12 Meses"],
    specs: [
      { label: "Visualización", value: "Pantalla táctil LED de 12.1 pulgadas abatible hasta 90° para las 12 ondas simultáneas" },
      { label: "Flujo Digital", value: "Almacenamiento de miles de registros y exportación directa a PDF/DICOM/HL7" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable ECG de 10 derivaciones con protección", "Electrodos precordiales y de extremidades", "Papel Z-fold A4"],
    regulatory: "Habilitado para unidades cardiovasculares y consulta de cardiología bajo Res. 3100."
  },

  // =====================================================================
  // 5. INCUBADORAS (GENERALES Y DE TRANSPORTE UNIFICADAS)
  // =====================================================================
  {
    id: "prod-incubadora-yp800",
    name: "Incubadora Neonatal Estacionaria Ningbo David YP-800",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-YP800-NEO",
    image: "./images/products/incubadora-yp800.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "UCI Neonatal",
    microDesc: "Incubadora neonatal con servocontrol de temperatura de aire/piel, humedad servocontrolada y doble pared.",
    pills: ["Servocontrol Aire/Piel", "Control Humedad", "Garantía 12 Meses"],
    specs: [
      { label: "Control Térmico y Humedad", value: "Servocontrol por microprocesador de temperatura (aire/piel) y humedad relativa" },
      { label: "Cúpula Acrílica", value: "Doble pared con cortina de aire térmica para minimizar pérdida de calor" },
      { label: "Inclinación de Cuna", value: "Ajuste suave y continuo de posición Trendelenburg y Anti-Trendelenburg" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Sensores de temperatura cutánea neonatal",
      "Colchón hipoalergénico radiolúcido",
      "Base rodante con gabinete y frenos"
    ],
    regulatory: "Cumple estándares de habilitación Resolución 3100 de 2019 para UCI Neonatal y Salas de Parto."
  },
  {
    id: "prod-incubadora-ti2000",
    name: "Incubadora de Transporte Neonatal Vehicular TI-2000",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-TI2000-ACDC",
    image: "./images/products/incubadora-ti2000.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Transporte TAM AC/DC",
    microDesc: "Incubadora de traslado neonatal operación dual AC/DC 12V/24V con carro amortiguado para ambulancia.",
    pills: ["Operación AC/DC 12V", "Criterio 33.1 TAM", "Garantía 12 Meses"],
    specs: [
      { label: "Control Térmico", value: "Servocontrol para modo aire y modo piel (servo skin) durante el traslado" },
      { label: "Alimentación Tri-Modo", value: "Red 110V/220V AC, batería interna recargable y conexión 12V/24V DC de ambulancia" },
      { label: "Carro Vehicular", value: "Carro plegable telescópico con sistema de amortiguación y anclaje" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Sonda de temperatura cutánea neonatal",
      "Lámpara LED de observación",
      "Carro rodante de traslado para ambulancia"
    ],
    regulatory: "Cumple Criterio 33.1 de la Resolución 3100 de 2019 para traslado neonatal en Ambulancias TAM."
  },
  {
    id: "prod-incubadora-ti2100b",
    name: "Incubadora de Transporte Neonatal Avanzada TI-2100B",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-TI2100B",
    image: "./images/products/incubadora-ti2100b.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Importación Directa",
    badge: "Doble Pared Térmica",
    microDesc: "Incubadora de transporte intrahospitalario y de ambulancia con doble pared y batería de alta autonomía.",
    pills: ["Doble Pared Acrílica", "Batería Extendida", "Garantía 12 Meses"],
    specs: [
      { label: "Aislamiento", value: "Cúpula de doble pared con acceso frontal y lateral para intubación" },
      { label: "Monitoreo Térmico", value: "Pantallas LED independientes para temperatura seteada, aire, piel y batería" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Carro colapsable de aleación de aluminio",
      "Soporte para cilindros de oxígeno",
      "Atril portasuero integrado"
    ],
    regulatory: "Certificada bajo normativa internacional IEC 60601-2-20 y Resolución 3100 de 2019."
  },
  {
    id: "prod-incubadora-yp3000",
    name: "Incubadora Neonatal Avanzada Ningbo David YP-3000 (Con Cuna Radiante Integrada)",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-YP3000-HYB",
    image: "./images/products/incubadora-yp3000.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Híbrida UCI Neonatal",
    microDesc: "Incubadora neonatal de alta gama con doble pared, servocontrol de temperatura, humedad y O2, báscula integrada y elevación eléctrica.",
    pills: ["Control O2 & Humedad", "Báscula Integrada", "Garantía 12 Meses"],
    specs: [
      { label: "Sistema Térmico", value: "Microprocesador dual con servocontrol de aire, piel (doble sensor), humedad y concentración de O2" },
      { label: "Cúpula y Cama", value: "Doble pared térmica abatible, colchón con inclinación eléctrica ±12° y bandeja RX integrada" },
      { label: "Monitoreo", value: "Pantalla LCD a color con gráficas de tendencia térmica de hasta 72 horas y pesaje automático" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensores de temperatura cutánea neonatal", "Colchón hipoalergénico y módulo de pesaje integrado", "Base motorizada de altura regulable"],
    regulatory: "Cumple Resolución 3100 de 2019 para Unidades de Cuidado Intensivo Neonatal (UCIN)."
  },
  {
    id: "prod-incubadora-yp90a",
    name: "Incubadora Neonatal Estacionaria Ningbo David YP-90A / YP-920",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-YP90A-920",
    image: "./images/products/incubadora-yp90a.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Estándar Hospitalario",
    microDesc: "Incubadora infantil clásica con control de temperatura de aire y piel por microcomputador, humedad natural y alarma de fallos.",
    pills: ["Modo Aire & Piel", "6 Ventanas de Acceso", "Garantía 12 Meses"],
    specs: [
      { label: "Control de Temperatura", value: "Servocontrol dual independiente (aire y piel) con visualización LED digital de alta visibilidad" },
      { label: "Seguridad", value: "Alarma de sobretemperatura >38°C, desviación térmica, fallo de sensor y corte eléctrico" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensor de temperatura de piel neonatal", "Gabinete inferior rodante con cajones", "Atril portasuero"],
    regulatory: "Certificada bajo estándares IEC 60601-2-19 y Resolución 3100 de 2019."
  },
  {
    id: "prod-incubadora-yp2000",
    name: "Incubadora Neonatal de Doble Pared Ningbo David YP-2000",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-YP2000",
    image: "./images/products/incubadora-yp2000.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Doble Pared + Humedad",
    microDesc: "Incubadora neonatal con cúpula de doble pared térmica, servocontrol de humedad relativa y cajón radiográfico integrado.",
    pills: ["Doble Pared Térmica", "Humedad Servocontrol", "Garantía 12 Meses"],
    specs: [
      { label: "Control Ambiental", value: "Servocontrol de temperatura aire/piel y humedad relativa con depósito esterilizable" },
      { label: "Acceso Clínico", value: "Cúpula de doble pared con apertura lateral y bandeja para toma de rayos X sin sacar al bebé" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensores de piel, colchón neonatal y tanque de humedad", "Pedestal con gabinete de almacenamiento"],
    regulatory: "Registro INVIMA vigente para salas de recién nacidos, cuidado intermedio y UCIN."
  },
  {
    id: "prod-cuna-hkn93c",
    name: "Cuna de Calor Radiante Neonatal Ningbo David HKN-93C",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-HKN93C",
    image: "./images/products/cuna-hkn93c.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Salas de Parto & Reanimación",
    microDesc: "Lámpara de calor radiante neonatal con modos precalentamiento, manual y servocontrol de piel, temporizador APGAR y fototerapia.",
    pills: ["Temporizador APGAR", "Cabezal Rotatorio", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Calefacción", value: "Precalentamiento, control manual de potencia y servocontrol por sensor de piel" },
      { label: "Ergonomía en Parto", value: "Cabezal calefactor orientable ±90° para toma de radiografías y panel acrílico abatible" },
      { label: "Asistencia Neonatal", value: "Temporizador APGAR integrado con alertas a 1, 5 y 10 minutos y luz de examinación" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensor de temperatura de piel neonatal", "Bandeja para chasis de rayos X y atril de sueros", "Soporte para cilindros de O2 y succionador opcional"],
    regulatory: "Exigida en salas de parto, cesárea y reanimación neonatal según Resolución 3100."
  },
  {
    id: "prod-cuna-hkn9010",
    name: "Cuna de Calor Radiante Avanzada Ningbo David HKN-9010",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-HKN9010",
    image: "./images/products/cuna-hkn9010.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Reanimación + Fototerapia",
    microDesc: "Estación de cuidado abierto neonatal con unidad de fototerapia LED integrada, mezclador de oxígeno/aire y succión de baja presión.",
    pills: ["Fototerapia Integrada", "Control Servo Piel", "Garantía 12 Meses"],
    specs: [
      { label: "Cuidado Integral", value: "Calefacción radiante infrarroja de respuesta rápida con fototerapia superior integrada" },
      { label: "Ajustes Clínicos", value: "Inclinación continua de cuna, temporizador APGAR y alarma térmica multinivel" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sonda térmica cutánea", "Colchón impermeable y barandas abatibles transparentes"],
    regulatory: "Cumple estándares de habilitación Resolución 3100 para atención neonatal."
  },
  {
    id: "prod-fototerapia-xhz90",
    name: "Lámpara de Fototerapia Neonatal LED Ningbo David XHZ-90 / XHZ-90L",
    category: "incubadoras",
    categoryLabel: "Incubadoras",
    brand: "Ningbo David Medical",
    sku: "DAVID-XHZ90-LED",
    image: "./images/products/fototerapia-xhz90.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Tratamiento Ictericia LED",
    microDesc: "Unidad móvil de fototerapia con fuente LED azul de alta irradiancia (400-550 nm) para tratamiento eficaz de hiperbilirrubinemia.",
    pills: ["LED Vida >20.000 h", "Altura Ajustable", "Garantía 12 Meses"],
    specs: [
      { label: "Espectro Terapéutico", value: "LEDs azules de alta eficiencia (pico 450-470 nm) libres de radiación UV/infrarroja" },
      { label: "Posicionamiento", value: "Pedestal rodante con ajuste telescópico de altura e inclinación para usar sobre incubadora" },
      { label: "Temporizador", value: "Contador digital de tiempo de terapia y vida útil acumulada de los LEDs" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Base móvil con ruedas con freno", "Antifaz protector ocular neonatal de muestra"],
    regulatory: "Registro sanitario INVIMA vigente para pediatría, neonatología y UCIN."
  },

  // =====================================================================
  // 6. MONITORES MULTIPARÁMETROS
  // =====================================================================
  {
    id: "prod-monitor-x8",
    name: "Monitor Multiparámetros EDAN X8 (Con / Sin Capnografía CO2)",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "001-0001-000011",
    image: "./images/products/monitor-x8-co2.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Lo Más Vendido",
    microDesc: "Monitor táctil de 8\" con ECG, SpO2, PNI, Resp, Temp y opción de Capnografía EtCO2 para UCI y ambulancias.",
    pills: ["Pantalla Táctil 8\"", "Opción Capnografía CO2", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla Principal", value: "TFT color de 8 pulgadas antirreflejo con interfaz táctil y perilla rotatoria" },
      { label: "Parámetros", value: "ECG (3/5 derivaciones), SpO2, PNI, 2-Temp, Resp y módulo EtCO2 opcional" },
      { label: "Análisis Clínico", value: "Detección de 33 tipos de arritmias cardíacas y análisis de segmento ST" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Sensores completos SpO2, brazalete PNI, cable ECG y sensor de temperatura",
      "Línea de muestreo y trampa de agua CO2 (en versión con capnografía)",
      "Batería de litio recargable"
    ],
    regulatory: "Cumple Resolución 3100 de 2019 para UCI, cirugía, urgencias y ambulancias TAB/TAM."
  },
  {
    id: "prod-monitor-im20",
    name: "Monitor de Signos Vitales de Transporte EDAN iM20",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-IM20-EN1789",
    image: "./images/products/monitor-im20.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Norma Vehicular EN1789",
    microDesc: "Monitor ultraligero certificado norma EN1789 para ambulancias TAB/TAM con protección IP44 y caídas de 1.2m.",
    pills: ["Norma EN1789", "IP44 Anticaídas", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros Estándar", value: "ECG, SpO2, PNI, Temp dual y Respiración (Cumple Criterio 31.25 Res. 3100)" },
      { label: "Resistencia Vehicular", value: "Certificación EN1789 contra vibración severa y caídas de 1.2 m, IP44" },
      { label: "Autonomía", value: "Batería recargable Li-ion con más de 4.5 horas continuas de uso" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Brazalete PNI adulto con manguera reforzada",
      "Sensor de SpO2 reutilizable y cable ECG de 5 puntas",
      "Soporte de fijación vehicular"
    ],
    regulatory: "Específicamente diseñado para cumplir el numeral 31.25 de la Resolución 3100 en ambulancias."
  },
  {
    id: "prod-monitor-x12",
    name: "Monitor Multiparámetros Clínico de 12\" EDAN X12 (Opción IBP / CO2)",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-X12-UCI",
    image: "./images/products/monitor-x12.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Hospitalario",
    badge: "Pantalla 12.1\" UCI",
    microDesc: "Monitor hospitalario de 12.1\" para cuidado crítico y quirófano con opción de presión invasiva (IBP) y CO2.",
    pills: ["Pantalla Táctil 12.1\"", "UCI & Quirófano", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla", value: "TFT LCD táctil de 12.1 pulgadas con visualización de hasta 8 curvas simultáneas" },
      { label: "Parámetros Avanzados", value: "ECG, SpO2, PNI, Resp, 2-Temp y módulos opcionales de 2-IBP, Gasto Cardíaco y EtCO2" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Kit completo de accesorios adulto/pediátrico (ECG, SpO2, PNI, Temp)",
      "Batería de respaldo de litio",
      "Cable de poder grado hospitalario"
    ],
    regulatory: "Registro INVIMA vigente y protocolo metrológico incluido bajo Resolución 3100."
  },
  {
    id: "prod-monitor-im3s",
    name: "Monitor de Signos Vitales y Triage EDAN iM3S Quick Temp",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-IM3S-TRIAGE",
    image: "./images/products/monitor-im3s.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Triage & Hospitalización",
    microDesc: "Monitor de ronda clínica y triage con pantalla táctil de 8\", SpO2, PNI y termometría rápida.",
    pills: ["Ronda & Triage", "Termometría Rápida", "Garantía 12 Meses"],
    specs: [
      { label: "Modos de Trabajo", value: "Modo Ronda, Modo Triage (Spot-Check) y Modo Monitoreo Continuo" },
      { label: "Pantalla", value: "Pantalla a color táctil de 8 pulgadas ultra delgada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Brazalete PNI adulto, sensor SpO2 y sonda de temperatura rápida",
      "Batería recargable integrada"
    ],
    regulatory: "Ideal para urgencias, consulta prioritaria y pisos de hospitalización según Res. 3100."
  },
  {
    id: "prod-monitor-im70",
    name: "Monitor Multiparámetros Modular EDAN iM70 (Con / Sin Multigas)",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-IM70-UCI",
    image: "./images/products/monitor-im70.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Hospitalario",
    badge: "UCI & Quirófano 12.1\"",
    microDesc: "Monitor de alta complejidad de 12.1\" táctil con opción de 2-IBP, Gasto Cardíaco, Capnografía CO2 y Agentes Anestésicos.",
    pills: ["Pantalla Touch 12.1\"", "Opción Multigas / IBP", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla", value: "TFT LCD táctil a color de 12.1 pulgadas con despliegue de hasta 11 curvas" },
      { label: "Parámetros Críticos", value: "ECG (3/5/12 deriv.), SpO2, PNI, Resp, 2-Temp y módulos IBP, EtCO2, CO y Multigas" },
      { label: "Diseño Silencioso", value: "Operación sin ventilador (fanless) ideal para salas de cirugía y UCI" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensores SpO2, cable ECG, brazalete PNI y sonda de temperatura", "Batería Li-ion y soporte de pared o pedestal rodante"],
    regulatory: "Cumple Resolución 3100 de 2019 para UCI adulto/pediátrica/neonatal y quirófanos."
  },
  {
    id: "prod-monitor-im60",
    name: "Monitor Multiparámetros Clínico EDAN iM60",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-IM60-10",
    image: "./images/products/monitor-im60.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Pantalla Táctil 10.4\"",
    microDesc: "Monitor multiparámetros de 10.4\" para cuidado intermedio y hospitalización con detección de arritmias y opción IBP/CO2.",
    pills: ["Pantalla Touch 10.4\"", "Diseño Fanless", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros", value: "ECG, SpO2, PNI, Resp, 2-Temp con expansión opcional a 2-IBP y Capnografía" },
      { label: "Conectividad", value: "LAN, Wi-Fi opcional y comunicación bidireccional HL7 con central de monitoreo" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Kit completo de sensores adulto/pediátrico", "Batería interna recargable"],
    regulatory: "Registro sanitario INVIMA vigente y protocolo metrológico incluido."
  },
  {
    id: "prod-monitor-im50",
    name: "Monitor Multiparámetros Portátil EDAN iM50 (Con / Sin EtCO2)",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-IM50-8",
    image: "./images/products/monitor-im50.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Urgencias & Traslado 8.4\"",
    microDesc: "Monitor compacto de 8.4\" con manija integrada, impresora térmica opcional y capnografía Sidestream/Mainstream.",
    pills: ["Pantalla 8.4\" Color", "Opción EtCO2 / IBP", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros Base", value: "ECG 3/5 derivaciones, SpO2 EDAN/Nellcor, PNI iCUFS, Respiración y 2-Temperatura" },
      { label: "Expansión", value: "Puerto para 2 canales de Presión Invasiva (IBP) y Capnografía EtCO2" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Brazalete PNI, sensor SpO2, cable ECG y sensor de temperatura", "Batería recargable de litio"],
    regulatory: "Apto para urgencias, hospitalización, recuperación y ambulancias TAB/TAM Res. 3100."
  },
  {
    id: "prod-monitor-x10",
    name: "Monitor Multiparámetros Ultradelgado EDAN X10",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-X10-TOUCH",
    image: "./images/products/monitor-x10.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Ultradelgado 10.1\" Touch",
    microDesc: "Monitor de nueva generación Serie X con pantalla táctil capacitiva de 10.1\", interfaz gestual y análisis de arritmias avanzado.",
    pills: ["Pantalla Touch 10.1\"", "Serie X Ultradelgada", "Garantía 12 Meses"],
    specs: [
      { label: "Interfaz", value: "Pantalla capacitiva de 10.1 pulgadas de grado médico con gestos táctiles y vistas personalizables" },
      { label: "Algoritmos", value: "ECG iSEAP™ (33 arritmias), PNI iCUFS™ e índice de perfusión en SpO2" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Accesorios completos adulto/pediátrico", "Batería recargable de larga duración"],
    regulatory: "Cumple Resolución 3100 de 2019 para UCI, urgencias y cirugía."
  },
  {
    id: "prod-monitor-elite-v8",
    name: "Monitor Modular de Cuidado Crítico EDAN Elite V8",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "EDAN Instruments",
    sku: "EDAN-ELITE-V8",
    image: "./images/products/monitor-elite-v8.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Importación Directa",
    badge: "Modular 17\" UCI Alta Comp.",
    microDesc: "Monitor modular insignia de 17\" con módulo de transporte extraíble, hasta 8-IBP, Gasto Cardíaco, BIS, NMT y Agentes Anestésicos.",
    pills: ["Pantalla 17\" Full Touch", "Módulos Plug & Play", "Garantía 12 Meses"],
    specs: [
      { label: "Modularidad Total", value: "Rack para 8 módulos plug-and-play incluyendo XM-1 de traslado intrahospitalario" },
      { label: "Parámetros Avanzados", value: "ECG 12 deriv., 8-IBP, Gasto Cardíaco (PiCCO/ICG), EtCO2, Multigas O2, BIS y NMT" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Módulo multiparámetro principal XM", "Cables y sensores completos para UCI/Quirófano"],
    regulatory: "Habilitado para Unidades de Cuidado Intensivo de Alta Complejidad y Cirugía Cardiovascular."
  },
  {
    id: "prod-monitor-mindray-umec120",
    name: "Monitor Multiparámetros Mindray uMEC 12 / uMEC 120",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "Mindray Medical",
    sku: "MINDRAY-UMEC120",
    image: "./images/products/monitor-mindray-umec120.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Pantalla 12.1\" Mindray",
    microDesc: "Monitor clínico confiable de 12.1\" con algoritmos patentados Mindray para ECG, SpO2 y PNI rápida con bajo consumo eléctrico.",
    pills: ["Pantalla 12.1\" LED", "Batería hasta 8h", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros", value: "ECG 3/5 derivaciones, SpO2 Mindray, PNI, Resp, 2-Temp y opción IBP / EtCO2" },
      { label: "Autonomía", value: "Diseño de bajo consumo sin ventilador con batería de hasta 8 horas continuas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Set de accesorios originales Mindray (SpO2, ECG, PNI, Temp)", "Batería de litio recargable"],
    regulatory: "Cumple Resolución 3100 de 2019 para hospitalización, recuperación y urgencias."
  },
  {
    id: "prod-monitor-mindray-epm12m",
    name: "Monitor Multiparámetros Modular Mindray ePM 12M",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "Mindray Medical",
    sku: "MINDRAY-EPM12M",
    image: "./images/products/monitor-mindray-epm12m.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Hospitalario",
    badge: "Modular Touch 12.1\"",
    microDesc: "Monitor modular con pantalla táctil capacitiva de 12.1\", tecnología anti-artefactos CrozFusion™ y módulos plug-and-play CO2/IBP.",
    pills: ["CrozFusion™ Anti-Ruido", "Módulos IBP/CO2/AG", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología Clínica", value: "Fusión de señales ECG+SpO2 CrozFusion™ que reduce falsas alarmas en movimiento" },
      { label: "Expansión Modular", value: "Ranura integrada para módulos Mindray de EtCO2, IBP, Gasto Cardíaco y Agentes" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Accesorios clínicos adulto/pediátrico/neonatal", "Batería Li-ion y soporte rodante opcional"],
    regulatory: "Registro INVIMA vigente para UCI, quirófanos y salas de recuperación."
  },
  {
    id: "prod-monitor-comen-c50",
    name: "Monitor Multiparámetros Clínico Comen C50",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "Comen Medical",
    sku: "COMEN-C50-MON",
    image: "./images/products/monitor-comen-c50.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Pantalla Táctil 10.4\"",
    microDesc: "Monitor de signos vitales de 10.4\" con interfaz táctil intuitiva, análisis de arritmias y opción de capnografía e IBP.",
    pills: ["Pantalla Touch 10.4\"", "Opción CO2 & IBP", "Garantía 12 Meses"],
    specs: [
      { label: "Despliegue", value: "Pantalla TFT táctil de 10.4 pulgadas con fuente grande para visualización a distancia" },
      { label: "Parámetros", value: "ECG, SpO2, PNI, Resp, 2-Temp con módulos opcionales de EtCO2 y 2-IBP" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Kit completo de sensores y cables", "Batería interna recargable"],
    regulatory: "Apto para habilitación de servicios hospitalarios y ambulancias Res. 3100."
  },
  {
    id: "prod-monitor-comen-star8000e",
    name: "Monitor de Signos Vitales Comen Star8000E",
    category: "monitores",
    categoryLabel: "Monitores Multiparámetros",
    brand: "Comen Medical",
    sku: "COMEN-STAR8000E",
    image: "./images/products/monitor-comen-star8000e.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "12.1\" Cabecera & UCI",
    microDesc: "Monitor de cabecera de 12.1\" sin ventilador, silencioso, con función de presión asistida para venopunción y red HL7.",
    pills: ["Pantalla 12.1\" Touch", "Modo Venopunción", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros", value: "ECG (3/5/12 deriv.), SpO2, PNI con asistencia de venopunción, Resp y 2-Temp" },
      { label: "Conectividad", value: "Protocolo HL7 bidireccional para integración con central de enfermería" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cables ECG, sensor SpO2, brazalete PNI y sensor de temperatura", "Batería recargable de respaldo"],
    regulatory: "Cumplimiento normativo INVIMA y Resolución 3100 de 2019."
  },

  // =====================================================================
  // 7. MÁQUINAS DE ANESTESIA
  // =====================================================================
  {
    id: "prod-anestesia-boaray700",
    name: "Máquina de Anestesia Avanzada Prunus Boaray 700",
    category: "anestesia",
    categoryLabel: "Máquinas de Anestesia",
    brand: "Prunus Medical",
    sku: "PRUNUS-BOARAY-700",
    image: "./images/products/anestesia-boaray700.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Quirófano Alta Complejidad",
    microDesc: "Estación de anestesia con pantalla táctil de 15\", flujómetro electrónico, circuito calefactado y modos ventilatorios UCI.",
    pills: ["Pantalla Touch 15\"", "Circuito Calefactado", "Garantía 12 Meses"],
    specs: [
      { label: "Modos Ventilatorios", value: "VCV, PCV, SIMV-V, SIMV-P, PSV, Manual y Bypass Cardiopulmonar" },
      { label: "Rango de Pacientes", value: "Desde neonatos (VT 20 mL) hasta adultos bariátricos (1500 mL)" },
      { label: "Circuito Respiratorio", value: "Integrado en aluminio/PPSU autoclavable a 134°C con calefacción anti-condensación" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Vaporizador anestésico de alta precisión (Sevoflurano / Isoflurano)",
      "Canister de cal sodada autoclavable con cambio en caliente",
      "Circuitos de paciente adulto y pediátrico"
    ],
    regulatory: "Cumplimiento estricto de estándares de habilitación quirúrgica Resolución 3100 de 2019."
  },
  {
    id: "prod-anestesia-boaray600d",
    name: "Máquina de Anestesia Quirúrgica Prunus Boaray 600D",
    category: "anestesia",
    categoryLabel: "Máquinas de Anestesia",
    brand: "Prunus Medical",
    sku: "PRUNUS-BOARAY-600D",
    image: "./images/products/anestesia-boaray600d.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Doble Posición Vaporizador",
    microDesc: "Estación de anestesia versátil con pantalla táctil a color, doble soporte Selectatec y espirometría.",
    pills: ["Doble Vaporizador", "Adulto / Pediátrico", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla", value: "LCD táctil a color de 10.4 pulgadas con despliegue de bucles de espirometría" },
      { label: "Seguridad de Gases", value: "Sistema hipóxico de proporción O2/N2O que garantiza mínimo 25% de concentración de O2" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Vaporizador anestésico incluido",
      "Sensores de flujo y oxígeno",
      "Mangueras de alta presión para O2, N2O y Aire"
    ],
    regulatory: "Registro sanitario INVIMA vigente, instalación por ingenieros biomédicos e inducción en quirófano."
  },
  {
    id: "prod-anestesia-pumila750d",
    name: "Máquina de Anestesia de Alta Complejidad Prunus Pumila 750D",
    category: "anestesia",
    categoryLabel: "Máquinas de Anestesia",
    brand: "Prunus Medical",
    sku: "PRUNUS-PUMILA-750D",
    image: "./images/products/anestesia-pumila750d.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Quirófano Premium 15\"",
    microDesc: "Estación de anestesia de alta gama con pantalla táctil de 15\", mezclador electrónico de gases, circuito calefactado y espirometría.",
    pills: ["Mezclador Electrónico", "Pantalla Touch 15\"", "Garantía 12 Meses"],
    specs: [
      { label: "Ventilador Integrado", value: "Modos VCV, PCV, PCV-VG, SIMV-V, SIMV-P, PSV, Manual y Bypass con VT desde 15 mL" },
      { label: "Flujómetros", value: "Flujómetro electrónico digital dual con protección hipóxica y respaldo mecánico de O2" },
      { label: "Circuito", value: "Bloque respiratorio integrado calefactado y autoclavable a 134°C" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Vaporizador de alta precisión (Sevoflurano / Isoflurano)", "Mangueras de gases medicinales O2, N2O y Aire", "Canister de cal sodada autoclavable"],
    regulatory: "Cumple Resolución 3100 de 2019 para salas de cirugía de mediana y alta complejidad."
  },
  {
    id: "prod-anestesia-boaray5000d",
    name: "Máquina de Anestesia / Estación Quirúrgica Prunus Boaray 5000D",
    category: "anestesia",
    categoryLabel: "Máquinas de Anestesia",
    brand: "Prunus Medical",
    sku: "PRUNUS-BOARAY-5000D",
    image: "./images/products/anestesia-boaray5000d.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Importación Directa",
    badge: "Estación Avanzada Prunus",
    microDesc: "Sistema avanzado Prunus Serie 5000D con pantalla táctil de alta definición, espirometría en tiempo real y soporte ventilatorio integral.",
    pills: ["Espirometría Avanzada", "Soporte Neonatal-Adulto", "Garantía 12 Meses"],
    specs: [
      { label: "Control Ventilatorio", value: "Modos avanzados VCV, PCV, PRVC, SIMV, APRV/Bi-level y soporte de presión" },
      { label: "Monitoreo Integrado", value: "Bucles P-V / F-V en tiempo real, FiO2 integrada y compensación automática de fugas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Circuitos de paciente adulto y pediátrico", "Sensores de flujo y oxígeno", "Brazo soporte articulado"],
    regulatory: "Registro INVIMA vigente con instalación e inducción por ingeniería biomédica."
  },
  {
    id: "prod-anestesia-mindray-wato-ex35",
    name: "Máquina de Anestesia Mindray WATO EX-35 / EX-20",
    category: "anestesia",
    categoryLabel: "Máquinas de Anestesia",
    brand: "Mindray Medical",
    sku: "MINDRAY-WATO-EX35",
    image: "./images/products/anestesia-mindray-wato-ex35.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Estándar Mindray Quirófano",
    microDesc: "Estación de anestesia compacta y ergonómica con pantalla táctil de 10.4\", doble vaporizador Selectatec y ventilación desde 20 mL.",
    pills: ["VT desde 20 mL", "Doble Vaporizador", "Garantía 12 Meses"],
    specs: [
      { label: "Modos Ventilatorios", value: "VCV, PCV, PSV (con respaldo apnea), SIMV-VC, SIMV-PC y Manual con PEEP electrónica" },
      { label: "Seguridad", value: "Circuito respiratorio autoclavable con sensor de flujo inteligente y bypass de cal sodada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Vaporizador Mindray V60 (Sevoflurano / Isoflurano)", "Mangueras de suministro O2/Aire/N2O y circuito de paciente"],
    regulatory: "Cumple estándares de habilitación quirúrgica Resolución 3100 de 2019."
  },

  // =====================================================================
  // 8. VENTILADORES
  // =====================================================================
  {
    id: "prod-ventilador-t6",
    name: "Ventilador Pulmonar de Transporte y Críticos AMoul T6 (Con Turbina)",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "AMoul Medical",
    sku: "001-0016-000010",
    image: "./images/products/ventilador-t6.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "Turbina Autónoma TAM",
    microDesc: "Ventilación invasiva y no invasiva (adulto, pediátrico y neonatal desde 2mL) con turbina interna autónoma.",
    pills: ["Turbina Autónoma", "Criterio 32.2 TAM", "Garantía 12 Meses"],
    specs: [
      { label: "Generación de Flujo", value: "Turbina interna silenciosa (no requiere cilindro de aire comprimido)" },
      { label: "Modos Ventilatorios", value: "VCV, PCV, PRVC, SIMV, CPAP/PSV, Bi-Level, APRV y VNI" },
      { label: "Volumen Corriente", value: "Desde 2 mL (neonatal) hasta 2200 mL (adulto)" },
      { label: "Autonomía", value: "Batería superior a 5 horas (cumple holgadamente las 4h de la Res. 3100)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Circuitos de paciente adulto, pediátrico y neonatal",
      "Válvula espiratoria autoclavable y sensor de flujo",
      "Soporte de fijación vehicular y manguera de oxígeno"
    ],
    regulatory: "Cumple 100% los numerales 32.2.1 a 32.2.9 y 33.2 de la Resolución 3100 para Ambulancias TAM y UCI."
  },
  {
    id: "prod-ventilador-padus8",
    name: "Ventilador Mecánico de Cuidado Intensivo Prunus Padus 8",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "Prunus Medical",
    sku: "PRUNUS-PADUS-8",
    image: "./images/products/ventilador-padus8.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "UCI Adulto/Pediátrico/Neo",
    microDesc: "Ventilador estacionario de UCI con pantalla táctil de 15.6\", terapia de alto flujo O2 y modos avanzados.",
    pills: ["Pantalla 15.6\" HD", "Alto Flujo HFNC", "Garantía 12 Meses"],
    specs: [
      { label: "Pantalla Clínica", value: "Táctil capacitiva de 15.6 pulgadas rotable para UCI" },
      { label: "Terapias Integradas", value: "Ventilación invasiva, VNI y Terapia de Oxígeno de Alto Flujo (HFNC)" },
      { label: "Herramientas Pulmonares", value: "Maniobras P-V, P0.1, NIF, PEEP intrínseco y destete inteligente" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Carro rodante original con brazo soporte de circuito",
      "Humidificador activo respiratorio",
      "Válvulas espiratorias y sensores de flujo"
    ],
    regulatory: "Habilitado para Unidades de Cuidado Intensivo Adulto, Pediátrico y Neonatal bajo Res. 3100."
  },
  {
    id: "prod-ventilador-padus5",
    name: "Ventilador Mecánico UCI Prunus Padus 5",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "Prunus Medical",
    sku: "PRUNUS-PADUS-5",
    image: "./images/products/ventilador-padus5.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "UCI Invasivo & VNI",
    microDesc: "Ventilador mecánico estacionario con pantalla táctil de 12.1\", modos invasivos/no invasivos y herramientas de protección pulmonar.",
    pills: ["Pantalla Touch 12.1\"", "Adulto / Pediátrico", "Garantía 12 Meses"],
    specs: [
      { label: "Modos Ventilatorios", value: "VCV, PCV, PRVC, SIMV-V, SIMV-P, CPAP/PSV, Bi-Level y Ventilación No Invasiva (VNI)" },
      { label: "Seguridad", value: "Válvula espiratoria desmontable autoclavable con compensación automática de fugas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Carro rodante con brazo articulado", "Humidificador activo y circuito de paciente"],
    regulatory: "Habilitado para Unidades de Cuidado Intensivo e Intermedio bajo Resolución 3100."
  },
  {
    id: "prod-ventilador-amoul-t7",
    name: "Ventilador Pulmonar de Transporte y Emergencias AMoul T7 / T5",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "AMoul Medical",
    sku: "AMOUL-T7-TRANS",
    image: "./images/products/ventilador-amoul-t7.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Clínico",
    badge: "Transporte Terrestre & Aéreo",
    microDesc: "Ventilador de transporte avanzado con turbina interna, certificación para ambulancias y helicópteros, invasivo y no invasivo.",
    pills: ["Turbina Autónoma", "Neo / Ped / Adulto", "Garantía 12 Meses"],
    specs: [
      { label: "Aplicación", value: "Traslado terrestre (TAM), aéreo medicalizado y urgencias intrahospitalarias" },
      { label: "Rango de Paciente", value: "Neonatal, pediátrico y adulto con entrega de volumen desde 2 mL hasta 2200 mL" },
      { label: "Autonomía", value: "Batería Li-ion de alta capacidad con más de 5 horas de operación autónoma" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Soporte vehicular certificado EN1789", "Circuitos paciente adulto/pediátrico y manguera O2"],
    regulatory: "Cumple numerales 32.2 y 33.2 de la Resolución 3100 para Ambulancias Medicalizadas (TAM)."
  },
  {
    id: "prod-ventilador-comen-nv8",
    name: "Ventilador Neonatal y Pediátrico de Alta Frecuencia / VNI Comen NV8",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "Comen Medical",
    sku: "COMEN-NV8-NEO",
    image: "./images/products/ventilador-comen-nv8.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Especializado UCIN",
    microDesc: "Sistema de ventilación neonatal especializado con modos NCPAP, NIPPV, SNIPPV, HFNC y respaldo de apnea para recién nacidos.",
    pills: ["NCPAP / SNIPPV / HFNC", "Sincronización Neonatal", "Garantía 12 Meses"],
    specs: [
      { label: "Modos Neonatales", value: "NCPAP, NIPPV, SNIPPV sincronizado con sensor abdominal y Terapia de Alto Flujo (HFNC)" },
      { label: "Protección Pulmonar", value: "Monitorización precisa de FiO2, presión en vía aérea y compensación de fugas nasales" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Humidificador activo neonatal y carro rodante", "Interfaces nasales y cánulas neonatales"],
    regulatory: "Registro INVIMA vigente para Unidades de Cuidado Intensivo Neonatal (UCIN)."
  },
  {
    id: "prod-ventilador-mindray-sv300",
    name: "Ventilador Mecánico de Cuidado Crítico Mindray SV300",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-SV300",
    image: "./images/products/ventilador-mindray-sv300.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Turbina + Alto Flujo",
    microDesc: "Ventilador de UCI compacto con turbina de alto desempeño, pantalla táctil de 12.1\", modos invasivos, VNI y terapia O2.",
    pills: ["Turbina Silenciosa", "Adulto / Ped / Neo", "Garantía 12 Meses"],
    specs: [
      { label: "Independencia de Aire", value: "Turbina integrada de alta respuesta (funciona sin red de aire medicinal)" },
      { label: "Modos Clínicos", value: "VCV, PCV, PRVC, SIMV, CPAP/PSV, DuoLevel, APRV, VNI y Terapia O2" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Carro rodante original con brazo soporte", "Sensor de flujo, válvula espiratoria y batería dual"],
    regulatory: "Cumple Resolución 3100 de 2019 para UCI, urgencias y traslado intrahospitalario."
  },
  {
    id: "prod-ventilador-mindray-sv600",
    name: "Ventilador Mecánico Avanzado Mindray SV600",
    category: "ventiladores",
    categoryLabel: "Ventiladores",
    brand: "Mindray Medical",
    sku: "MINDRAY-SV600",
    image: "./images/products/ventilador-mindray-sv600.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Importación Directa",
    badge: "UCI Alta Complejidad 15.6\"",
    microDesc: "Ventilador de UCI de alta complejidad con pantalla HD 15.6\", herramienta de reclutamiento PulmoSight™ y destete inteligente.",
    pills: ["PulmoSight™ Tiempo Real", "Monitor 15.6\" Touch", "Garantía 12 Meses"],
    specs: [
      { label: "Herramientas Pulmonares", value: "Visualización gráfica PulmoSight™, maniobra P-V de bajo flujo e índice de destete rápido" },
      { label: "Rango Neonatal-Adulto", value: "Volumen corriente desde 2 mL (opción neonatal) hasta 2000 mL" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Carro rodante de UCI, humidificador activo y módulo EtCO2/SpO2 opcional", "Válvula espiratoria esterilizable en autoclave"],
    regulatory: "Habilitado para Unidades de Cuidado Intensivo Adulto, Pediátrico y Neonatal."
  },

  // =====================================================================
  // 9. SUCCIONADORES
  // =====================================================================
  {
    id: "prod-succionador-sxt5a",
    name: "Succionador Portátil de Urgencias y Ambulancia SXT-5A",
    category: "succionadores",
    categoryLabel: "Succionadores",
    brand: "SMAF / Pulmo-Med",
    sku: "001-0011-000001",
    image: "./images/products/succionador-sxt5a.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Entrega Inmediata",
    badge: "Ambulancias & Urgencias",
    microDesc: "Aspirador eléctrico libre de aceite con frasco de policarbonato autoclavable de 1000 mL y filtro antibacteriano.",
    pills: ["Libre de Aceite", "Frasco 1000 mL", "Garantía 12 Meses"],
    specs: [
      { label: "Bomba de Vacío", value: "Pistón libre de aceite y libre de mantenimiento continuo" },
      { label: "Frasco Recolector", value: "1000 mL en policarbonato autoclavable con válvula anti-desborde" },
      { label: "Peso", value: "4.0 kg ultra compacto para ambulancias TAB/TAM y consultorios" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Mangueras de succión en silicona",
      "Sondas de aspiración y filtros antibacterianos de repuesto",
      "Cable de alimentación"
    ],
    regulatory: "Cumple el numeral 31.4 de la Resolución 3100 de 2019 para dotación de ambulancias y urgencias."
  },
  {
    id: "prod-succionador-yx980d",
    name: "Succionador Quirúrgico Rodante de Alto Vacío YX-980D (Doble Frasco)",
    category: "succionadores",
    categoryLabel: "Succionadores",
    brand: "SMAF / Yuwell",
    sku: "SMAF-YX980D-QUIR",
    image: "./images/products/succionador-yx980d.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Entrega Inmediata",
    badge: "Doble Frasco + Pedal",
    microDesc: "Aspirador quirúrgico de alto flujo con dos frascos graduados de 2500 mL y pedal de accionamiento para cirujano.",
    pills: ["Doble Frasco 2500 mL", "Incluye Pedal", "Garantía 12 Meses"],
    specs: [
      { label: "Capacidad Total", value: "2 frascos de 2500 mL (5000 mL totales) en policarbonato esterilizable" },
      { label: "Control de Operación", value: "Interruptor manual e interruptor de pedal neumático/eléctrico para quirófano" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "2 frascos de 2500 mL con tapas herméticas y flotadores",
      "Pedal de accionamiento quirúrgico",
      "Mangueras de silicona y filtros hidrofóbicos"
    ],
    regulatory: "Certificado para salas de cirugía, salas de parto y procedimientos bajo Resolución 3100."
  },
  {
    id: "prod-succionador-yx930d",
    name: "Succionador Quirúrgico Rodante SMAF YX-930D",
    category: "succionadores",
    categoryLabel: "Succionadores",
    brand: "SMAF / Yuwell",
    sku: "SMAF-YX930D-ROD",
    image: "./images/products/succionador-yx930d.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Entrega Inmediata",
    badge: "Alto Flujo ≥ 30 L/min",
    microDesc: "Aspirador rodante de alto vacío libre de aceite con dos frascos de 2500 mL, vacuómetro frontal y pedal quirúrgico.",
    pills: ["Doble Frasco 2500 mL", "Bomba Libre Aceite", "Garantía 12 Meses"],
    specs: [
      { label: "Capacidad de Vacío", value: "Vacío máximo ≥ 0.09 MPa (680 mmHg) con flujo de aspiración ≥ 30 L/min" },
      { label: "Recipientes", value: "2 frascos graduados de 2500 mL con sistema de cierre anti-desborde" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Pedal de accionamiento", "Mangueras de silicona y filtros antibacterianos"],
    regulatory: "Cumple Resolución 3100 de 2019 para salas de cirugía, urgencias y obstetricia."
  },
  {
    id: "prod-succionador-portatil-bateria",
    name: "Succionador Portátil con Batería Recargable Yuwell 7E-G / 7E-A",
    category: "succionadores",
    categoryLabel: "Succionadores",
    brand: "Yuwell / Pulmo-Med",
    sku: "YUWELL-7EG-BAT",
    image: "./images/products/succionador-portatil-bateria.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Entrega Inmediata",
    badge: "Autonomía Batería + 12V",
    microDesc: "Aspirador portátil eléctrico con batería interna recargable y adaptador vehicular 12V DC para ambulancias y traslado.",
    pills: ["Operación AC / DC 12V", "Batería Integrada", "Garantía 12 Meses"],
    specs: [
      { label: "Alimentación Tri-Modo", value: "Red 110V AC, batería interna recargable (≥30 min continuos) y cable 12V DC ambulancia" },
      { label: "Frasco", value: "1000 mL autoclavable con válvula flotadora de seguridad" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Cable de carga 110V y adaptador 12V vehicular", "Mangueras de succión y filtros hidrofóbicos"],
    regulatory: "Cumple numeral 31.4 de la Resolución 3100 para Ambulancias TAB/TAM y urgencias."
  },
  {
    id: "prod-succionador-alto-vacio",
    name: "Aspirador Quirúrgico de Alto Vacío 7A-23B / 7A-23D",
    category: "succionadores",
    categoryLabel: "Succionadores",
    brand: "Yuwell / Pulmo-Med",
    sku: "YUWELL-7A23D",
    image: "./images/products/succionador-quirurgico-alto-vacio.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Entrega Inmediata",
    badge: "Quirófano & Partos",
    microDesc: "Succionador quirúrgico de pie con doble frasco de 2500 mL, bajo nivel de ruido (≤60 dB) y regulación fina de vacío.",
    pills: ["Bajo Ruido ≤60 dB", "Doble Frasco 2.5L", "Garantía 12 Meses"],
    specs: [
      { label: "Desempeño", value: "Bomba de pistón libre de aceite con flujo ≥ 20-32 L/min y vacío regulable hasta 680 mmHg" },
      { label: "Operación", value: "Interruptor manual y pedal resistente al agua para cirugía" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["2 frascos de policarbonato de 2500 mL", "Pedal quirúrgico y juego de mangueras"],
    regulatory: "Habilitado para salas de cirugía, procedimientos y hospitalización bajo Res. 3100."
  },

  // =====================================================================
  // 10. EQUIPOS DE DIAGNÓSTICO (NUEVA SUBCATEGORÍA ACORDADA EN REUNIÓN [01:01:30])
  // =====================================================================
  {
    id: "prod-diag-tensiometro",
    name: "Tensiómetro Clínico Adulto y Pediátrico (Digital / Aneroide)",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Línea Diagnóstica CliniK",
    sku: "DIAG-TENS-AD-PED",
    image: "./images/products/diag-tensiometro.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Adulto & Pediátrico",
    microDesc: "Tensiómetros clínicos de alta exactitud para consultorio, hospitalización y ambulancias TAB/TAM.",
    pills: ["Adulto & Pediátrico", "Alta Exactitud", "Garantía 12 Meses"],
    specs: [
      { label: "Presentaciones Disponibles", value: "Tensiómetro digital automático de brazo, aneroide manual y de pared/rodante" },
      { label: "Brazaletes", value: "Tallas adulto, pediátrico, neonatal y obeso libres de látex" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Brazalete reutilizable de nylon lavable",
      "Estuche de protección",
      "Certificado de calibración metrológica (opcional/incluido según requerimiento)"
    ],
    regulatory: "Cumple numeral 31.3 de la Resolución 3100 de 2019 para dotación hospitalaria y ambulancias."
  },
  {
    id: "prod-diag-fonendoscopio",
    name: "Fonendoscopio Clínico de Doble Servicio Adulto / Pediátrico",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Línea Diagnóstica CliniK",
    sku: "DIAG-FONENDO-PRO",
    image: "./images/products/diag-fonendoscopio.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Acústica de Alta Sensibilidad",
    microDesc: "Estetoscopio de doble campana en acero inoxidable para auscultación cardíaca y pulmonar adulta y pediátrica.",
    pills: ["Doble Campana", "Adulto / Pediátrico / Neo", "Garantía 12 Meses"],
    specs: [
      { label: "Campana Acústica", value: "Doble servicio (diafragma y campana) con anillo anti-escalofríos" },
      { label: "Tubo en Y", value: "PVC de alta densidad libre de látex con aislamiento de ruido externo" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Par de olivas blandas de repuesto",
      "Membrana de reemplazo"
    ],
    regulatory: "Cumple numeral 31.2 de la Resolución 3100 de 2019 para consultorios y ambulancias TAB/TAM."
  },
  {
    id: "prod-diag-glucometro",
    name: "Glucómetro Clínico Digital con Tiras Reactivas y Lancetas",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "GlucoQuick / Línea Hospitalaria",
    sku: "DIAG-GLUCO-KIT",
    image: "./images/products/diag-glucometro.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Resultado en 5 Segundos",
    microDesc: "Sistema de monitoreo de glicemia capilar para urgencias, hospitalización y ambulancias TAB/TAM.",
    pills: ["Resultado en 5s", "Muestra 0.5 µL", "Garantía 12 Meses"],
    specs: [
      { label: "Tiempo de Medición", value: "Lectura rápida en 5 segundos con micro-muestra de 0.5 µL" },
      { label: "Memoria Clínica", value: "Almacenamiento de hasta 500 resultados con fecha y hora" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Dispositivo punzador (lancetero)",
      "Frasco de tiras reactivas y lancetas estériles",
      "Estuche rígido de transporte"
    ],
    regulatory: "Exigido en el numeral 31.6 de la Resolución 3100 de 2019 para ambulancias y servicios de urgencias."
  },
  {
    id: "prod-diag-oximetro",
    name: "Pulsoxímetro Portátil y de Dedo (Adulto / Pediátrico)",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN / Línea Diagnóstica",
    sku: "DIAG-OXIM-SPO2",
    image: "./images/products/diag-oximetro-pulso.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "SpO2 + Frecuencia Cardíaca",
    microDesc: "Oxímetros de pulso digitales de dedo y de mano (tipo EDAN H100B) con curva pletismográfica.",
    pills: ["SpO2 + Pulso + PI", "Pantalla OLED / LCD", "Garantía 12 Meses"],
    specs: [
      { label: "Versiones", value: "Oxímetro compacto de dedo y oxímetro clínico de mano EDAN H100B con sonda externa" },
      { label: "Parámetros", value: "Saturación de oxígeno (SpO2), Frecuencia de pulso (PR), Índice de perfusión y barra de pulso" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Cordón de sujeción y estuche protector",
      "Baterías incluidas"
    ],
    regulatory: "Cumplimiento Resolución 3100 de 2019 para consulta externa, hospitalización y transporte."
  },
  {
    id: "prod-diag-tallimetro",
    name: "Tallímetro Clínico Adulto y Pediátrico (Digital / Análogo)",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Línea Antropométrica CliniK",
    sku: "DIAG-TALLIMETRO",
    image: "./images/products/diag-tallimetro.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Adulto & Infantil",
    microDesc: "Tallímetros de pared, portátiles y digitales ultrasónicos para medición precisa de estatura en consultorio.",
    pills: ["Rango hasta 200 cm", "Pared o Portátil", "Garantía 12 Meses"],
    specs: [
      { label: "Opciones", value: "Tallímetro mecánico de pared/portátil, infantómetro pediátrico y tallímetro digital" },
      { label: "Graduación", value: "Escala milimétrica de alta visibilidad de 1 mm" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Tope deslizable cefálico abatible",
      "Kit de fijación o base portátil"
    ],
    regulatory: "Requerido en estándares de dotación de consulta externa general y pediátrica Res. 3100."
  },
  {
    id: "prod-diag-bascula",
    name: "Báscula Médica Digital de Piso, Columna y Pesa-Bebé",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Seca / Línea Antropométrica",
    sku: "DIAG-BASCULA-MED",
    image: "./images/products/diag-bascula-pesabebe.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Grado Médico Calibrable",
    microDesc: "Básculas electrónicas pesa-bebé con bandeja anatómica y básculas de columna/piso para adultos.",
    pills: ["Adulto & Neonatal", "Función TARA / HOLD", "Garantía 12 Meses"],
    specs: [
      { label: "Modelos Disponibles", value: "Balanza electrónica pesa-bebé (20 kg) y báscula de piso/columna adulto (200-250 kg)" },
      { label: "Funciones Clínicas", value: "Función TARA, retención de peso (HOLD) e índice de masa corporal (BMI)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Adaptador de corriente / baterías",
      "Certificado de calibración metrológica de masa"
    ],
    regulatory: "Apta para habilitación de consultorios médicos, pediatría y nutrición bajo Res. 3100."
  },
  {
    id: "prod-diag-organos-sentidos",
    name: "Equipo de Órganos de los Sentidos LED / Xenón (Portátil y de Pared)",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Línea Diagnóstica CliniK",
    sku: "DIAG-ORG-SENTIDOS",
    image: "./images/products/diag-organos-sentidos.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Otoscopio + Oftalmoscopio",
    microDesc: "Set de diagnóstico clínico con cabezal de otoscopio fibra óptica y oftalmoscopio con iluminación LED/Xenón.",
    pills: ["Fibra Óptica LED", "Portátil o de Pared", "Garantía 12 Meses"],
    specs: [
      { label: "Composición del Set", value: "Cabezal de otoscopio + cabezal de oftalmoscopio con rueda de dioptrías + mangos" },
      { label: "Presentaciones", value: "Estuche rígido portátil con baterías de repuesto (Ambulancia TAM) o estación de pared" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Juego de espéculos auriculares reusables/desechables",
      "Estuche rígido o transformador de pared"
    ],
    regulatory: "Exigido en el numeral 32.3 de la Resolución 3100 de 2019 para Ambulancias TAM y consultorios."
  },
  {
    id: "prod-diag-videolaringoscopio",
    name: "Videolaringoscopio Clínico Reusable Hugemed VL3R",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "HUGEMED",
    sku: "001-0020-000009",
    image: "./images/products/videolaringoscopio-vl3r.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Vía Aérea Difícil",
    microDesc: "Cámara HD antivaho con hojas reusables y pantalla rotatoria de 3.5\" para intubación segura.",
    pills: ["Cámara HD Antivaho", "Pantalla 3.5\" Giro 360°", "Garantía 12 Meses"],
    specs: [
      { label: "Óptica Digital", value: "Cámara micro CMOS de alta definición con sistema calefactado anti-empañamiento" },
      { label: "Pantalla LCD", value: "Pantalla color de 3.5 pulgadas con rotación vertical y horizontal" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: [
      "Hojas reusables (neonatal, pediátrica y adulto)",
      "Cargador y maletín rígido"
    ],
    regulatory: "Cumplimiento normativo para manejo de vía aérea en urgencias, anestesia y ambulancias TAM."
  },
  {
    id: "prod-diag-oximetro-h100b",
    name: "Oxímetro de Pulso Clínico de Mano EDAN H100B",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN Instruments",
    sku: "EDAN-H100B-HAND",
    image: "./images/products/diag-oximetro-h100b.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Adulto / Ped / Neonatal",
    microDesc: "Oxímetro clínico de mano con pantalla LCD retroiluminada, tendencia de 72 horas y sondas intercambiables adulto/pediátrico/neo.",
    pills: ["Memoria 72 Horas", "Sonda Intercambiable", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros", value: "SpO2 (0-100%), Frecuencia de Pulso (25-300 lpm) y curva pletismográfica" },
      { label: "Autonomía", value: "Hasta 48 horas continuas con 4 baterías AA o batería recargable Ni-MH opcional" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sensor de SpO2 adulto (opción pediátrica y neonatal)", "Estuche protector y manual"],
    regulatory: "Cumple Resolución 3100 de 2019 para ambulancias TAB/TAM, triage y hospitalización."
  },
  {
    id: "prod-diag-bascula-columna",
    name: "Báscula Médica Digital con Tallímetro de Columna",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Seca / Línea Antropométrica",
    sku: "DIAG-BASC-COLUMNA",
    image: "./images/products/diag-bascula-columna.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Peso + Talla + IMC",
    microDesc: "Báscula electrónica de columna de grado médico con tallímetro telescópico integrado, capacidad 250 kg y cálculo automático de IMC.",
    pills: ["Capacidad 250 kg", "Tallímetro Integrado", "Garantía 12 Meses"],
    specs: [
      { label: "Medición Dual", value: "Pesaje digital de precisión (división 50/100 g) y tallímetro mecánico/digital hasta 210 cm" },
      { label: "Funciones", value: "Cálculo automático de IMC, TARA, HOLD y ruedas traseras para fácil desplazamiento" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Adaptador de corriente AC y baterías", "Certificado de calibración metrológica opcional"],
    regulatory: "Requerida en consultorios de medicina general, pediatría, nutrición y urgencias Res. 3100."
  },
  {
    id: "prod-diag-doppler-sonotrax",
    name: "Doppler Fetal Portátil Ultrasónico EDAN Sonotrax II Pro",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN Instruments",
    sku: "EDAN-SONOTRAX-PRO",
    image: "./images/products/diag-doppler-sonotrax.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Sondas 2/3/4/8 MHz",
    microDesc: "Doppler ultrasónico de bolsillo con pantalla LCD retroiluminada para FCF, altavoz de alta fidelidad y sondas intercambiables.",
    pills: ["Sondas Intercambiables", "Fetal & Vascular", "Garantía 12 Meses"],
    specs: [
      { label: "Frecuencias Disponibles", value: "Sonda obstétrica impermeable de 2/3 MHz y sondas vasculares de 4/8 MHz" },
      { label: "Despliegue", value: "Pantalla LCD con Frecuencia Cardíaca Fetal (FCF) numérica y barra de señal" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductor obstétrico 2 MHz o 3 MHz", "Batería recargable con cargador y estuche"],
    regulatory: "Cumple Resolución 3100 de 2019 para control prenatal, obstetricia y urgencias."
  },
  {
    id: "prod-diag-monitor-fetal-f3",
    name: "Monitor Fetal Materno EDAN F3 (Gemelar FHR + TOCO)",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN Instruments",
    sku: "EDAN-FETAL-F3",
    image: "./images/products/diag-monitor-fetal-f3.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Monitorización Gemelar",
    microDesc: "Monitor fetal portátil con pantalla plegable de 5.6\", monitoreo dual de FCF (gemelar), TOCO, movimiento fetal e impresora térmica.",
    pills: ["Opción Gemelar FHR2", "Impresora 150 mm", "Garantía 12 Meses"],
    specs: [
      { label: "Parámetros", value: "FHR1, FHR2 opcional (gemelar), actividad uterina TOCO y marcador automático de movimiento fetal" },
      { label: "Registro", value: "Impresora térmica de 150/152 mm con velocidad 1/2/3 cm/min y batería interna" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductores FHR y TOCO impermeables", "Correas elásticas, marcador de eventos y papel térmico"],
    regulatory: "Exigido para salas de parto, obstetricia y urgencias ginecológicas según Res. 3100."
  },
  {
    id: "prod-diag-monitor-fetal-f6",
    name: "Monitor Materno-Fetal Avanzado EDAN F6 Express",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN Instruments",
    sku: "EDAN-FETAL-F6",
    image: "./images/products/diag-monitor-fetal-f6.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Materno + Fetal 10.1\"",
    microDesc: "Monitor materno-fetal con pantalla abatible de 10.1\", monitoreo gemelar, ECG materno, SpO2, PNI y Temperatura.",
    pills: ["Pantalla 10.1\" Color", "Signos Vitales Maternos", "Garantía 12 Meses"],
    specs: [
      { label: "Monitoreo Integral", value: "FHR dual, TOCO, DECG/IUP opcional + signos vitales maternos (ECG, SpO2, PNI, Temp)" },
      { label: "Conectividad", value: "Soporte de red inalámbrica/cableada hacia central obstétrica MFM-CNS" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Transductores fetales, sensores maternos y cinturones", "Batería Li-ion y paquete de papel Z-fold"],
    regulatory: "Cumple Resolución 3100 de 2019 para ginecobstetricia de mediana y alta complejidad."
  },
  {
    id: "prod-diag-colposcopio-c6a",
    name: "Colposcopio Digital Óptico HD EDAN C3A / C6A",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "EDAN Instruments",
    sku: "EDAN-COLPO-C6A",
    image: "./images/products/diag-colposcopio-c6a.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock / Importación Directa",
    badge: "Full HD + Filtro Verde",
    microDesc: "Videocolposcopio digital de alta definición con iluminación LED fría, zoom óptico continuo 1-30x y software de gestión ginecológica.",
    pills: ["Cámara Full HD", "Filtro Verde Electrónico", "Garantía 12 Meses"],
    specs: [
      { label: "Óptica Digital", value: "Sensor Sony CMOS Full HD con autoenfoque rápido, zoom hasta 30x y filtro verde de 3 niveles" },
      { label: "Software Clínico", value: "Captura de imagen/video, anotación de hallazgos y cálculo de puntuación R-way / Swede" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Pedestal rodante de brazo articulado o vertical", "Software de diagnóstico e informes en español"],
    regulatory: "Registro sanitario INVIMA vigente para consulta externa de ginecología y tamizaje cervical."
  },
  {
    id: "prod-diag-localizador-venas",
    name: "Localizador de Venas Infrarrojo Portátil NAVI-60",
    category: "diagnostico",
    categoryLabel: "Equipos de Diagnóstico",
    brand: "Medcaptain",
    sku: "MED-NAVI60-VEIN",
    image: "./images/products/diag-localizador-venas.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Proyección NIR Tiempo Real",
    microDesc: "Iluminador vascular por infrarrojo cercano (NIR) que proyecta el mapa venoso en tiempo real sobre la piel en 5 colores.",
    pills: ["5 Modos de Color", "Pediatría & Difícil Acceso", "Garantía 12 Meses"],
    specs: [
      { label: "Tecnología Óptica", value: "Luz infrarroja cercana (NIR) segura sin radiación láser, detección hasta 8 mm de profundidad" },
      { label: "Modos Visuales", value: "5 colores de proyección, 3 tamaños de ventana y modo inverso para pieles oscuras/pediatría" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Base de carga de escritorio o soporte móvil rodante", "Batería interna recargable"],
    regulatory: "Ideal para urgencias, pediatría, oncología, laboratorio clínico y UCI bajo Res. 3100."
  }
];

// =========================================================================
// MACRO-LÍNEA 2: RESCATE Y ATENCIÓN PREHOSPITALARIA (REFERENTE CORAL MÉDICA)
// =========================================================================
export const RESCATE_CATEGORIES = [
  { id: "todos", label: "Todo Rescate & Prehospitalaria" },
  { id: "camillas", label: "Camillas de Ambulancia & Rescate" },
  { id: "inmovilizadores", label: "Inmovilizadores & Collares Cervicales" },
  { id: "trauma-botiquines", label: "Torniquetes, Botiquines & Vía Aérea" }
];

export const RESCATE_PRODUCTS = [
  {
    id: "resc-camilla-auto",
    name: "Camilla Automática en Aluminio para Ambulancia con Anclaje",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-CAM-AUTO-01",
    image: "./images/products/rescate-camilla-ambulancia.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Criterio 31.8 Res. 3100",
    microDesc: "Camilla principal plegable en aleación de aluminio con colchoneta impermeable, cinturones y riel de anclaje.",
    pills: ["Aleación Aluminio", "Incluye Anclaje", "Garantía 12 Meses"],
    specs: [
      { label: "Estructura", value: "Aleación de aluminio de alta resistencia con patas retráctiles automáticas" },
      { label: "Seguridad Paciente", value: "Barandas laterales abatibles, respaldar graduable y correas de sujeción" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Sistema de anclaje vehicular certificado", "Colchoneta sellada impermeable", "Correas de seguridad"],
    regulatory: "Cumple numeral 31.8 de la Resolución 3100 de 2019 para ambulancias TAB y TAM."
  },
  {
    id: "resc-camilla-vacio",
    name: "Camilla de Vacío para Inmovilización Integral de Politraumatizados",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-CAM-VACIO",
    image: "./images/products/rescate-camilla-vacio.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Radiolúcida RX / TAC",
    microDesc: "Colchón de vacío moldeable al cuerpo del paciente con bomba de extracción y correas de transporte.",
    pills: ["Inmovilización Total", "Incluye Bomba Vacío", "Garantía 12 Meses"],
    specs: [
      { label: "Material", value: "TPU/PVC de alta resistencia impermeable y 100% translúcido a rayos X y resonancia" },
      { label: "Asas de Carga", value: "Asas perimetrales ergonómicas para traslado seguro en rescate" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Bomba manual de vacío en aluminio", "Correas de sujeción", "Bolso de transporte"],
    regulatory: "Dotación especializada para atención prehospitalaria y ambulancias."
  },
  {
    id: "resc-tabla-scoop",
    name: "Camilla Tipo Cuchara (Scoop) Divisible para Inmovilización",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-SCOOP-01",
    image: "./images/products/rescate-tabla-scoop.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Longitud Telescópica",
    microDesc: "Camilla cuchara separable longitudinalmente con ajuste telescópico para recoger al paciente sin movilizar columna.",
    pills: ["Separación Central", "Telescópica", "Garantía 12 Meses"],
    specs: [
      { label: "Mecanismo", value: "Doble seguro de apertura superior e inferior para colocación sin voltear al paciente" },
      { label: "Ajuste Longitudinal", value: "Telescópico adaptable a la estatura del paciente adulto o pediátrico" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Juego de 3 correas de sujeción con hebilla rápida"],
    regulatory: "Cumple numeral 31.9 de la Resolución 3100 de 2019 como camilla secundaria de inmovilización."
  },
  {
    id: "resc-tabla-espinal",
    name: "Tabla Espinal Rígida para Inmovilización Cervical con Arnés Araña",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-TABLA-ESP",
    image: "./images/products/rescate-tabla-espinal.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Flotante & Radiolúcida",
    microDesc: "Camilla rígida en polietileno de alta densidad traslúcida a rayos X para rescate vehicular y acuático.",
    pills: ["Polietileno HDPE", "Radiolúcida RX", "Garantía 12 Meses"],
    specs: [
      { label: "Capacidad de Carga", value: "Superior a 159 kg, flotante en agua e impermeable a fluidos corporales" },
      { label: "Compatibilidad", value: "Compatible con inmovilizadores laterales de cabeza y correas tipo araña" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Correas de seguridad o arnés tipo araña"],
    regulatory: "Elemento obligatorio en brigadas de emergencia, bomberos y ambulancias Res. 3100."
  },
  {
    id: "resc-camilla-canasta",
    name: "Camilla Tipo Canasta (Spencer / Rescate en Alturas) con Eslingas",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-CANASTA-01",
    image: "./images/products/rescate-camilla-canasta.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Rescate Industrial & Alturas",
    microDesc: "Camilla rígida tipo canasta para evacuación vertical, helicoportada, minera e industrial.",
    pills: ["Rescate Vertical", "Incluye Eslingas", "Garantía 12 Meses"],
    specs: [
      { label: "Construcción", value: "Polietileno de alto impacto con marco perimetral de aluminio/acero" },
      { label: "Accesorios de Izaje", value: "4 eslingas para elevación, reposapiés ajustable y colchoneta interna" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Eslingas de izaje", "Cinturones de seguridad", "Reposapiés de fijación"],
    regulatory: "Especial para cuerpos de bomberos, defensa civil y brigadas industriales."
  },
  {
    id: "resc-silla-oruga",
    name: "Silla de Ruedas Plegable de Evacuación para Ambulancia (Con / Sin Oruga)",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-SILLA-EVAC",
    image: "./images/products/rescate-camilla-silla-oruga.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Criterio 31.12 Res. 3100",
    microDesc: "Silla portátil, liviana y plegable con capacidad ≥120 kg y cinturones de sujeción para escaleras y ambulancia.",
    pills: ["Capacidad ≥120 kg", "Plegable Liviana", "Garantía 12 Meses"],
    specs: [
      { label: "Normativa", value: "Cumple estrictamente el numeral 31.12 de la Resolución 3100 (capacidad ≥120 kg y 2 cinturones)" },
      { label: "Descenso por Escaleras", value: "Sistema de correas/orugas para descenso controlado por un solo operador" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Mínimo 2 cinturones de sujeción de paciente", "Manijas extensibles"],
    regulatory: "Obligatoria en el estándar de dotación de ambulancias TAB y TAM (Res. 3100)."
  },
  {
    id: "resc-cuello-cervical",
    name: "Cuello / Collarín Multitalla Graduable para Inmovilización Cervical (Adulto y Pediátrico)",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-COLLAR-MULTI",
    image: "./images/products/rescate-cuello-cervical.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.22 Res. 3100",
    microDesc: "Collar cervical graduable en múltiples posiciones con abertura frontal para toma de pulso carotídeo y cricotiroidotomía.",
    pills: ["Multitalla Graduable", "Adulto & Pediátrico", "Garantía 12 Meses"],
    specs: [
      { label: "Ajuste", value: "16 posiciones de graduación en adulto y 12 en pediátrico con seguro de bloqueo" },
      { label: "Diseño", value: "Almacenamiento plano (flat) y radiolúcido a rayos X, TAC y RM" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Disponible en versión Adulto y Pediátrico"],
    regulatory: "Exigido en el numeral 31.22 de la Resolución 3100 (2 adultos y 2 pediátricos por ambulancia)."
  },
  {
    id: "resc-inmovilizador-cabeza",
    name: "Inmovilizador Lateral de Cabeza Impermeable Universal",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-INM-CABEZA",
    image: "./images/products/rescate-inmovilizador-cabeza.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.22 Res. 3100",
    microDesc: "Bloques laterales en espuma recubierta de vinilo antibacteriano con base universal y correas de frente/mentón.",
    pills: ["Impermeable Lavable", "Orificio Auricular", "Garantía 12 Meses"],
    specs: [
      { label: "Inspección Clínica", value: "Orificios laterales amplios para vigilar sangrado o salida de líquido por oído" },
      { label: "Compatibilidad", value: "Adaptable a cualquier tabla espinal rígida o camilla scoop" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Base acolchada con velcro", "2 bloques laterales", "2 correas de sujeción frontal y mentoniana"],
    regulatory: "Componente obligatorio del conjunto de inmovilización Res. 3100 (numeral 31.22)."
  },
  {
    id: "resc-chaleco-extricacion",
    name: "Inmovilizador / Chaleco de Extricación Vehicular (Tipo Kendrick KED)",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-KED-EXTRIC",
    image: "./images/products/rescate-chaleco-extricacion.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.10 Res. 3100",
    microDesc: "Chaleco envolvente con varillas verticales rígidas para inmovilización toracolumbar y cervical en rescate vehicular.",
    pills: ["Correas Codificadas", "Extracción Vehicular", "Garantía 12 Meses"],
    specs: [
      { label: "Identificación Rápida", value: "Correas con hebillas codificadas por colores para aplicación rápida en penumbra" },
      { label: "Versatilidad", value: "Adaptable a adultos, niños y mujeres embarazadas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Almohadilla cervical ajustable", "Correas de frente y mentón", "Maletín de transporte"],
    regulatory: "Cumple numeral 31.10 de la Resolución 3100 de 2019 (Tabla espinal corta o chaleco de extracción vehicular)."
  },
  {
    id: "resc-inmovilizador-extremidades",
    name: "Kit de Inmovilizadores / Férulas para Extremidades Superiores e Inferiores",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-FERULAS-KIT",
    image: "./images/products/rescate-inmovilizador-extremidades.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.22 Res. 3100",
    microDesc: "Conjunto de férulas anatómicas maleables, rígidas o neumáticas para inmovilización de fracturas en brazo y pierna.",
    pills: ["Miembro Sup. e Inf.", "Adulto & Pediátrico", "Garantía 12 Meses"],
    specs: [
      { label: "Contenido del Kit", value: "Inmovilizadores para miembro superior, miembro inferior adulto y pediátrico con velcro" },
      { label: "Material", value: "Lona/vinilo impermeable de fácil desinfección y radiolúcido" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Bolso organizador de transporte"],
    regulatory: "Cumple numeral 31.22 de la Resolución 3100 de 2019."
  },
  {
    id: "resc-torniquete",
    name: "Torniquete Táctico para Control de Hemorragias Severas (Tipo CAT)",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-TORNIQ-CAT",
    image: "./images/products/rescate-torniquete.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.7 Res. 3100",
    microDesc: "Torniquete de molinete (windlass) de aplicación con una sola mano para oclusión arterial en trauma severo.",
    pills: ["Control Hemorragias", "Aplicación 1 Mano", "Garantía 12 Meses"],
    specs: [
      { label: "Sistema deTensión", value: "Varilla de torsión reforzada con clip de bloqueo y cinta de registro de hora" },
      { label: "Uso Clínico", value: "Control prehospitalario de hemorragias exanguinantes en extremidades" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Etiqueta blanca para anotar hora de colocación"],
    regulatory: "Exigido en el numeral 31.7 de la Resolución 3100 de 2019 para ambulancias y botiquines de trauma."
  },
  {
    id: "resc-tijeras-trauma",
    name: "Tijeras Cortatodo de Trauma en Acero Quirúrgico + Pinzas de Magill",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-TIJ-MAGILL",
    image: "./images/products/rescate-tijeras-trauma.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterios 31.13 y 31.14",
    microDesc: "Tijeras de material cortatodo con punta roma de seguridad y pinzas de Magill para extracción de cuerpo extraño.",
    pills: ["Acero Inoxidable", "Punta Roma Segura", "Garantía 12 Meses"],
    specs: [
      { label: "Hoja Dentada", value: "Acero inoxidable templado capaz de cortar calzado, cinturones y prendas gruesas" },
      { label: "Esterilización", value: "Autoclavable hasta 134°C" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Disponible individual o en kit con Pinza de Magill y Linterna clínica"],
    regulatory: "Cumple numerales 31.13 y 31.14 de la Resolución 3100 de 2019."
  },
  {
    id: "resc-botiquin-morral",
    name: "Maletín / Morral Táctico de Atención de Trauma y Primeros Auxilios",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-MORRAL-TRAUMA",
    image: "./images/products/rescate-botiquin-morral.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Alta Visibilidad Reflectiva",
    microDesc: "Morral ergonómico en lona impermeable con compartimentos modulares para insumos de trauma, vía aérea y bioseguridad.",
    pills: ["Lona Impermeable", "Cintas Reflectivas", "Garantía 12 Meses"],
    specs: [
      { label: "Compartimentos", value: "Bolsillos internos transparentes y divisores removibles en velcro" },
      { label: "Dotación Opcional", value: "Se suministra vacío o completamente dotado según norma" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Correas acolchadas de espalda y manija superior reforzada"],
    regulatory: "Ideal para brigadas empresariales, ambulancias TAB/TAM y organismos de socorro."
  },
  {
    id: "resc-resucitador-ambu",
    name: "Resucitador Pulmonar Manual (Tipo AMBU) en Silicona Adulto / Pediátrico / Neonatal",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-AMBU-SIL",
    image: "./images/products/rescate-resucitador-ambu.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.23 Res. 3100",
    microDesc: "Bolsa autoinflable de reanimación manual con válvula limitadora de presión, bolsa reservorio y máscara anatómica.",
    pills: ["Silicona Autoclavable / PVC", "Incluye Reservorio", "Garantía 12 Meses"],
    specs: [
      { label: "Tamaños", value: "Adulto (1600 mL), Pediátrico (500 mL) y Neonatal (280 mL)" },
      { label: "Seguridad", value: "Válvula de alivio de sobrepresión (40 o 60 cmH2O) para proteger vía aérea" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Máscara facial transparente", "Bolsa reservorio de oxígeno", "Manguera de conexión O2"],
    regulatory: "Exigido en el numeral 31.23 de la Resolución 3100 de 2019."
  },
  {
    id: "resc-camilla-plegable",
    name: "Camilla Plegable Tipo Sobre en Lona con Bolso de Transporte",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-CAM-PLEG-01",
    image: "./images/products/rescate-camilla-plegable.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Plegable 2/4 Cuerpos",
    microDesc: "Camilla liviana en estructura de aluminio aeronáutico con lona impermeable de alta tenacidad y bolso portátil.",
    pills: ["Aluminio Liviano", "Incluye Bolso", "Garantía 12 Meses"],
    specs: [
      { label: "Material", value: "Tubos en aleación de aluminio reforzado y lona naranja lavable resistente a fluidos" },
      { label: "Capacidad", value: "Soporta hasta 159 kg con peso propio inferior a 6 kg" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["2 correas de seguridad con hebilla rápida", "Bolso de lona para almacenamiento"],
    regulatory: "Apta para brigadas de emergencia, puestos de primeros auxilios y rescate rápido."
  },
  {
    id: "resc-tabla-pediatrica",
    name: "Camilla Rígida Pediátrica en Polietileno Radiolúcido",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-TABLA-PED",
    image: "./images/products/rescate-tabla-pediatrica.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Rescate Pediátrico",
    microDesc: "Tabla espinal pediátrica de alta densidad con ranuras múltiples para correas, flotante y 100% compatible con rayos X.",
    pills: ["Uso Pediátrico", "Radiolúcida RX", "Garantía 12 Meses"],
    specs: [
      { label: "Diseño Anatómico", value: "Dimensiones adaptadas a pacientes infantiles con manijas perimetrales ergonómicas" },
      { label: "Compatibilidad", value: "Compatible con inmovilizadores laterales pediátricos y correas de fijación" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Juego de correas de sujeción rápida"],
    regulatory: "Cumple lineamientos de inmovilización pediátrica prehospitalaria Res. 3100."
  },
  {
    id: "resc-arnes-arana",
    name: "Arnés Tipo Araña (Spider Strap) Codificado por Colores",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-ARNES-ARANA",
    image: "./images/products/rescate-arnes-arana.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "10 Puntos de Fijación",
    microDesc: "Sistema integral de sujeción en reata de nylon de alta resistencia con velcro industrial y código de colores para tabla espinal.",
    pills: ["10 Puntos Velcro", "Códigos de Color", "Garantía 12 Meses"],
    specs: [
      { label: "Sujeción", value: "5 pares de correas transversales ajustables (tórax, pelvis, muslos y tobillos) con correa de hombros" },
      { label: "Resistencia", value: "Reata impermeable lavable de alta tracción para rescate vehicular y vertical" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Bolsa organizadora con cierre rápido"],
    regulatory: "Accesorio estándar para tablas espinales en ambulancias TAB/TAM Res. 3100."
  },
  {
    id: "resc-silla-evacuacion",
    name: "Silla de Evacuación Plegable Estándar para Ambulancia",
    category: "camillas",
    categoryLabel: "Camillas de Ambulancia & Rescate",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-SILLA-STD",
    image: "./images/products/rescate-silla-evacuacion.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Criterio 31.12 Res. 3100",
    microDesc: "Silla de ruedas plegable en aluminio liviano con dos cinturones de seguridad y manijas traseras/delanteras para traslado en ambulancia.",
    pills: ["Capacidad ≥150 kg", "2 Cinturones", "Garantía 12 Meses"],
    specs: [
      { label: "Normativa", value: "Cumple el numeral 31.12 de la Resolución 3100 con mínimo 2 cinturones y capacidad ≥120 kg" },
      { label: "Almacenamiento", value: "Plegado ultracompacto para compartimento lateral de ambulancia" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["2 cinturones torácico y pélvico de liberación rápida"],
    regulatory: "Obligatoria en el estándar de dotación de ambulancias TAB y TAM (Res. 3100)."
  },
  {
    id: "resc-collar-philadelphia",
    name: "Collar Cervical Tipo Philadelphia Bivalvo (Adulto y Pediátrico)",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-COLLAR-PHIL",
    image: "./images/products/rescate-collar-philadelphia.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Orificio Traqueostomía",
    microDesc: "Inmovilizador cervical rígido de dos piezas en espuma Plastazote hipoalergénica con refuerzos plásticos y abertura traqueal.",
    pills: ["Bivalvo Rígido", "Radiolúcido RX/TAC", "Garantía 12 Meses"],
    specs: [
      { label: "Diseño Anatómico", value: "Dos valvas (anterior y posterior) moldeadas con apoyo mentoniano y occipital" },
      { label: "Acceso Clínico", value: "Abertura frontal amplia para toma de pulso carotídeo y traqueostomía de urgencia" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Disponible en tallas Pediátrica, S, M y L"],
    regulatory: "Cumple requerimientos de inmovilización cervical en trauma y traslado hospitalario."
  },
  {
    id: "resc-ferulas-vacio",
    name: "Kit de Férulas de Vacío / Neumáticas para Extremidades con Bomba",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-FERULAS-VAC",
    image: "./images/products/rescate-ferulas-vacio.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Set x3 / x6 + Bomba",
    microDesc: "Juego de férulas moldeables al vacío o neumáticas transparentes para inmovilización anatómica de fracturas sin compresión vascular.",
    pills: ["Incluye Bomba", "Radiolúcidas RX", "Garantía 12 Meses"],
    specs: [
      { label: "Contenido", value: "Férulas para brazo, antebrazo, pierna completa y tobillo con maletín y bomba manual" },
      { label: "Propiedades", value: "Material lavable, desinfectable y translúcido a estudios radiográficos" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Bomba de extracción/inflado", "Bolso de transporte"],
    regulatory: "Cumple numeral 31.22 de la Resolución 3100 de 2019."
  },
  {
    id: "resc-pedi-pac",
    name: "Inmovilizador Pediátrico Integral (Tipo Pedi-Pac)",
    category: "inmovilizadores",
    categoryLabel: "Inmovilizadores & Collares Cervicales",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-PEDI-PAC",
    image: "./images/products/rescate-pedi-pac.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Disponible",
    badge: "Inmovilización Infantil",
    microDesc: "Sistema integral de inmovilización espinal pediátrica con soporte de cabeza integrado, correas codificadas y bolso de transporte.",
    pills: ["Soporte Cabeza Integrado", "Correas Codificadas", "Garantía 12 Meses"],
    specs: [
      { label: "Rango de Paciente", value: "Diseñado para pacientes pediátricos de 70 a 137 cm (hasta ~41 kg)" },
      { label: "Seguridad", value: "Correas individuales por colores para pecho, pelvis y extremidades con acceso venoso libre" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Almohadillas de cabeza ajustables", "Maletín protector de lona"],
    regulatory: "Cumple estándares de inmovilización y traslado pediátrico seguro Res. 3100."
  },
  {
    id: "resc-canulas-guedel",
    name: "Kit de Cánulas Orofaríngeas de Guedel (Set Completo Tallas 000 a 5)",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-GUEDEL-SET",
    image: "./images/products/rescate-canula-guedel.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Neo / Ped / Adulto",
    microDesc: "Set completo de cánulas orofaríngeas de Guedel codificadas por color con bloque anti-mordida para permeabilización de vía aérea.",
    pills: ["Código de Colores", "Bloque Anti-Mordida", "Garantía 12 Meses"],
    specs: [
      { label: "Presentación", value: "Estuche con tallas desde 000 (neonatal) hasta 5 (adulto grande) empacadas estériles" },
      { label: "Diseño", value: "Punta atraumática suave en polietileno grado médico libre de látex" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Estuche organizador de ambulancia o carro de paro"],
    regulatory: "Exigido en carros de paro, urgencias y ambulancias TAB/TAM según Res. 3100."
  },
  {
    id: "resc-manta-termica",
    name: "Manta Térmica Aluminizada Isotérmica de Emergencia",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-MANTA-TERM",
    image: "./images/products/rescate-manta-termica.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Prevención Hipotermia",
    microDesc: "Manta isotérmica reflectiva en PET metalizado impermeable que retiene hasta el 90% del calor corporal en trauma y shock.",
    pills: ["Dimensiones 160x210 cm", "Impermeable & Viento", "Garantía 12 Meses"],
    specs: [
      { label: "Uso Clínico", value: "Prevención de hipotermia en pacientes politraumatizados, quemados o rescatados" },
      { label: "Empaque", value: "Doblado compacto individual para botiquines y maletines de trauma" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Disponible por unidad o paquete institucional x10/x50"],
    regulatory: "Elemento reglamentario en botiquines de ambulancia y brigadas Res. 3100."
  },
  {
    id: "resc-vendaje-israeli",
    name: "Vendaje Compresivo Tipo Israelí para Control de Hemorragias",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-VENDA-ISR",
    image: "./images/products/rescate-vendaje-israeli.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "TCCC Trauma / Empaque Estéril",
    microDesc: "Apósito compresivo hemostático con barra de presión integrada y clip de cierre rápido para hemorragias severas en trauma.",
    pills: ["Estéril al Vacío", "Barra de Presión", "Garantía 12 Meses"],
    specs: [
      { label: "Mecanismo", value: "Apósito no adherente + banda elástica de 4\"/6\" + aplicador de presión y gancho de bloqueo" },
      { label: "Aplicación", value: "Permite auto-aplicación con una sola mano en heridas de extremidades, cuello o tronco" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Empaque doble sellado al vacío de apertura rápida"],
    regulatory: "Recomendado en protocolos Stop the Bleed, TCCC y ambulancias Res. 3100."
  },
  {
    id: "resc-botiquin-tipo-ab",
    name: "Botiquín Portátil Tipo A / B Reglamentario Dotado",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-BOT-TIPO-AB",
    image: "./images/products/rescate-botiquin-tipo-ab.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Resolución 0705 / Brigadas",
    microDesc: "Botiquín portátil de trauma y primeros auxilios dotado según normativa colombiana vigente con insumos de curación e inmovilización.",
    pills: ["Dotación Reglamentaria", "Lona Impermeable", "Garantía 12 Meses"],
    specs: [
      { label: "Configuraciones", value: "Disponible en configuración Tipo A (hasta 2.000 m²) y Tipo B (mayor área y trauma)" },
      { label: "Contenido Base", value: "Gasas estériles, vendajes elásticos, collar cervical, inmovilizadores, solución salina y barreras" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Maletín de mano o morral con cintas reflectivas", "Listado de verificación de lotes"],
    regulatory: "Cumple Resolución 0705 de 2007 y lineamientos de Seguridad y Salud en el Trabajo (SST)."
  },
  {
    id: "resc-mascara-rcp",
    name: "Máscara de RCP Pocket Mask con Válvula Unidireccional y Filtro",
    category: "trauma-botiquines",
    categoryLabel: "Torniquetes, Botiquines & Vía Aérea",
    brand: "Línea Prehospitalaria CliniK",
    sku: "RESC-POCKET-MASK",
    image: "./images/products/rescate-mascara-rcp.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    availability: "Stock Inmediato",
    badge: "Bioseguridad en RCP",
    microDesc: "Máscara anatómica transparente con cojín inflable, válvula unidireccional hidrofóbica, puerto de O2 y estuche rígido portátil.",
    pills: ["Válvula Unidireccional", "Puerto de Oxígeno", "Garantía 12 Meses"],
    specs: [
      { label: "Protección", value: "Válvula de una vía con filtro bacteriano/viral que protege al reanimador contra fluidos" },
      { label: "Compatibilidad", value: "Apta para pacientes adultos, pediátricos y lactantes (invirtiendo la máscara)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ],
    accessories: ["Estuche rígido de bolsillo", "Banda elástica de fijación y par de guantes"],
    regulatory: "Insumo estándar en kits de espacios cardioprotegidos (Res. 3316) y botiquines."
  }
];

// =========================================================================
// MACRO-LÍNEA 3: ACCESORIOS, CONSUMIBLES & REPUESTOS (POR CATEGORÍA DE EQUIPO)
// =========================================================================
export const ACCESSORIES_CATEGORIES = [
  { id: "todos", label: "Todos los Accesorios" },
  { id: "desfibriladores", label: "Para Desfibriladores & DEA" },
  { id: "monitores", label: "Para Monitores Multiparámetros" },
  { id: "bombas-infusion", label: "Para Bombas de Infusión" },
  { id: "electrocardiografos", label: "Para Electrocardiógrafos" },
  { id: "succionadores", label: "Para Succionadores" },
  { id: "incubadoras", label: "Para Incubadoras & Neonatal" },
  { id: "ventiladores-anestesia", label: "Para Ventiladores & Anestesia" }
];

export const ACCESSORIES_CATALOG = [
  {
    id: "acc-dea-pads-mindray",
    name: "Electrodos (Parches) Adulto/Pediátrico MR60 para DEA Mindray C1A / C2",
    category: "desfibriladores",
    categoryLabel: "Para Desfibriladores & DEA",
    equipmentFor: "DEA Mindray BeneHeart C1 / C1A / C2",
    sku: "CK-PAD-MR60",
    image: "./images/products/acc-parches-mindray.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Pre-conectados autoadhesivos con gel conductivo para uso adulto y pediátrico",
    warranty: "12 Meses / Fecha de caducidad de lote vigente (24-36 meses)",
    inStock: true
  },
  {
    id: "acc-dea-bat-mindray",
    name: "Batería Original de Litio Li-MnO2 para DEA Mindray C1 / C2",
    category: "desfibriladores",
    categoryLabel: "Para Desfibriladores & DEA",
    equipmentFor: "DEA Mindray BeneHeart Serie C (C1A / C2)",
    sku: "CK-BAT-MINDRAY-C",
    image: "./images/products/acc-bateria-mindray.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Batería primaria de alta capacidad para más de 300 descargas o modo standby prolongado",
    warranty: "12 Meses de garantía directa",
    inStock: true
  },
  {
    id: "acc-dea-pads-primedic",
    name: "Electrodos SavePads Pre-Conectados para DEA Primedic HeartSave Y / YA",
    category: "desfibriladores",
    categoryLabel: "Para Desfibriladores & DEA",
    equipmentFor: "DEA Primedic HeartSave YA y AMoul i7 Plus (disponibles ambas referencias)",
    sku: "CK-PAD-PRIMEDIC-YA",
    image: "./images/products/acc-parches-primedic.webp",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Parches multifunción adulto/infantil con cable de pre-conexión rápida",
    warranty: "12 Meses / Caducidad vigente",
    inStock: true
  },
  {
    id: "acc-spo2-sensor",
    name: "Sensor de Oximetría SpO2 Reutilizable (Adulto / Pediátrico / Neonatal en Y)",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores EDAN X8, X12, iM20, iM50, iM70, H100B y Mindray",
    sku: "CK-ACC-SPO2-EDAN",
    image: "./images/products/acc-sensor-spo2.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Conector de 6 o 7 pines blindado con cable siliconado médico anti-quiebre",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-ecg-cable",
    name: "Cable Troncal y Latiguillos de ECG de 3 y 5 Derivaciones Tipo Broche / Pinza",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores Multiparámetros y Desfibriladores EDAN / Mindray / AMoul",
    sku: "CK-ACC-CABLE-ECG",
    image: "./images/products/acc-cable-ecg.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Protección integrada contra descargas de desfibrilación e interferencia electroquirúrgica",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-nibp-cuff",
    name: "Brazalete de Presión No Invasiva (PNI) Reusable con Acople (Neo / Ped / Adulto / Obeso)",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores Multiparámetros y Tensiómetros Digitales",
    sku: "CK-ACC-CUFF-NIBP",
    image: "./images/products/acc-brazalete-nibp.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Libre de látex, cierre velcro de alta resistencia y manguera de extensión disponible",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-linea-co2",
    name: "Línea de Muestreo y Trampa de Agua para Capnografía EtCO2",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores con Capnografía EDAN X8, X12, iM50, iM70 (Acople / Rosca Respironics)",
    sku: "CK-ACC-CO2-LINE",
    image: "./images/products/acc-linea-co2.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Muestreo sidestream de alta precisión para pacientes intubados y no intubados",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-set-infusion",
    name: "Set de Infusión Macro / Fotosensible y Línea Perfusora",
    category: "bombas-infusion",
    categoryLabel: "Para Bombas de Infusión",
    equipmentFor: "Bombas de Infusión Medcaptain HP-60, MP-60 y SYS-6010",
    sku: "CK-ACC-SET-INF",
    image: "./images/products/acc-set-infusion.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Grado médico estéril libre de pirógenos para infusión volumétrica de alta exactitud",
    warranty: "12 Meses / Esterilidad garantizada",
    inStock: true
  },
  {
    id: "acc-sensor-goteo",
    name: "Sensor Óptico de Goteo Externo para Bomba de Infusión",
    category: "bombas-infusion",
    categoryLabel: "Para Bombas de Infusión",
    equipmentFor: "Bombas Medcaptain HP-60, SYS-6010 y EDAN MP-60",
    sku: "CK-ACC-GOTEO-HP60",
    image: "./images/products/acc-sensor-goteo.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Detección infrarroja de caída de gotas en cámara cuentagotas",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-papel-ekg",
    name: "Papel Termosensible Milimetrado para Electrocardiógrafo (Rollo y Z-Fold)",
    category: "electrocardiografos",
    categoryLabel: "Para Electrocardiógrafos",
    equipmentFor: "Electrocardiógrafos EDAN SE-1, SE-3, SE-301, SE-601C, SE-1200 y SE-1201 PRO",
    sku: "CK-ACC-PAPEL-EKG",
    image: "./images/products/acc-papel-ekg.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Cuadrícula médica de alta durabilidad antidesvanecimiento",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-chupas-pinzas-ekg",
    name: "Juego de Chupas Precordiales (x6) y Pinzas de Extremidades (x4) Universales para EKG",
    category: "electrocardiografos",
    categoryLabel: "Para Electrocardiógrafos",
    equipmentFor: "Electrocardiógrafos de todas las marcas (Adulto y Pediátrico)",
    sku: "CK-ACC-CHUPAS-EKG",
    image: "./images/products/acc-chupas-ekg.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Electrodos con recubrimiento Ag/AgCl de excelente conductividad y peras de silicona",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-frasco-suc",
    name: "Frasco Colector con Tapa y Filtro Antibacteriano para Succionador (1000 mL y 2500 mL)",
    category: "succionadores",
    categoryLabel: "Para Succionadores",
    equipmentFor: "Succionadores SXT-5A, YX-930D, YX-980D y Pulmo-Med",
    sku: "CK-ACC-FRASCO-SUC",
    image: "./images/products/acc-frasco-succion.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Policarbonato autoclavable con válvula flotadora anti-desborde y filtros hidrofóbicos",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-inc-sensor-piel",
    name: "Sensor de Temperatura de Piel Neonatal Reutilizable para Incubadora Ningbo David (YP / TI)",
    category: "incubadoras",
    categoryLabel: "Para Incubadoras & Neonatal",
    equipmentFor: "Incubadoras Ningbo David YP-90A, YP-800, YP-2000, YP-3000, TI-2000, TI-2100B y HKN",
    sku: "CK-INC-SENS-PIEL",
    image: "./images/products/acc-sensor-piel-incubadora.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Conector plástico de 4 o 6 pines de alta precisión térmica (±0.1°C) libre de látex",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-inc-filtro-aire",
    name: "Filtro de Aire Microbiano Original para Incubadora Neonatal (Paquete x 5/10 uds)",
    category: "incubadoras",
    categoryLabel: "Para Incubadoras & Neonatal",
    equipmentFor: "Incubadoras Neonatales Ningbo David (YP / TI), Comen B3/B6 y Air Shields",
    sku: "CK-INC-FILTRO-AIR",
    image: "./images/products/acc-filtro-incubadora.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Filtración de partículas y microorganismos hasta 0.5 µm para ambiente estéril en cúpula",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-inc-mangas-portillo",
    name: "Juego de Mangas / Empaques de Portillo (Iris) para Cúpula de Incubadora Neonatal",
    category: "incubadoras",
    categoryLabel: "Para Incubadoras & Neonatal",
    equipmentFor: "Incubadoras Neonatales Ningbo David YP-90A, YP-800, YP-2000, YP-3000 y TI-2000",
    sku: "CK-INC-MANGAS-IRIS",
    image: "./images/products/acc-mangas-incubadora.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Polímero médico flexible hipoalergénico que mantiene el sello térmico durante procedimientos",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-inc-colchon",
    name: "Colchón Neonatal Hipoalergénico e Impermeable para Incubadora y Cuna Radiante",
    category: "incubadoras",
    categoryLabel: "Para Incubadoras & Neonatal",
    equipmentFor: "Incubadoras YP-800 / YP-2000 / YP-3000 y Cunas de Calor Radiante HKN-93 / HKN-9010",
    sku: "CK-INC-COLCHON-NEO",
    image: "./images/products/acc-colchon-neonatal.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Espuma de alta densidad o gel viscoelástico radiolúcido con funda antifluidos termosellada",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-inc-antifaz",
    name: "Antifaz Protector Ocular Neonatal para Fototerapia (Tallas S / M / L)",
    category: "incubadoras",
    categoryLabel: "Para Incubadoras & Neonatal",
    equipmentFor: "Unidades de Fototerapia Neonatal LED XHZ-90 / XHZ-90L y Cunas Radiantes",
    sku: "CK-INC-ANTIFAZ-FOT",
    image: "./images/products/acc-antifaz-fototerapia.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Tejido suave acolchado libre de látex con bloqueo total de luz azul (400-550 nm) sin presión ocular",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-dea-bat-primedic",
    name: "Batería de Litio Original para DEA Primedic HeartSave Y/YA y AMoul i7 Plus",
    category: "desfibriladores",
    categoryLabel: "Para Desfibriladores & DEA",
    equipmentFor: "DEA Primedic HeartSave Y/YA y DEA AMoul i7 Plus / i9 Plus",
    sku: "CK-BAT-DEA-PRIMEDIC",
    image: "./images/products/acc-bateria-primedic-ya.webp",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Batería Li-MnO2 de grado médico de larga vida en standby (hasta 4-5 años)",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-papel-desf-monitor",
    name: "Papel Térmico Milimetrado para Desfibrilador y Monitor Clínico (50mm / 80mm)",
    category: "desfibriladores",
    categoryLabel: "Para Desfibriladores & DEA",
    equipmentFor: "Desfibriladores Mindray D30/D60, AMoul i2/i6, Comen S5/S8 y Monitores con impresora",
    sku: "CK-ACC-PAPEL-50-80",
    image: "./images/products/acc-papel-termico-80mm.png",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Papel termosensible de alta definición y conservación prolongada de trazos ECG",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-manguera-ext-pni",
    name: "Manguera de Extensión PNI con Acople Rápido para Monitor Multiparámetros",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores EDAN X8, X10, X12, iM20, iM50, iM60, iM70, Mindray y Comen",
    sku: "CK-ACC-MANG-PNI",
    image: "./images/products/acc-manguera-nibp.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Tubo en PVC siliconado de 3 metros con conector metálico/plástico de acople rápido",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-sensor-temp-cutaneo",
    name: "Sensor de Temperatura Cutáneo y Esofágico/Rectal Reutilizable",
    category: "monitores",
    categoryLabel: "Para Monitores Multiparámetros",
    equipmentFor: "Monitores EDAN Serie X / Serie iM, Mindray uMEC / ePM y Comen",
    sku: "CK-ACC-TEMP-MON",
    image: "./images/products/acc-sensor-temp-edan.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Sonda de respuesta térmica rápida con cable blindado lavable (Adulto y Pediátrico)",
    warranty: "12 Meses",
    inStock: true
  },
  {
    id: "acc-sensor-flujo-vent",
    name: "Sensores de Flujo Reusables y Desechables para Ventilador Mecánico y Anestesia",
    category: "ventiladores-anestesia",
    categoryLabel: "Para Ventiladores & Anestesia",
    equipmentFor: "Ventiladores AMoul T6/T7, Prunus Padus 5/8, Mindray SV300/SV600 y Anestesia Boaray/WATO",
    sku: "CK-ACC-FLUJO-VENT",
    image: "./images/products/acc-sensor-flujo.jpg",
    invimaReg: "Registro Sanitario Vigente",
    compatibility: "Sensores espiratorios e inspiratorios adulto, pediátrico y neonatal de alta precisión",
    warranty: "12 Meses",
    inStock: true
  }
];

// =========================================================================
// MACRO-LÍNEA 4: SIMULACIÓN CLÍNICA & EDUCACIÓN MÉDICA (REFERENTE NASCO HEALTHCARE)
// =========================================================================
export const SIMULATION_CATEGORIES = [
  { id: "todos", label: "Todo Simulación NASCO" },
  { id: "habilidades-clinicas", label: "Habilidades Clínicas & Auscultación" },
  { id: "urgencias-trauma", label: "Atención de Urgencias & Traumatismos" },
  { id: "rcp-via-aerea", label: "RCP, DEA & Vía Aérea" },
  { id: "anatomia", label: "Anatomía & Modelos Médicos" }
];

export const SIMULATION_PRODUCTS = [
  {
    id: "sim-auscultation-2",
    name: "Simulador de Auscultación Cardiopulmonar NASCO Auscultation Trainer 2.0",
    category: "habilidades-clinicas",
    categoryLabel: "Habilidades Clínicas & Auscultación",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF01290EX",
    image: "./images/products/sim-auscultation-trainer.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Referente Oficial NASCO",
    desc: "Torso simulador de auscultación avanzada con puntos anatómicos reales de corazón, pulmones e intestino, controlable por tablet/iPad y estetoscopio inteligente SmartScope 2.0.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Referencia oficial LF01290EX)" },
      { label: "Biblioteca Acústica", value: "Amplia galería de ruidos cardíacos, pulmonares e intestinales normales y patológicos" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-keri-manikin",
    name: "Maniquí de Cuerpo Completo para Cuidado de Pacientes y Enfermería KERi™",
    category: "habilidades-clinicas",
    categoryLabel: "Habilidades Clínicas & Auscultación",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF04121",
    image: "./images/products/sim-keri-manikin.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Enfermería & Cuidado",
    desc: "Maniquí de cuerpo entero para facultades de salud y enfermería: práctica de baño, movilización, cateterismo, inyecciones IM, cuidado de ostomías y úlceras por presión.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Serie Life/form® KERi LF04121)" },
      { label: "Procedimientos", value: "Más de 25 habilidades clínicas de enfermería y atención hospitalaria" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-venipuncture-arm",
    name: "Brazo Simulador Avanzado para Venopunción, Canalización e Inyección IV",
    category: "habilidades-clinicas",
    categoryLabel: "Habilidades Clínicas & Auscultación",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF01121",
    image: "./images/products/sim-venipuncture-arm.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Acceso Vascular Realista",
    desc: "Brazo anatómico con red venosa completa (cefálica, basílica, cubital media y dorsal de la mano) con retorno sanguíneo simulado y piel reemplazable.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare Life/form®" },
      { label: "Prácticas", value: "Flebotomía, infusión intravenosa e inyección intradérmica/intramuscular" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-smart-stat",
    name: "Simulador de Paciente de Emergencias y Cuidado Crítico SMART STAT",
    category: "urgencias-trauma",
    categoryLabel: "Atención de Urgencias & Traumatismos",
    brand: "NASCO Healthcare",
    sku: "NASCO-101-8001",
    image: "./images/products/sim-smart-stat.webp",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Simulación ACLS & Trauma",
    desc: "Simulador inalámbrico de paciente adulto de alta fidelidad para entrenamiento en urgencias, trauma, intubación difícil, descompresión torácica, desfibrilación y monitoreo.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Simulaids® SMART STAT 101-8001)" },
      { label: "Control Inalámbrico", value: "Operación por iPad con escenarios prehospitalarios y de UCI" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-charlie-neonatal",
    name: "Simulador de Reanimación Neonatal Avanzada C.H.A.R.L.I.E.",
    category: "urgencias-trauma",
    categoryLabel: "Atención de Urgencias & Traumatismos",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF01421",
    image: "./images/products/sim-charlie-neonatal.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Reanimación Neonatal NRP",
    desc: "Simulador neonatal diseñado para programas de reanimación neonatal: manejo de vía aérea, intubación, ventilación a presión positiva, cateterismo umbilical y acceso intraóseo.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (LF01421)" },
      { label: "Enfoque", value: "Urgencias pediátricas, salas de parto y UCI neonatal" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-airway-trainer",
    name: "Torso Entrenador de Manejo de Vía Aérea, Intubación y RCP Adulto",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-101-086FB",
    image: "./images/products/sim-airway-trainer.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Intubación & BLS",
    desc: "Maniquí de entrenamiento anatómico para intubación endotraqueal/nasotraqueal, máscara laríngea, ventilación con bolsa-válvula-máscara (AMBU) y compresiones torácicas.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (101-086FB / LF03602)" },
      { label: "Anatomía", value: "Cuerdas vocales realistas, tráquea, esófago y pulmones inflables" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-trainer-dea",
    name: "Desfibrilador de Entrenamiento Universal (AED Practi-Trainer)",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO / WNL Products",
    sku: "NASCO-SB52283",
    image: "./images/products/sim-aed-trainer.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Capacitación Res. 3316",
    desc: "Simulador de DEA con control remoto, múltiples escenarios de paro cardíaco, comandos de voz en español, metrónomo de RCP y parches de entrenamiento reutilizables.",
    specs: [
      { label: "Aplicación", value: "Cursos de Soporte Vital Básico (BLS) y brigadas de Espacios Cardioprotegidos" },
      { label: "Escenarios", value: "Ritmos desfibrilables y no desfibrilables con control por instructor" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-torso-anatomia",
    name: "Torso Anatómico Humano Clásico Desmontable (18 a 27 Partes)",
    category: "anatomia",
    categoryLabel: "Anatomía & Modelos Médicos",
    brand: "NASCO Healthcare",
    sku: "NASCO-MG31998",
    image: "./images/products/sim-torso-anatomia.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Anatomía Humana",
    desc: "Modelo anatómico de torso humano con órganos internos desmontables de alta precisión cromática para facultades de medicina, enfermería y colegios.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Línea de Anatomía MG31998)" },
      { label: "Órganos Desmontables", value: "Cerebro, pulmones, corazón en 2 partes, hígado, estómago, intestinos y columna" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-corazon-anatomia",
    name: "Modelo Anatómico de Corazón Humano y Sistema Circulatorio",
    category: "anatomia",
    categoryLabel: "Anatomía & Modelos Médicos",
    brand: "NASCO Healthcare",
    sku: "NASCO-MG22278",
    image: "./images/products/sim-corazon-anatomia.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Docencia Cardiológica",
    desc: "Modelo didáctico de corazón humano en partes magnéticas para estudio detallado de aurículas, ventrículos, válvulas cardíacas y grandes vasos.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (MG22278)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-prompt-flex-cpr",
    name: "Torso de Entrenamiento en RCP Adulto/Niño NASCO Prompt® Flex CPR con Feedback",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF06003",
    image: "./images/products/sim-cpr-prompt.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Feedback AHA en Tiempo Real",
    desc: "Torso de entrenamiento en RCP liviano y resistente convertible adulto/niño con retroalimentación Bluetooth Heartisense® sobre profundidad, frecuencia y retroceso torácico.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Línea Life/form® CPR Prompt®)" },
      { label: "Retroalimentación", value: "Compatible con app de monitoreo en vivo de compresiones y ventilaciones (AHA)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-basic-buddy-pack",
    name: "Pack de Torsos de RCP NASCO Basic Buddy® (Adulto y Pediátrico)",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF03693-5",
    image: "./images/products/sim-basic-buddy.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Estándar Universitario BLS",
    desc: "Torsos económicos y duraderos para prácticas grupales masivas de RCP con sistema higiénico desechable de bolsa pulmonar y elevación realista del tórax.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Life/form® Basic Buddy®)" },
      { label: "Presentaciones", value: "Disponible individual o en pack institucional x5 y x10 torsos con bolso" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-baby-buddy",
    name: "Maniquí de RCP Lactante / Neonatal NASCO Baby Buddy®",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF03720",
    image: "./images/products/sim-baby-buddy.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "RCP Pediátrica & Lactante",
    desc: "Maniquí de cuerpo completo de lactante diseñado para enseñar compresiones torácicas con dos dedos, ventilación de rescate y referencias anatómicas pediátricas.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Life/form® Baby Buddy® LF03720)" },
      { label: "Higiene", value: "Vía aérea económica reemplazable por estudiante sin limpieza cruzada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-brad-cpr",
    name: "Torso Maniquí de RCP Resistente NASCO Brad™ con Indicador Luminoso",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-100-2865",
    image: "./images/products/sim-brad-cpr.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Indicador LED VTA",
    desc: "Torso robusto Simulaids® Brad™ con piel de vinilo realista sobre espuma de poliuretano y consola luminosa para verificar colocación de manos, profundidad y ventilación.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare / Simulaids® (Brad™ VTA)" },
      { label: "Entrenamiento", value: "Compresiones, inclinación de cabeza/mentón y desplazamiento mandibular" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-choking-charlie",
    name: "Torso Entrenador de Maniobra de Heimlich y Obstrucción de Vía Aérea (Choking Charlie™)",
    category: "rcp-via-aerea",
    categoryLabel: "RCP, DEA & Vía Aérea",
    brand: "NASCO Healthcare",
    sku: "NASCO-100-1602",
    image: "./images/products/sim-choking-charlie.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Maniobra de Heimlich",
    desc: "Torso anatómico diseñado específicamente para practicar compresiones abdominales (Heimlich) y desobstrucción de vía aérea con expulsión real de cuerpo extraño simulado.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare / Simulaids® (Adult Choking Manikin)" },
      { label: "Práctica", value: "Incluye objetos simulados de obstrucción, referencias costales y bolso de transporte" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-auscultation-ipad",
    name: "Simulador de Auscultación Cardiopulmonar con iPad y SmartScope",
    category: "habilidades-clinicas",
    categoryLabel: "Habilidades Clínicas & Auscultación",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF01290-IPAD",
    image: "./images/products/sim-auscultation-ipad.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Incluye iPad + SmartScope",
    desc: "Estación completa de auscultación clínica con torso anatómico inalámbrico, estetoscopio SmartScope y iPad preconfigurado con biblioteca de sonidos cardíacos y pulmonares.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare Life/form®" },
      { label: "Interacción", value: "El estudiante ausculta con el SmartScope y escucha sonidos reales según el foco anatómico" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-cateterismo-vesical",
    name: "Simulador de Cateterismo Vesical Masculino y Femenino NASCO",
    category: "habilidades-clinicas",
    categoryLabel: "Habilidades Clínicas & Auscultación",
    brand: "NASCO Healthcare",
    sku: "NASCO-LF00843",
    image: "./images/products/sim-catheterization.png",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Enfermería & Urología",
    desc: "Modelo pélvico intercambiable masculino y femenino con esfínteres realistas y reservorio de fluido para práctica estéril de sondaje vesical.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare Life/form® (LF00843 / LF00856)" },
      { label: "Procedimientos", value: "Técnica aséptica de cateterismo uretral, inflado de balón y retorno de orina simulada" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-moulage-trauma",
    name: "Kit de Simulación de Heridas, Hemorragias y Moulage de Trauma NASCO",
    category: "urgencias-trauma",
    categoryLabel: "Atención de Urgencias & Traumatismos",
    brand: "NASCO Healthcare",
    sku: "NASCO-800-028",
    image: "./images/products/sim-moulage-trauma.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Simulación Triage & Trauma",
    desc: "Maletín completo de moulage con heridas sangrantes acoplables, fracturas expuestas, quemaduras y sangre simulada para simulacros de emergencias.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare / Simulaids® (Xtreme Trauma Moulage Kit)" },
      { label: "Aplicación", value: "Entrenamiento de triage, empaquetamiento de heridas, torniquetes y brigadas de rescate" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  },
  {
    id: "sim-esqueleto-anatomico",
    name: "Esqueleto Humano Anatómico Articulado de Tamaño Real con Soporte Rodante NASCO",
    category: "anatomia",
    categoryLabel: "Anatomía & Modelos Médicos",
    brand: "NASCO Healthcare",
    sku: "NASCO-MG22949",
    image: "./images/products/sim-skeleton.jpg",
    invimaReg: "Registro Sanitario Vigente",
    warranty: "12 Meses",
    badge: "Tamaño Real 170 cm",
    desc: "Esqueleto humano adulto de tamaño natural con más de 200 huesos articulados, cráneo desmontable en 3 partes, extremidades removibles y pedestal rodante.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (Línea Anatómica MG22949)" },
      { label: "Detalles", value: "Articulaciones móviles, dentición detallada, salida de raíces nerviosas y base de 5 ruedas" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  }
];
