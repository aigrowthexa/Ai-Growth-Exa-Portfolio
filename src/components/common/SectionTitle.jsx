export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-5 max-w-3xl reveal">
      <span className="gold-line mb-3"></span>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-xl font-black leading-[1.12] md:text-[1.8rem]">{title}</h2>
      {text && <p className="mt-3 text-base leading-6 text-slate-300 md:text-[17px]">{text}</p>}
    </div>
  );
}
