import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProducts = location.pathname === '/products';
  const isFacilities = location.pathname === '/facilities';
  const isClients = location.pathname === '/clients';
  const isContact = location.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm flex flex-col">
      {/* Top Information Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="font-medium tracking-wide">An ISO 9001:2015 Certified & Lean Company</div>
          <div className="flex items-center gap-6 font-medium">
            <a href="mailto:admin@peenyafinecomp.co.in" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              admin@peenyafinecomp.co.in
            </a>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">call</span>
              +91- 80 - 2836 0139 / +91- 80 - 2836 0747
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-slate-50/70 backdrop-blur-lg w-full">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold tracking-tighter text-slate-950">Peenya Fine Comp</div>
          <nav className="hidden md:flex gap-8">
            <Link to="/" className={`transition-all duration-200 ${isHome ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>Home</Link>
            <Link to="/about" className={`transition-all duration-200 ${isAbout ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>About</Link>
            <Link to="/products" className={`transition-all duration-200 ${isProducts ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>Products</Link>
            <Link to="/facilities" className={`transition-all duration-200 ${isFacilities ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>Facilities</Link>
            <Link to="/clients" className={`transition-all duration-200 ${isClients ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>Clients</Link>
            <Link to="/contact" className={`transition-all duration-200 ${isContact ? 'text-slate-950 border-b-2 border-slate-950 pb-1 font-bold' : 'text-slate-600 font-medium hover:text-slate-950'}`}>Contact</Link>
          </nav>
          <button className="bg-primary text-on-primary px-6 py-2 font-bold tracking-tight scale-95 active:scale-90 transition-transform">Get a Quote</button>
        </div>
      </div>
    </header>
  );
}
