export interface CartLineItem {
  id: string;
  name: string;
  type: 'pack' | 'individual';
  price: number;
  quantity: number;
  details?: string[];
  category?: 'salados' | 'dulces';
}

export interface CustomerQuoteInfo {
  name: string;
  phone: string;
  eventDate: string;
  eventTime?: string;
  deliveryAddress: string;
  comuna: string;
  notes: string;
}

export function generateWhatsAppMessage(
  items: CartLineItem[],
  totalCLP: number,
  customer: CustomerQuoteInfo
): string {
  const nameFormatted = customer.name.trim() || 'Cliente';
  const phoneFormatted = customer.phone.trim() || 'Por indicar';
  const dateFormatted = customer.eventDate || 'Por coordinar';
  const lugarFormatted = customer.comuna.trim() || customer.deliveryAddress.trim() || 'Por definir';

  const lines: string[] = [
    `COTIZACIÓN - EL BANQUETAZO`,
    ``,
    `DATOS DEL EVENTO:`,
    `• Nombre: ${nameFormatted}`,
    `• Teléfono: ${phoneFormatted}`,
    `• Lugar del evento: ${lugarFormatted}`,
    `• Fecha del evento: ${dateFormatted}`,
    ``,
    `DETALLE DE PRODUCTOS:`,
  ];

  items.forEach((item) => {
    const itemSubtotal = item.price * item.quantity;
    lines.push(`• ${item.quantity} × ${item.name}: $${itemSubtotal.toLocaleString('es-CL')} CLP`);
  });

  lines.push(``);
  lines.push(`TOTAL ESTIMADO: $${totalCLP.toLocaleString('es-CL')} CLP`);
  lines.push(``);
  lines.push(`Nota: El recargo por despacho lo confirma directamente el dueño según la dirección exacta.`);

  if (customer.notes.trim()) {
    lines.push(``);
    lines.push(`Observaciones: ${customer.notes.trim()}`);
  }

  return lines.join('\n');
}

export function buildWhatsAppUrl(phoneRaw: string, message: string): string {
  return `https://api.whatsapp.com/send?phone=${phoneRaw}&text=${encodeURIComponent(message)}`;
}
