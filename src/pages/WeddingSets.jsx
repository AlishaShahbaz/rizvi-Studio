
import { Link } from "react-router-dom";

const WeddingSets = () => {
  const sets = Array(6).fill(
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800"
  );

  return (
    <div className="bg-[#f6f1eb] text-[#2b2b2b] pt-28 pb-20 px-6 md:px-16">

      {/* HERO SECTION */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Wedding Shoot Sets
        </h1>
        <p className="text-black/60 text-lg leading-relaxed">
          Elegant, timeless and luxurious backdrops crafted for wedding photography.
          Designed to give your memories a cinematic and premium look.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Premium Backdrops</h3>
          <p className="text-black/60 text-sm">
            Professionally designed sets with luxury wedding aesthetics.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Studio Lighting Ready</h3>
          <p className="text-black/60 text-sm">
            Perfect lighting environment for cinematic photography results.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Custom Set Options</h3>
          <p className="text-black/60 text-sm">
            Flexible setups for traditional, modern, or themed weddings.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {sets.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl">
            <img
              src={img}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* INFO SECTION */}
      <div className="mt-20 bg-[#efe7de] rounded-2xl p-10 md:p-14 border border-black/10">
        <h2 className="text-3xl font-bold mb-4">
          Make Your Wedding Shoot Cinematic
        </h2>
        <p className="text-black/60 leading-relaxed mb-6">
          Our studio wedding sets are designed to create magazine-level visuals.
          From minimal elegant setups to royal wedding vibes — we provide a full creative environment.
        </p>

        <ul className="space-y-2 text-black/70 text-sm">
          <li>✔ Fully customizable themes</li>
          <li>✔ Professional studio assistance available</li>
          <li>✔ Indoor controlled lighting setup</li>
          <li>✔ Ideal for photography + videography</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
       <Link to="/booking">
        <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-80 transition">
          Book Wedding Set
        </button>
       </Link>
      </div>

    </div>
  );
};

export default WeddingSets;