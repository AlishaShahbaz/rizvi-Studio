import { Link } from "react-router-dom";
const RentalSpaces = () => {
  return (
    <div className="bg-[#f6f1eb] text-[#2b2b2b] pt-28 pb-20 px-6 md:px-16">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-extrabold mb-6">
            Rental Spaces
          </h1>
          <p className="text-black/60 text-lg leading-relaxed">
            Spacious, versatile and production-ready environments designed
            for shoots, commercials and creative work.
          </p>

          <button className="mt-6 border-b border-black text-sm uppercase tracking-widest">
            View Availability
          </button>
        </div>

        <div className="rounded-[30px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Fully Equipped</h3>
          <p className="text-black/60 text-sm">
            Professional lighting, props and production-ready setup included.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Flexible Layout</h3>
          <p className="text-black/60 text-sm">
            Easily adjustable space for photography, video or events.
          </p>
        </div>

        <div className="bg-[#efe7de] p-6 rounded-2xl border border-black/10">
          <h3 className="font-bold text-xl mb-2">Creative Environment</h3>
          <p className="text-black/60 text-sm">
            Designed to inspire creativity and cinematic production quality.
          </p>
        </div>
      </div>

      {/* USE CASES SECTION */}
      <div className="mt-20 bg-[#efe7de] rounded-2xl p-10 md:p-14 border border-black/10">
        <h2 className="text-3xl font-bold mb-6">
          Perfect For
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-black/70 text-sm">
          <div>✔ Fashion & Editorial Shoots</div>
          <div>✔ Commercial Video Production</div>
          <div>✔ Product Photography</div>
          <div>✔ YouTube / Content Creation</div>
          <div>✔ Interviews & Podcasts</div>
          <div>✔ Small Events & Workshops</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-4">
          Ready to book your creative space?
        </h3>
        <p className="text-black/60 mb-6">
          Check availability and secure your slot today.
        </p>
        <Link to="/booking">

        <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-80 transition">
          Book Rental Space
        </button>
        </Link>
      </div>

    </div>
  );
};

export default RentalSpaces;