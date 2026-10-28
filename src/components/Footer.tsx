import { MessageCircle, MapPin, Mail, Share2 } from 'lucide-react';
import {
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_RAW,
  OFFICIAL_EMAIL,
  FACEBOOK_URL,
  LOGO_PATH,
  OFFICIAL_LOCATION,
  DISPATCH_NOTICE,
  SCAM_WARNING,
  ABOUT_US_TEXT
} from '../data/cateringData';

export function Footer() {
  const directWhatsAppUrl = `https://api.whatsapp.com/send?phone=${OFFICIAL_PHONE_RAW}&text=${encodeURIComponent('Hola El Banquetazo, deseo consultar para un evento.')}`;

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info & Prominent Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={LOGO_PATH}
                alt="El Banquetazo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain filter drop-shadow-[0_2px_12px_rgba(244,63,138,0.35)]"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display text-2xl font-bold text-white block">
                  El Banquetazo
                </span>
                <span className="text-[11px] text-amber-300 uppercase tracking-wider font-semibold">
                  Banquetería & Eventos Familiares
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              {ABOUT_US_TEXT}
            </p>

            <div className="flex items-center gap-2 text-zinc-300 pt-1 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{OFFICIAL_LOCATION}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300">Navegación</h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href="#cotizador" className="hover:text-pink-400 transition-colors">
                  Packs & Box
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-pink-400 transition-colors">
                  Muestras de Productos
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-pink-400 transition-colors">
                  Bocados Salados & Dulces
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-pink-400 transition-colors">
                  Cotizador y Pedido Online
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook Oficial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels with Facebook, WhatsApp & Email */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300">Canales Oficiales</h4>
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-xs space-y-3 shadow-md">
              <div className="text-[11px] text-zinc-300">
                Aviso: <span className="text-pink-300 font-semibold">{SCAM_WARNING}</span>.
              </div>

              {/* Direct Channel Buttons */}
              <div className="space-y-2 pt-1">
                {/* 1. WhatsApp */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900/80 transition-all font-mono shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {OFFICIAL_PHONE}</span>
                </a>

                {/* 2. Facebook (Requested specifically in Canales Oficiales) */}
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3.5 rounded-xl text-xs font-bold text-blue-200 bg-blue-950/70 border border-blue-700/60 hover:bg-blue-900/70 transition-all shadow-sm"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span>Facebook: /ElBanquetazoChile</span>
                </a>

                {/* 3. Email */}
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3.5 rounded-xl text-xs text-zinc-300 bg-zinc-800/90 border border-zinc-700 hover:bg-zinc-800 transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{OFFICIAL_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} El Banquetazo · Banquetería & Producción de Eventos. La Florida, Santiago.
          </div>
          <div className="text-zinc-400 font-medium">
            {DISPATCH_NOTICE}.
          </div>
        </div>

      </div>
    </footer>
  );
}
