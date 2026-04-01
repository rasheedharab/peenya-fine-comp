export default function CompanyHistory() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight mb-8">30 Years of Industrial Evolution.</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>Established in 1994 in the heart of Peenya Industrial Area, Bangalore, Peenya Fine Comp Pvt Ltd has grown from a specialized tool room into a premier industrial powerhouse.</p>
              <p>Our journey over three decades is defined by constant innovation and an unwavering commitment to zero-defect manufacturing, serving as a Tier 1 partner to global leaders in automotive and aerospace sectors.</p>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-8 rounded-lg">
              <div className="text-4xl font-extrabold text-primary mb-2">30+</div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">Years of Expertise</div>
            </div>
            <div className="bg-surface-container-high p-8 rounded-lg">
              <div className="text-4xl font-extrabold text-primary mb-2">20+</div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">Exporting Countries</div>
            </div>
            <div className="bg-surface-container-high p-8 rounded-lg">
              <div className="text-4xl font-extrabold text-primary mb-2">15k+</div>
              <div className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">Sq. Ft. Facility</div>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-lg">
              <div className="text-4xl font-extrabold mb-2">IATF</div>
              <div className="text-sm font-bold opacity-80 tracking-wider uppercase">16949 Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
