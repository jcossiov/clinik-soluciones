# CLINIK SOLUCIONES COLOMBIA — HANDOVER MASTER & GUÍA DE CONTINUIDAD
> **Documento Maestro de Arquitectura, Diseño, Datos Extraídos y Prompt de Inicio para Nuevo Chat**  
> **Versión:** 2.0 (Verificada)  
> **Ruta Local:** `/Users/jesusdavidcossiovergara/Documents/VORTEX/proyectos-clientes/clinik-soluciones/`  
> **Repositorio Remoto:** `https://github.com/jcossiov/clinik-soluciones.git`  
> **URL Producción en Vivo:** [https://jcossiov.github.io/clinik-soluciones/](https://jcossiov.github.io/clinik-soluciones/)

---

## 1. RESUMEN EJECUTIVO Y OBJETIVO DEL PROYECTO

Transformar la presencia digital y el ecosistema comercial de **CLINIK SOLUCIONES COLOMBIA S.A.S.** mediante:
1. **Re-ingeniería de Portafolio:** Absorción y modernización integral de todo el catálogo del principal competidor importador en Colombia (**Novamédica SAS** — `https://novamedicasas.com/`), abarcando sus **23 líneas de equipamiento biomédico**, **17 líneas de accesorios/repuestos** y **10 especialidades clínicas hospitalarias**.
2. **Identidad Corporativa Auténtica:** Eliminación total de alucinaciones asistenciales (CliniK **NO** es una clínica de consulta ni ambulancias para pacientes); posicionamiento como empresa de **Ingeniería Biomédica, Dotación Hospitalaria, Metrología y Capacitación Técnica**.
3. **Estilo Visual Vanguardista:** Basado en la plantilla interactiva de 21st.dev ***Fintech Landing Page Template with Lilac Meadow Hero (Rose Variant)*** (`https://21stdev-my-components-one.vercel.app/#lilac-meadow-landing/rose`), pero adaptado con rigor a la **paleta corporativa de CliniK Soluciones**: fondo blanco inmaculado / pale mint (`#ffffff` / `#fbfdfc`), azul quirúrgico (`#005071`), verde bio (`#69a53c`) y acentos cian/menta (`#00b4d8` / `#00e5bf`).
4. **Doble Experiencia Web + SaaS:** Landing B2B interactiva para directores de compras hospitalarias + **CliniK OS** (Panel administrativo interactivo con tablero Kanban para gestión de mantenimiento y calibraciones metrológicas INVIMA).

---

## 2. REPOSITORIOS, RUTAS Y ESTADO DE DESPLIEGUE

| Recurso | Detalle / Ubicación |
| :--- | :--- |
| **Workspace Local** | `/Users/jesusdavidcossiovergara/Documents/VORTEX/proyectos-clientes/clinik-soluciones` |
| **Git Remoto** | `https://github.com/jcossiov/clinik-soluciones.git` |
| **Ramas Activas** | `main` (código fuente y build) • `gh-pages` (despliegue estático) |
| **Despliegue en Vivo** | `https://jcossiov.github.io/clinik-soluciones/` |
| **Servidor Dev Local** | `http://127.0.0.1:5174/` (ejecutado con `pnpm run dev -- --port 5174`) |
| **Stack Tecnológico** | React 19.x + Vite 8.x + Tailwind CSS v4 + Lucide React + Canvas Confetti |

### Archivos Principales del Proyecto
- `src/App.jsx`: Componente maestro que contiene el switcher de vistas (`landing` / `admin`), el Hero Lilac Meadow, Bento Grids, catálogo interactivo con filtros, modales de cotización y el panel hospitalario CliniK OS.
- `src/data/products.js`: Fuente de verdad de datos (`PARTNER_BRANDS`, `HOSPITAL_SOLUTIONS`, `ACCESSORIES_CATALOG`, `CLINIK_PRODUCTS` con 23 líneas y `CLINIK_SERVICES` con los 6 servicios corporativos).
- `src/index.css`: Tokens de colorimetría corporativa, reglas de Tailwind v4, desacoplamiento de modo oscuro y keyframes de animación (`animate-float-slow`, `lml-bob`, `btn-shimmer`, `animate-ecg`).
- `index.html`: Entrypoint HTML configurado con fuentes Google (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`) y clase base de fondo claro.
- `dist/`: Carpeta con submódulo git configurado para empujar directamente a `origin/main` y `origin/gh-pages`.

---

## 3. IDENTIDAD CORPORATIVA REAL DE CLINIK SOLUCIONES COLOMBIA

> [!CRITICAL]
> **REGLA DE NO ALUCINACIÓN:** CliniK Soluciones **NO es una IPS, hospital, clínica o servicio de ambulancias de atención médica a pacientes**. No prestar servicios de urgencias ni atención clínica directa. Es una empresa de **Ingeniería Biomédica B2B, Dotación Tecnológica, Calibración Metrológica y Consultoría Hospitalaria**.

- **Razón Social:** CLINIK SOLUCIONES COLOMBIA S.A.S.
- **NIT:** 901.074.678-9
- **Fecha de Constitución:** 20 de abril de 2017 (Cámara de Comercio de Aburrá Sur).
- **Trayectoria:** 9 años de experiencia verificada en el sector salud e ingeniería clínica (Fundada en 2017).
- **Código de Actividad:** CIIU 4659 (Comercio al por mayor de otra maquinaria y equipo médico-quirúrgico).
- **Ubicación Principal:** Carrera 46 # 62 Sur - 59, Sabaneta, Antioquia, Colombia.
- **Línea de Asesoría Biomédica / PBX:** `+57 300 251 1994`
- **Correo Corporativo:** `info@cliniksoluciones.com`
- **Sitio Web Oficial:** `cliniksoluciones.com`

---

## 4. LOS 6 SERVICIOS CORPORATIVOS REALES (CLINIK SERVICES)

1. **Venta & Dotación Integral de Equipos Biomédicos:**  
   Comercialización directa de tecnología hospitalaria para UCI, quirófanos, salas de parto, urgencias y ambulancias TAB/TAM. Equipos 100% nuevos con registros sanitarios INVIMA vigentes, inducción técnica y puesta en marcha.
2. **Certificación, Metrología & Habilitación en Salud (Res. 3100 de 2019):**  
   Calibración y verificación metrológica funcional con patrones trazables a estándares NTC-ISO 17025. Estructuración y auditoría de Hojas de Vida con código QR para visitas de habilitación de Secretarías de Salud.
3. **Capacitación Técnica & Soporte Vital (BLS / DEA):**  
   Entrenamiento clínico y operativo a médicos, enfermeros, tecnólogos y brigadistas en manejo seguro de equipamiento, prevención de eventos adversos (Tecnovigilancia) y cursos certificados en Soporte Vital Básico y uso del DEA.
4. **Planes de Renovación Tecnológica & Retoma (Trade-In):**  
   Modernización de parques hospitalarios depreciados u obsoletos. Retoma comercial de equipos en desuso como parte de pago y esquemas de renting biomédico deducible al 100% de impuestos.
5. **Mantenimiento Preventivo & Correctivo Especializado:**  
   Contratos de servicio técnico con visitas programadas, pruebas de seguridad eléctrica (IEC 60601 / Retie), stock de repuestos originales garantizados y uptime superior al 99.5% en áreas críticas.
6. **Implementación de Espacios Cardioprotegidos (Ley 1831 de 2017):**  
   Solución llave en mano para cumplir la Ley 1831 de 2017 y Res. 3316 de 2019 en centros comerciales, terminales, colegios, gimnasios, empresas e IPS. Estudio de riesgo, dotación de DEAs, cabinas con alarma y radicación oficial.

---

## 5. CATÁLOGO RE-INGENIERIZADO DE NOVAMÉDICA SAS (EXTRAÍDO Y TIPADO)

### 8 Marcas Médicas Globales Representadas
1. **EDAN Instruments:** Monitoreo multiparámetro modular, electrocardiógrafos y diagnóstico.
2. **Medcaptain Medical:** Bombas de infusión continua y sistemas de infusión en UCI.
3. **BenQ Medical Technology:** Lámparas cialíticas satélite LED y mesas quirúrgicas electrohidráulicas.
4. **SMAF Medical:** Sistemas de succión quirúrgica y aspiradores de alto vacío.
5. **Saikang Medical:** Camillas hidráulicas de transporte, camas UCI y mobiliario hospitalario.
6. **Prunus Medical:** Ventilación pulmonar de alta gama y anestesia para cuidados intensivos.
7. **Ningbo David:** Incubadoras neonatales microclimáticas, cunas térmicas y fototerapia.
8. **Amoul Biomedical:** Desfibriladores bifásicos de 360J, DEAs automáticos y resucitadores.

### Resumen de las 23 Líneas de Equipamiento Integradas
- Bombas de infusión volumétricas (precisión ±2%, detección ultrasónica de burbujas).
- Desfibriladores bifásicos de 1 a 360 Joules con marcapasos transcutáneo.
- Desfibriladores Externos Automáticos (DEA) con autotest diario y guía de voz en español.
- Monitores multiparámetros modulares de 12.1" con SpO2 Masimo, PNI y Capnografía EtCO2.
- Ventiladores mecánicos de cuidados intensivos adulto/pediátrico con turbina integrada.
- Mesas de cirugía electrohidráulicas radiotranslúcidas de 320 kg para Arco en C.
- Lámparas quirúrgicas cialíticas dobles LED de 160.000 + 120.000 Lux (Ra 97).
- Ecógrafos Doppler color estacionarios y portátiles con HD Live 4D/5D.
- Incubadoras cerradas neonatales con servocontrol de humedad por vapor ultrasónico.
- Unidades electroquirúrgicas de 400W con corte bipolar y sellado de vasos de 7 mm.
- Localizadores de venas por luz infrarroja cercana (NIR) no invasivos.
- Electrocardiógrafos digitales simultáneos de 12 canales con algoritmo de análisis Glasgow.
- Máquinas de anestesia hospitalaria con vaporizadores y ventilación integrada.
- Aspiradores de secreciones de alto vacío continuos e intermitentes.

---

## 6. SISTEMA DE DISEÑO (LILAC MEADOW / ROSE ADAPTADO A CLINIK)

### Tokens de Colorimetría Oficial
```css
/* Colorimetría CliniK Soluciones */
--brand-teal: #005071;         /* Deep Medical Teal (Primario, Header, Títulos) */
--brand-teal-dark: #00364d;    /* Hover y fondos contrastados */
--brand-teal-light: #0077a8;   /* Acento interactivo y gradientes */
--brand-green: #69a53c;        /* Bio-Green (Vida, Certificaciones, Éxito) */
--brand-green-dark: #4f802c;   /* Hover de botones verdes */
--brand-green-light: #83c651;  /* Badges y acentos */
--brand-cyan: #00b4d8;         /* Cyan Tech (Telemetría, IoT, enlaces) */
--brand-cyan-glow: #00e5bf;    /* Resplandor médico y LED activo */

/* Tokens de Superficie (Modo Claro Inmaculado - OBLIGATORIO) */
--bg-page: #fbfdfc;            /* Fondo base limpio */
--bg-surface: #ffffff;         /* Superficie de tarjetas y docks */
--bg-card: #ffffff;            /* Tarjetas de producto y servicios */
--text-main: #0f172a;          /* Slate 900 (Lectura óptima de alto contraste) */
--text-muted: #475569;         /* Slate 600 (Textos descriptivos) */
--border-subtle: rgba(0, 80, 113, 0.1); /* Bordes médicos sutiles */
--shadow-meadow: 0 16px 40px -12px rgba(0, 80, 113, 0.08); /* Sombra suave */
```

### Reglas Críticas de Frontend
1. **Desacoplar Tailwind v4 del Modo Oscuro del Sistema Operativo:**
   En Tailwind v4, `@import "tailwindcss";` activa `@media (prefers-color-scheme: dark)` por defecto. Se debe mantener siempre al tope de `src/index.css`:
   ```css
   @import "tailwindcss";
   @custom-variant dark (&:where(.dark, .dark *));
   ```
2. **Escenario del Hero Contenido (`rounded-[2.5rem]`):**
   El Hero no debe ser un bloque infinito sin bordes. Debe emular el contenedor delimitado del template *Lilac Meadow*:
   - Contenedor con `rounded-[2.5rem]`, borde `border-teal-100/90`, gradiente de cielo médico `from-[#eaf6f2]/90 via-[#f4fbf8] to-white`.
   - Dos badges 3D flotantes con animación `@keyframes lml-bob` / `animate-float-slow` a los costados (UCI ECG 72 LPM a la izquierda, DEA RescueLife a la derecha) sin bloquear los botones centrales.
3. **Sección Independiente para Telemetría:**
   Las 4 tarjetas de telemetría hospitalaria no se deben amontonar debajo de los botones del Hero. Tienen su sección dedicada (`#telemetria`) después de las marcas de Novamédica con tarjetas de ancho completo (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`).

---

## 7. PROMPT MAESTRO PARA COPIAR Y PEGAR EN EL NUEVO CHAT

Copia y pega el siguiente bloque íntegro en un nuevo chat de Antigravity (recomendado iniciar con `/plan`):

```markdown
/plan
Actúa como Arquitecto Principal de Frontend y Diseñador UI/UX Senior para VORTEX Labs. 
Vamos a estructurar y construir la plataforma web comercial definitiva para **CLINIK SOLUCIONES COLOMBIA S.A.S.** trabajando sobre la carpeta existente:
`/Users/jesusdavidcossiovergara/Documents/VORTEX/proyectos-clientes/clinik-soluciones/`

### 1. CONTEXTO CORPORATIVO & DELIMITACIÓN DE ACTIVIDAD (REGLA DE NO ALUCINACIÓN)
- **Empresa:** CLINIK SOLUCIONES COLOMBIA S.A.S. (NIT 901.074.678-9, fundada en 2017 en Sabaneta, Antioquia, Cra 46 # 62 Sur - 59, PBX +57 300 251 1994, info@cliniksoluciones.com).
- **QUÉ ES:** Empresa de Ingeniería Biomédica, Dotación Tecnológica, Metrología (Res. 3100 de 2019 / NTC-ISO 17025), Espacios Cardioprotegidos (Ley 1831) y Consultoría Hospitalaria.
- **QUÉ NO ES:** NO es una clínica asistencial, hospital de consulta ni servicio de ambulancias para pacientes. Prohibido incluir hotlines de emergencia médica de pacientes.
- **PORTAFOLIO DE SERVICIOS (6 PILARES):**
  1. Venta & Dotación Integral de Equipos Biomédicos (Nuevos con INVIMA)
  2. Certificación, Metrología & Habilitación en Salud (Res. 3100)
  3. Capacitación Técnica & Soporte Vital (BLS/DEA)
  4. Planes de Renovación Tecnológica & Retoma (Trade-In / Renting)
  5. Mantenimiento Preventivo & Correctivo Especializado
  6. Implementación de Espacios Cardioprotegidos (Ley 1831)

### 2. CATÁLOGO RE-INGENIERIZADO (ALIANZA NOVAMÉDICA SAS)
Ya extraído y tipado en `src/data/products.js`:
- 8 marcas médicas globales (EDAN, Medcaptain, BenQ, SMAF, Saikang, Prunus, Ningbo David, Amoul).
- 23 líneas de equipamiento hospitalario con registro INVIMA, especificaciones técnicas y ficha modal.
- 17 líneas de consumibles/accesorios con cotizador interactivo.
- 10 soluciones clínicas por especialidad (UCI, Quirófano, Cardiología, Neonatal, Ambulancia TAB/TAM, etc.).

---

## 8. HISTORIAL DE COMMITS Y REFERENCIAS DE CONTROL

- **Commit de Despliegue Definitivo (Versión 3.0 Modular):** `1793c93`
- **Mensaje:** `Deploy: CliniK Soluciones definitiva con catálogo modular, Espacio Cardioprotegido Ley 1831, dotación ambulancias TAB/TAM, 40+ clientes reales y centro de automatizaciones`
- **Hash de Bundle Compilado:**
  - CSS: `assets/index-MwWgCRry.css`
  - JS: `assets/index-BWajCn8X.js`
  - Portafolio Oficial Embebido: `Portafolio-Clinik-Soluciones.pdf` (2.8 MB, HTTP 200)
- **Verificación HTTP:** `curl -sI https://jcossiov.github.io/clinik-soluciones/` devuelve código 200 con la versión modular activa.

