export default function ProductsCTA() {
  return (
    <section className="bg-primary-container text-on-primary-container py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Partner for Precision</h2>
          <p className="text-on-primary-fixed-variant text-lg">Looking for a specialized Tier 1 manufacturing partner for your next engineering breakthrough? Our technical team is ready to review your designs.</p>
        </div>
        <button className="bg-white text-primary px-10 py-5 font-black text-lg shadow-xl hover:bg-surface-container-highest transition-colors active:scale-95">
          Start a Technical Consultation
        </button>
      </div>
      {/* Aesthetic background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </section>
  );
}
