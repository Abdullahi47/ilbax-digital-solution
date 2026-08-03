import { stats } from "../data/site.js";

export default function StatsStrip() {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-3xl bg-light p-5 text-center">
          <p className="text-3xl font-black text-cyan">{item.value}</p>
          <p className="mt-2 text-sm font-bold text-navy">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
