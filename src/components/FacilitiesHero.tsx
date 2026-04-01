export default function FacilitiesHero() {
  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" data-alt="dramatic wide shot of a massive industrial 1000-ton hydraulic stamping press in a clean modern factory with blue atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaxTnI4Rbb0nYHYNitPTqVq6FBcR_lwiDHIy8iEL3-hz8aPeGMCpnevyE0854uhOB1qLOB4mZNaZ6ktuom9PwIa7Pjwzo2xf5FgBap3oWUQxYX6T6Z25CXQMJhdwEP-riE3VmBRiqjhv2POhfXL0r_ttj7vdwKoby74ANdtdGHhZX_gVBEsF4vSlnTyOvVkH4f7GMVfvmA9YoBQsxbvty0bIDyHe4wYRdukQ5NAgxYUbkDn4m4kJ74qyzwCP_UpgMAUnC5z8mQslBZ" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">Engineering Excellence</span>
          <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Advanced <br />Manufacturing <br /><span className="text-secondary-fixed">Powerhouse</span>
          </h1>
          <p className="text-outline-variant text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            Our facility integrates heavy-duty stamping capabilities with high-precision tooling to deliver mission-critical components at global scale.
          </p>
          <div className="flex items-center space-x-6">
            <div className="h-[1px] w-24 bg-secondary"></div>
            <span className="text-white font-mono text-sm tracking-widest uppercase">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
