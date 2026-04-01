export default function StampingCenter() {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-extrabold tracking-tighter text-primary mb-6">Stamping Center</h2>
            <p className="text-on-surface-variant text-lg">A versatile fleet of pneumatic and hydraulic presses engineered for repeatable precision across diverse material gauges.</p>
          </div>
          <div className="text-right">
            <span className="text-primary font-black text-8xl opacity-10 leading-none select-none">PRESS</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-outline-variant/30 border border-outline-variant/30">
          {/* Capacity Item */}
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Ultra-Light</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">5 TONS</h4>
            <p className="text-xs text-on-surface-variant">Pneumatic Precision</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Precision</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">20 TONS</h4>
            <p className="text-xs text-on-surface-variant">High Speed C-Frame</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Precision</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">50 TONS</h4>
            <p className="text-xs text-on-surface-variant">Automated Feed</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Medium Duty</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">100 TONS</h4>
            <p className="text-xs text-on-surface-variant">Mechanical Power</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Medium Duty</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">250 TONS</h4>
            <p className="text-xs text-on-surface-variant">Deep Draw Capacity</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Heavy Duty</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">500 TONS</h4>
            <p className="text-xs text-on-surface-variant">Progressive Die Line</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">Heavy Duty</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">800 TONS</h4>
            <p className="text-xs text-on-surface-variant">Wide Bed Stamping</p>
          </div>
          <div className="bg-primary-container p-8 group">
            <p className="text-[10px] font-bold text-secondary-fixed uppercase tracking-[0.2em] mb-4">Maximum Power</p>
            <h4 className="text-3xl font-bold tracking-tighter mb-1 text-white">1000 TONS</h4>
            <p className="text-xs text-outline-variant">Tandem Line Heavy Industrial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
