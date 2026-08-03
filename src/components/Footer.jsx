import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-3xl bg-white p-2">
              <img src="/images/ilbax-logo.jpg" alt="ILBAX Digital Solution logo" className="h-full w-full object-contain" />
            </span>
            <h2 className="text-2xl font-black">ILBAX Digital Solution</h2>
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
            Xalal Dhamaystiran oo Dhijitaal ah. Waxaan kaa caawinnaa website, design, branding, marketing iyo IT support oo tayo leh.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-cyan">Bogagga</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <Link to="/about" className="hover:text-cyan">About</Link>
            <Link to="/services" className="hover:text-cyan">Services</Link>
            <Link to="/request-quote" className="hover:text-cyan">Request Quote</Link>
            <Link to="/contact" className="hover:text-cyan">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-cyan">Xiriir</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-cyan" /> Mogadishu, Somalia</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-cyan" /> 615766571 / 615776076</p>
            <p className="flex items-center gap-3"><FaWhatsapp className="text-cyan" /> 252615766571</p>
            <p className="flex items-center gap-3 break-all"><FaEnvelope className="text-cyan" /> ilbaxdigitalsolution@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} ILBAX Digital Solution. All rights reserved.
      </div>
    </footer>
  );
}
