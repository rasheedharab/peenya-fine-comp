export default function FacilitiesCTA() {
  return (
    <section className="py-24 bg-primary-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 100">
          <path d="M0,0 L100,0 L100,100 Z"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="bg-secondary p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">Ready for Production?</h2>
            <p className="text-on-secondary-fixed-variant text-lg">Partner with Peenya Fine Comp for technical consultation and precision-engineered manufacturing at scale.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-colors">Technical Consultation</button>
            <button className="border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-secondary transition-all">Submit RFQ</button>
          </div>
        </div>
      </div>
    </section>
  );
}
