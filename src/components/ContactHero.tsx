export default function ContactHero() {
  return (
    <section className="relative h-[409px] min-h-[400px] flex items-center overflow-hidden bg-surface-dim">
      <div className="absolute inset-0 z-0">
        <img alt="" className="w-full h-full object-cover opacity-40 mix-blend-multiply" data-alt="Close-up macro shot of precision machined industrial steel components with architectural lighting and cool metallic blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIL8veyAsR-hr8fo5nyDGpidkfhJIzBt3xZDvInn_FqXI6hlfwNB0P45gf2Iecy81x2BDo-WE3ebmJu66PfzLvHhw8KVAgys8d9VjpGmvUKq1iIae85C8o2L4XdyzJFaYatAWrwa6RL3QAcB-X0YbikAcFkSw_M8LJjIDeQFKu_Mnu3DzNJUDw3u_oSIhyWhhzudimXwuSVPovx9gPEjHW-2mougdMbu0W5EquCEqnbvX7Thokfr5--udEC054i34jHU21x2THzTrL" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-fixed text-xs font-bold uppercase tracking-widest mb-6">Connect With Precision</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-6 leading-none">Let's Engineer <br /> The Future.</h1>
          <p className="text-lg text-on-surface-variant max-w-md font-body">Reach out to our specialist teams in Peenya for precision-grade component manufacturing and design consultancy.</p>
        </div>
      </div>
    </section>
  );
}
