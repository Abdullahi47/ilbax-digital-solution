export default function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}
