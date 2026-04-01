export default function MapSection() {
  return (
    <section className="w-full bg-surface-container-high py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
        <div className="p-12 md:p-24 flex flex-col justify-center bg-primary-container text-on-primary">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Located in India's <br /> Manufacturing Hub</h2>
          <p className="text-on-primary-container text-lg mb-8 max-w-sm">Strategic location in Peenya Phase 4 allows us to leverage the strongest industrial ecosystem in Southern India.</p>
          <div className="flex space-x-4">
            <div className="bg-surface/10 p-4 border border-surface/20">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Years Experience</div>
            </div>
            <div className="bg-surface/10 p-4 border border-surface/20">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Clients Globally</div>
            </div>
          </div>
        </div>
        <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
          <img alt="" className="w-full h-full object-cover" data-alt="Modern satellite map view of an industrial district with grid layouts, large warehouses, and logistics infrastructure." data-location="Peenya, Bangalore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhtFf-yFczIsJi6SV0eXX2kgTATIoklxyHf4mHqR_dcHCrgkSOeYNEQSBgz3k23MP1imtK7xX1J--95KYDayu1dh1IaW_4sZrrZCoys5iwFRiAviDYc9qn4lJi1VC0eNJ-waGeAu_0Kj53NFSrwSn9n9mMTPbmgt__k4XherDj6wrBxYzHbC1eBxIWMAysG0nCmcx44PelpCK7cibEYenwFUip3LH4iNnANgbMnMrsQZYLzROuta3H7et_P7APz4StTE945Zycsazz" />
          <div className="absolute inset-0 bg-secondary/20 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary animate-ping rounded-full opacity-75"></div>
              <div className="relative bg-primary text-on-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined" data-weight="fill">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
