import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaPhoneAlt, FaQuoteLeft, FaRocket } from "react-icons/fa";
import { services } from "../data/services.js";
import ServiceCard from "../components/ServiceCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import Faq from "../components/Faq.jsx";
import ImageFeature from "../components/ImageFeature.jsx";
import { processSteps, projects, testimonials } from "../data/site.js";
import Seo from "../components/Seo.jsx";
import { organizationJsonLd, pages } from "../data/seo.js";

const reasons = [
  "Koox fahamsan suuqa Soomaaliya iyo baahida ganacsiyada casriga ah.",
  "Naqshad nadiif ah, fariin cad iyo xal la isticmaali karo.",
  "Xiriir joogto ah, talo xirfad leh iyo shaqo waqti lagu qabto.",
];

export default function Home() {
  return (
    <>
      <Seo {...pages.home} jsonLd={organizationJsonLd} />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,185,232,0.18),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.14),transparent_28%)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="container-pad relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">ILBAX Digital Solution</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Website iyo Branding Mogadishu — Xalal Dhamaystiran oo Dhijitaal ah
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Waxaan ganacsiyada, hay'adaha iyo shaqsiyaadka ka caawinnaa inay ku kobcaan adeegyo dijitaal oo casri ah, tayo sare leh, isla markaana la jaanqaadaya baahidooda.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-quote" className="btn-primary">Hel Qiimeyn Bilaash ah <FaArrowRight /></Link>
              <Link to="/services" className="btn-secondary">Arag Adeegyadayada</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/75">
              {["Website", "Branding", "Marketing", "IT Support"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-2">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <ImageFeature
              src="/images/ilbax-hero.png"
              alt="Digital agency workspace with website mockups and brand design materials"
              badge="Website, branding iyo digital growth hal meel"
              className="border border-white/15"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-3xl bg-white p-4 text-dark shadow-soft sm:left-auto sm:w-72">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/15 text-cyan">
                  <FaRocket />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Kor U Qaad</p>
                  <p className="font-black text-navy">Ganacsigaaga!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-10 bg-light pb-10">
        <div className="container-pad relative z-10">
          <StatsStrip />
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Adeegyada La Xusho"
            title="Wax kasta oo ganacsigaagu uga baahan yahay dhijitaal"
            text="Waxaan isku xirnaa muuqaal qurux badan, fariin cad iyo farsamo shaqeyneysa si ganacsigaagu online ugu muuqdo si xirfad leh."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImageFeature
            src="/images/ilbax-services.png"
            alt="Digital services panels for website, database, design, marketing and IT support"
            badge="Adeegyo isku xiran oo ganacsigaaga dhisa"
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Nagu Saabsan"
              title="Waxaan dhisnaa xalal muuqda, shaqeeya, lana kori kara ganacsigaaga."
            />
            <p className="mt-5 text-base leading-8 text-slate-600">
              ILBAX Digital Solution waa adeeg dijitaal oo ku yaal Mogadishu, Somalia. Waxaan isku darnaa naqshad qurux badan, farsamo sax ah iyo faham ganacsi si aan kuu siino website, brand, profile, design iyo taageero IT oo heer sare ah.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Shaqooyin Tusaale ah"
            title="Xalal loo qaabeeyay ganacsiyo dhab ah"
            text="Tusaalooyinkan waxay muujinayaan nooca mashruucyada ILBAX ka caawiso macaamiisha: muuqaal, nidaam iyo fariin ganacsi oo cad."
            centered
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
              >
                <div className="h-36 bg-navy p-5 text-white">
                  <p className="text-sm font-bold text-cyan">{project.category}</p>
                  <h3 className="mt-4 text-2xl font-black">{project.title}</h3>
                </div>
                <p className="p-6 leading-7 text-slate-600">{project.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Maxaa Naloo Doortaa</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Shaqo xirfad leh, xiriir cad, iyo natiijo la arki karo.</h2>
          </div>
          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-4 rounded-3xl bg-white/8 p-5">
                <FaCheckCircle className="mt-1 shrink-0 text-cyan" />
                <p className="leading-7 text-white/78">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Habka Shaqada</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black text-navy sm:text-4xl">Qorshe fudud oo mashruucaaga si nidaamsan u gaarsiiya dhammaad.</h2>
            </div>
            <ImageFeature
              src="/images/ilbax-contact.png"
              alt="Smartphone messaging and digital project workflow"
              badge="Fariin degdeg ah, qorshe cad, natiijo la wareejiyo"
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cyan font-black text-navy">{index + 1}</div>
                <h3 className="mt-4 font-black text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Kalsooni"
            title="Waxa macaamiishu ka helaan ILBAX"
            text="Waxaan xoogga saarnaa inaan mashruuc kasta u dhisno si macmiilku u dareemo kala dambeyn, qurux iyo natiijo."
            centered
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <FaQuoteLeft className="text-2xl text-cyan" />
                <p className="mt-4 leading-7 text-slate-600">"{item.quote}"</p>
                <div className="mt-6">
                  <p className="font-black text-navy">{item.name}</p>
                  <p className="text-sm font-bold text-cyan">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Su'aalaha ugu badan"
            text="Haddii aad rabto faahfaahin dheeraad ah, form-ka quote ama WhatsApp-ka tooska ah ayaa kuu furan."
          />
          <Faq />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-pad">
          <div className="rounded-[2rem] bg-navy p-7 text-white shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold text-cyan">Kor U Qaad Ganacsigaaga!</p>
              <h2 className="mt-2 text-3xl font-black">Aan ka bilowno fikraddaada maanta.</h2>
            </div>
            <Link to="/request-quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-black text-navy transition hover:bg-white lg:mt-0">
              Codso Qiimeyn <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm md:col-span-2">
            <p className="eyebrow">Xiriir Degdeg ah</p>
            <h2 className="mt-3 text-3xl font-black text-navy">Mogadishu, Somalia</h2>
            <p className="mt-3 leading-7 text-slate-600">Waxaan diyaar u nahay mashruucaaga xiga, laga bilaabo website ilaa brand buuxa.</p>
          </div>
          <a href="tel:615766571" className="flex items-center gap-4 rounded-3xl bg-cyan p-6 font-black text-navy shadow-sm">
            <FaPhoneAlt className="text-2xl" /> 615766571
          </a>
        </div>
      </section>
    </>
  );
}
