import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/content";

export default function Services() {
  return (
    <section id="services" className="theme-section pt-8 pb-4 md:pt-10 md:pb-6">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Insurance growth services designed to attract, convert, and support customers."
          text="Each service card gives a quick preview in normal view and a fuller explanation on hover, so visitors can understand both the offer and the business value."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className={`group reveal delay-${(index % 4) + 1}`}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827] shadow-[0_20px_60px_rgba(2,6,23,0.28)] transition duration-500 hover:border-cyan-400/60">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70 group-hover:blur-[3px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent transition duration-500 group-hover:via-[#0f172a]/58" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 transition duration-500 group-hover:opacity-0">
                  <div>
                    <p className="inline-flex rounded-full bg-white/16 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {service.tag}
                    </p>
                  </div>

                  <div>
                    <h3 className="max-w-xs text-2xl font-black leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-base leading-7 text-slate-100">
                      {service.preview}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.72)_36%,rgba(2,6,23,0.98)_100%)] p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-between translate-y-4 transition duration-500 group-hover:translate-y-0">
                    <div>
                      <p className="inline-flex rounded-full bg-cyan-400/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-sm">
                        {service.tag}
                      </p>
                    </div>

                    <div>
                      <h3 className="max-w-xs text-2xl font-black leading-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-100">
                        {service.desc}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-cyan-200">
                        {service.companies}
                      </p>
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
