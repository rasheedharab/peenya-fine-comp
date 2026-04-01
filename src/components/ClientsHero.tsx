export default function ClientsHero() {
  return (
    <header className="relative bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 items-center gap-16">
        <div className="z-10">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest bg-primary-container text-on-primary-container rounded-sm uppercase">Legacy of Trust</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-none">
            Strategic Global Partnerships
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
            For over 30 years, we have served as a trusted Tier 1 supplier to the world's most demanding engineering giants, delivering precision that powers global infrastructure.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-surface-container-high overflow-hidden rounded-lg grayscale opacity-80">
            <img alt="Precision manufacturing floor" className="w-full h-full object-cover" data-alt="Close-up of a high-precision metal industrial component being inspected by a digital micrometer in a clean manufacturing environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcExL9V99wgIKKwsiQi_BdwfuTHDK4E17-cYA5uWFbp1MmZDwno77_sfg7JDVXUuF-yMNpLmjEacH5zbHNWp3vcXmMzzviYFXNDJMEMPP4so05tsKk3JvWpL0Glu8aLtrShpBBQiH9yw7WxnuYn7yxhrfyVmaI_RcyuiNxkzfm_KLkh-UdgHS9GNKlNaOq7WIcNqVn6hCmhXLaql3Es2fuLlimvTCOo2HFRyukNaxTuRFRA5Uu_kb30yCeVMaUCgkC1-u7UyYsjLeU" />
          </div>
          <div className="absolute -bottom-8 -left-8 p-8 bg-surface-container-lowest shadow-2xl max-w-xs hidden md:block">
            <div className="text-4xl font-bold text-primary mb-1">30+</div>
            <div className="text-sm font-medium text-on-surface-variant">Years of unbroken excellence in Tier 1 engineering supply.</div>
          </div>
        </div>
      </div>
    </header>
  );
}
