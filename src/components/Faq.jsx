import { faqs } from "../data/site.js";

export default function Faq() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <summary className="cursor-pointer list-none text-base font-black text-navy">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-light text-cyan transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
