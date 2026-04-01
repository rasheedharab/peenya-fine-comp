import { Car, Rocket, Refrigerator } from 'lucide-react';

export default function Capabilities() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter mb-6">Strategic Capabilities</h2>
            <p className="text-on-surface-variant text-lg">We provide end-to-end manufacturing excellence across three core industrial pillars, utilizing advanced simulation and automated stamping workflows.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-8 h-1 bg-outline-variant"></div>
              <div className="w-4 h-1 bg-outline-variant"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Automotive */}
          <div className="group relative bg-surface-container-lowest p-10 overflow-hidden transition-all hover:z-10 hover:shadow-2xl">
            <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
              <Car className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Automotive</h3>
            <p className="text-on-surface-variant mb-8">Structural components, bracketry, and precision interior stampings for EV and ICE platforms. Tier 1 supplier for global OEMs.</p>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Chassis Brackets</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Suspension Mounts</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> EV Battery Trays</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
          
          {/* Aerospace & Defense */}
          <div className="group relative bg-surface-container-lowest p-10 overflow-hidden transition-all hover:z-10 hover:shadow-2xl">
            <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
              <Rocket className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Aerospace & Defense</h3>
            <p className="text-on-surface-variant mb-8">High-strength alloys and mission-critical components meeting AS9100 standards for durability and weight optimization.</p>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Airframe Reinforcements</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Shielding Components</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Specialized Fasteners</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>

          {/* Home Appliances */}
          <div className="group relative bg-surface-container-lowest p-10 overflow-hidden transition-all hover:z-10 hover:shadow-2xl">
            <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
              <Refrigerator className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Home Appliances</h3>
            <p className="text-on-surface-variant mb-8">Aesthetic outer panels and functional internal assemblies for premium white goods and consumer electronics.</p>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Door Panels</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Drum Supports</li>
              <li className="flex items-center gap-2 text-sm font-medium"><span className="w-1 h-1 bg-secondary"></span> Heat Exchanger Fins</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
