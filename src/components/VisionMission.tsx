export default function VisionMission() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden">
              <img alt="Vision and Mission" className="w-full h-full object-cover" data-alt="Interior of a modern clean-room manufacturing facility with automated CNC machines and engineers in white lab coats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_9rRb9mlBFuyz7apbL2V-jcTWZZsKzSnXv5phCEiQiBHlAv_P4izAhe131FfP1npzi3klzUQ0rONticyGl4wlqlKNzzmzUUBNVmItXyqd1yBALyWpVfT-5-jaZu1vL6fk0kZ4TspcVB_DjHLI0rv6zcZ4qISVkX0oXk1Zr3U0BZYN0P5gWf23ytFO-np_R90dIxF1Lij2eKpo1mgu7n8rauOUOeSZAX9HKo5KcIbDEevsVX3SLkzU9_VJtIIqg03WTmph_IIwjMsw" />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary p-8 flex-col justify-end hidden lg:flex">
              <span className="material-symbols-outlined text-white text-5xl mb-4">precision_manufacturing</span>
              <p className="text-white font-bold leading-tight">Engineering the future of precision.</p>
            </div>
          </div>
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase">Our Vision</span>
              </div>
              <h3 className="text-3xl font-extrabold mb-4">To be the global benchmark for architectural precision in manufacturing.</h3>
              <p className="text-on-surface-variant">We aim to transcend traditional fabrication, creating components that are as much works of technical art as they are functional necessities for our global Tier 1 partners.</p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase">Our Mission</span>
              </div>
              <h3 className="text-3xl font-extrabold mb-4">"Raising the BAR" in Precision Engineering.</h3>
              <p className="text-on-surface-variant">Our mission is to deliver engineered excellence through a quality-first mindset and relentless innovation, empowering our partners with components that exceed industrial specifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
