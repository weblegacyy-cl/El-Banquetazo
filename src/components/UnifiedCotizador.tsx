import { useState, useMemo } from 'react';
import {
  Package,
  UtensilsCrossed,
  CakeSlice,
  Search,
  Plus,
  Minus,
  Check,
  ChevronDown,
  ChevronUp,
  Trash2,
  MessageCircle,
  Calendar,
  Phone,
  User,
  MapPin,
  AlertCircle,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Copy
} from 'lucide-react';
import {
  PACKS_DATA,
  INDIVIDUAL_SALADOS,
  INDIVIDUAL_DULCES,
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_RAW,
  DISPATCH_NOTICE,
  formatCLP
} from '../data/cateringData';
import { CartLineItem, CustomerQuoteInfo, generateWhatsAppMessage, buildWhatsAppUrl } from '../types/cart';

interface UnifiedCotizadorProps {
  cartItems: CartLineItem[];
  onUpdateQuantity: (
    item: {
      id: string;
      name: string;
      price: number;
      type: 'pack' | 'individual';
      details?: string[];
      category?: 'salados' | 'dulces';
    },
    delta: number
  ) => void;
  onClearCart: () => void;
}

export function UnifiedCotizador({
  cartItems,
  onUpdateQuantity,
  onClearCart
}: UnifiedCotizadorProps) {
  const [activeTab, setActiveTab] = useState<'packs' | 'salados' | 'dulces'>('packs');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPacks, setExpandedPacks] = useState<Record<string, boolean>>({
    'box-20': true // Open first one by default as example
  });

  const [customerInfo, setCustomerInfo] = useState<CustomerQuoteInfo>({
    name: '',
    phone: '',
    eventDate: '',
    deliveryAddress: '',
    comuna: '',
    notes: ''
  });

  const toggleExpandPack = (id: string) => {
    setExpandedPacks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [copied, setCopied] = useState(false);

  const getItemQuantity = (id: string) => {
    const found = cartItems.find((i) => i.id === id);
    return found ? found.quantity : 0;
  };

  const totalCLP = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const whatsAppMessage = useMemo(() => {
    return generateWhatsAppMessage(cartItems, totalCLP, customerInfo);
  }, [cartItems, totalCLP, customerInfo]);

  const whatsAppUrl = useMemo(() => {
    return buildWhatsAppUrl(OFFICIAL_PHONE_RAW, whatsAppMessage);
  }, [whatsAppMessage]);

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(whatsAppMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Filter individual items by tab and search
  const filteredIndividual = useMemo(() => {
    const list = activeTab === 'salados' ? INDIVIDUAL_SALADOS : INDIVIDUAL_DULCES;
    if (!searchTerm.trim()) return list;
    const q = searchTerm.toLowerCase();
    return list.filter((i) => i.name.toLowerCase().includes(q));
  }, [activeTab, searchTerm]);

  return (
    <section id="cotizador" className="py-14 sm:py-20 bg-[#0a0a0a] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Arma tu Cotización
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300">
            Selecciona tus packs o bandejas individuales en las pestañas, revisa tu total y envía tu pedido directamente a WhatsApp.
          </p>
        </div>

        {/* 2-Column Unified Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Menu Selector (Packs & Individuales juntos y compactos) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Unified Category Bar - Responsive 3-Column Grid */}
            <div className="w-full p-1 bg-[#141414] rounded-xl sm:rounded-2xl border border-zinc-800 grid grid-cols-3 gap-1 shadow-md overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('packs');
                  setSearchTerm('');
                }}
                className={`w-full min-w-0 flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 xs:px-2 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'packs'
                    ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-950/60'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                <span className="truncate min-w-0">
                  <span className="hidden sm:inline">Packs & Box</span>
                  <span className="sm:hidden">Packs</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-1 py-0.5 rounded bg-black/30 shrink-0">
                  ({PACKS_DATA.length})
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('salados');
                  setSearchTerm('');
                }}
                className={`w-full min-w-0 flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 xs:px-2 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'salados'
                    ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-950/60'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                <span className="truncate min-w-0">Salados</span>
                <span className="text-[10px] sm:text-xs font-semibold px-1 py-0.5 rounded bg-black/30 shrink-0">
                  ({INDIVIDUAL_SALADOS.length})
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('dulces');
                  setSearchTerm('');
                }}
                className={`w-full min-w-0 flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 xs:px-2 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'dulces'
                    ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-950/60'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <CakeSlice className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-300 shrink-0" />
                <span className="truncate min-w-0">Dulces</span>
                <span className="text-[10px] sm:text-xs font-semibold px-1 py-0.5 rounded bg-black/30 shrink-0">
                  ({INDIVIDUAL_DULCES.length})
                </span>
              </button>
            </div>

            {/* TAB 1: PACKS Y BOXES (Compactos con acordeón) */}
            {activeTab === 'packs' && (
              <div className="space-y-3">
                <div className="text-[11px] text-zinc-400 px-1 flex items-center justify-between">
                  <span>Combos para 20, 30, 40, 50 personas y mixes de 100 bocados:</span>
                </div>

                {PACKS_DATA.map((pack) => {
                  const qty = getItemQuantity(pack.id);
                  const isSelected = qty > 0;
                  const isExpanded = !!expandedPacks[pack.id];

                  return (
                    <div
                      key={pack.id}
                      className={`rounded-2xl transition-all border ${
                        isSelected
                          ? 'bg-[#151214] border-pink-500/80 shadow-md ring-1 ring-pink-500/40'
                          : 'bg-[#121212] border-zinc-800/90 hover:border-zinc-700'
                      } p-4 sm:p-5`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-amber-300 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded-md">
                              {pack.capacity}
                            </span>
                            {pack.badge && (
                              <span className="text-[10px] font-bold text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded-md border border-pink-700/50">
                                {pack.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-white font-display truncate">
                            {pack.name}
                          </h3>
                          <div className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                            {pack.description}
                          </div>
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
                          <div className="text-left sm:text-right">
                            <span className="font-mono font-extrabold text-amber-300 text-lg sm:text-xl tabular-nums block">
                              ${pack.price.toLocaleString('es-CL')}
                            </span>
                            <span className="text-[10px] text-zinc-500">CLP</span>
                          </div>

                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  {
                                    id: pack.id,
                                    name: pack.name,
                                    price: pack.price,
                                    type: 'pack',
                                    details: pack.items
                                  },
                                  1
                                )
                              }
                              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-600 transition-all flex items-center gap-1 shadow-sm active:scale-95"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Agregar</span>
                            </button>
                          ) : (
                            <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-pink-700/60">
                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQuantity(
                                    {
                                      id: pack.id,
                                      name: pack.name,
                                      price: pack.price,
                                      type: 'pack',
                                      details: pack.items
                                    },
                                    -1
                                  )
                                }
                                className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-6 text-center font-mono font-bold text-xs text-white tabular-nums">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQuantity(
                                    {
                                      id: pack.id,
                                      name: pack.name,
                                      price: pack.price,
                                      type: 'pack',
                                      details: pack.items
                                    },
                                    1
                                  )
                                }
                                className="w-7 h-7 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white flex items-center justify-center text-xs"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Collapsible Content Preview */}
                      <div className="mt-3 pt-2.5 border-t border-zinc-800/80">
                        <button
                          type="button"
                          onClick={() => toggleExpandPack(pack.id)}
                          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-pink-300 transition-colors font-medium"
                        >
                          <span>{isExpanded ? 'Ocultar contenido' : 'Ver qué incluye este pack'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 animate-in fade-in duration-150">
                            {pack.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <span className="text-pink-400 font-bold">•</span>
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 2 & 3: SALADOS Y DULCES (Lista compacta y rápida de seleccionar) */}
            {(activeTab === 'salados' || activeTab === 'dulces') && (
              <div className="space-y-3">
                {/* Search Bar inside tab */}
                <div className="relative">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Buscar en ${activeTab === 'salados' ? 'salados' : 'dulces'} (ej. ceviche, brochetas, pie)...`}
                    className="w-full bg-[#131313] border border-zinc-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                    >
                      Limpiar
                    </button>
                  )}
                </div>

                {/* Compact Item Grid (2 cols on tablet/desktop, 1 col on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[560px] overflow-y-auto pr-1">
                  {filteredIndividual.map((item) => {
                    const qty = getItemQuantity(item.id);
                    const isSelected = qty > 0;

                    return (
                      <div
                        key={item.id}
                        className={`p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
                          isSelected
                            ? 'bg-[#151214] border-pink-500/80 shadow-sm'
                            : 'bg-[#131313] border-zinc-800/80 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs sm:text-sm text-zinc-100 truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono font-extrabold text-amber-300 text-xs sm:text-sm tabular-nums">
                              ${item.price.toLocaleString('es-CL')}
                            </span>
                            <span className="text-[10px] text-zinc-400">· {item.quantityInfo}</span>
                          </div>
                        </div>

                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                {
                                  id: item.id,
                                  name: item.name,
                                  price: item.price,
                                  type: 'individual',
                                  category: item.category
                                },
                                1
                              )
                            }
                            className="p-1.5 px-2.5 rounded-lg text-xs font-bold text-zinc-200 bg-zinc-800 hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 hover:text-white transition-all flex items-center gap-1 shrink-0"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Sumar</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-pink-700/60 shrink-0">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  {
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    type: 'individual',
                                    category: item.category
                                  },
                                  -1
                                )
                              }
                              className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center font-mono font-bold text-xs text-white tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(
                                  {
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    type: 'individual',
                                    category: item.category
                                  },
                                  1
                                )
                              }
                              className="w-6 h-6 rounded bg-gradient-to-r from-pink-600 to-rose-500 text-white flex items-center justify-center text-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Order Summary & WhatsApp Checkout (Sticky desktop) */}
          <div className="lg:col-span-5 bg-[#121212] rounded-2xl border border-zinc-800/90 p-5 sm:p-6 shadow-2xl lg:sticky lg:top-28">
            
            <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-pink-400" />
                <h3 className="text-base font-bold text-white font-display">
                  Tu Pedido ({totalQuantity})
                </h3>
              </div>
              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs text-zinc-500 hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Vaciar</span>
                </button>
              )}
            </div>

            {/* List of items currently selected */}
            <div className="mt-3.5 space-y-2 max-h-48 overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <div className="py-8 text-center text-zinc-500 text-xs">
                  <p>Aún no has seleccionado productos.</p>
                  <p className="text-[11px] text-zinc-600 mt-1">
                    Elige packs o bocados en las pestañas de la izquierda.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white truncate">{item.name}</div>
                      <div className="text-amber-300 font-mono text-[11px]">
                        ${(item.price * item.quantity).toLocaleString('es-CL')} CLP
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-zinc-950 p-0.5 rounded-lg border border-zinc-800">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item, -1)}
                        className="w-5 h-5 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-[10px]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono font-bold text-xs text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item, 1)}
                        className="w-5 h-5 rounded bg-gradient-to-r from-pink-600 to-rose-500 text-white flex items-center justify-center text-[10px]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total calculation */}
            <div className="mt-4 pt-3.5 border-t border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Subtotal Productos:</span>
                <span className="font-mono font-semibold tabular-nums text-zinc-200">
                  ${totalCLP.toLocaleString('es-CL')} CLP
                </span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-base font-extrabold text-white pt-1">
                <span>Total Estimado:</span>
                <span className="font-mono text-amber-300 tabular-nums">
                  ${totalCLP.toLocaleString('es-CL')} <span className="text-[10px] text-zinc-400 font-sans font-normal">CLP</span>
                </span>
              </div>
            </div>

            {/* Quick booking & coordination fields */}
            <div className="mt-4 pt-3 border-t border-zinc-800 space-y-2.5">
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider block">
                Datos de la Reserva:
              </span>

              <div className="space-y-2">
                {/* 1. Nombre y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-pink-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      placeholder="Tu nombre / Empresa"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-pink-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      placeholder="Teléfono / WhatsApp"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 font-mono"
                    />
                  </div>
                </div>

                {/* 2. Lugar del evento */}
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={customerInfo.comuna}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, comuna: e.target.value })}
                    placeholder="Lugar del evento (Comuna / Dirección exacta)"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500"
                  />
                </div>

                {/* 3. Día / Fecha del evento */}
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={customerInfo.eventDate}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, eventDate: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-2 text-xs text-white focus:outline-none focus:border-pink-500 [color-scheme:dark]"
                    title="Día / Fecha del evento"
                    placeholder="Fecha del evento"
                  />
                </div>
              </div>
            </div>

            {/* Dispatch note from owner */}
            <div className="mt-3.5 p-2.5 rounded-xl bg-amber-950/20 border border-amber-900/50 flex items-start gap-2 text-[11px] text-amber-200/90 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{DISPATCH_NOTICE}.</span>
            </div>

            {/* Send to WhatsApp button */}
            <div className="mt-4 space-y-2">
              {cartItems.length > 0 ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 shadow-emerald-950/60 active:scale-[0.99] border border-emerald-400/30 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Enviar Pedido a WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-zinc-500 bg-zinc-800/80 cursor-not-allowed border border-zinc-700/50 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Enviar Pedido a WhatsApp (Agrega productos)</span>
                </button>
              )}

              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="w-full py-2 px-3 rounded-lg text-[11px] font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 flex items-center justify-center gap-1.5"
                  title="Copiar texto de cotización para pegar en cualquier mensaje"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">¡Cotización copiada al portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copiar texto de cotización</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="mt-2 text-center text-[10px] text-zinc-500">
              Atención directa al <span className="font-mono text-zinc-400">{OFFICIAL_PHONE}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
