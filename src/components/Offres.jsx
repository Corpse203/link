
import React from "react";

const Offres = () => {
  return (
    <section id="offres" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
      <div className="bg-green-600 p-6 rounded-xl shadow-lg">
        <h3 className="text-white font-bold text-lg mb-2">BETIFY</h3>
        <p className="text-white">100% jusqu'à 500€</p>
        <p className="text-sm text-white">Cashback & Freebets hebdo</p>
        <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded font-bold">Obtenir</button>
      </div>
      <div className="bg-yellow-500 p-6 rounded-xl shadow-lg">
        <h3 className="text-white font-bold text-lg mb-2">GOLDEN PANDA</h3>
        <p className="text-white">200% + 150 Free Spins</p>
        <p className="text-sm text-white">Dépôt RAW + bonus</p>
        <button className="mt-4 bg-white text-yellow-600 px-4 py-2 rounded font-bold">Obtenir</button>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-xl shadow-lg">
        <h3 className="text-white font-bold text-lg mb-2">X7CASINO</h3>
        <p className="text-white">200% + 150 Free Spins</p>
        <p className="text-sm text-white">Crypto et CB acceptées</p>
        <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded font-bold">Obtenir</button>
      </div>
    </section>
  );
};

export default Offres;
