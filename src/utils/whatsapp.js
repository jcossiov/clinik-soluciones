/**
 * VORTEX Labs — Motor Conversacional WhatsApp para CliniK Soluciones Colombia S.A.S.
 * Conexión directa al Canal Oficial (+57 300 251 1990 | ventas@cliniksoluciones.com)
 * Arquitectura Modular: COPY-v2.2 | DATA-v2.1
 */

export const OFFICIAL_WHATSAPP_NUMBER = "573002511990";
export const OFFICIAL_SALES_EMAIL = "ventas@cliniksoluciones.com";

export function buildWhatsAppQuoteUrl({
  name = "Equipamiento Biomédico Institucional",
  sku = "CLINIK-GEN-2026",
  brand = "CliniK Soluciones",
  category = "Dotación Biomédica",
  modality = "1 Unidad (Compra Directa)",
  customNote = "",
  clientData = null
} = {}) {
  let message = `Hola CliniK Soluciones, deseo solicitar una cotización formal (Modalidad Venta):

📌 *Producto / Paquete:* ${name}
🏷️ *Marca / Ref:* ${brand} • ${sku}
🏥 *Línea:* ${category}
📦 *Cantidad / Alcance:* ${modality}
🛡️ *Garantía y Respaldo:* 12 Meses • Cumplimiento normativo (Res. 3100 / Res. 3316 de 2019)`;

  if (customNote) {
    message += `\n📝 *Requerimiento / Detalle:* ${customNote}`;
  }

  if (clientData) {
    message += `\n\n🏢 *DATOS INSTITUCIONALES DEL SOLICITANTE:*`;
    if (clientData.razonSocial) message += `\n• *Razón Social:* ${clientData.razonSocial}`;
    if (clientData.nombreComercial) message += `\n• *Nombre Comercial:* ${clientData.nombreComercial}`;
    if (clientData.contactName) message += `\n• *Contacto:* ${clientData.contactName}`;
    if (clientData.phone) message += `\n• *Teléfono:* ${clientData.phone}`;
    if (clientData.email) message += `\n• *Correo:* ${clientData.email}`;
    if (clientData.city) message += `\n• *Ciudad:* ${clientData.city}`;
    if (clientData.notes) message += `\n• *Listado / Observaciones:* ${clientData.notes}`;
  }

  message += `\n\n¿Podrían brindarme asesoría comercial y disponibilidad?`;

  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
