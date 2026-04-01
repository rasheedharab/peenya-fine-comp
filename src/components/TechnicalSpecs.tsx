export default function TechnicalSpecs() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-6">Quality Compliance & Standards</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Operating under the "Raising the BAR" philosophy, we maintain rigorous quality management systems to serve as a trusted Tier 1 supplier to global OEMs.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-surface-container-low">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-bold text-sm">IATF 16949 Automotive Quality</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface-container-low">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-bold text-sm">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="bg-surface-container-lowest shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-on-primary">
                  <th className="p-6 font-bold text-sm uppercase tracking-widest">Process Capability</th>
                  <th className="p-6 font-bold text-sm uppercase tracking-widest">Description</th>
                  <th className="p-6 font-bold text-sm uppercase tracking-widest">Key Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-6">
                    <div className="font-bold">Heavy Stamping</div>
                    <div className="text-[10px] text-outline uppercase">Press Shop</div>
                  </td>
                  <td className="p-6 text-sm text-on-surface-variant">Precision sheet metal stamping and forming using mechanical & hydraulic presses.</td>
                  <td className="p-6"><span className="px-2 py-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold">Up to 1000 Tons</span></td>
                </tr>
                <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
                  <td className="p-6">
                    <div className="font-bold">Sub-Assemblies</div>
                    <div className="text-[10px] text-outline uppercase">Value Addition</div>
                  </td>
                  <td className="p-6 text-sm text-on-surface-variant">Complex modular assemblies including welding, riveting, and component integration.</td>
                  <td className="p-6"><span className="px-2 py-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold">Full Modular</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="p-6">
                    <div className="font-bold">In-house Tooling</div>
                    <div className="text-[10px] text-outline uppercase">Design & Build</div>
                  </td>
                  <td className="p-6 text-sm text-on-surface-variant">Manufacturing of progressive dies, jigs, and fixtures in our dedicated tool room.</td>
                  <td className="p-6"><span className="px-2 py-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold">End-to-End</span></td>
                </tr>
                <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
                  <td className="p-6">
                    <div className="font-bold">Precision Machining</div>
                    <div className="text-[10px] text-outline uppercase">CNC Operations</div>
                  </td>
                  <td className="p-6 text-sm text-on-surface-variant">5-axis milling and turning for critical components requiring ultra-tight tolerances.</td>
                  <td className="p-6"><span className="px-2 py-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold">Micron Level</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
