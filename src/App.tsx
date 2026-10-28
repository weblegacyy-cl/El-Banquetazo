/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGallery } from './components/ProductGallery';
import { UnifiedCotizador } from './components/UnifiedCotizador';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CartLineItem } from './types/cart';

const STORAGE_KEY = 'el_banquetazo_cotizacion_v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartLineItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const handleUpdateQuantity = (
    itemData: {
      id: string;
      name: string;
      price: number;
      type: 'pack' | 'individual';
      details?: string[];
      category?: 'salados' | 'dulces';
    },
    delta: number
  ) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === itemData.id);

      if (!existing) {
        if (delta <= 0) return prev;
        return [
          ...prev,
          {
            id: itemData.id,
            name: itemData.name,
            type: itemData.type,
            price: itemData.price,
            quantity: delta,
            details: itemData.details,
            category: itemData.category,
          },
        ];
      }

      const nextQuantity = existing.quantity + delta;
      if (nextQuantity <= 0) {
        return prev.filter((i) => i.id !== itemData.id);
      }

      return prev.map((i) =>
        i.id === itemData.id ? { ...i, quantity: nextQuantity } : i
      );
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleGoToCheckout = () => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-pink-600 selection:text-white">
      {/* Floating Sticky Header */}
      <Header
        cartCount={totalCartCount}
        cartTotal={totalCartAmount}
        onOpenCart={() => setIsDrawerOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Banner with Family Intro & Large Brand Logo */}
        <Hero />

        {/* Real Product Gallery / Muestras de Productos */}
        <ProductGallery />

        {/* Unified Interactive Cotizador (Compact, Tabbed, Orderly) */}
        <UnifiedCotizador
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onClearCart={handleClearCart}
        />
      </main>

      {/* Footer with Canales Oficiales (Facebook, WhatsApp, Email) */}
      <Footer />

      {/* Interactive Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onGoToCheckout={handleGoToCheckout}
      />

      {/* Mobile Sticky Bar for quick access */}
      <MobileStickyBar
        cartCount={totalCartCount}
        cartTotal={totalCartAmount}
        onOpenCart={() => setIsDrawerOpen(true)}
      />
    </div>
  );
}
