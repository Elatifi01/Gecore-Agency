import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

const Services = () => {
  useSEO({
    title: "Prestations | NEXUS Agency",
    description:
      "Découvrez nos expertises : marketing de performance, SEO, développement web, branding et analyse de données. Nous construisons des moteurs de revenus prévisibles et des expériences digitales qui vendent.",
  });
  const services = [
    {
      id: "01",
      title: "Marketing de performance",
      desc: "Nous gérons plus de 5 M$ de dépenses publicitaires annuelles. Nous savons acheter des médias qui convertissent. Nous testons sans relâche, optimisons chaque jour et amplifions ce qui fonctionne.",
      items: [
        "Social ads (Meta/TikTok)",
        "Google Ads / PPC",
        "CRO et landing pages",
        "Automatisation e-mail",
      ],
    },
    {
      id: "02",
      title: "Identité de marque et design",
      desc: "Une marque est plus qu'un logo. C'est une émotion. Nous créons des identités visuelles qui émergent du bruit et résonnent avec votre audience.",
      items: [
        "Conception de logo",
        "Systèmes visuels",
        "Motion design",
        "Packaging",
      ],
    },
    {
      id: "03",
      title: "Développement",
      desc: "Nous créons des produits digitaux rapides, sécurisés et évolutifs. Pas de modèles lourds. Du code sur mesure pour des besoins sur mesure.",
      items: [
        "Développement de sites",
        "Applications web",
        "CMS headless",
        "E-commerce (Shopify)",
      ],
    },
    {
      id: "04",
      title: "Optimisation SEO",
      desc: "Atteindre la première place n'est pas une question de chance, mais d'ingénierie. Nous utilisons des audits techniques, des clusters de contenu et la construction d'autorité pour dominer les résultats de recherche.",
      items: [
        "Audits techniques",
        "Optimisation on-page",
        "Stratégie de backlinks",
        "Recherche de mots-clés",
      ],
    },
    {
      id: "05",
      title: "Création de contenu",
      desc: "Le contenu est la monnaie de l'attention. Nous produisons des vidéos, des photos et des textes haut de gamme qui racontent votre histoire et stoppent le défilement.",
      items: [
        "Production vidéo",
        "Photographie",
        "Rédaction",
        "Assets pour réseaux sociaux",
      ],
    },
    {
      id: "06",
      title: "Données et analytique",
      desc: "Arrêtez de deviner. Nous mettons en place un suivi avancé et des tableaux de bord sur mesure pour voir précisément d'où vient chaque euro de chiffre d'affaires.",
      items: [
        "Configuration GA4",
        "Tableaux de bord sur mesure",
        "Suivi des conversions",
        "Rapports ROI",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="pt-20 pb-20 px-6 max-w-7xl mx-auto text-center">
        <span className="text-lime font-bold uppercase tracking-widest text-xs mb-4 block">
          Ce que nous faisons
        </span>
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
          EXPERTISES
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Nous n'offrons pas un menu de services. Nous proposons des solutions à
          des problèmes business. Que vous ayez besoin de plus de prospects,
          d'une meilleure perception de marque ou d'un site plus rapide.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-32 px-6 max-w-7xl mx-auto space-y-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 lg:p-16 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <span className="text-6xl font-black text-zinc-200 dark:text-zinc-800 mb-6 block">
                  {service.id}
                </span>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-lime transition-colors"
                >
                  Découvrir <span className="rtl:rotate-180">→</span>
                </Link>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-lime">
                  Livrables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-zinc-100 dark:border-zinc-800"
                    >
                      <span className="text-lime">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center">
            Comment nous travaillons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Découverte", "Stratégie", "Exécution", "Optimisation"].map(
              (step, i) => (
                <div key={i} className="relative">
                  <div className="text-8xl font-black text-zinc-200 dark:text-zinc-800 absolute -top-10 left-0 z-0">
                    0{i + 1}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold mb-4">{step}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Texte indicatif expliquant comment nous gérons l'étape de{" "}
                      {step.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Vous avez un projet en tête ?
        </h2>
        <Link
          to="/contact"
          className="bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform inline-block"
        >
          Demander un devis
        </Link>
      </section>
    </div>
  );
};

export default Services;
