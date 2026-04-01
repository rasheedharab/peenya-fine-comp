export default function GlobalPresenceCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="bg-surface-container-lowest p-12 flex flex-col md:flex-row items-center justify-between border-y-0 relative shadow-[0_20px_40px_rgba(26,28,26,0.06)]">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Operating globally?</h3>
          <p className="text-on-surface-variant">We export to over 20 countries. Ask about our international shipping protocols.</p>
        </div>
        <button className="bg-surface-container-highest text-on-surface px-8 py-3 font-bold hover:bg-primary hover:text-on-primary transition-all">
          Export Documentation
        </button>
      </div>
    </section>
  );
}
