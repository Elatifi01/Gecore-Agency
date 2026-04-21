import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/gecore-logo.webp";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b py-4 ${scrolled ? "bg-white/90 dark:bg-dark/90 backdrop-blur-md border-zinc-200 dark:border-zinc-800 shadow-sm" : "border-transparent bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
          <Link
            to="/"
            className="flex items-center group absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img
              src={logo}
              alt="GECORE 360 logo"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider relative">
            <Link
              to="/#home"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              Accueil
            </Link>

            <Link
              to="/#about"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              À propos
            </Link>
            <Link
              to="/#services"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              Services
            </Link>
            <Link
              to="/#teams"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              Teams
            </Link>
            <Link
              to="/#Temoignages"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              Témoignages
            </Link>
            <Link
              to="/#contact"
              className="text-zinc-600 hover:text-lime dark:text-zinc-300 dark:hover:text-lime transition"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <Link
              to="/#contact"
              className="hidden md:block bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Parlons-en
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-zinc-900 dark:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-dark text-white flex-col justify-center items-center p-6 sm:p-8 transition-all duration-300 ${mobileMenuOpen ? "flex opacity-100 scale-100" : "hidden opacity-0 scale-95 pointer-events-none"}`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 rtl:right-auto rtl:left-8 p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <nav className="flex flex-col gap-6 sm:gap-8 text-center text-3xl sm:text-4xl font-bold tracking-tight w-full max-w-md overflow-y-auto max-h-[80vh] no-scrollbar">
          <Link
            to="/#home"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            Accueil
          </Link>

          <Link
            to="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            À propos
          </Link>
          <Link
            to="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            Services
          </Link>
          <Link
            to="/#teams"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            Teams
          </Link>
          <Link
            to="/#Temoignages"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            Témoignages
          </Link>
          <Link
            to="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-lime transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
