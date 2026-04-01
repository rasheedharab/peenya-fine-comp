export default function Philosophy() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blueprint-grid pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-12">
            The BAR <br />
            <span className="text-primary-fixed">Philosophy</span>
          </h2>
          <div className="space-y-16">
            <div className="flex gap-8 group">
              <span className="text-6xl font-headline font-black text-outline/30 group-hover:text-white transition-colors">B</span>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3 uppercase tracking-widest">Benchmarking</h4>
                <p className="text-primary-fixed-dim text-lg leading-relaxed">Continuous market analysis to ensure our processes and technology remain at the global apex of the stamping industry.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-6xl font-headline font-black text-outline/30 group-hover:text-white transition-colors">A</span>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3 uppercase tracking-widest">Achievement</h4>
                <p className="text-primary-fixed-dim text-lg leading-relaxed">Exceeding technical milestones and operational goals through rigorous lean manufacturing and workforce empowerment.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-6xl font-headline font-black text-outline/30 group-hover:text-white transition-colors">R</span>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3 uppercase tracking-widest">Reliability</h4>
                <p className="text-primary-fixed-dim text-lg leading-relaxed">Consistency in every stroke. Our 99.8% quality adherence rate defines our commitment to your supply chain stability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-full p-12 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-headline font-black text-white mb-2">30+</div>
              <div className="text-xl font-bold uppercase tracking-[0.3em] text-primary-fixed">Years of Trust</div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary-fixed opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
