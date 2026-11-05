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
    invimaReg: "2017EIB-0012894 (Clase IIb)",
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
    invimaReg: "2021EIB-0019482 (Clase IIb)",
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
    invimaReg: "2019EIB-0017420 (Clase IIb)",
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
    invimaReg: "2018EIB-0015920 (Clase IIb)",
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
    invimaReg: "2020EBC-0021450 (Clase III)",
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
    invimaReg: "2020EBC-0021450 (Clase III)",
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
    invimaReg: "2020EIB-0018590 (Clase III)",
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
    invimaReg: "2021EBC-0023810 (Clase III)",
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
    invimaReg: "2021EIB-0023190 (Clase III)",
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
    invimaReg: "2021EIB-0023190 (Clase III)",
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
    invimaReg: "2019EIB-0018210 (Clase IIa)",
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
    invimaReg: "2020EIB-0020115 (Clase IIa)",
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
    invimaReg: "2023EIB-0025104 (Clase IIa)",
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
    invimaReg: "2019EIB-0016832 (Clase IIa)",
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
    invimaReg: "2020EIB-0019512 (Clase IIa)",
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
    invimaReg: "2018EIB-0014890 (Clase IIa)",
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
    invimaReg: "2019EIB-0017890 (Clase IIb)",
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
    invimaReg: "2017EIB-0013910 (Clase IIb)",
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
    invimaReg: "2020EIB-0019840 (Clase IIb)",
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
    invimaReg: "2018EIB-0014290 (Clase IIb)",
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
    invimaReg: "2019EIB-0015421 (Clase IIb)",
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
    invimaReg: "2018EIB-0014290 (Clase IIb)",
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
    invimaReg: "2020EIB-0019112 (Clase IIb)",
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
    invimaReg: "2020EBC-0021890 (Clase IIb)",
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
    invimaReg: "2020EBC-0021890 (Clase IIb)",
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
    invimaReg: "2021EIB-0022419 (Clase III)",
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
    invimaReg: "2021EBC-0022980 (Clase III)",
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
    invimaReg: "2016EIB-0010543 (Clase IIa)",
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
    invimaReg: "2018EIB-0014512 (Clase IIa)",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase IIa)",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase I)",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase IIb)",
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
    invimaReg: "Dispositivo de Antropometría Médica",
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
    invimaReg: "Registro / Permiso Comercialización Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase IIa)",
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
    invimaReg: "2020EIB-0019284 (Clase IIa)",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase I)",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Registro Sanitario INVIMA Vigente",
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
    invimaReg: "Botiquín Reglamentario Prehospitalario",
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
    invimaReg: "Registro Sanitario INVIMA Vigente (Clase IIa)",
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
  { id: "incubadoras", label: "Para Incubadoras & Neonatal" }
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
    compatibility: "Policarbonato autoclavable con válvula flotadora anti-desborde y filtros hidrofóbicos",
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
    warranty: "12 Meses",
    badge: "Docencia Cardiológica",
    desc: "Modelo didáctico de corazón humano en partes magnéticas para estudio detallado de aurículas, ventrículos, válvulas cardíacas y grandes vasos.",
    specs: [
      { label: "Fabricante", value: "NASCO Healthcare (MG22278)" },
      { label: "Garantía Oficial", value: "12 Meses • Modalidad Venta Directa" }
    ]
  }
];
