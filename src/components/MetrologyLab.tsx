export default function MetrologyLab() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Quality Assurance</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tighter text-primary mb-8">The Metrology Lab</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Quality is not an afterthought; it is built into our shop floor DNA. Our temperature-controlled Metrology Lab features the latest in measurement technology to validate every production run.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l border-outline-variant pl-6">
                <h6 className="font-bold text-primary mb-2">CMM Measurement</h6>
                <p className="text-xs text-on-surface-variant">Automated 3D inspection for complex geometric tolerances.</p>
              </div>
              <div className="border-l border-outline-variant pl-6">
                <h6 className="font-bold text-primary mb-2">Spectroscopy</h6>
                <p className="text-xs text-on-surface-variant">Material composition verification and metallurgy analysis.</p>
              </div>
              <div className="border-l border-outline-variant pl-6">
                <h6 className="font-bold text-primary mb-2">Optical Testing</h6>
                <p className="text-xs text-on-surface-variant">High-speed non-contact imaging for dimensional checks.</p>
              </div>
              <div className="border-l border-outline-variant pl-6">
                <h6 className="font-bold text-primary mb-2">Hardness Testing</h6>
                <p className="text-xs text-on-surface-variant">Rockwell and Brinell verification for heat-treated parts.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-surface-container p-4">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="technician in white coat using a bridge-type Coordinate Measuring Machine (CMM) on a metallic aerospace component" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFaiknt1mO59t6XUp-rthCdzZQyJE7_ttB2sk_8xDPFbIHENj58LiXS2E6yFmql-2Cy9YCrdExDSmJd8ZchizERtbBOoNpzsTj7m-bAV9oQ7uS8emMb5WZs-hpL27jjQyU0U-qw4azSzCXRNKy6CfzJjNX_K8REYltz_vJrTZ2icVyTwGiG3l_2yxhQXKYR8xTp2cW63zy-CfXG0Ot71R6i4i5gndnTMKCemMUPa-fMHaWqpDmCMxBDbHY5GT67QRLWiRVbVWmnFr9" />
            <div className="absolute inset-0 border-[20px] border-surface pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
