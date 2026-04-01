export default function ProductCategories() {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Precision Categories</h2>
          <p className="text-on-surface-variant mt-2">Specialized manufacturing solutions across high-growth industrial sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Automotive Precision */}
          <div className="md:col-span-8 bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">directions_car</span>
                <span className="px-2 py-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold uppercase">IATF 16949</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Automotive Precision Components</h3>
              <p className="text-on-surface-variant max-w-sm">Critical stampings and sub-assemblies for braking systems, axles, and engine components for Tier 1 global suppliers.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-outline-variant/20">
              <div>
                <div className="text-xs text-outline font-bold uppercase">Capability</div>
                <div className="font-bold text-on-surface">Progressive Tooling</div>
              </div>
              <div>
                <div className="text-xs text-outline font-bold uppercase">Tolerance</div>
                <div className="font-bold text-on-surface">+/- 0.01 mm</div>
              </div>
              <div>
                <div className="text-xs text-outline font-bold uppercase">Volume</div>
                <div className="font-bold text-on-surface">Mass Production</div>
              </div>
            </div>
          </div>
          {/* In-house Tooling */}
          <div className="md:col-span-4 bg-primary text-on-primary p-8 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">architecture</span>
              <h3 className="text-2xl font-bold mb-4">In-house Tool Design & Manufacturing</h3>
              <p className="text-on-primary/70 text-sm">End-to-end tool development ensuring rapid prototyping and long-term production stability.</p>
            </div>
            <a className="text-sm font-bold underline underline-offset-8 decoration-on-primary-container hover:text-on-primary-container transition-colors" href="#">Technical Consultation</a>
          </div>
          {/* Home Appliance Components */}
          <div className="md:col-span-4 bg-surface-container-lowest p-8 border-l-4 border-secondary">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">kitchen</span>
            <h3 className="text-2xl font-bold mb-4">Home Appliance Components</h3>
            <p className="text-on-surface-variant text-sm mb-6">High-tolerance components for white goods and consumer electronics, meeting stringent aesthetic and functional standards.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-container-high text-on-surface text-[10px] font-bold uppercase">Whirlpool Approved</span>
              <span className="px-2 py-1 bg-surface-container-high text-on-surface text-[10px] font-bold uppercase">ISO 9001:2015</span>
            </div>
          </div>
          {/* Aerospace & Defense */}
          <div className="md:col-span-8 bg-surface-container-lowest overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Aerospace & Defense</h3>
                <p className="text-on-surface-variant text-sm mb-6">Specialized machined parts and complex sub-assemblies engineered for extreme environments and zero-failure mission critical applications.</p>
                <button className="self-start text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">AS9100D Protocol</button>
              </div>
              <div className="md:w-1/2 relative bg-surface-dim">
                <img alt="Aerospace machined assembly" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="High-precision aerospace grade aluminum machined component assembly with complex geometric tolerances" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChYrS1n2ggNVchScMfNyhzbRNtHHq8EpSt_3Z7uAseFEvR4Jj2X4naqEmcHCoaCI1lgQKSvaTAX1tq6I4M10tDhbNKueFruHXX0t-xfxh1YAOub5QfMWi8_I5s1NJ2KSrB3hGQt_31SopEb0OFdvFP3ux_SHRhfrmYb3tZzJiW5gd8av3nuk80GWTDvFr87DFuEO3a5VYZjE7h9sUXX_U5yWGMzGhsy8YlMq4lVLXQgvpcwaelwiTYb-rxYvvBIwiAIW6AgJCI_hyw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
