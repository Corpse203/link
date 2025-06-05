export default function SocialLinks() {
  const socials = [
    { name: "DLive", url: "https://dlive.tv/skrymi" },
    { name: "Kick", url: "https://kick.com/skrymi" },
    { name: "Twitch", url: "https://twitch.tv/skrymi" },
    { name: "Discord", url: "https://discord.gg/wN6r88VAg2" },
    { name: "YouTube", url: "https://www.youtube.com/@skrymi777" },
  ];
  return (
    <div className="text-center mt-12 mb-6 text-sm opacity-80">
      <p>Retrouve-moi sur :</p>
      <div className="flex justify-center gap-4 mt-2 flex-wrap">
        {socials.map((s, i) => (
          <a key={i} href={s.url} target="_blank" className="underline hover:text-blue-400">{s.name}</a>
        ))}
      </div>
    </div>
  );
}