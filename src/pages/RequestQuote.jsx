import WhatsAppForm from "../components/WhatsAppForm.jsx";
import { FaClock, FaLock, FaWhatsapp } from "react-icons/fa";
import ImageFeature from "../components/ImageFeature.jsx";

export default function RequestQuote() {
  return (
    <section className="section-pad bg-light">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">Hel Qiimeyn Bilaash ah</p>
          <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Noo sheeg adeegga aad rabto.</h1>
          <p className="mt-5 leading-8 text-slate-600">
            Form-kan wax xog ah ma kaydiyo mana dirayo API. Marka aad gudbiso, fariinta si toos ah ayaa WhatsApp loogu furayaa ILBAX Digital Solution.
          </p>
          <div className="mt-8">
            <ImageFeature
              src="/images/ilbax-contact.png"
              alt="Smartphone messaging workflow for requesting a project quote"
              badge="Quote-kaaga WhatsApp ayuu ku furmayaa"
            />
          </div>
          <div className="mt-8 grid gap-4">
            {[
              { icon: FaWhatsapp, title: "WhatsApp Direct", text: "Fariintaada waxay si toos ah ugu furmeysaa lambarka ILBAX." },
              { icon: FaClock, title: "Jawaab Degdeg ah", text: "Waxaan kuu soo celin karnaa faahfaahinta, waqtiga iyo qiimaha." },
              { icon: FaLock, title: "No Backend", text: "Xog lama kaydiyo, lama diro server, wax API ahna lama isticmaalo." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan/15 text-cyan">
                    <Icon />
                  </div>
                  <div>
                    <h2 className="font-black text-navy">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <WhatsAppForm />
      </div>
    </section>
  );
}
