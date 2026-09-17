import { motion } from "framer-motion";
import { FaCheckCircle, FaLightbulb, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import ImageFeature from "../components/ImageFeature.jsx";
import Seo from "../components/Seo.jsx";
import { pages } from "../data/seo.js";

export default function About() {
  return (
    <>
      <Seo {...pages.about} />
      <section className="section-pad bg-light">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow">About ILBAX</p>
            <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Xalal dhijitaal ah oo ganacsigaaga u diyaariya korriin.</h1>
            <p className="mt-5 leading-8 text-slate-600">
              ILBAX Digital Solution waxay ku taallaa Mogadishu, Somalia. Waxaan bixinnaa adeegyo digital agency ah oo isku dara website development, graphic design, branding, digital marketing iyo IT support.
            </p>
          </motion.div>
          <div>
            <ImageFeature
              src="/images/ilbax-hero.png"
              alt="Modern digital agency workspace with website and brand design visuals"
              badge="Mogadishu, Somalia"
            />
            <div className="mt-5 rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3 rounded-2xl bg-light p-4 font-bold text-navy">
                <FaMapMarkerAlt className="text-cyan" /> Mogadishu, Somalia
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  "Waxaan dhageysannaa baahidaada ka hor inta aanan xalka dhisin.",
                  "Waxaan diiradda saarnaa muuqaal xirfad leh iyo isticmaal fudud.",
                  "Waxaan bixinnaa talo joogto ah si mashruucu u noqdo mid guuleysta.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 leading-7 text-slate-600">
                    <FaCheckCircle className="mt-1 shrink-0 text-cyan" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-pad">
          <StatsStrip />
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-pad grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: FaLightbulb,
              title: "Himiladeenna",
              text: "In ganacsiyada Soomaaliyeed helaan xalal dhijitaal ah oo qurux badan, la fahmi karo, lana isticmaali karo.",
            },
            {
              icon: FaUsers,
              title: "Qaabkeena",
              text: "Waxaan shaqada ku wadnaa wada hadal, qorshe cad, naqshad xirfad leh iyo tijaabo ka hor inta aan la dhammeyn.",
            },
            {
              icon: FaCheckCircle,
              title: "Ballanqaadkeena",
              text: "Tayo, waqtiga oo la ilaaliyo, iyo natiijo ganacsigaaga u keenta muuqaal kalsooni leh.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl bg-white/8 p-6">
                <Icon className="text-3xl text-cyan" />
                <h2 className="mt-5 text-xl font-black">{item.title}</h2>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-light">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Waxaan Aaminsanahay"
            title="Website ama design fiican waa inuu ganacsi kuu shaqeeyaa, ma aha inuu qurux keliya yeesho."
            text="Sidaas darteed ILBAX waxay mar walba isku darsataa copy cad, layout mobile-first ah, brand colors, user journey iyo WhatsApp conversion fudud."
            centered
          />
        </div>
      </section>
    </>
  );
}
