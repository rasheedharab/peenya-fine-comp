export default function Leadership() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4">Leadership Excellence.</h2>
            <p className="text-on-surface-variant">The minds steering Peenya Fine Comp toward the next frontier of precision manufacturing.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Leader 1 */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded">
              <img alt="Managing Director" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a mature male executive in a sharp grey suit, looking confident in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5hvnYKocFDc9tARrHyOEYDwLCaot1CKUFzUgp6c1GQGrdkY7wmWMulbxw-VAEi6tXXfC2THuzbtmD9nZVfpcSRi5Y7tNqZxbmedeM-rVem0pquEVmxL9fOZoSgoVc73AReM_akx6RTAlnSOPy2IR-UGeDjWBQ9bgU_frfpDsydFE4u43UVLtEfXN1m4R0FZRBCMN4jruHR3cEPY3IWxbzTGr7fZBl9tOrq5oOxrvereIz7nRGqCrRAfBxYC5frZyI0m7ekj2iS67t" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <h4 className="text-xl font-bold">Rajesh Hegde</h4>
              </div>
              <p className="text-primary font-medium text-sm mb-4">Director, Engineering Excellence</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">35 years of expertise in tool design and global manufacturing strategy. Orchestrates our commitment to technical mastery.</p>
            </div>
          </div>
          {/* Leader 2 */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded">
              <img alt="Technical Director" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a female engineer in her 40s wearing a crisp white shirt, standing in front of an architectural blueprint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR3u1A_tUL5KkPul4qIiddc_jTanEij-t4yidQfdKV1xc8J-rs13EMLTtkI_FsB2wpJ3fgGJpHH4LyaCP5ED20HFxnKFypQpjM645hp8RzMEqRmjgMlj3kZLWtmaQ5-FmFhsyGaye1CGxDCJA8OysCEMPAp9g1jxYoWTUOBLlXu4iHhjWA0LLTFyY098yC6_LWGZEYFVhE7nIqpQD86Arhm6ahf93Gdv8Yi3cqx5dYZz5AEiikv2hqpHPvxhqGrih4qSdG3YRJMB3m" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <h4 className="text-xl font-bold">Deepa Rao</h4>
              </div>
              <p className="text-primary font-medium text-sm mb-4">Director, Precision Manufacturing</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">Specialist in complex machining and metrology. Leads our Peenya Phase 4 facility operations and R&D divisions.</p>
            </div>
          </div>
          {/* Leader 3 */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded">
              <img alt="Operations Head" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a man in his late 30s with glasses and a friendly demeanor, wearing a navy blue blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrNjY10O0CHJf220Q5MDF7Ylum8rqAu73nEEZDoz77lQZLHNWvHyMIowDXVFox0w2DEoSqwn8JfKLFXMlfzwxmilGCj5HLJu6-rGlvi9pI5HUD8YaGrjjoyBNBNbOULL32f06mz1KPbuBmYehF7ljtU3tzvZlAdfZWkV7gZUPgX423NoXzbmcQ0W6AgSh3pWNzprs7-4YmaT-CigmB_oZmqfbuBeOaqH-0fnStm6D3iANXLSNj3iT-fe9QjeFK768eKVd5T-wXRP8H" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <h4 className="text-xl font-bold">Anand Kumar</h4>
              </div>
              <p className="text-primary font-medium text-sm mb-4">Head of Industrial Operations</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">Lean manufacturing expert focusing on zero-waste protocols and global Tier 1 supply chain integration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
