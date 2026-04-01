export default function Tier1Partners() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Primary Global Partners</h2>
          <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Industry Benchmarks</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="bg-surface-container-low p-12 flex flex-col justify-between hover:bg-surface-container-high transition-colors group">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary" data-icon="factory" data-weight="fill">factory</span>
              <span className="text-xs font-bold border-l-2 border-primary pl-3">TIER 1 STRATEGIC</span>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold mb-4">Caterpillar</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">Supporting heavy-duty infrastructure through mission-critical machined components and high-tolerance assemblies.</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 flex flex-col justify-between hover:bg-surface-container-high transition-colors group">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary" data-icon="settings_input_component" data-weight="fill">settings_input_component</span>
              <span className="text-xs font-bold border-l-2 border-primary pl-3">TIER 1 STRATEGIC</span>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold mb-4">Whirlpool</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">Precision engineering for large-scale appliance manufacturing, delivering consistency across global production lines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
