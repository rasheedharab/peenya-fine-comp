export default function ClientCategories() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Expertise Across Sectors</h2>
          <p className="text-on-surface-variant">Our engineering capabilities transcend industries, providing specialized solutions for the most rigorous technical requirements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Automotive */}
          <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded">
                <span className="material-symbols-outlined" data-icon="directions_car">directions_car</span>
              </div>
              <h3 className="text-2xl font-bold">Automotive</h3>
            </div>
            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
              <div className="border-l border-outline-variant pl-4">
                <h4 className="font-bold text-lg mb-1">Bosch</h4>
                <p className="text-xs text-on-surface-variant">Precision Fuel Systems</p>
              </div>
              <div className="border-l border-outline-variant pl-4">
                <h4 className="font-bold text-lg mb-1">Mahindra</h4>
                <p className="text-xs text-on-surface-variant">Powertrain Components</p>
              </div>
              <div className="border-l border-outline-variant pl-4">
                <h4 className="font-bold text-lg mb-1">Automotive Axles</h4>
                <p className="text-xs text-on-surface-variant">Heavy Vehicle Transmission</p>
              </div>
              <div className="border-l border-outline-variant pl-4">
                <h4 className="font-bold text-lg mb-1">TATA Motors</h4>
                <p className="text-xs text-on-surface-variant">Chassis Engineering</p>
              </div>
            </div>
          </div>
          {/* Industrial */}
          <div className="md:col-span-5 bg-primary-container text-on-primary-container p-10 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-on-primary-container text-primary-container flex items-center justify-center rounded">
                  <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                </div>
                <h3 className="text-2xl font-bold">Industrial</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-baseline justify-between border-b border-on-primary-container/20 pb-4">
                  <span className="font-medium text-lg text-white">Schneider Electric</span>
                  <span className="text-xs opacity-60">Global Partner</span>
                </li>
                <li className="flex items-baseline justify-between border-b border-on-primary-container/20 pb-4">
                  <span className="font-medium text-lg text-white">ABB</span>
                  <span className="text-xs opacity-60">Grid Solutions</span>
                </li>
                <li className="flex items-baseline justify-between border-b border-on-primary-container/20 pb-4">
                  <span className="font-medium text-lg text-white">Larsen &amp; Toubro</span>
                  <span className="text-xs opacity-60">Infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <span className="material-symbols-outlined text-[200px]" data-icon="settings">settings</span>
            </div>
          </div>
          {/* Home Appliances */}
          <div className="md:col-span-12 bg-surface-container-high p-10 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center rounded">
                  <span className="material-symbols-outlined" data-icon="kitchen">kitchen</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Home Appliances</h3>
                  <p className="text-sm text-on-surface-variant">Standardizing excellence for consumer longevity</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight">Haier</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Precision Casting</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight">Samsung</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Component Design</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight">IFB</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Core Assembly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
