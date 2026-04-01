export default function ProductsHero() {
  return (
    <section className="px-8 py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">Tier 1 Stamping Partner</span>
        <h1 className="text-6xl font-extrabold tracking-tight leading-[1.1] text-on-surface mb-8">
          High-Precision <br /><span className="text-secondary">Stamping.</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-10">
          Delivering excellence in complex sheet metal stamping and sub-assemblies for global leaders in automotive, aerospace, and industrial sectors.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-on-primary px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95">Download Catalog</button>
          <button className="bg-surface-container-highest text-on-surface px-8 py-4 font-bold transition-opacity hover:opacity-80">Capabilities Overview</button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="aspect-square bg-surface-container-low overflow-hidden">
          <img alt="Precision stamped automotive components" className="w-full h-full object-cover mix-blend-multiply opacity-90" data-alt="Close-up of high-precision progressive metal stampings and complex sheet metal components for automotive assembly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_XqkGEMM3T5GUu4DONr76Rma6wJ4FBT5WwxIrot4F9JvP88puDqZhx_vaA77xsZxXxZMcgH6srpQ02WlgPzYR-tgb8ZL552SY23k1eleeYcdALEwnzizYi1RGDwZHCBfcCXB4DJjjISBDwrkzsYrZWs78kRx9K-vkZ5_mxolsp1_TkzV1_PdZTlyiG2HGs5qHIvdFIzNFWMoJO1lMLd7ffLarKeSBo0Iwft68MrLFXkKYqf6L3GyjaJim6vMUaPYK27rfMyGmULZ2" />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-8 hidden lg:block">
          <div className="text-4xl font-black mb-1">1000 Tons</div>
          <div className="text-xs uppercase tracking-widest font-bold opacity-70">Stamping capacity</div>
        </div>
      </div>
    </section>
  );
}
