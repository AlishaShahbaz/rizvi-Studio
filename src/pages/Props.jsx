import { Link } from "react-router-dom";
const Props = () => {
  const items = Array(10).fill(
    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=400"
  );

  return (
    <div className="bg-[#f6f1eb] pt-28 pb-20 px-6 md:px-16">

      {/* HERO */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Prop Library
        </h1>
        <p className="text-black/60 text-lg leading-relaxed">
          A curated collection of creative props designed to enhance
          photography, film and commercial productions.
        </p>
      </div>

      {/* HOW IT WORKS (NEW STYLE SECTION) */}
      <div className="flex flex-col md:flex-row gap-6 mb-16">

        <div className="flex-1 bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <span className="text-sm font-bold">Step 1</span>
          <h3 className="font-bold text-xl mt-2">Browse Props</h3>
          <p className="text-black/60 text-sm mt-1">
            Explore our categorized prop library.
          </p>
        </div>

        <div className="flex-1 bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <span className="text-sm font-bold">Step 2</span>
          <h3 className="font-bold text-xl mt-2">Select Items</h3>
          <p className="text-black/60 text-sm mt-1">
            Choose props that match your shoot theme.
          </p>
        </div>

        <div className="flex-1 bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <span className="text-sm font-bold">Step 3</span>
          <h3 className="font-bold text-xl mt-2">Use in Shoot</h3>
          <p className="text-black/60 text-sm mt-1">
            Integrate props into your production seamlessly.
          </p>
        </div>
      </div>

      {/* CATEGORY HIGHLIGHTS (DIFFERENT STYLE SECTION) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Popular Categories
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="min-w-[200px] bg-[#efe7de] p-4 rounded-2xl border border-black/10">
            Vintage Props
          </div>
          <div className="min-w-[200px] bg-[#efe7de] p-4 rounded-2xl border border-black/10">
            Luxury Items
          </div>
          <div className="min-w-[200px] bg-[#efe7de] p-4 rounded-2xl border border-black/10">
            Studio Accessories
          </div>
          <div className="min-w-[200px] bg-[#efe7de] p-4 rounded-2xl border border-black/10">
            Creative Objects
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((img, i) => (
          <div key={i} className="group">
            <div className="aspect-square rounded-2xl overflow-hidden mb-3">
              <img
                src={img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <p className="text-sm font-medium">Vintage Item</p>
            <p className="text-xs text-black/50">Antique</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">
          Need props for your next shoot?
        </h3>
        <p className="text-black/60 mb-6">
          Browse our library and reserve items instantly.
        </p>
        <Link to="/booking">
        
        <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-80 transition">
          Book Props
        </button>
        </Link>
      </div>

    </div>
  );
};

export default Props;