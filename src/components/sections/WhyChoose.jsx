export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-12 md:py-14">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.96)_0%,rgba(17,24,39,0.94)_100%)]" />
      <div className="why-aurora a" />
      <div className="why-aurora b" />
      <div className="container relative grid items-start gap-6 lg:grid-cols-[1fr_.92fr] lg:gap-8">
        <div className="reveal">
          <span className="gold-line mb-3"></span>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Why Choose Us</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight md:text-3xl">Professional insurance portfolio with clear service storytelling</h2>
          <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_20px_60px_rgba(2,6,23,0.28)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85"
              alt="Premium business team"
              className="h-[220px] w-full object-cover md:h-[280px]"
            />
          </div>
        </div>
        <div className="reveal delay-2">
          <div className="why-copy max-w-2xl pl-2 text-base leading-8 text-slate-300 md:text-lg">
            <p>AI Growth Exa combines premium design, insurance-focused strategy, and conversion-ready digital execution so brands look credible and perform with confidence.</p>
            <p className="mt-4">From policy presentation and enquiry flows to CRM-style support journeys, every section is built to improve trust, simplify decisions, and strengthen customer response.</p>
          </div>
          <div className="why-stats mt-6 grid gap-5 sm:grid-cols-3 sm:gap-6">
            <div className="why-stat">
              <strong className="block text-4xl font-black text-cyan-400 md:text-5xl">5+</strong>
              <span className="mt-1 block text-sm uppercase tracking-[0.22em] text-slate-400">Policies</span>
              <p className="mt-2 text-sm leading-6 text-slate-300">Health, life, motor, bike, and travel insurance experiences.</p>
            </div>
            <div className="why-stat">
              <strong className="block text-4xl font-black text-cyan-400 md:text-5xl">8+</strong>
              <span className="mt-1 block text-sm uppercase tracking-[0.22em] text-slate-400">Companies</span>
              <p className="mt-2 text-sm leading-6 text-slate-300">Multiple insurance ecosystems, campaigns, and support flows delivered.</p>
            </div>
            <div className="why-stat">
              <strong className="block text-4xl font-black text-cyan-400 md:text-5xl">100%</strong>
              <span className="mt-1 block text-sm uppercase tracking-[0.22em] text-slate-400">Responsive</span>
              <p className="mt-2 text-sm leading-6 text-slate-300">Clean experience across desktop, tablet, and mobile customer journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
