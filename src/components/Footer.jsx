import React from "react";

function Footer() {
  return (
    <footer className="mt-16 text-center text-sm text-gray-400 hover:text-white transition-opacity opacity-70 px-4 py-6">
      <p>
        Développé avec ❤️ par <span className="text-purple-400 font-semibold">Browkse</span>
      </p>
      <p>
        📻 Suis <span className="text-white font-semibold">Skrymi</span> sur :
        <a
          href="https://dlive.tv/skrymi"
          className="text-blue-400 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          DLive
        </a>
        |
        <a
          href="https://kick.com/skrymi"
          className="text-green-400 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kick
        </a>
        |
        <a
          href="https://www.twitch.tv/skrymi"
          className="text-purple-400 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitch
        </a>
        |
        <a
          href="https://www.youtube.com/@skrymi777"
          className="text-red-400 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        |
        <a
          href="mailto:Browkse0@gmail.com"
          className="text-green-400 hover:underline mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev : Browkse
        </a>
      </p>
      <p className="text-gray-500 text-xs mt-2">© 2025 Skrymi. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
