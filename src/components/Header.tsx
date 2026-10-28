import { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import { LOGO_PATH, formatCLP } from '../data/cateringData';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, cartTotal, onOpenCart }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0a0a]/95 border-b border-zinc-800/80 transition-colors">
      {/* Top Notification Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800/60 text-zinc-300 text-xs py-1.5 px-3 sm:px-4 tracking-wide overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 animate-pulse" />
            <span className="text-zinc-200 font-medium truncate">
              Banquetería & Coctelería Gourmet para Eventos
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-zinc-400 text-[11px] shrink-0">
            <MapPin className="w-3 h-3 text-pink-400 shrink-0" />
            <span className="truncate">La Florida, Santiago (Despachos a distintas comunas)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 gap-2 sm:gap-4">
          
          {/* Official Brand Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <img
                src={LOGO_PATH}
                alt="El Banquetazo"
                className="w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain filter drop-shadow-[0_2px_12px_rgba(244,63,138,0.4)] transition-transform group-hover:scale-105 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors truncate">
                  El Banquetazo
                </span>
                <span className="text-[9px] sm:text-xs tracking-wider uppercase text-amber-300 font-semibold truncate hidden xs:inline">
                  Banquetería & Eventos
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a 
              href="#cotizador" 
              className="hover:text-pink-400 transition-colors whitespace-nowrap py-1 font-semibold"
            >
              Packs & Box
            </a>
            <a 
              href="#cotizador" 
              className="hover:text-pink-400 transition-colors whitespace-nowrap py-1 font-semibold"
            >
              Precios Individuales
            </a>
            <a 
              href="#galeria" 
              className="hover:text-pink-400 transition-colors whitespace-nowrap py-1 font-semibold text-pink-300"
            >
              Muestras Reales
            </a>
            <a 
              href="#cotizador" 
              className="hover:text-pink-400 transition-colors whitespace-nowrap py-1 font-semibold"
            >
              Cotizador en Línea
            </a>
          </nav>

          {/* Right Action Zone: Tu Cotización & Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 hover:from-pink-500 hover:to-pink-600 shadow-md shadow-pink-950/60 transition-all active:scale-[0.98] border border-pink-400/40 shrink-0"
              aria-label="Ver Cotización"
            >
              <ShoppingBag className="w-4 h-4 text-white shrink-0" />
              <span className="hidden sm:inline">Tu Cotización</span>
              {cartCount > 0 ? (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] sm:text-xs font-bold bg-amber-300 text-zinc-950 rounded-md tabular-nums min-w-5 shadow-sm">
                  {cartCount}
                </span>
              ) : null}
              {cartTotal > 0 && (
                <span className="hidden md:inline text-pink-100 text-xs font-medium tabular-nums border-l border-pink-400/50 pl-2">
                  {formatCLP(cartTotal)}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle (Las 3 barras) - Destacado y 100% visible sin cortarse */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white hover:text-pink-300 hover:border-pink-500/60 active:scale-95 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              title="Menú"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-pink-400" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800/80 bg-[#0e0e0e] flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-pink-300 transition-colors"
            >
              Packs & Box
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-pink-300 transition-colors"
            >
              Precios Individuales
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-pink-300 hover:bg-zinc-800 transition-colors"
            >
              Muestras Reales
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-pink-300 transition-colors"
            >
              Cotizador en Línea
            </a>

            <div className="pt-2 border-t border-zinc-800 px-1 mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-rose-500 shadow-md shadow-pink-950/50"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Ver Mi Cotización ({cartCount})</span>
                {cartTotal > 0 && <span className="text-pink-100 font-mono">· {formatCLP(cartTotal)}</span>}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
