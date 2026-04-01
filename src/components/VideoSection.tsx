import { Play, Volume2, Maximize } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-surface-bright">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter mb-4 uppercase">Manufacturing Power</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">A 360° View of our integrated facility, from tool design to final assembly.</p>
        </div>
        <div className="bg-primary-container rounded-xl overflow-hidden shadow-2xl relative aspect-video group">
          <img
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            alt="manufacturing facility"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVpxgbB2E3s8fh-kmKBmeIthLUgXLBqjvbYlQBpDZFYlSzH-qUO29UcoRkS8oS5oBDGFk_Vdt8ZKUyRvFhEpKt-bU_Fs9TiANPL8ZtnxY4vL6S8Z3kDnh2XfPFbaSO9Txtxet_tlcurikuCKgOdv3-9KYHRG4dznoniT4zcXBWXX3sOih_YfNrnGoiUvPVBWibqzcqgbKvbHmnLQkGK_N_WIQonDjjToNj-cr9yyWIFksNXIhaSWHhcoRF4fUJj7TaV1RgmnMnyUZG"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div className="flex justify-end">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span> 4K ULTRA HD
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 cursor-pointer">
                <Play className="w-10 h-10 fill-current" />
              </button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-secondary"></div>
              </div>
              <div className="flex gap-4">
                <Volume2 className="text-white cursor-pointer w-6 h-6" />
                <Maximize className="text-white cursor-pointer w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
