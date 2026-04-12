import { Link } from "react-router-dom";
const PreMadeSets = () => {
  const sets = Array(8).fill(
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
  );

  return (
    <div className="bg-[#f6f1eb] pt-28 pb-20 px-6 md:px-16">

      {/* HEADER */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Pre-Made Sets
        </h1>
        <p className="text-black/60 text-lg leading-relaxed">
          Ready-to-use professional studio setups designed for fast,
          high-quality photography and video production.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Ready to Shoot</h3>
          <p className="text-black/60 text-sm">
            No setup time needed — just walk in and start shooting.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Professional Lighting</h3>
          <p className="text-black/60 text-sm">
            Pre-balanced lighting setups for cinematic results.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Multiple Themes</h3>
          <p className="text-black/60 text-sm">
            From minimal to luxury — different creative styles available.
          </p>
        </div>
      </div>

      {/* SETS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sets.map((img, i) => (
          <div key={i} className="rounded-2xl overflow-hidden group">
            <img
              src={img}
              className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* CATEGORIES INFO */}
      <div className="mt-20 bg-[#efe7de] rounded-2xl p-10 md:p-14 border border-black/10">
        <h2 className="text-3xl font-bold mb-6">
          Set Categories
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-black/70 text-sm">
          <div>✔ Luxury Wedding Backgrounds</div>
          <div>✔ Fashion Editorial Sets</div>
          <div>✔ Corporate & Commercial Themes</div>
          <div>✔ Minimal Studio Backgrounds</div>
          <div>✔ Creative Artistic Concepts</div>
          <div>✔ Product Photography Sets</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">
          Need a ready-made professional setup?
        </h3>
        <p className="text-black/60 mb-6">
          Book your pre-made set and start shooting instantly.
        </p>
        <Link to="/booking">
        
        <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-80 transition">
          Book Pre-Made Set
        </button>
        </Link>
      </div>

    </div>
  );
};

export default PreMadeSets;