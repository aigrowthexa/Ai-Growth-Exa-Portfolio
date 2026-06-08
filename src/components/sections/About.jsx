import SectionTitle from "../common/SectionTitle";

const strengths = [
  {
    title: "Insurance Lead Generation Systems",
    text: "Targeted enquiry journeys, campaign funnels, and conversion-focused touchpoints built to capture serious insurance prospects.",
  },
  {
    title: "Policy Marketing & Growth Strategy",
    text: "SEO, paid campaigns, and digital positioning designed to increase visibility for health, life, motor, and travel insurance services.",
  },
  {
    title: "CRM, Service Flow & Renewal Support",
    text: "Customer follow-up systems, service workflows, and renewal-friendly digital experiences that support long-term insurance growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="theme-section py-10 md:py-12">
      <div className="container grid items-start gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
        <div className="reveal">
          <SectionTitle
            eyebrow="About AI Growth Exa"
            title="A trusted digital growth partner for modern insurance brands."
            text="AI Growth Exa helps insurance businesses build strong digital presence, generate quality leads, and present their services with the trust, clarity, and professionalism that customers expect."
          />

          <div className="space-y-3 text-sm leading-6 text-slate-300 md:text-[14px]">
            <p>
              We create insurance-focused websites, landing pages, lead generation systems, and customer enquiry workflows that help policy services look credible and convert better. Our approach is built around how real users search, compare, understand, and enquire about insurance products.
            </p>
            <p>
              From health insurance and term plans to car, bike, and travel insurance, we build digital experiences that simplify complex offerings, improve response quality, and support stronger sales and service operations for insurance brands.
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            {strengths.map((item) => (
              <div key={item.title} className="border-b border-white/10 pb-3">
                <h3 className="text-[17px] font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-300 md:text-[14px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal delay-1 pt-6 md:pt-8 lg:justify-self-end lg:pt-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(2,6,23,0.28)]">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85"
              alt="AI Growth Exa strategy and growth planning team"
              className="h-[280px] w-full object-cover md:h-[360px] lg:h-[430px]"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Focus</p>
              <p className="mt-1.5 text-sm leading-5 text-slate-200">Insurance lead generation, policy marketing, and conversion-first customer journeys.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Delivery</p>
              <p className="mt-1.5 text-sm leading-5 text-slate-200">Policy service websites, CRM workflows, automation systems, and scalable digital support flows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
