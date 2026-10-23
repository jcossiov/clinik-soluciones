# ESPECIFICACIÓN MAESTRA DE REDISEÑO UI/UX & ARQUITECTURA FUNCIONAL
**Proyecto:** Clinik Soluciones (`https://jcossiov.github.io/clinik-soluciones/`)
**Proveedor Base de Activos y Referencias:** Nova Médica S.A.S. (`https://novamedicasas.com/`)
**Estándar de Diseño:** Swiss Clinical Precision + Kinetic Bento Modular (2026 Healthtech B2B)

---

## 1. AUDITORÍA DEL SITIO ACTUAL: QUÉ CORREGIR, QUÉ QUITAR Y QUÉ AGREGAR

### A. Errores Críticos a Corregir de Raíz
1. **Bug del 50% de Ancho (`50vw` Viewport Squish):**
   - **Problema:** Todo el flujo de la página se comprime en la mitad izquierda de la pantalla en resoluciones desktop, dejando el 50% derecho en blanco.
   - **Solución:** Auditar `html`, `body`, `#root`/`#app` y `<main>`. Eliminar cualquier `grid-template-columns: 1fr 1fr`, `w-1/2`, `max-width: 50%` o `<div>` mal cerrado en el contenedor raíz. Forzar `w-full max-w-[100vw] overflow-x-hidden` en `body` y contenedores internos `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
2. **Colisión de Tarjetas Flotantes en el Hero:**
   - **Problema:** Los bloques flotantes superiores (`TELEMETRÍA QUIRÓFANO`, `LEY 1831 DE 2017`, `Espacio Cardioprotegido C1A`) se superponen sobre el titular principal y se cortan a la derecha.
   - **Solución:** Reemplazar por un layout **Split Hero Asimétrico** (60% columna izquierda para valor + CTAs / 40% columna derecha para un Showcase Visual Bento con imágenes reales de los equipos sin invadir el texto).
3. **Navbar Estática que se pierde en el Scroll:**
   - **Problema:** Al bajar por la página, el usuario pierde la barra de navegación y el acceso rápido a las demás secciones o a la cotización.
   - **Solución:** Implementar una **Smart Sticky Navbar (`fixed top-0 left-0 right-0 z-50`)** con `backdrop-blur-xl bg-white/90 border-b border-slate-200/80`, indicador de sección activa (*Scroll-Spy*), buscador rápido de referencias y botón de cotización permanente.

---

### B. Elementos a Quitar / Desaturar (Limpieza Cognitiva)
1. **ELIMINAR TODOS LOS PRECIOS FIJOS (`$7.700.000 COP` y similares):**
   - **Razón comercial:** Los equipos biomédicos e insumos importados fluctúan diariamente según TRM, fletes internacionales y lotes de importación de proveedores.
   - **Acción:** Borrar cualquier valor en pesos/dólares del código. Sustituirlo por el badge en vivo:
     `🟢 Cotización Indexada al Día • Stock e Importación Verificada`.
2. **ELIMINAR LOS "MUROS DE TEXTO" EN LAS TARJETAS DE LA VISTA PRINCIPAL:**
   - **Problema:** Las tarjetas del *Paquete Integral de Cardioprotección* (ítems 1 al 7) y las secciones de servicios tienen párrafos densos de 5 a 7 líneas sin apoyo fotográfico.
   - **Acción (Divulgación Progresiva / Progressive Disclosure):**
     - En la vista principal (Landing), reducir el texto de cada tarjeta a **máximo 1 línea descriptiva (90 caracteres) + 3 píldoras técnicas clave**.
     - Mover el 100% de los párrafos técnicos largos, normativas detalladas, alcances e inclusiones hacia el **Interior del Modal / Slide-over Drawer** que se abre al hacer clic en cada producto.

---

### C. Elementos Nuevos a Agregar (Alto Impacto Visual & Conversión)
1. **Fotografía Real Contextualizada de Equipos Médicos (Estilo Nova Médica Evolucionado):**
   - Todas las tarjetas de productos y soluciones deben ser **80% visuales**.
   - Fondo de Hero con ambientación clínica/hospitalaria de alta gama + fotografías recortadas de equipos reales (**AMOUL, EDAN, MEDCAPTAIN, SMAF, NINGBO DAVID, HUGEMED**).
2. **Sistema de Modales / Slide-Over Inspector por Producto:**
   - Al hacer clic en cualquier tarjeta, se despliega un modal interactivo con:
     - Imagen ampliada de alta resolución del equipo.
     - Marca, Nombre comercial y **SKU oficial indexado** en tipografía monoespaciada (`JetBrains Mono`).
     - Pestañas organizadas: `1. Especificaciones Técnicas` | `2. Accesorios Incluidos` | `3. Respaldo & Habilitación Res. 3100`.
     - Selector rápido de modalidad (`1 Unidad`, `2-5 Unidades`, `Dotación Institucional / Licitación`, `Alquiler / Comodato`).
     - CTA directo: **"Cotizar este Equipo al Precio de Hoy por WhatsApp"**.
3. **Motor Conversacional WhatsApp (Agente IA / Humano):**
   - Cada producto dispara un mensaje único y estructurado a `+573002021894` con el nombre exacto del equipo, SKU, línea clínica y modalidad seleccionada, listo para que un Agente de IA o asesor humano consulte el precio del día y responda al instante.

---

## 2. MATRIZ DE PRODUCTOS E IMÁGENES INDEXADAS (PROVEEDOR: NOVAMEDICASAS.COM)

Cada equipo mostrado en **Clinik Soluciones** debe estar indexado con estas referencias exactas:

| ID | Nombre Comercial en Clinik | Marca | SKU Indexado | URL Referencia / Ficha en `novamedicasas.com` | Píldoras en Vista Principal (Máx. 3) | Especificaciones Completas (Mover al Modal) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Desfibrilador Externo Automático DEA i7 PLUS** | AMOUL | `001-0013-000014` | `https://novamedicasas.com/producto/desfibriladordeai7plus/` | `Bifásico 100-360J` • `Carga <8s` • `Batería 7 Años` | Análisis automático de ritmo cardíaco; energía configurable 100–360J (adulto) / 10–100J (pediátrico); guía por voz paso a paso; batería LiMnO2 4500 mAh (hasta 7 años en espera); autoverificación diaria/semanal/mensual; incluye electrodos multifuncionales adulto/pediátrico. Cumple Ley 1831 de 2017 y Registro INVIMA. |
| **02** | **Desfibrilador DEA i9 PLUS con Pantalla Color 7"** | AMOUL | `001-0013-000015` | `https://novamedicasas.com/producto/desfibrilador-dea-i9-plus/` | `Pantalla 7" TFT` • `100-360J` • `Guía Visual + Voz` | Pantalla a color de 7" con guía animada de RCP en vivo; energía 100–360J adulto / 10–100J pediátrico; carga rápida <8s (200J); almacenamiento de eventos clínicos; batería de litio de 4500 mAh hasta 7 años. |
| **03** | **Gabinete Mural Normalizado para DEA WAP-812-M9** | WAP MEDICAL | `001-0021-000014` | `https://novamedicasas.com/producto/gabinetedeareddea/` <br> Ficha: `.../FICHAV2025/GABINETE%20DEA.pdf` | `ABS + Visor PC` • `Alarma + Estrobo` • `45x35x15 cm` | Construido en ABS de alta resistencia y visor en policarbonato anti-impacto; esquinas redondeadas de seguridad; alarma sonora de alta potencia y luz estroboscópica LED activadas por sensor de apertura; incluye señalética fotoluminiscente ILCOR/AHA. |
| **04** | **Paquete Integral Espacio Cardioprotegido C1A (Llave en Mano)** | CLINIK / AMOUL | `CLINIK-C1A-1831` | Integración Llave en Mano Ley 1831 | `DEA + Gabinete + Kit` • `BLS 30 Pers.` • `Dossier Res. 3100` | Incluye: (1) DEA i7/i9 PLUS con registro INVIMA, (2) Gabinete WAP-812-M9 con alarma, (3) Kit de bioseguridad y RCP rápida (máscara pocket, tijeras de trauma, rasuradora, guantes nitrilo), (4) Señalética tridimensional ILCOR/AHA, (5) Capacitación certificada BLS & DEA para 20-30 brigadistas, (6) Mantenimiento preventivo Año 1 con simulador de arritmias, (7) Dossier legal y registro ante Secretaría de Salud. |
| **05** | **Monitor de Signos Vitales de Transporte iM20** | EDAN | `EDAN-IM20-EN1789` | `https://novamedicasas.com/producto/monitor-de-signos-vitales-im20/` <br> Ficha: `.../2025/04/iM-20-_c1.pdf` | `Norma EN1789` • `IP44 Caídas 1.2m` • `Batería 5.5h` | Certificado bajo norma de ambulancias EN1789; pantalla táctil de 5"; monitoreo ECG, SpO2, NIBP, RESP, TEMP y opcional EtCO2/IBP; resistencia a caídas de 1.2m y protección IP44 contra agua/polvo; peso ultraligero <1.5 kg. |
| **06** | **Monitor Multiparámetros Clínico & Ambulancia X8 / X8 CO2** | EDAN | `001-0001-000011` | `https://novamedicasas.com/producto/monitor-de-paciente-multiparametro-x8co2/` <br> Ficha: `.../FICHAV2025/MONITOR%20DE%20PACIENTE%20X8.pdf` | `Pantalla Táctil 8"` • `Capnografía CO2` • `Adu/Ped/Neo` | Monitoreo avanzado ECG, SpO2, NIBP, RESP, TEMP y CO2 (Capnografía para TAM/UCI); algoritmo iSEAP con detección de 33 tipos de arritmias; análisis de segmento ST; batería Li-ion integrada e interfaz HL7. |
| **07** | **Ventilador Pulmonar de Transporte y Críticos AMOUL T6** | AMOUL | `001-0016-000010` | `https://novamedicasas.com/producto/ventilador-amoul-t6/` | `Táctil 10.4"` • `Turbina Interna` • `Volumen desde 2ml` | Ventilación invasiva y no invasiva para neonatos (desde 2 ml de volumen corriente), pediátricos y adultos; turbina interna silenciosa que no requiere aire comprimido externo; peso 6.2 kg con batería de larga duración para ambulancias TAM y UCI. |
| **08** | **Bomba de Infusión Peristáltica Portátil MP-60 / SYS-6010** | EDAN / MEDCAPTAIN | `001-0012-000002` | `https://novamedicasas.com/producto/bomba-de-infusion-edan-mp-60/` | `Pantalla Táctil` • `Anti-Flujo Libre` • `Batería 5 Horas` | Infusión de alta precisión para transporte asistencial TAB/TAM, urgencias y UCI; puerta motorizada; detección de oclusión y burbujas por ultrasonido; batería de litio recargable con más de 5 horas de autonomía. |
| **09** | **Succionador Quirúrgico y de Ambulancia SXT-5A** | SMAF | `001-0011-000001` | `https://novamedicasas.com/producto/succionador-sxt-5a/` | `Alto Vacío / Flujo` • `1000mL Autoclavable` • `Peso 4.0 kg` | Aspirador eléctrico portátil libre de aceite; protección contra sobreflujo de líquidos; frasco recolector de 1000 mL en policarbonato esterilizable en autoclave; incluye filtro antibacteriano y cánulas. |
| **10** | **Desfibrilador Monitor Bifásico con Marcapasos i6 (4 en 1)** | AMOUL | `AMOUL-I6-4IN1` | `https://novamedicasas.com/producto/desfibriladori6/` | `4 en 1: DEA + Marcapasos` • `Pantalla 7"` • `Impresora Térmica` | Equipo de reanimación avanzada para quirófano, urgencias y ambulancias TAM: Desfibrilador manual bifásico + DEA + Marcapasos no invasivo + Monitor multiparámetros con palas convertibles adulto/pediátrico e impresora térmica integrada. |
| **11** | **Electrocardiógrafo Digital SE-301 & Incubadora TI-2000** | EDAN / NINGBO DAVID | `EDAN-SE301` | `https://novamedicasas.com/producto/electrocardiografo-se-301/` | `12 Derivaciones` • `Táctil Color` • `Transporte Neonatal` | Electrocardiógrafo ultracompacto de 3 canales y 12 derivaciones simultáneas con interpretación automática Glasgow + Incubadora de transporte neonatal TI-2000 con doble pared y operación AC/DC para ambulancias TAM. |
| **12** | **Videolaringoscopio Portátil VL3R & Oximetría H100B** | HUGEMED / EDAN | `001-0020-000009` | `https://novamedicasas.com/producto/videolaringoscopio-vl3r/` | `Pantalla 3.5" 180°` • `Cámara Anti-Fog` • `Valvas IPX8` | Videolaringoscopio para manejo de vía aérea difícil con grabación de video/fotos (32GB), cámara anti-empañante e impermeabilidad IPX8 + Oxímetro de pulso clínico EDAN H100B con certificado de calibración. |

---

## 3. ARQUITECTURA DE NAVEGACIÓN Y SECCIONES DEL SITIO

1. **`Sticky Header + Smart Navbar` (Fijo durante todo el scroll):**
   - Barra superior de autoridad normativa (`NIT 901.074.678-9` • `Sabaneta, Antioquia` • `Res. 3100` • `ISO/IEC 17025`).
   - Barra principal con enlaces ancla suaves (`Inicio`, `Espacios Cardioprotegidos`, `Ambulancias TAB/TAM`, `Catálogo de Equipos`, `Metrología & Mantenimiento`, `Telemetría Clinik OS`), filtro rápido y botón **`Cotización del Día (WhatsApp)`**.
2. **`Sección 1: Split Hero Contextualizado` (`#inicio`):**
   - Columna izquierda: Titular de alto impacto, certificaciones clave y doble CTA (*Explorar Catálogo Visual* / *Cotizar con Agente en Línea*).
   - Columna derecha: **Bento Visual Showcase** con imágenes reales del *DEA i7 Plus*, *Monitor EDAN X8* y *Certificación Metrológica* (sin superponerse al texto).
3. **`Sección 2: Implementación de Espacios Cardioprotegidos Ley 1831` (`#cardioproteccion`):**
   - Presentación visual en Bento Grid de los componentes con imágenes reales del **DEA i7/i9 PLUS**, **Gabinete WAP-812-M9**, **Kit RCP/Señalética** y los módulos de servicio (**Capacitación BLS**, **Mantenimiento Año 1** y **Dossier Legal**).
   - Al hacer clic en cualquier módulo, se abre el Modal con todo el detalle técnico y normativo.
   - Cierre de sección con el configurador rápido del **Paquete C1A Llave en Mano** (sin precio fijo, con envío directo a WhatsApp según el tipo de entidad: *Empresa, Colegio, IPS o Transporte*).
4. **`Sección 3: Dotación Integral de Ambulancias TAB / TAM & Cuidado Crítico` (`#ambulancias`):**
   - Selector interactivo por pestañas: **`Todos`** | **`Ambulancia TAB (Básica)`** | **`Ambulancia TAM (Medicalizada)`** | **`Quirófano & UCI`** | **`Cardiología & Diagnóstico`**.
   - Grilla visual de 3 o 4 columnas a ancho completo (`max-w-7xl`) con las tarjetas de producto indexadas, foto grande, SKU, 3 píldoras y botones `Ver Ficha (+)` y `Cotizar Hoy`.
5. **`Sección 4: Metrología Biomédica (ISO/IEC 17025), Mantenimiento & Telemetría Clinik OS` (`#servicios` & `#telemetria`):**
   - Tarjetas visuales escaneables para: *Calibración con Trazabilidad*, *Mantenimiento Preventivo/Correctivo*, *Hojas de Vida en Clinik OS* y *Ciclo de Sostenibilidad del DEA (6, 12, 24 y 48 meses)*.
6. **`Componente Global: Product Detail Modal / Drawer` + `Floating WhatsApp Concierge`:**
   - Modal reutilizable que recibe el objeto del producto seleccionado y renderiza su foto en alta definición, especificaciones completas, certificaciones y el generador de cotización diaria por WhatsApp.
