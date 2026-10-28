import { useEffect, useMemo } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { OFFICIAL_PHONE_RAW, DISPATCH_NOTICE, formatCLP, OFFICIAL_PHONE } from '../data/cateringData';
import { CartLineItem, generateWhatsAppMessage, buildWhatsAppUrl } from '../types/cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartLineItem[];
  onUpdateQuantity: (
    item: { id: string; name: string; price: number; type: 'pack' | 'individual' },
    delta: number
  ) => void;
  onClearCart: () => void;
  onGoToCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onGoToCheckout
}: CartDrawerProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const totalCLP = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const quickMessage = useMemo(() => {
    return generateWhatsAppMessage(cartItems, totalCLP, {
      name: '',
      phone: '',
      eventDate: '',
      deliveryAddress: '',
      comuna: '',
      notes: ''
    });
  }, [cartItems, totalCLP]);

  const quickWhatsAppUrl = useMemo(() => {
    return buildWhatsAppUrl(OFFICIAL_PHONE_RAW, quickMessage);
  }, [quickMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-zinc-800 text-white flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-base font-display text-white">Tu Cotización</h3>
                <span className="text-xs text-zinc-400">
                  {totalQuantity} {totalQuantity === 1 ? 'producto' : 'productos'} añadidos
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar cotizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 text-zinc-500 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-zinc-300">Aún no has agregado productos</p>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                  Revisa nuestros Packs & Box de 20 a 50 personas o la carta de salados y dulces individuales.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-4 py-2 text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors"
                >
                  Explorar Carta
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 text-xs text-zinc-400">
                  <span>Productos cotizados:</span>
                  <button
                    onClick={onClearCart}
                    className="text-zinc-500 hover:text-rose-400 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Vaciar</span>
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-rose-400 uppercase">
                        {item.type === 'pack' ? 'Pack / Box' : 'Individual'}
                      </div>
                      <div className="text-sm font-medium text-white truncate">{item.name}</div>
                      <div className="text-xs text-amber-300 font-mono mt-0.5">
                        ${(item.price * item.quantity).toLocaleString('es-CL')} CLP
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item, -1)}
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-mono font-bold text-xs text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item, 1)}
                        className="w-6 h-6 rounded bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Dispatch note */}
                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-900/50 flex items-start gap-2 text-xs text-amber-200/90 mt-4">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{DISPATCH_NOTICE}</span>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-900/90 space-y-3">
              <div className="flex items-center justify-between text-base font-extrabold text-white">
                <span>Subtotal:</span>
                <span className="text-amber-300 font-mono text-lg tabular-nums">
                  ${totalCLP.toLocaleString('es-CL')} CLP
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onGoToCheckout();
                  }}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 text-center"
                >
                  Personalizar Datos
                </button>

                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/50 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="text-[10px] text-center text-zinc-500">
                Atención directa: <span className="font-mono text-zinc-400">{OFFICIAL_PHONE}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
