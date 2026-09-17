import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center bg-light px-4 py-20 text-center">
      <Seo title="Boggan lama helin" description="Bogga aad raadineyso ma jiro." path="/" noindex />
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Boggan lama helin</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
          Bogga aad raadineyso ma jiro ama cinwaankiisa waa la beddelay.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 font-black text-white transition hover:bg-cyan hover:text-navy">
          Ku noqo Home
        </Link>
      </div>
    </section>
  );
}
