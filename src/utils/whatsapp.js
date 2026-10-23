/**
 * VORTEX Labs — Motor Conversacional WhatsApp para CliniK Soluciones
 * Conexión directa al Agente Comercial (+57 300 202 1894)
 */

export function buildWhatsAppQuoteUrl({
  name = "Equipamiento Biomédico Institucional",
  sku = "CLINIK-GEN-2026",
  brand = "CliniK / Nova Médica",
  category = "Dotación Hospitalaria",
  modality = "1 Unidad"
} = {}) {
  const phoneNumber = "573002021894";

  const message = `Hola CliniK Soluciones, deseo solicitar la cotización del día para el siguiente equipo biomédico:

📌 Equipo: ${name}
🏷️ Marca / SKU: ${brand} • ${sku}
🏥 Línea Clínica: ${category}
📦 Modalidad de Interés: ${modality}
📋 Respaldo Requerido: Registro INVIMA vigente y protocolo metrológico Res. 3100.

¿Podrían confirmarme el valor comercial indexado y la disponibilidad para entrega inmediata?`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
