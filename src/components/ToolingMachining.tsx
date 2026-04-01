export default function ToolingMachining() {
  return (
    <section className="py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-surface-container-high overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" data-alt="close up of a 5-axis CNC machining head cutting a steel automotive component with cooling liquid spray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Zoo3v4cyPszTK3ayLOW9zHyX8vhO2XWVyL7Oqpxr0cwwSl7NVzziCtaukEonQYlp_hcsvSZAOY9V-cCwwLJV7e28LKCr5zYhBwS5Rd8tzBRusvBOlIZ_TOgi9arGmygZzC5jWLX65U_3Ij6hoeGKgeTZmQVhOIWUa-Qd2fSBo80u3XSzHgjnIDBaiGC-HK_Q8wiBi4Aa7cbROOufpqqZCX7OYQN1JjIwIyUjj-G6pkwZo9OEuuK15n7IDJ7GnfxwT_TZvodCnKod" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-surface-container-lowest p-8 shadow-xl max-w-xs border-t-4 border-secondary hidden md:block">
              <h4 className="text-xl font-bold mb-2">In-House Tool Room</h4>
              <p className="text-sm text-on-surface-variant">Minimizing lead times by designing and maintaining critical dies on-site.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-extrabold tracking-tighter text-primary mb-10 leading-tight">Precision Tooling & Machining</h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-white flex items-center justify-center font-bold">01</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">5-Axis CNC Machining</h5>
                  <p className="text-on-surface-variant text-sm">Complex geometries handled with micron-level accuracy across multiple planes.</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-white flex items-center justify-center font-bold">02</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">Surface Grinding</h5>
                  <p className="text-on-surface-variant text-sm">Achieving mirror finishes and exact flatness requirements for critical mating surfaces.</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-container text-white flex items-center justify-center font-bold">03</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">Wire EDM</h5>
                  <p className="text-on-surface-variant text-sm">Electrical Discharge Machining for high-hardness materials and intricate die components.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
