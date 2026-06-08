import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="theme-section py-10 md:py-12">
      <div className="container grid gap-7 lg:grid-cols-[.88fr_1.12fr] lg:gap-8">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let's build your premium insurance digital presence"
            text="Fill the form and connect with AI Growth Exa for insurance websites, landing pages, lead systems, CRM interfaces and portfolio development."
          />
          <div className="reveal delay-2 space-y-2 text-slate-300">
            <p>Email: aige@aigrowthexa.com</p>
            <p>Phone: +91 8979779337</p>
            <p>Location: India</p>
          </div>
        </div>

        <form className="theme-panel reveal delay-2 rounded-[2.5rem] p-6 md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="theme-input rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-cyan-400" placeholder="Your Name" />
            <input className="theme-input rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-cyan-400" placeholder="Email Address" />
            <input className="theme-input rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-cyan-400" placeholder="Phone Number" />
            <select className="theme-input rounded-2xl px-5 py-3.5 text-slate-300 focus:border-cyan-400">
              <option>Choose Service</option>
              <option>Insurance Website</option>
              <option>Lead Generation System</option>
              <option>CRM / Dashboard</option>
              <option>Portfolio Website</option>
            </select>
          </div>
          <textarea rows="5" className="theme-input mt-4 w-full rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400" placeholder="Tell us about your project"></textarea>
          <button type="button" className="mt-5 w-full rounded-full bg-cyan-400 px-8 py-3.5 font-black text-[#0f172a] transition hover:bg-cyan-300">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}
