
import React from "react";

const Card = ({ title, bonus, description, logo }) => (
  <div className="bg-[#2c2c2c] rounded-xl p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <img src={logo} alt={title} className="h-10 w-auto object-contain" />
    </div>
    <p className="text-lg font-bold">{bonus}</p>
    <p className="text-sm opacity-80">{description}</p>
    <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full transition duration-300">
      🎁 Obtenir
    </button>
  </div>
);

const Offres = () => {
  const offres = [
    {
      title: "BETIFY",
      bonus: "100% jusqu'à 500€",
      description: "Cashback & Freebets hebdo",
      logo: "/logos/betify.jpg"
    },
    {
      title: "GOLDEN PANDA",
      bonus: "200% + 150 Free Spins",
      description: "Dépôt RAW + bonus",
      logo: "/logos/goldenpanda.png"
    },
    {
      title: "X7CASINO",
      bonus: "200% + 150 Free Spins",
      description: "Crypto et CB acceptées",
      logo: "/logos/fastslots.png"
    }
  ];

  return (
    <section id="offres" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 px-4">
      {offres.map((offre, index) => (
        <Card key={index} {...offre} />
      ))}
    </section>
  );
};

export default Offres;
