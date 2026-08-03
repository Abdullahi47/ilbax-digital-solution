import { motion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan/12 text-2xl text-cyan transition group-hover:bg-cyan group-hover:text-navy">
        <Icon />
      </div>
      <h3 className="mt-5 text-lg font-black text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
    </motion.article>
  );
}
