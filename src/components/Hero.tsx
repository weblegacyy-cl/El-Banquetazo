import { Calendar, MessageCircle, ArrowDown, Mail, Clock } from 'lucide-react';
import {
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_RAW,
  OFFICIAL_EMAIL,
  FACEBOOK_URL,
  LOGO_PATH,
  ABOUT_US_TEXT
} from '../data/cateringData';

export function Hero() {
  const directWhatsAppUrl = `https://api.whatsapp.com/send?phone=${OFFICIAL_PHONE_RAW}&text=${encodeURIComponent('Hola El Banquetazo, quisiera consultar disponibilidad para un evento.')}`;

  const eventTypes = [
    {
      emoji: '🎓',
      title: 'Colegios y Graduaciones',
      desc: 'Licenciaturas, cuartos medios, paseos y galas estudiantiles con bocados que todos disfrutan.'
    },
    {
      emoji: '🏢',
      title: 'Fiestas de Empresa',
      desc: 'Catering corporativo, eventos de fin de año, cóctel ejecutivo y celebraciones de equipo.'
    },
    {
      emoji: '🎂',
      title: 'Cumpleaños y Aniversarios',
      desc: 'Formatos listos para servir frescos y sabrosos para compartir en familia y amigos.'
    },
    {
      emoji: '💍',
      title: 'Matrimonios y Fiestas Privadas',
      desc: 'Banquetería gourmet cuidada con amor y dedicación en cada bocado dulce y salado.'
    }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-zinc-900 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#070707]">
      {/* Radiant ambient glow in brand pink and gold */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-pink-500/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-36 left-1/4 w-[320px] h-[320px] bg-amber-400/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Prominent Official Brand Logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative mb-5 group">
            {/* Glowing aura tailored to the logo colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/35 via-rose-500/25 to-amber-400/30 blur-3xl rounded-full scale-125 pointer-events-none animate-pulse" />
            <img
              src={LOGO_PATH}
              alt="El Banquetazo Banquetería"
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain filter drop-shadow-[0_4px_28px_rgba(244,63,138,0.5)] transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Family SME Authentic Mission Statement */}
          <div className="max-w-3xl mx-auto w-full mb-6">
            <div className="px-5 py-4 sm:px-8 sm:py-5 rounded-2xl bg-zinc-900/85 border border-pink-900/40 shadow-xl backdrop-blur-sm text-center">
              <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-normal leading-relaxed text-pretty">
                &ldquo;Somos una empresa familiar dedicada a la producción de eventos, coctelería y banquetería de tu celebración, cuidamos cada detalle de nuestra producción para que tu celebración sea extraordinaria.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto text-balance">
          AGENDA ABIERTA PARA TUS EVENTOS DE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-amber-300 drop-shadow-sm">
            FIN DE AÑO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto text-pretty">
          Colegios y Graduaciones, Fiestas de Empresa, Cumpleaños, Matrimonios, Eventos Particulares y mucho más.
        </p>

        {/* Booking message */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200 text-xs sm:text-sm font-medium shadow-sm">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Cotiza y agenda con anticipación para no quedar sin cupo.</span>
        </div>

        {/* Action Buttons with glowing pink styling */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto">
          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 hover:from-pink-500 hover:to-pink-600 transition-all shadow-xl shadow-pink-950/70 hover:shadow-pink-900/90 active:scale-[0.98] border border-pink-400/40"
          >
            <span>Ver Carta & Cotizar</span>
            <ArrowDown className="w-4 h-4 text-white" />
          </a>

          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-pink-500/50"
          >
            <span>Muestras de Productos</span>
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-600/60 hover:bg-emerald-900/80 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Event Categories Grid with Lively Emojis */}
        <div className="mt-14 pt-10 border-t border-zinc-800/80">
          <div className="text-center text-xs uppercase tracking-wider text-pink-300 font-bold mb-6">
            Especialistas en Producción de Banquetes y Cóctel
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {eventTypes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-zinc-800/90 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-950/30 transition-all group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">
                  {item.emoji}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact info bar in Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Facebook: /ElBanquetazoChile</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <a
            href={`mailto:${OFFICIAL_EMAIL}`}
            className="hover:text-zinc-200 transition-colors flex items-center gap-1.5 font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{OFFICIAL_EMAIL}</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <span className="text-zinc-400">La Florida, Santiago (Envíos con recargo)</span>
        </div>

      </div>
    </section>
  );
}
