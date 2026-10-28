import imgBrochetas from '../assets/imagenes/serviico13_9dd62fc2.jpg';
import imgCeviche from '../assets/imagenes/servicio7_f751fe20.jpg';
import imgCanapes from '../assets/imagenes/servicio_6_112fa421.jpg';
import imgHamburguesas from '../assets/imagenes/servicio3_46f1f42c.jpg';
import imgTapaditos from '../assets/imagenes/servicio_5_82f0c39c.jpg';
import imgConitos from '../assets/imagenes/servicio_10_5fceeac1.jpg';
import imgHotdogs from '../assets/imagenes/servicio11_5abfd79b.jpg';
import imgSopaipillas from '../assets/imagenes/servicio9_cad044bf.jpg';
import imgMesas from '../assets/imagenes/servicio4_ffaea70c.jpg';
import imgMixDulces from '../assets/imagenes/servicio2_f185eb84.jpg';
import imgProfiteroles from '../assets/imagenes/servicio1_a84584e6.jpg';
import imgAlfajores from '../assets/imagenes/servicio_12_00dd3693.jpg';

export interface GalleryProduct {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const REAL_PRODUCTS_GALLERY: GalleryProduct[] = [
  {
    id: 'gal-brochetas-mixtas',
    title: 'Brochetas Mixtas Artesanales',
    image: imgBrochetas,
    description: 'Brochetas de carne y pollo seleccionadas, doradas y servidas en bandejas listas para servir.'
  },
  {
    id: 'gal-ceviche',
    title: 'Ceviche de Reineta en Shots',
    image: imgCeviche,
    description: 'Vasitos individuales de ceviche fresco con lechuga, cebolla morada y cucharita lista para disfrutar.'
  },
  {
    id: 'gal-canapes-fino',
    title: 'Canapés Cocktail Artesanales',
    image: imgCanapes,
    description: 'Bandejas con variedad de camarón, salame, cremas finas, ciboulette y sésamo negro.'
  },
  {
    id: 'gal-hamburguesas',
    title: 'Mini Hamburguesas Gourmet',
    image: imgHamburguesas,
    description: 'En pan brioche artesanal con sésamo, lechuga fresca y pincho de presentación.'
  },
  {
    id: 'gal-tapaditos',
    title: 'Tapaditos Tradicionales',
    image: imgTapaditos,
    description: 'Panecillos dorados y esponjosos con rellenos caseros sobre cama de lechuga fresca.'
  },
  {
    id: 'gal-conitos',
    title: 'Conitos Salados con Salsa',
    image: imgConitos,
    description: 'Conos crocantes con relleno de pollo, choclo y champiñón con salsa especial central.'
  },
  {
    id: 'gal-hotdogs',
    title: 'Mini Hot Dogs para Eventos',
    image: imgHotdogs,
    description: 'Formato individual en canastillo con pocillo de tomate fresco y sellado de la marca.'
  },
  {
    id: 'gal-sopaipillas',
    title: 'Sopaipillas Rústicas Caseras',
    image: imgSopaipillas,
    description: 'Doradas y calentitas en bandeja de aluminio, ideales para acompañar con pebre.'
  },
  {
    id: 'gal-mesa-canapes',
    title: 'Producción de Mesas de Cóctel',
    image: imgMesas,
    description: 'Montaje de banquetes y eventos a gran escala con presentación prolija y ordenada.'
  },
  {
    id: 'gal-mix-dulces',
    title: 'Mix de Mesa Dulce Surtida',
    image: imgMixDulces,
    description: 'Tartaletas de fruta fresca, mini donas decoradas, cachitos bañados en chocolate y merenguitos.'
  },
  {
    id: 'gal-profiteroles',
    title: 'Profiteroles & Berlines Rellenos',
    image: imgProfiteroles,
    description: 'Rellenos generosos de manjar casero y crema pastelera suave con lluvia de azúcar flor.'
  },
  {
    id: 'gal-alfajores-brownies',
    title: 'Bandeja Repostería & Alfajores',
    image: imgAlfajores,
    description: 'Mini alfajores con coco, cubitos de brownie de chocolate intenso y conitos dulces.'
  }
];
