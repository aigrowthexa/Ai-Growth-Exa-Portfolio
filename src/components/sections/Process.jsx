import SectionTitle from "../common/SectionTitle";

const steps = [
  ["01", "Research", "We understand insurance category, target customer, lead goal and business flow."],
  ["02", "Design", "We create premium UI sections, policy content layout and responsive user journey."],
  ["03", "Build", "We develop frontend pages, forms, CTA sections, dashboard-style screens and integrations."],
  ["04", "Optimize", "We improve speed, mobile design, conversion flow and professional presentation."],
];

export default function Process() {
  return (
    <section id="process" className="theme-section pt-4 pb-8 md:pt-5 md:pb-10">
      <div className="container">
        <div className="mb-3">
          <SectionTitle eyebrow="Our Working Process" title="Simple process, premium result" text="A focused process helps insurance websites look professional and generate better enquiries." />
        </div>
        <div className="process-flow grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map(([no, title, desc]) => (
            <article key={title} className="process-step reveal py-2">
              <div className="process-step-copy">
                <p className="process-step-number text-5xl font-black text-cyan-400/70">{no}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 max-w-sm leading-7 text-slate-300">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
