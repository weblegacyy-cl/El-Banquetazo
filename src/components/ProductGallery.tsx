import { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, CheckCircle2, Maximize2 } from 'lucide-react';
import { REAL_PRODUCTS_GALLERY } from '../data/galleryData';

export function ProductGallery() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const activeProduct = activeModalIndex !== null ? REAL_PRODUCTS_GALLERY[activeModalIndex] : null;

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % REAL_PRODUCTS_GALLERY.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + REAL_PRODUCTS_GALLERY.length) % REAL_PRODUCTS_GALLERY.length);
    }
  };

  // Keyboard navigation for full accessibility
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % REAL_PRODUCTS_GALLERY.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + REAL_PRODUCTS_GALLERY.length) % REAL_PRODUCTS_GALLERY.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-[#070707] text-white border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-700/50 text-pink-300 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span>Muestras de Nuestras Entregas Reales</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nuestros Productos & Presentaciones
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto">
            Cada pedido se elabora fresco en el día, listo para servir y con una presentación prolija. Haz clic en cualquier foto para verla completa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {REAL_PRODUCTS_GALLERY.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalIndex(index)}
              className="group cursor-pointer rounded-2xl bg-[#121212] border border-zinc-800/90 overflow-hidden hover:border-pink-500/70 hover:shadow-xl hover:shadow-pink-950/40 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Container with smooth zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] font-semibold text-pink-300 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <Maximize2 className="w-3 h-3 text-pink-400" />
                    <span>Ver foto completa</span>
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Listo para servir</span>
                  </span>
                  <a
                    href="#cotizador"
                    onClick={(e) => e.stopPropagation()}
                    className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                  >
                    Cotizar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Full View - Clean ambient glow, NO black boxes */}
        {activeProduct && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveModalIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#121212] border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar with Counter and Close Button */}
              <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-200 shadow-md">
                  Foto {activeModalIndex! + 1} de {REAL_PRODUCTS_GALLERY.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="pointer-events-auto p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-pink-600 border border-white/10 transition-colors shadow-md"
                  aria-label="Cerrar vista"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 backdrop-blur-md text-white hover:bg-pink-600 border border-white/10 transition-all shadow-xl hover:scale-110"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 backdrop-blur-md text-white hover:bg-pink-600 border border-white/10 transition-all shadow-xl hover:scale-110"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Viewport: Ambient soft backdrop removes black boxes */}
              <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] max-h-[66vh] sm:max-h-[72vh] bg-zinc-950">
                {/* Soft ambient background matching the photo's genuine colors */}
                <img
                  src={activeProduct.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110 select-none pointer-events-none"
                />

                {/* Subtle dark gradient overlay to ensure the foreground photo pops */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* Complete uncropped photo in full resolution */}
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="relative z-10 max-h-[64vh] sm:max-h-[70vh] w-auto max-w-full object-contain mx-auto drop-shadow-2xl select-none"
                />
              </div>

              {/* Details Footer */}
              <div className="p-4 sm:p-5 bg-[#141414] border-t border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white truncate sm:whitespace-normal">
                    {activeProduct.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-0.5 max-w-xl leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="#cotizador"
                    onClick={() => setActiveModalIndex(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-600 transition-all text-center shadow-md shadow-pink-950/60"
                  >
                    Cotizar este Producto
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
