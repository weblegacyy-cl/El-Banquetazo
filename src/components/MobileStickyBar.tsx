import { ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCLP } from '../data/cateringData';

interface MobileStickyBarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export function MobileStickyBar({ cartCount, cartTotal, onOpenCart }: MobileStickyBarProps) {
  if (cartCount === 0) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 px-4 shadow-2xl safe-area-pb">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            {cartCount}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Total Cotizado</span>
            <span className="font-mono font-extrabold text-sm text-amber-300 tabular-nums">
              ${cartTotal.toLocaleString('es-CL')} CLP
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 hover:from-pink-500 hover:to-pink-600 transition-all flex items-center gap-1.5 shadow-lg shadow-pink-950/70 active:scale-95 border border-pink-400/40"
        >
          <span>Ver Cotización</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
