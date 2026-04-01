export default function Stats() {
  return (
    <section className="bg-white py-12 border-y border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="text-4xl font-headline font-black text-primary tracking-tighter">1000+</span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mt-1">Ton Capacity</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-headline font-black text-primary tracking-tighter">15k+</span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mt-1">Sq. Ft. Facility</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-headline font-black text-primary tracking-tighter">30+</span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mt-1">Years Experience</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-headline font-black text-primary tracking-tighter">0.02mm</span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mt-1">Precision Tolerance</span>
        </div>
      </div>
    </section>
  );
}
