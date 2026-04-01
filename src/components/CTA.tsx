import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[1440px] mx-auto bg-surface-container-low p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter mb-6">Ready for Precision?</h2>
            <p className="text-on-surface-variant text-lg mb-8">Let's discuss your next engineering challenge. Our technical team is ready to provide feasibility studies and quote analysis within 48 hours.</p>
            <button className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all cursor-pointer">
              Start Project Discussion
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white border-l-4 border-primary flex items-center gap-6 shadow-sm">
              <Mail className="text-primary w-8 h-8" />
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Us</p>
                <p className="font-headline font-bold text-lg">projects@peenyafine.com</p>
              </div>
            </div>
            <div className="p-6 bg-white border-l-4 border-secondary flex items-center gap-6 shadow-sm">
              <Phone className="text-secondary w-8 h-8" />
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Call Technical Desk</p>
                <p className="font-headline font-bold text-lg">+91 (80) 4455 6677</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
