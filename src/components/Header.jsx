
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg fixed top-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-extrabold tracking-widest uppercase drop-shadow-lg">
          🎰 Skrymi
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className={`md:flex md:space-x-6 md:items-center absolute md:static top-full left-0 w-full bg-gradient-to-br from-yellow-600 to-red-700 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <li className="p-4 md:p-0 text-center">
            <a
              href="https://calls-bot.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline text-lg font-semibold hover:text-yellow-200 transition"
            >
              🎤 Call Bot
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
