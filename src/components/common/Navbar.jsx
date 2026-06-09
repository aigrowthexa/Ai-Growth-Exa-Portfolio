import { useState } from "react";

const navItems = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#companies", "Companies"],
  ["#services", "Services"],
  ["#process", "Process"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#111827]/90 backdrop-blur-xl">
      <div className="container flex h-24 items-center justify-between md:h-28">
        <a href="#home" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 max-w-none object-contain sm:w-44 md:w-52 lg:w-56"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-[#111827] md:inline-flex">
          Contact
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-400 hover:text-cyan-300 lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="container flex flex-col gap-4 py-5 text-sm text-zinc-300">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex w-fit rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-[#111827]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
