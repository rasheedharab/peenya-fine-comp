export default function ContactGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Inquiry Form (The "Action" Surface) */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-low p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Detailed Business Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors p-4" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Company Email</label>
                  <input className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors p-4" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Industry Sector</label>
                  <select className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors p-4 appearance-none">
                    <option>Aerospace & Defense</option>
                    <option>Automotive</option>
                    <option>Medical Devices</option>
                    <option>Heavy Machinery</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Project Urgency</label>
                  <select className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors p-4 appearance-none">
                    <option>Immediate (1-3 months)</option>
                    <option>Planning (3-6 months)</option>
                    <option>Future Roadmap</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Project Specifications</label>
                <textarea className="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors p-4" placeholder="Describe your technical requirements..." rows={4}></textarea>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <button className="bg-primary text-on-primary px-10 py-4 font-headline font-bold tracking-tight hover:bg-on-primary-fixed transition-colors flex items-center group" type="submit">
                  Submit Inquiry
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <span className="text-xs text-on-surface-variant font-medium max-w-[200px]">Our engineering team typical responds within 24 business hours.</span>
              </div>
            </form>
          </div>
        </div>
        {/* Right: Department Intel (The "Blueprints") */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8 border-l-4 border-secondary pl-4">Department Directory</h2>
            <div className="space-y-8">
              {/* Sales */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="bg-surface-container-highest p-3 transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                    <span className="material-symbols-outlined">precision_manufacturing</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sales & Partnerships</h3>
                    <p className="text-on-surface-variant text-sm mb-2">For new project discussions and bulk manufacturing quotes.</p>
                    <p className="font-mono text-sm text-secondary">sales@peenyafinecomp.com</p>
                    <p className="font-mono text-sm text-on-surface">+91 80 2839 0000</p>
                  </div>
                </div>
              </div>
              {/* Support */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="bg-surface-container-highest p-3 transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                    <span className="material-symbols-outlined">engineering</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Technical Support</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Quality control inquiries and existing order technical specs.</p>
                    <p className="font-mono text-sm text-secondary">tech.support@peenyafinecomp.com</p>
                  </div>
                </div>
              </div>
              {/* HR */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="bg-surface-container-highest p-3 transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                    <span className="material-symbols-outlined">badge</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Careers</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Join our team of elite precision engineers.</p>
                    <p className="font-mono text-sm text-secondary">careers@peenyafinecomp.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Location Anchor */}
          <div className="bg-surface-container-low p-8 border-t-4 border-primary">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">location_on</span>
              Headquarters
            </h3>
            <p className="text-on-surface-variant mb-4">
              Plot No. 42, 4th Phase, <br />
              Peenya Industrial Area, <br />
              Bangalore, Karnataka - 560058
            </p>
            <a className="inline-flex items-center text-primary font-bold hover:underline underline-offset-4" href="#">
              Get Directions
              <span className="material-symbols-outlined text-sm ml-1">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
