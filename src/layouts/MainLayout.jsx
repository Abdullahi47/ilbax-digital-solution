import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-dark transition-colors duration-300 dark:bg-[#06111f] dark:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
