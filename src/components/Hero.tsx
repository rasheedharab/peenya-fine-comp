import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface-container-low blueprint-grid">
      <div className="max-w-[1440px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10">
          <span className="inline-block px-3 py-1 bg-primary-container text-primary-fixed text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Established 1992
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.95] tracking-tighter mb-8">
            Tier 1 Stamping <br />
            <span className="text-secondary">Partner.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Engineering precision at scale. Delivering complex sheet metal solutions for the world's most demanding industrial sectors with surgical accuracy.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 font-bold flex items-center gap-3 hover:bg-primary/90 transition-all cursor-pointer">
              Explore Capabilities
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-surface-container-highest text-primary px-8 py-4 font-bold border-b-2 border-primary hover:bg-surface-dim transition-all cursor-pointer">
              Download Specs
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 relative group">
          <div className="aspect-video bg-primary-container rounded shadow-2xl overflow-hidden relative border-4 border-surface-container-highest">
            <img
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="industrial metal stamping facility"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnXW5cFj7pMt4KI6WsvvLC4j_V6geQBsJOpOBrUV6Vxou_wulOHDJWp3qUwx5cAhGeaWM8UKE6sgZJYLB0XND6NE8HGhfZl_8b8aYZihy0GCXWFzLxVOh-3lychT6GD8H0xjm8a9IzHa0x9JtvqhKz9t4nqChHCrjxNjIOAfbv72zr29ADZ9H8_w-lpv8LZYkh-NHGFuQSKPR8y86h_N9nUzjrZwq680vuLHtzQIQ0LDCfTV0yKpVHEfGyLsaSObtv64-APujMcdBl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                <Play className="text-white w-10 h-10 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="text-white">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Watch Now</p>
                <p className="font-headline font-bold text-lg">Inside Peenya Fine Comp</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></div>
                <span className="text-[10px] text-white font-bold tracking-tighter">LIVE FACILITY TOUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
