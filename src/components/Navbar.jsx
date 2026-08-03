import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? "bg-cyan text-navy" : "text-white/85 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <nav className="container-pad flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm">
            <img src="/images/ilbax-logo.jpg" alt="ILBAX Digital Solution logo" className="h-full w-full object-contain" />
          </span>
          <span className="hidden min-[380px]:block">
            <span className="block text-base font-black leading-tight text-white sm:text-lg">ILBAX</span>
            <span className="block text-xs font-semibold text-cyan">Digital Solution</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Link to="/request-quote" className="ml-2 rounded-full bg-cyan px-5 py-2.5 text-sm font-black text-navy transition hover:bg-white">
            Hel Qiimeyn
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white"
            aria-label="Fur menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/request-quote"
              className="mt-2 rounded-full bg-cyan px-5 py-3 text-center text-sm font-black text-navy"
              onClick={() => setOpen(false)}
            >
              Hel Qiimeyn Bilaash ah
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
