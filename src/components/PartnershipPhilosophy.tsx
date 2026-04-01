export default function PartnershipPhilosophy() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-dim">
          <img alt="Precision Measurement" className="w-full h-full object-cover mix-blend-multiply opacity-90" data-alt="A focused engineer in a modern industrial setting using a high-tech laser measuring tool on a complex machined engine part" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9xYdwM9_MySUBILAv45xZcqFRlZCFYo3UgAvLTqWEWu_6hDjfvHku3XTFaVAcjnhZr8cQH836iH1tAACLKIyv-Mmz8k-v9XDXXqcP6GTunpXJtwOPl2OyL-vfqPECega_gThZNfs8SgV7MP9IDP4ZsSRDHoxkDGzpAO0BITERruelKFHQoKGCmseovxG8oxUf9thjWVA_Re13BjmM6woGRsj7hGur6bsHxiDDeLJSSbZ7WkNARFALgN9S5LQ8D2fLyxtwOx75zBBh" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-8">The BAR Philosophy</h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Success isn't just about meeting specifications—it's about setting the standard. Our internal "BAR" protocol ensures that every client interaction yields long-term engineering excellence.
          </p>
          <div className="space-y-10">
            <div className="flex gap-6">
              <span className="text-3xl font-black text-primary/20 font-headline">01</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Benchmarking</h4>
                <p className="text-on-surface-variant text-sm">We don't just follow standards; we define them through rigorous cross-industry competitive analysis.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-3xl font-black text-primary/20 font-headline">02</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Achievement</h4>
                <p className="text-on-surface-variant text-sm">Our delivery cycles are optimized for zero-defect output and just-in-time integration.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-3xl font-black text-primary/20 font-headline">03</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Reliability</h4>
                <p className="text-on-surface-variant text-sm">Consistency is our core product. We ensure that part 1,000,000 is identical to part 1.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
