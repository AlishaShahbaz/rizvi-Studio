import { Link } from "react-router-dom";

const Home = () => {
  const sets = Array(8).fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NNcZX1ns24fpwEAUXM91swYKy2pJ9hMGpiVZyioigBmKBNa-mfSQAbzJ5ttkc5eZKSsIHGnKIvehHBqcWmvYogY&s&ec=121630540");
  const props = Array(10).fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qSOGzO_ICbC-XW5_rHIlG4n8tjc4Bdm99YBu0iuKkp_vqSu0C_wH4hGPYNhy_E7wUvOy4YH5VRs5DdptnTB5xcM&s&ec=121630540");

  return (
    <div className="bg-[#f6f1eb] text-[#2b2b2b] min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 md:px-16 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] tracking-tight">
            100+ SETS <br/>
            <span className="italic font-light text-[#b07a6e] text-5xl">at one place</span>
          </h1>

          <p className="text-lg text-black/60 max-w-md">
            A premium production space designed for fashion shoots, ads, and creative storytelling.
          </p>
            <Link to="/booking">
            <button className="bg-black text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-[#b07a6e] transition">
            Book Your Shoot
          </button>
            </Link>
          
        </div>

        {/* RIGHT GRID */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
          {sets.map((img, i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={img} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </section>


      {/* SHOOT ANYTHING SECTION */}
      <section className="py-24 px-6 md:px-16 border-t border-black/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-4">
            {sets.slice(0,4).map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Shoot Anything Here</h2>
            <p className="text-black/60 leading-relaxed">
              From luxury interiors to vibrant themed sets — everything is ready. 
              No setup stress, no production delays. Just walk in and create.
            </p>

            <button className="border-b border-black text-sm uppercase tracking-widest">
              Explore Sets
            </button>
          </div>
        </div>
      </section>


      {/* SPLIT STORY SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#efe7de]">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Transparent & Hassle Free</h2>
            <p className="text-black/60">
              Book your set instantly with clear pricing. No hidden costs, 
              no complicated approvals — everything streamlined for creators.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest">
              Check Pricing
            </button>
          </div>

          <div className="rounded-[30px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* PROP LIBRARY */}
      <section className="py-24 px-6 md:px-16">
        <h3 className="text-center text-xs tracking-[0.4em] uppercase text-[#b07a6e] mb-4">
          Catalogue
        </h3>

        <h2 className="text-center text-4xl font-bold mb-16">
          Prop Library
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {props.map((img, i) => (
            <div key={i} className="group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>

              <p className="text-sm font-medium">Vintage Chair</p>
              <p className="text-xs text-black/50">Antique</p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA STRIP */}
      <section className="py-20 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Create?
        </h2>
        <button className="border border-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
          Book Now
        </button>
      </section>


      {/* FOOTER */}
      <footer className="bg-[rgb(246,241,235)] py-16 px-6 md:px-16 text-[rgb(80,64,39)] text-sm">

  <div className="grid md:grid-cols-3 gap-12">

    {/* BRAND */}
    <div>
      <h2 className="text-2xl font-extrabold mb-3 tracking-tight">
        ABC PROD.
      </h2>
      <p className="text-black/60 leading-relaxed">
        Premium production spaces built for creators, photographers,
        filmmakers and brands.
      </p>
    </div>

    {/* CONTACT */}
    <div className="space-y-2 text-black/70">
      <h3 className="font-semibold text-[rgb(80,64,39)] mb-2">
        Contact
      </h3>
      <p>Gulberg III, Lahore</p>
      <p>+92 300 1234567</p>
      <p>info@abcproductions.com</p>
    </div>

    {/* SOCIAL */}
    <div className="space-y-2 text-black/70">
      <h3 className="font-semibold text-[rgb(80,64,39)] mb-2">
        Connect
      </h3>

      <p className="cursor-pointer hover:underline">
        Instagram
      </p>
      <p className="cursor-pointer hover:underline">
        WhatsApp
      </p>
      <p className="cursor-pointer hover:underline">
        Portfolio
      </p>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between gap-4 text-black/50 text-xs">

    <p>© {new Date().getFullYear()} ABC Productions. All rights reserved.</p>

    <p>Designed for creative studios & production houses</p>

  </div>

</footer>
    </div>
  );
};

export default Home;