export default function AboutCTA() {
  return (
    <section className="py-24 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Ready for Precision?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">Collaborate with our engineering team to bring your most complex designs to life with industrial accuracy and architectural precision.</p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="bg-surface text-primary px-8 py-4 font-bold rounded hover:bg-surface-dim transition-colors">Start a Project</button>
          <button className="border border-white/20 px-8 py-4 font-bold rounded hover:bg-white/10 transition-colors">Download Specs</button>
        </div>
      </div>
    </section>
  );
}
