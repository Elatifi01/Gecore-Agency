import { Link } from "react-router-dom";
import logo from "../assets/img/gecore-logo.webp";

const Footer = ({ darkMode, toggleDarkMode, isRtl, toggleRtl }) => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-16">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <Link
              to="/"
              className="flex items-center justify-center md:justify-start mb-6"
            >
              <img
                src={logo}
                alt="GECORE 360 logo"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </Link>
            <p className="max-w-sm md:max-w-sm mx-auto md:mx-0 text-zinc-500 dark:text-zinc-400">
              Un studio d'ingénierie web et éditeur de solutions SaaS, axé sur
              la performance technique, l'innovation et la création de produits
              scalables.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">
              Explorer
            </h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 text-sm">
              <li>
                <Link to="/#home" className="hover:text-lime transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-lime transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-lime transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-lime transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">
              Réseaux
            </h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/gecore360/"
                  className="hover:text-lime transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61578552575732&rdid=DiIaOS97sEXeo7oX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B98ZqNUF7%2F%3Fref%3Dshare#"
                  className="hover:text-lime transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-zinc-400">
          <p>&copy; 2026 GECORE 360° Digital Agency.</p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-white dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition flex items-center gap-2"
            >
              <svg
                className={`w-4 h-4 ${darkMode ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                className={`w-4 h-4 ${darkMode ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>

            {/* <button
              onClick={toggleRtl}
              className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-white dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                ></path>
              </svg>
              <span>{isRtl ? "Français" : "Arabe"}</span>
            </button> */}

            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Confidentialité
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
