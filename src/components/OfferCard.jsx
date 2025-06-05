
export default function OfferCard({ title, bonus, description, color, logo, link, tags }) {
  return (
    <div
      className="rounded-xl shadow-md p-5 flex flex-col justify-between transition-transform transform hover:scale-105"
      style={{ background: color }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt={title} className="w-9 h-9 rounded-md" />
          <span className="font-bold text-white text-sm bg-white/10 px-2 py-1 rounded">{title.toUpperCase()}</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-2">{bonus}</h2>
        <p className="text-white/90 mb-4 text-sm">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="bg-black/40 text-white text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <a
        href={link}
        target="_blank"
        className="mt-2 block bg-white text-black text-center py-2 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
      >
        Obtenir
      </a>
    </div>
  );
}
