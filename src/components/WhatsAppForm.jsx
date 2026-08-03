import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "../data/services.js";
import { buildServiceMessage, openWhatsApp } from "../utils/whatsapp.js";

const initialState = {
  name: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  description: "",
};

export default function WhatsAppForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Magaca waa loo baahan yahay.";
    if (!form.phone.trim()) nextErrors.phone = "Telefoonka waa loo baahan yahay.";
    if (!form.service.trim()) nextErrors.service = "Adeegga waa loo baahan yahay.";
    if (!form.description.trim()) nextErrors.description = "Faahfaahinta mashruuca waa loo baahan yahay.";
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    openWhatsApp(buildServiceMessage(form));
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-5 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Magaca</label>
          <input id="name" name="name" className="field" value={form.name} onChange={updateField} />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="label">Telefoonka</label>
          <input id="phone" name="phone" className="field" value={form.phone} onChange={updateField} />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="company" className="label">Shirkadda, optional</label>
          <input id="company" name="company" className="field" value={form.company} onChange={updateField} />
        </div>
        <div>
          <label htmlFor="service" className="label">Adeegga</label>
          <select id="service" name="service" className="field" value={form.service} onChange={updateField}>
            <option value="">Dooro adeeg</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>{service.title}</option>
            ))}
          </select>
          {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className="label">Miisaaniyadda, optional</label>
          <input id="budget" name="budget" className="field" value={form.budget} onChange={updateField} placeholder="$300 - $1,000" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="label">Faahfaahinta mashruuca</label>
          <textarea id="description" name="description" rows="5" className="field resize-y" value={form.description} onChange={updateField} />
          {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
        </div>
      </div>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-black text-white transition hover:bg-cyan hover:text-navy sm:w-auto">
        <FaWhatsapp /> Ku dir WhatsApp
      </button>
    </form>
  );
}
