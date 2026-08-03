import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../utils/whatsapp.js";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Kala xiriir WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-soft transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
    >
      <FaWhatsapp />
    </a>
  );
}
