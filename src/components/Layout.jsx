import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleRtl = () => {
    const newRtl = !isRtl;
    setIsRtl(newRtl);
    document.documentElement.setAttribute("dir", newRtl ? "rtl" : "ltr");
  };

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    // Wait a tick to ensure DOM content is mounted after route/hash change.
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-zinc-900 dark:text-white font-sans selection:bg-lime selection:text-black flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isRtl={isRtl}
        toggleRtl={toggleRtl}
      />
    </div>
  );
};

export default Layout;
