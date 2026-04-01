export default function AboutHero() {
  return (
    <section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 items-center gap-12 z-10">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase rounded">Established 1994</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-on-surface">
            Precision <br />Engineering <br />Architecture.
          </h1>
          <p className="max-w-md text-on-surface-variant text-lg leading-relaxed">
            Redefining industrial standards through meticulous craftsmanship and state-of-the-art manufacturing infrastructure in the heart of Bangalore.
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
        <img alt="Precision industrial components" className="w-full h-full object-cover" data-alt="Macro photography of high-precision metallic components with intricate cooling fins and polished surfaces under dramatic industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz0yv4ss4otRM6ySRqLI33tX2mkl_XYZ1Dh7KdPdf15sOzpO5j--4BJH--V2ilWjVxAvoVK2Djiug2gsldY2VKr0s-rvye-5sy9fnZjOdsjUnWpHyvyHo83RaFsUhl_fLqARpxhKfdauvKm9u4Gcj4ZLaWOVzVH_-IKF3ech3PWo4sYJlwyf6SjuU4wmm8ZUkbpY5upOnrOCQyf3uNv6PwllIvg5xxlt0YKxFq46wyVnyB5JnavfdO1oAGLxUhKxVkMGnjwWVQyHQ8" />
      </div>
    </section>
  );
}
