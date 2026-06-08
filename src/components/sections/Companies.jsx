import SectionTitle from "../common/SectionTitle";
import { companies } from "../../data/content";

export default function Companies() {
  return (
    <section id="companies" className="theme-section py-10 md:py-12">
      <div className="container">
        <SectionTitle
          eyebrow="Companies & Ecosystems"
          title="Insurance brands where we provided digital service work"
          text="Each company card clearly explains the insurance service workflow, UI, CRM, lead generation or customer journey work provided by AI Growth Exa."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => (
            <article key={company.name} className={`group reveal delay-${(index % 4) + 1}`}>
              <div className="theme-panel relative overflow-hidden rounded-[2.25rem] transition duration-500 hover:border-cyan-400/60">
                <img
                  src={company.img}
                  alt={company.name}
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70 group-hover:blur-[3px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/32 to-transparent transition duration-500 group-hover:via-[#0f172a]/50" />

                <div className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:translate-y-2 group-hover:opacity-0">
                  <p className="inline-flex rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    Provided Work
                  </p>
                  <h3 className="mt-3 max-w-md text-2xl font-black leading-tight text-white">{company.name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-100">{company.highlight}</p>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.24)_0%,rgba(2,6,23,0.84)_38%,rgba(2,6,23,0.98)_100%)] p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="flex h-full max-w-none flex-col justify-between translate-y-4 transition duration-500 group-hover:translate-y-0">
                    <p className="inline-flex rounded-full bg-cyan-400/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-sm">
                      Full Overview
                    </p>
                    <div className="mt-auto">
                      <h3 className="text-2xl font-black leading-tight text-white">{company.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-100">{company.provided}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
