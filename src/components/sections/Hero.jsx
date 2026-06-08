import { useEffect, useState } from "react";
import { socialLinks } from "../../data/content";

function SocialIcon({ name }) {
  const iconClass = "h-5 w-5 fill-current";

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.05 0 4.8 2.5 4.8 5.76V21h-4v-5.87c0-1.4-.03-3.2-2.02-3.2-2.02 0-2.33 1.52-2.33 3.1V21h-4Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.5A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 17 4.5Zm10.75 1.88a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.5A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5Z" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.08c0-.9.26-1.5 1.63-1.5H16.8V4.9c-.3-.05-1.3-.13-2.47-.13-2.45 0-4.13 1.47-4.13 4.18V11H7.5v3h2.7v8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path d="M12 2 3.5 6v6c0 5.25 3.63 10.16 8.5 11 4.87-.84 8.5-5.75 8.5-11V6Zm5.75 9.25h-4.5v4.5h-2.5v-4.5h-4.5v-2.5h4.5v-4.5h2.5v4.5h4.5Z" />
    </svg>
  );
}

export default function Hero() {
  const featuredServices = [
    "AI-Driven Growth, IT & Marketing Agency",
    "LLM-Powered Marketing Automation",
    "Performance-First Ad Management",
    "Data-Driven Brand Identities",
    "Predictive Analytics & Insights",
    "Intelligent Growth Infrastructure",
  ];
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setServiceIndex((current) => (current + 1) % featuredServices.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [featuredServices.length]);

  return (
    <section id="home" className="relative overflow-hidden pt-24 lg:min-h-[calc(100svh-16px)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_20%_75%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#111827_0%,#0f172a_100%)]" />
      <div className="container relative grid min-h-[calc(100svh-96px)] items-center gap-10 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-6">
        <div className="reveal max-w-2xl text-left">
          <p className="text-xl font-bold text-cyan-400 md:text-2xl">Hello, I'm</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.95] md:text-6xl lg:text-[5.1rem]">
            AI Growth Exa
          </h1>
          <p className="mt-6 text-2xl font-bold text-cyan-300 md:text-4xl">
            {featuredServices[serviceIndex]}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-200 md:text-lg md:whitespace-nowrap">
            We turn data, AI, and strategy into digital growth that performs.
          </p>
          <p className="max-w-3xl text-base leading-7 text-zinc-200 md:text-lg md:whitespace-nowrap">
            Helping your brand stand out, scale faster, and lead with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="rounded-full bg-cyan-400 px-8 py-4 text-base font-bold text-[#0f172a] transition hover:bg-cyan-300">
              View Services
            </a>
            <a href="#contact" className="rounded-full border border-cyan-400 px-8 py-4 text-base font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-[#0f172a]">
              Contact Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="text-zinc-200 transition hover:text-cyan-300"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal delay-2 lg:justify-self-end">
          <div className="relative mx-auto w-fit">
            <div className="mx-auto h-[320px] w-[260px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.18)] sm:h-[420px] sm:w-[320px] lg:h-[540px] lg:w-[400px]">
              <img
                className="h-full w-full object-cover object-top"
                src="/founder.jpeg"
                alt="AI Growth Exa founder portrait"
              />
            </div>
            <div className="absolute bottom-3 right-3 sm:right-4 lg:bottom-4 lg:right-4">
              <div className="flex items-center gap-3 text-cyan-300">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M7 7V6a5 5 0 0 1 10 0v1h1.5A2.5 2.5 0 0 1 21 9.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-9A2.5 2.5 0 0 1 5.5 7Zm2 0h6V6a3 3 0 1 0-6 0Zm-3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H10v-5h4v5h4.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5Z" />
                </svg>
                <p className="text-lg font-semibold leading-none">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
