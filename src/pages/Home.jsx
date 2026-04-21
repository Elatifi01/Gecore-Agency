import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import Contact from "./Contact";
import haitamImg from "../assets/img/haitam.webp";
import donelImg from "../assets/img/donel.webp";
import fregisImg from "../assets/img/fregis.webp";

const ScrollRevealSection = ({ children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  useSEO({
    title: "Gecore 360° | Agence hybrid digitale",
    description: "",
  });
  const services = [
    {
      icon: "💻",
      title: "Développement Sur-Mesure",
      desc: "Création d'applications web et de sites vitrines ultra-performants pour nos clients, utilisant l'écosystème Laravel et React.",
    },
    {
      icon: "🎨",
      title: "Design UI/UX & Branding",
      desc: "Conception d'identités visuelles percutantes et d'interfaces utilisateur modernes qui convertissent vos visiteurs en clients.",
    },
    {
      icon: "🚀",
      title: "Accélération SaaS (Notre Concept)",
      desc: "Développement de nos propres solutions logicielles sur abonnement, comme notre plateforme CRM Alumni multi-tenant.",
    },
    {
      icon: "⚙️",
      title: "Architecture & API",
      desc: "Modélisation de bases de données complexes et création d'API robustes pour connecter vos outils d'entreprise.",
    },
    {
      icon: "📊",
      title: "Marketing Digital & SEO",
      desc: "Stratégies d'acquisition, optimisation pour les moteurs de recherche et analyse de données pour maximiser votre visibilité.",
    },
    {
      icon: "🛡️",
      title: "Maintenance & Évolutivité",
      desc: "Support technique continu, hébergement cloud sécurisé et mises à jour régulières pour garantir la pérennité de vos projets.",
    },
  ];

  const testimonials = [
    {
      quote:
        "GECORE 360° a conçu notre plateforme sur-mesure avec une maîtrise technique impressionnante. L'utilisation de Laravel et React a rendu notre application incroyablement rapide et stable.",
      name: "Sarah Jenkins",
      role: "CTO, FinTech Horizon",
      highlight: false,
    },
    {
      quote:
        "La création de notre architecture SaaS multi-tenant était un défi majeur. L'équipe de GECORE a livré une solution ultra-scalable et sécurisée, bien au-delà de nos attentes.",
      name: "David Chen",
      role: "Directeur Produit, EdTech Solutions",
      highlight: true,
    },
    {
      quote:
        "Nous avions besoin d'une application web complexe livrée rapidement. GECORE 360° a repensé toute notre expérience utilisateur tout en produisant un code d'une qualité irréprochable.",
      name: "Elena Rodriguez",
      role: "Fondatrice, Nova Retail",
      highlight: false,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <ScrollRevealSection>
        <section
          id="home"
          className="pt-28 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30 items-center ">
            {/* Left: Text */}
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-widest mb-6 text-lime-600 dark:text-lime">
                ★ Agence Web & Éditeur SaaS
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 md:mb-8">
                NOUS GÉNÉRONS <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3585b6, #6aba41)",
                  }}
                >
                  L'INNOVATION
                </span>
                <br />
                DIGITALE.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed mb-8 md:mb-10">
                GECORE 360° est un studio web hybride. Nous créons des
                expériences sur-mesure pour nos clients et concevons nos propres
                solutions SaaS (comme le CRM Alumni) pour redéfinir les
                standards du marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/#contact"
                  className="bg-lime text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 transition shadow-[0_0_20px_rgba(106,186,65,0.4)] text-center"
                >
                  Lancer un projet (Agence)
                </Link>
                <Link
                  to="/#solution-saas"
                  className="px-8 py-4 rounded-full font-bold text-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition flex items-center justify-center gap-2 group"
                >
                  Découvrir nos SaaS
                  <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-lime blur-[80px] opacity-20 dark:opacity-30 rounded-full scale-75"></div>
              <div className="relative aspect-4/5 rounded-4xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Hero"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 rtl:right-auto rtl:left-8 bg-white/90 dark:bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-black"
                        src="https://i.pravatar.cc/100?img=1"
                        alt=""
                      />
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-black"
                        src="https://i.pravatar.cc/100?img=2"
                        alt=""
                      />
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-black"
                        src="https://i.pravatar.cc/100?img=3"
                        alt=""
                      />
                    </div>
                    <span className="font-bold text-sm">Design & Code</span>
                  </div>
                  <p className="text-xs text-zinc-500">
                    L'agilité d'une agence, la puissance d'un éditeur SaaS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* MARQUEE */}
      <ScrollRevealSection>
        <section className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/50 py-6 sm:py-8">
          <div className="marquee-container">
            <div className="marquee-content text-2xl sm:text-4xl md:text-6xl font-black text-zinc-200 dark:text-zinc-800 uppercase tracking-tighter">
              SaaS • Laravel • React • Multi-tenant • Sur-mesure • API • UI/UX •
              SaaS • Laravel • React • Multi-tenant • Sur-mesure • API • UI/UX •
            </div>
          </div>
        </section>
      </ScrollRevealSection>
      {/* ABOUT */}
      <ScrollRevealSection>
        <section
          className="pt-16 md:pt-20 pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto"
          id="about"
        >
          <span className="text-lime font-bold uppercase tracking-widest text-xs mb-4 block">
            Qui nous sommes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-none mb-10 md:mb-12">
            L'ADN D'UNE AGENCE. <br /> L'AMBITION D'UNE{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #3585b6, #6aba41)",
              }}
            >
              STARTUP.
            </span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              GECORE 360° redéfinit le modèle de l'agence digitale. Nous sommes
              un studio d'ingénierie web haut de gamme, concevant des
              plateformes sur-mesure et des identités visuelles fortes pour des
              clients exigeants. Nous transformons des défis complexes en
              expériences digitales fluides et performantes.
            </p>
            <p>
              Mais notre vision va plus loin. Animés par une culture de
              l'innovation, nous mettons notre expertise technologique au
              service de nos propres concepts. En tant qu'éditeur, nous
              développons et déployons nos propres solutions SaaS , prouvant au
              quotidien notre capacité non seulement à exécuter, mais à innover
              sur le marché.
            </p>
          </div>
        </section>
      </ScrollRevealSection>
      <ScrollRevealSection>
        <section
          id="solution-saas"
          className="py-20 bg-black text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000"
                  className="w-full h-full object-cover grayscale"
                  alt="SaaS Architecture"
                />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 rtl:right-4 sm:rtl:right-8 rtl:left-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-2xl">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-lime mb-1">
                        Modèle Agence
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold">
                        Sur-mesure
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold uppercase tracking-widest text-lime mb-1">
                        Modèle Éditeur
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold">
                        SaaS (MRR)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Nous créons pour nos clients. <br />{" "}
                <span className="text-lime">Nous innovons pour nous.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Lancée en 2026, GECORE 360° repose sur une synergie parfaite.
                Nos prestations d'agence génèrent la trésorerie et nous gardent
                connectés aux besoins du marché, finançant ainsi notre propre
                pôle de R&D.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                C'est ainsi qu'est né notre premier concept phare : le CRM
                Alumni. Une solution multi-tenant développée en interne avec
                Laravel et React, qui prouve notre capacité non seulement à
                exécuter, mais à bâtir des produits rentables et évolutifs.
              </p>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 border-t border-zinc-800 pt-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold mb-2 text-lime">
                    100%
                  </p>
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                    Indépendance Financière
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold mb-2 text-lime">
                    01
                  </p>
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                    Concept SaaS (CRM)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
      {/* SERVICES */}
      <ScrollRevealSection>
        <section
          id="services"
          className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Notre expertise
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
                Des capacités complètes pensées pour gérer chaque aspect de
                votre présence digitale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-4xl bg-zinc-100 dark:bg-zinc-900 hover:bg-black dark:hover:bg-lime transition-colors duration-500 relative overflow-hidden"
              >
                <div className="mb-8">
                  <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white dark:group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300 dark:group-hover:text-zinc-800 transition-colors">
                  {service.desc}
                </p>
                <div className="absolute top-8 right-8 rtl:right-auto rtl:left-8 opacity-0 group-hover:opacity-100 transition-opacity text-white dark:text-black">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollRevealSection>
      {/* TEAMS */}
      <ScrollRevealSection>
        <section
          id="teams"
          className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              Notre équipe.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 ">
              {[
                {
                  name: "Haitam El Atifi",
                  role: "Développeur Full-Stack",
                  img: haitamImg,
                },
                {
                  name: "ATARGA ONDO Donel",
                  role: "Développeur Front-end & Designer Graphique",
                  img: donelImg,
                },
                {
                  name: "Fregis Omanda",
                  role: "Designer - Développeur",
                  img: fregisImg,
                },
              ].map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="w-44 h-44 sm:w-full sm:h-auto sm:aspect-square mx-auto rounded-full overflow-hidden mb-6 border-2 border-transparent group-hover:border-lime transition-all duration-300 relative">
                    <img
                      src={member.img}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                      alt={member.name}
                    />
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-sm text-lime font-bold uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealSection>
      {/* TESTIMONIALS SECTION */}
      <ScrollRevealSection>
        <section
          id="Temoignages"
          className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="mb-16 text-center">
            <span className="text-lime font-bold uppercase tracking-widest text-xs">
              Témoignages clients
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              La confiance des leaders du marché.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`p-6 sm:p-10 rounded-4xl border ${t.highlight ? "bg-zinc-900 dark:bg-zinc-800 text-white border-zinc-800 dark:border-zinc-700 relative overflow-hidden" : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800"}`}
              >
                {t.highlight && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-lime blur-[50px] opacity-20"></div>
                )}
                <div className="text-lime text-6xl font-serif leading-none mb-6">
                  “
                </div>
                <p className="text-lg font-medium mb-8">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p
                      className={`text-xs ${t.highlight ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollRevealSection>
      <ScrollRevealSection>
        <div id="contact">
          <Contact />
        </div>
      </ScrollRevealSection>

      {/* CTA SECTION */}
      <ScrollRevealSection>
        <section className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8">
            Prêt à dominer ?
          </h2>
          <p className="text-base sm:text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Arrêtez de deviner avec votre budget marketing. Construisons pour
            votre entreprise un moteur de revenus prévisible.
          </p>
        </section>
      </ScrollRevealSection>
    </>
  );
};

export default Home;
