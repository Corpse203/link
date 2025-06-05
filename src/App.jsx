
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OfferCard from "./components/OfferCard";
import offers from "./data";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1d1d1d] text-white font-[Inter]">
      <Header />
      <main className="flex-1 pt-[80px] px-4 sm:px-8 md:px-16">
        <section id="offres" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
