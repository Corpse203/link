
import { useEffect, useState } from "react";
import OfferCard from "./components/OfferCard";

export default function Admin() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({
    title: "",
    bonus: "",
    description: "",
    color: "",
    logo: "",
    link: "",
    tags: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("admin-auth");
    if (stored === "ok") setAccessGranted(true);

    const saved = localStorage.getItem("offers");
    if (saved) setOffers(JSON.parse(saved));
  }, []);

  const saveOffers = (newOffers) => {
    setOffers(newOffers);
    localStorage.setItem("offers", JSON.stringify(newOffers));
  };

  const handleSubmit = () => {
    const formatted = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    };
    const updated = [...offers];
    if (editIndex !== null) {
      updated[editIndex] = formatted;
    } else {
      updated.push(formatted);
    }
    saveOffers(updated);
    setForm({ title: "", bonus: "", description: "", color: "", logo: "", link: "", tags: "" });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const o = offers[index];
    setForm({
      ...o,
      tags: o.tags.join(", "),
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...offers];
    updated.splice(index, 1);
    saveOffers(updated);
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl mb-4">Accès Admin</h1>
        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 text-black rounded mb-3"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (passwordInput === "futurformatic") {
              localStorage.setItem("admin-auth", "ok");
              setAccessGranted(true);
            } else {
              alert("Mot de passe incorrect.");
            }
          }}
          className="bg-white text-black font-semibold px-4 py-2 rounded"
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Panneau Admin (CRUD)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {["title", "bonus", "description", "color", "logo", "link", "tags"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="p-2 text-black rounded"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mb-8 bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded text-black font-bold"
      >
        {editIndex !== null ? "Modifier l'offre" : "Ajouter l'offre"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, i) => (
          <div key={i} className="relative">
            <OfferCard {...offer} />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(i)}
                className="bg-yellow-400 text-black px-2 py-1 rounded text-xs"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
