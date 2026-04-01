import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f0] dark:bg-slate-900 text-[#0D1B2A] dark:text-slate-200 w-full pt-16 pb-8 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold text-[#0D1B2A] dark:text-white mb-6">Peenya Fine Comp</div>
          <p className="font-['Inter'] text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400 leading-relaxed">
            Precision Engineered Components and Tooling Solutions for Aerospace, Automotive, and Defense sectors globally.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-xs uppercase tracking-widest mb-6">Navigation</h6>
          <ul className="space-y-3 font-['Inter'] text-xs font-medium tracking-wide">
            <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/products" className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Products</Link></li>
            <li><Link to="/facilities" className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Facilities</Link></li>
            <li><Link to="/clients" className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">Clients</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-xs uppercase tracking-widest mb-6">Company</h6>
          <ul className="space-y-3 font-['Inter'] text-xs font-medium tracking-wide">
            <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Compliance</a></li>
            <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary hover:underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-xs uppercase tracking-widest mb-6">Headquarters</h6>
          <address className="not-italic font-['Inter'] text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400">
            Peenya Industrial Estate<br />
            Bangalore, Karnataka<br />
            India - 560058
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Inter'] text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400">© 2024 Peenya Fine Comp Pvt Ltd. Precision Engineered.</p>
        <div className="flex gap-8">
          <a className="font-['Inter'] text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Privacy Policy</a>
          <a className="font-['Inter'] text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
