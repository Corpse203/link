
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm">🎰 SKRYMI</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#offres" className="text-white hover:text-yellow-200 font-medium transition duration-150"></a>
            <a href="#contact" className="text-white hover:text-yellow-200 font-medium transition duration-150"></a>
            <a
              href="https://calls-bot.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-white text-red-600 font-bold py-1.5 px-4 rounded-full shadow hover:bg-yellow-100 transition duration-200"
            >
              📞 Call Bot
            </a>
          </div>


          <div className="hidden md:flex space-x-10 items-center">
            <a href="#offres" className="text-white hover:text-yellow-200 font-medium transition duration-150"></a>
            <a href="#contact" className="text-white hover:text-yellow-200 font-medium transition duration-150"></a>
            <a
              href="https://discord.gg/wN6r88VAg2"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-white text-red-600 font-bold py-1.5 px-4 rounded-full shadow hover:bg-yellow-100 transition duration-200"
            >
              Discord
            </a>
          </div>

          

        </div>
      </div>

      
    </header>
  );
};

export default Header;
