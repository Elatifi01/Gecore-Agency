import { useState } from "react";
import { useSEO } from "../hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact | GECORE 360°",
    description:
      "Prêt à bâtir votre infrastructure digitale ? Contactez GECORE 360° dès aujourd'hui. Planifiez un appel stratégique pour discuter de vos objectifs SaaS ou de vos projets sur-mesure.",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [isTouched, setIsTouched] = useState(false);

  const isValidEmail = (email) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTouched(true);

    const isValid =
      formData.name.length > 2 &&
      isValidEmail(formData.email) &&
      formData.service !== "" &&
      formData.message.length > 10;

    if (!isValid) {
      return;
    }

    try {
      setFormStatus("submitting");

      const response = await fetch("https://formspree.io/f/mzdyalvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setIsTouched(false);
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Contact submit error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto flex items-center relative">
      {/* Success Toast */}
      <div
        className={`fixed top-20 right-6 bg-lime text-black px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 flex items-center gap-3 ${formStatus === "success" ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
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
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span className="font-bold">Message envoyé avec succès !</span>
      </div>

      <div
        className={`fixed bottom-6 right-6 bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 flex items-center gap-3 ${formStatus === "error" ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}
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
        <span className="font-bold">Erreur d'envoi, réessayez.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
        <div>
          <span className="text-lime font-bold uppercase tracking-widest text-xs mb-4 block">
            Entrons en contact
          </span>
          <h1 className="text-6xl md:text-7xl font-black leading-none mb-8 text-zinc-900 dark:text-white">
            <span>COMMENÇONS UN</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #3585b6, #6aba41)",
              }}
            >
              PROJET.
            </span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-md">
            Nous sommes sélectifs sur les projets que nous prenons. Parlez-nous
            de vos objectifs, de votre calendrier et de votre budget, et voyons
            si nous sommes compatibles.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Écrivez-nous
              </p>
              <a
                href="mailto:gecore360@gmail.com"
                className="text-2xl font-bold hover:text-lime transition-colors text-zinc-900 dark:text-white"
              >
                gecore360@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Venez nous voir
              </p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white">
                Casablanca,
                <br />
                Maroc
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Suivez-nous
              </p>
              <div className="flex gap-6 text-lg font-bold">
                <a
                  href="https://www.instagram.com/gecore360/"
                  className="hover:text-lime transition text-zinc-900 dark:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578552575732&rdid=DiIaOS97sEXeo7oX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B98ZqNUF7%2F%3Fref%3Dshare#"
                  className="hover:text-lime transition text-zinc-900 dark:text-white"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-lime transition text-zinc-900 dark:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-10 md:p-14 rounded-[3rem] border border-zinc-200 dark:border-zinc-800">
          <form
            onSubmit={handleSubmit}
            className={`space-y-10 ${isTouched ? "was-validated" : ""}`}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500 group-focus-within:text-lime transition-colors">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className={`nexus-input ${isTouched && formData.name.length < 2 ? "invalid" : ""}`}
                  required
                />
                {isTouched && formData.name.length < 2 && (
                  <span className="text-red-500 text-xs font-bold mt-1 block">
                    Le nom est requis
                  </span>
                )}
              </div>
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500 group-focus-within:text-lime transition-colors">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Exemple@domaine.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`nexus-input ${isTouched && !isValidEmail(formData.email) ? "invalid" : ""}`}
                  required
                />
                {isTouched && !isValidEmail(formData.email) && (
                  <span className="text-red-500 text-xs font-bold mt-1 block">
                    Une adresse e-mail valide est requise
                  </span>
                )}
              </div>
            </div>

            <div className="relative group">
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500 group-focus-within:text-lime transition-colors">
                Prestation
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`nexus-input bg-transparent cursor-pointer ${isTouched && !formData.service ? "invalid" : ""}`}
                required
              >
                <option value="" disabled>
                  Sélectionnez une prestation
                </option>
                <option value="saas" className="text-black dark:bg-zinc-900">
                  Développement SaaS / Plateforme
                </option>
                <option value="dev" className="text-black dark:bg-zinc-900">
                  Application Sur-mesure (Laravel/React)
                </option>
                <option value="uiux" className="text-black dark:bg-zinc-900">
                  Design d'Interface UI/UX
                </option>
                <option value="other" className="text-black dark:bg-zinc-900">
                  Autre / Conseil
                </option>
              </select>
              {isTouched && !formData.service && (
                <span className="text-red-500 text-xs font-bold mt-1 block">
                  Sélection requise
                </span>
              )}
            </div>

            {/* <div className="relative group">
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500 group-focus-within:text-lime transition-colors">
                Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`nexus-input bg-transparent cursor-pointer ${isTouched && !formData.budget ? "invalid" : ""}`}
                required
              >
                <option value="" disabled>
                  Sélectionnez une fourchette
                </option>
                <option value="small" className="text-black dark:bg-zinc-900">
                  5 k$ - 10 k$
                </option>
                <option value="medium" className="text-black dark:bg-zinc-900">
                  10 k$ - 25 k$
                </option>
                <option value="large" className="text-black dark:bg-zinc-900">
                  25 k$ et plus
                </option>
              </select>
              {isTouched && !formData.budget && (
                <span className="text-red-500 text-xs font-bold mt-1 block">
                  Sélection requise
                </span>
              )}
            </div> */}

            <div className="relative group">
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500 group-focus-within:text-lime transition-colors">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Parlez-nous de votre projet..."
                className={`nexus-input resize-none ${isTouched && formData.message.length < 10 ? "invalid" : ""}`}
                required
              ></textarea>
              {isTouched && formData.message.length < 10 && (
                <span className="text-red-500 text-xs font-bold mt-1 block">
                  10 caractères minimum
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-full font-bold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex justify-center items-center gap-2"
            >
              {formStatus === "submitting"
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
