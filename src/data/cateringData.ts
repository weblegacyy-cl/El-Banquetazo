import logoAsset from '../assets/imagenes/logo_banquetazo_2bb70f0a.png';

export interface PackItem {
  id: string;
  name: string;
  capacity: string;
  price: number;
  description: string;
  items: string[];
  badge?: string;
}

export interface IndividualItem {
  id: string;
  category: 'salados' | 'dulces';
  name: string;
  quantityInfo: string;
  price: number;
  tag?: string;
}

export const OFFICIAL_PHONE = '+56 9 4875 6380';
export const OFFICIAL_PHONE_RAW = '56948756380';
export const OFFICIAL_EMAIL = 'elbanquetazochile@gmail.com';
export const FACEBOOK_URL = 'https://www.facebook.com/ElBanquetazoChile';
export const LOGO_PATH = logoAsset;
export const OFFICIAL_LOCATION = 'La Florida, Santiago (Despachos a distintas comunas con recargo según dirección)';
export const SCAM_WARNING = 'Tenemos un solo número oficial de atención (+56 9 4875 6380)';
export const DISPATCH_NOTICE = 'El recargo por despacho lo confirma directamente el dueño según la dirección exacta';
export const ABOUT_US_TEXT = 'Somos una empresa familiar dedicada a la producción de eventos, coctelería y banquetería de tu celebración, cuidamos cada detalle de nuestra producción para que tu celebración sea extraordinaria.';

export const PACKS_DATA: PackItem[] = [
  {
    id: 'box-20',
    name: 'Box 20 Personas',
    capacity: '20 personas',
    price: 115000,
    description: 'Pack balanceado de picoteo salado y dulces surtidos para reuniones íntimas.',
    badge: 'Popular',
    items: [
      '50 Canapés',
      '50 Sopaipillas rústicas con pebre',
      '20 Conitos de pollo',
      '20 Tapaditos tradicionales',
      '20 Hamburguesas',
      '20 Postres en vasito shot',
      '40 Mix dulces'
    ]
  },
  {
    id: 'box-30',
    name: 'Box 30 Personas',
    capacity: '30 personas',
    price: 184000,
    description: 'Surtido completo con brochetas, carnes y repostería artesanal.',
    items: [
      '100 Canapés',
      '30 Empanaditas',
      '30 Churrasquitos',
      '30 Brochetas mixtas',
      '30 Bolitas de carne',
      '30 Berlines',
      '30 Mini pie de limón',
      '30 Profiteroles'
    ]
  },
  {
    id: 'box-40',
    name: 'Box 40 Personas',
    capacity: '40 personas',
    price: 276000,
    description: 'Combinación premium con ceviches de reineta, tapaditos premium y variedad gourmet.',
    badge: 'Recomendado',
    items: [
      '100 Canapés',
      '100 Sopaipillas',
      '40 Tapaditos premium',
      '40 Hamburguesas',
      '40 Ceviches de reineta',
      '40 Brochetas de salame, queso y aceituna',
      '40 Postres en vasito shot',
      '40 Brochetas de fruta'
    ]
  },
  {
    id: 'box-50',
    name: 'Box 50 Personas',
    capacity: '50 personas',
    price: 320000,
    description: 'El banquete definitivo para celebraciones de gran convocatoria con mechadas y ceviche.',
    badge: 'Eventos Grandes',
    items: [
      '200 Canapés',
      '50 Empanadas',
      '50 Tapaditos de carne mechada',
      '50 Brochetas de salame, queso y aceituna',
      '50 Bolitas de carne',
      '50 Churrasquitos',
      '50 Postres en vasito shot',
      '50 Mix tartaletas y mini pie'
    ]
  },
  {
    id: 'mix-100-dulces',
    name: 'Mix 100 Dulces',
    capacity: '100 unidades dulces',
    price: 75000,
    description: 'Mesa de dulces gourmet con 4 variedades clásicas irresistibles.',
    items: [
      '25 Mini alfajores',
      '25 Tartaletas',
      '25 Mini donas',
      '25 Cachitos'
    ]
  },
  {
    id: 'mix-100-salados',
    name: 'Mix 100 Salados',
    capacity: '100 unidades saladas',
    price: 75000,
    description: 'Surtido de bocados calientes y fríos de alta rotación para cóctel.',
    items: [
      '20 Churrasquitos',
      '20 Hamburguesas',
      '20 Mini hot dogs',
      '20 Tapaditos',
      '20 Pizzetas'
    ]
  }
];

export const INDIVIDUAL_SALADOS: IndividualItem[] = [
  { id: 'sal-1', category: 'salados', name: '50 Canapés', quantityInfo: '50 unidades', price: 15000 },
  { id: 'sal-2', category: 'salados', name: '20 Churrasquitos', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-3', category: 'salados', name: '20 Hamburguesas', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-4', category: 'salados', name: '20 Mechadas', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-5', category: 'salados', name: '20 Tapaditos tradicionales', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-6', category: 'salados', name: '20 Tapaditos premium', quantityInfo: '20 unidades', price: 23000 },
  { id: 'sal-7', category: 'salados', name: '20 Ceviches de reineta', quantityInfo: '20 unidades', price: 20000 },
  { id: 'sal-8', category: 'salados', name: '20 Ceviches de salmón', quantityInfo: '20 unidades', price: 30000 },
  { id: 'sal-9', category: 'salados', name: '20 Ceviches de camarón y champiñones', quantityInfo: '20 unidades', price: 25000 },
  { id: 'sal-10', category: 'salados', name: '20 Empanaditas', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-11', category: 'salados', name: '20 Brochetas de carne', quantityInfo: '20 unidades', price: 25000 },
  { id: 'sal-12', category: 'salados', name: '20 Brochetas de pollo', quantityInfo: '20 unidades', price: 20000 },
  { id: 'sal-13', category: 'salados', name: '20 Brochetas mixtas', quantityInfo: '20 unidades', price: 22000 },
  { id: 'sal-14', category: 'salados', name: '20 Pinchos', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-15', category: 'salados', name: '20 Alitas barbecue', quantityInfo: '20 unidades', price: 16000 },
  { id: 'sal-16', category: 'salados', name: '20 Alitas apanadas', quantityInfo: '20 unidades', price: 20000 },
  { id: 'sal-17', category: 'salados', name: '20 Pizzetas', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-18', category: 'salados', name: '50 Sopaipillas rústicas con pebre', quantityInfo: '50 unidades', price: 15000 },
  { id: 'sal-19', category: 'salados', name: '25 Bolitas de carne', quantityInfo: '25 unidades', price: 15000 },
  { id: 'sal-20', category: 'salados', name: '20 Mini hot dogs', quantityInfo: '20 unidades', price: 15000 },
  { id: 'sal-21', category: 'salados', name: '20 Fajitas', quantityInfo: '20 unidades', price: 15000 }
];

export const INDIVIDUAL_DULCES: IndividualItem[] = [
  { id: 'dul-1', category: 'dulces', name: '25 Tartaletas de fruta', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-2', category: 'dulces', name: '25 Tartaletas de mousse', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-3', category: 'dulces', name: '25 Pie de limón', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-4', category: 'dulces', name: '25 Pie de maracuyá', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-5', category: 'dulces', name: '25 Alfajores', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-6', category: 'dulces', name: '25 Cachitos', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-7', category: 'dulces', name: '25 Mini donas', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-8', category: 'dulces', name: '25 Profiteroles', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-9', category: 'dulces', name: '20 Brochetas de fruta', quantityInfo: '20 unidades', price: 15000 },
  { id: 'dul-10', category: 'dulces', name: '20 Berlines', quantityInfo: '20 unidades', price: 15000 },
  { id: 'dul-11', category: 'dulces', name: '20 Postres en vasito shot', quantityInfo: '20 unidades', price: 20000 },
  { id: 'dul-12', category: 'dulces', name: '25 Mix tartaletas y mini pie', quantityInfo: '25 unidades', price: 15000 },
  { id: 'dul-13', category: 'dulces', name: '40 Mix dulces', quantityInfo: '40 unidades', price: 20000 }
];

export function formatCLP(amount: number): string {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}
