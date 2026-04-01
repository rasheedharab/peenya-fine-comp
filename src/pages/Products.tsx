import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
      <aside className="hidden md:flex flex-col w-72 bg-surface-container-lowest p-6 min-h-[calc(100vh-112px)] sticky top-[112px] z-40 shrink-0 border-r border-surface-dim">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <div className="bg-surface-container-high aspect-square bg-cover rounded-full size-12" data-alt="Close up of a precision machined metal gear with bright reflections" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwNB94D0PSKtWEmnb76TCLmlU9K8K6phxu6b0-FVmZY_SSxHWIj8ApjWM_KKoHQh6FgoXGLoi7hwaOusNQ0S5Ydyp18ngFGpNW5TAURGuTV4h6BCTEUdsudq2Tv7ZJ-yIEs1HgI1J6jNGswmu6DWKnCICWq65zLhZ6SIHqqBB0CkcZoa_QP722eJbI_htVodX7HzsbnNB8tg3-OVH1YVHVqQvCNYBveNh6IBrX1pk-Ph9DqEc8_7mPY4grEE6R9zsDLHwkqx1Oh7dh")' }}></div>
            <div className="flex flex-col">
              <h1 className="text-on-surface text-sm font-headline font-bold leading-tight">Product Catalog</h1>
              <p className="text-on-surface-variant text-xs font-label mt-1">Precision Engineering</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <h3 className="text-on-surface-variant text-xs font-label font-bold uppercase tracking-wider mb-2 px-3">Sectors</h3>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded bg-surface-container-low transition-colors group" href="#">
              <span className="material-symbols-outlined text-primary" data-icon="Train" style={{ fontVariationSettings: "'FILL' 1" }}>train</span>
              <span className="text-on-surface text-sm font-label font-medium group-hover:text-primary">Railways</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-surface-container-lowest transition-colors group" href="#">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="Directions_Car">directions_car</span>
              <span className="text-on-surface-variant text-sm font-label font-medium group-hover:text-on-surface">Automotive</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-surface-container-lowest transition-colors group" href="#">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="Flight">flight</span>
              <span className="text-on-surface-variant text-sm font-label font-medium group-hover:text-on-surface">Aerospace</span>
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex-1 flex flex-col w-full bg-surface pb-24">
        <div className="px-8 py-6 sticky top-[112px] bg-surface/90 backdrop-blur-md z-30">
          <nav className="flex flex-wrap gap-2 items-center">
            <Link className="text-on-surface-variant hover:text-primary text-sm font-label font-medium transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">chevron_right</span>
            <Link className="text-on-surface-variant hover:text-primary text-sm font-label font-medium transition-colors" to="/products">Railways</Link>
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">chevron_right</span>
            <span className="text-on-surface text-sm font-label font-bold">Metro Parts</span>
          </nav>
        </div>
        <section className="px-8 pt-4 pb-16 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-surface-dim pb-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-on-surface text-[3.5rem] font-headline font-extrabold leading-[1.1] tracking-[-0.02em]">Railways</h1>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed max-w-2xl">
                Tier 1 supplier for global metro systems, delivering precision engineering for critical applications. Specializing in high-tolerance structural and functional components.
              </p>
            </div>
            <button className="bg-gradient-to-br from-black to-[#101b30] text-on-primary px-6 py-3 rounded-md font-label font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_10px_20px_rgba(16,27,48,0.15)] shrink-0">
              <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
              View Certifications
            </button>
          </div>
        </section>
        <section className="px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-on-surface text-2xl font-headline font-bold tracking-tight">Metro Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0_20px_40px_rgba(26,28,26,0.06)] transition-all duration-300 flex flex-col">
                <div className="h-48 bg-surface-container-high bg-cover bg-center" data-alt="Macro shot of a highly polished stainless steel structural bracket for train frames, dramatic studio lighting" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi1y-VRdVjNWYI1So-cmvJkCJCEfUDTRBWq3kcuPHt9ASTC-BeGR0i83itOkCN7ijz2Cqq0EqYpHnJJuXkpv7x67u--gR2bgThtRib7pND-ko47dVk7nMtc4am8-YpSwwClVL7FjdvkwqnSpZiuxf11LrJkv7zgQO-nyKTWq38safdaX5QBif2-H2JAsFK9ehP-RvuEdku9ZRCUC_HKBBeHvEAH1isr1LTfHHPvYmZIslTBjbtNwCw7t5J3wzpBg4PbStvKqcuyU8M")' }}></div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-on-surface text-lg font-headline font-bold">Frame Parts</h3>
                    <span className="bg-primary-container text-primary-fixed text-[10px] font-label font-bold px-2 py-1 rounded uppercase tracking-wider">Structural</span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">High-precision stamping and machining for structural integrity under extreme dynamic loads.</p>
                  <div className="mt-auto pt-4 border-t border-surface-dim flex gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Material</span>
                      <span className="text-on-surface text-xs font-label font-semibold">AISI 4140 / SS316L</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Tolerance</span>
                      <span className="text-on-surface text-xs font-label font-semibold">± 0.01mm</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-surface-container-highest text-on-surface py-2 rounded-md font-label font-semibold text-sm hover:bg-surface-dim transition-colors">
                    View Specifications
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0_20px_40px_rgba(26,28,26,0.06)] transition-all duration-300 flex flex-col">
                <div className="h-48 bg-surface-container-high bg-cover bg-center" data-alt="Detailed view of a complex metallic door locking mechanism assembly, shallow depth of field, cool industrial tones" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZmFyhU_TMoBnXO_llMvUNnfX8rBK5YZam7Nj1whldoqPWKx9MbHtALrFapOOtnJ0VRSfGE7p31iBX3Ws7A87EV4UpEEJH1tkJI4UJI4C9mxxm7wsDNF3HRo4MCmQy4M-sBqAAUYt3r2N8v0t7wtGTyxWgOu7oKvG55gD0RkQjWPzhI_mHR7p6QPU-12iVj47tCy6dNDIclbuhBcqsHrB5KSg0iRq7LUArD6xYSxbri1-LjIbggb5-JYfn5WFlmrxnsJGgBS1iA2xr")' }}></div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-on-surface text-lg font-headline font-bold">Door Assemblies</h3>
                    <span className="bg-primary-container text-primary-fixed text-[10px] font-label font-bold px-2 py-1 rounded uppercase tracking-wider">Safety Critical</span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">Critical sub-assemblies and mechanisms designed for millions of faultless cycles in mass transit.</p>
                  <div className="mt-auto pt-4 border-t border-surface-dim flex gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Material</span>
                      <span className="text-on-surface text-xs font-label font-semibold">Aluminum 6061-T6</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Tolerance</span>
                      <span className="text-on-surface text-xs font-label font-semibold">± 0.02mm</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-surface-container-highest text-on-surface py-2 rounded-md font-label font-semibold text-sm hover:bg-surface-dim transition-colors">
                    View Specifications
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0_20px_40px_rgba(26,28,26,0.06)] transition-all duration-300 flex flex-col">
                <div className="h-48 bg-surface-container-high bg-cover bg-center" data-alt="Close-up on heavy duty machined steel disc braking component, dark metallic textures, strong rim lighting" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXau-TFYzItBgJJDqtynIcLJfGiiY3mPTha_D-lxCFFtBZDGdSS4bphI3CrgQV9BnYUEWofodMTF938qN6VfbH1echyZPm_9BvEiYVmrB5oYlcq4GLvvYfbOpbs74NZh-3H1UgkMKGNjcBGwYwm7VxTIisfsLaLeSg579krl3JaMV2_YR5LVXIKWYpPf5A0_DoguBOWytqDfbZ3shZW4k3o2hqNslNtuBPxR_kfIw0ZNF5A67sRy3jUHg5-SSdM-Vit6ATukC-cB02")' }}></div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-on-surface text-lg font-headline font-bold">Braking Units</h3>
                    <span className="bg-primary-container text-primary-fixed text-[10px] font-label font-bold px-2 py-1 rounded uppercase tracking-wider">Dynamic</span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">Specialized machined components for pneumatic and hydraulic railway braking systems.</p>
                  <div className="mt-auto pt-4 border-t border-surface-dim flex gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Material</span>
                      <span className="text-on-surface text-xs font-label font-semibold">Forged Steel Alloys</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant text-[10px] font-label uppercase">Tolerance</span>
                      <span className="text-on-surface text-xs font-label font-semibold">± 0.005mm</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-surface-container-highest text-on-surface py-2 rounded-md font-label font-semibold text-sm hover:bg-surface-dim transition-colors">
                    View Specifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
