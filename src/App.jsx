
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offres from "./components/Offres"; // À adapter selon votre structure réelle

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1d1d1d] text-white font-[Inter]">
      <Header />
      <main className="flex-1 pt-[80px] px-4 sm:px-8 md:px-16">
        <Offres />
      </main>
      <Footer />
    </div>
  );
}

export default App;
