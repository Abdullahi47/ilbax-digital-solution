import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { buildContactMessage, openWhatsApp } from "../utils/whatsapp.js";
import ImageFeature from "../components/ImageFeature.jsx";
import Seo from "../components/Seo.jsx";
import { pages } from "../data/seo.js";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) nextErrors[key] = "Goobtan waa loo baahan yahay.";
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    openWhatsApp(buildContactMessage(form));
  }

  return (
    <section className="section-pad bg-light">
      <Seo {...pages.contact} />
      <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Nala Xiriir</p>
          <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Aan ka wada hadalno mashruucaaga.</h1>
          <p className="mt-5 leading-8 text-slate-600">
            Haddii aad leedahay su'aal, mashruuc cusub ama aad rabto talo degdeg ah, fariintaada si toos ah ayay WhatsApp noogu furmeysaa.
          </p>
          <div className="mt-8">
            <ImageFeature
              src="/images/ilbax-contact.png"
              alt="Contact workflow with smartphone messaging and project planning"
              badge="Nala soo xiriir si fudud"
            />
          </div>
          <div className="mt-8 grid gap-4">
            <p className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><FaMapMarkerAlt className="text-cyan" /> Mogadishu, Somalia</p>
            <p className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><FaPhoneAlt className="text-cyan" /> 615766571 / 615776076</p>
            <p className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><FaWhatsapp className="text-cyan" /> 252615766571</p>
            <p className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm break-all"><FaEnvelope className="text-cyan" /> ilbaxdigitalsolution@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-5 shadow-soft sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["name", "Magaca"],
              ["email", "Email"],
              ["phone", "Telefoonka"],
              ["subject", "Mawduuca"],
            ].map(([name, label]) => (
              <div key={name}>
                <label htmlFor={name} className="label">{label}</label>
                <input id={name} name={name} className="field" value={form[name]} onChange={updateField} />
                {errors[name] && <p className="mt-2 text-sm text-red-600">{errors[name]}</p>}
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="label">Fariinta</label>
              <textarea id="message" name="message" rows="6" className="field resize-y" value={form.message} onChange={updateField} />
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-black text-white transition hover:bg-cyan hover:text-navy sm:w-auto">
            <FaWhatsapp /> WhatsApp ku dir
          </button>
        </form>
      </div>
      <div className="container-pad mt-12">
        <div className="rounded-[2rem] bg-navy p-7 text-white sm:p-10">
          <p className="eyebrow">ILBAX Digital Solution</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
            Xalal dhijitaal ah oo fududeeya in macmiilku kula soo xiriiro.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/72">
            Website-kan waxaa loo dhisay si frontend-only ah, responsive ah, kana shaqeeya mobile-first iyo WhatsApp conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
