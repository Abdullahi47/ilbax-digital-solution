import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";
import SectionHeader from "../components/SectionHeader.jsx";
import Faq from "../components/Faq.jsx";
import ImageFeature from "../components/ImageFeature.jsx";
import Seo from "../components/Seo.jsx";
import { pages } from "../data/seo.js";

export default function Services() {
  return (
    <>
      <Seo {...pages.services} />
      <section className="section-pad bg-light">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Adeegyada</p>
            <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Adeegyo dhijitaal ah oo dhammaystiran</h1>
            <p className="mt-5 leading-8 text-slate-600">
              Ka dooro adeegyada ugu muhiimsan ee kaa caawinaya inaad online-ka uga muuqato si xirfad leh, macaamiil badan gaarto, shaqadana u nidaamiso.
            </p>
          </div>
          <div className="mt-10">
            <ImageFeature
              src="/images/ilbax-services.png"
              alt="Premium visual cards showing website development, database, design, branding, marketing and IT support"
              badge="Website, Database, Design, Branding, Marketing iyo IT Support"
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/request-quote" className="btn-primary bg-navy text-white hover:bg-cyan hover:text-navy">
              Codso adeeg
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Service Packages"
            title="Waxaan adeeg kasta u dhisnaa qaab ku habboon yoolkaaga"
            text="Haddii aad rabto website cusub, brand identity, marketing campaign ama IT support, waxaan marka hore fahannaa natiijada aad rabto kadibna waxaan kuu diyaarinnaa qorshe cad."
          />
          <div className="grid gap-4">
            {[
              "La-talin bilaash ah oo lagu fahmo baahida mashruuca.",
              "Qorshe adeeg oo cad: waxa la sameynayo, waqtiga iyo natiijada.",
              "Design responsive ah oo ku shaqeynaya mobile, tablet iyo desktop.",
              "WhatsApp conversion si macmiilku si fudud kuula soo xiriiro.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-light p-5 font-bold text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Waxyaabaha macaamiishu inta badan weydiiyaan"
            text="Su'aalahan waxay kaa caawinayaan inaad si dhakhso ah u fahamto sida adeegyada ILBAX u shaqeeyaan."
          />
          <Faq />
        </div>
      </section>
    </>
  );
}
