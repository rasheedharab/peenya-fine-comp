export default function FacilityHighlights() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-10 flex flex-col justify-between min-h-[300px] border-l-4 border-primary shadow-sm">
            <span className="material-symbols-outlined text-4xl text-primary" data-icon="factory">factory</span>
            <div>
              <h3 className="text-4xl font-black tracking-tighter text-on-surface mb-2">15,000 SQ. FT.</h3>
              <p className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Shop Floor Capacity</p>
            </div>
          </div>
          <div className="bg-primary-container p-10 flex flex-col justify-between min-h-[300px] text-white">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed" data-icon="precision_manufacturing">precision_manufacturing</span>
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-2">1,000 TON</h3>
              <p className="text-outline-variant font-medium uppercase tracking-wider text-xs">Maximum Stamping Force</p>
            </div>
          </div>
          <div className="bg-surface-container-highest p-10 flex flex-col justify-between min-h-[300px]">
            <span className="material-symbols-outlined text-4xl text-on-surface" data-icon="update">update</span>
            <div>
              <h3 className="text-4xl font-black tracking-tighter text-on-surface mb-2">24/7 PRODUCTION</h3>
              <p className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Uninterrupted Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
