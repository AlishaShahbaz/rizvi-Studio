import { Link } from "react-router-dom";
import heroImage from "../assets/hero-img1.png";
import Navbar from "../components/Navbar"; 
import img1 from "../assets/Screenshot 2026-04-12 224745.png";
import img2 from "../assets/Screenshot_20260413_014238.jpeg";
import img3 from "../assets/Screenshot_20260413_014344.jpeg";
import img4 from "../assets/Screenshot_20260413_014323.jpeg";
import img5 from "../assets/Screenshot_20260413_014353.jpeg"; 
import img6 from "../assets/Screenshot_20260413_0143441.jpeg"; 


const WeddingSets = () => {
  // --- APKI IMPORTED IMAGES KA ARRAY ---
  const weddingGallery = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">
        
        {/* 🖼️ FIXED BACKGROUND */}
        <div className="fixed inset-0 -z-20">
          <img 
            src={heroImage}
            className="w-full h-full object-cover" 
            alt="Wedding Backdrop"
          />
          <div className="absolute inset-0 brand-overlay"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 p-4 md:p-10 max-w-[1600px] mx-auto pt-44 pb-20 space-y-16">
          
          {/* --- BREADCRUMBS --- */}
          <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 ml-4 mt-32 md:mt-40 mb-6">
            <Link to="/" className="hover:text-hsq-peach transition-colors text-white">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-hsq-peach">Wedding Sets</span>
          </nav>
          
          {/* --- LUXURY FEATURES GRID --- */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Premium Sets", desc: "Professionally designed sets with luxury wedding aesthetics." },
              { title: "Studio Lights", desc: "Perfect lighting environment for cinematic photography results." },
              { title: "Custom Themes", desc: "Flexible setups for traditional, modern, or themed weddings." }
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-8 bg-white/5 border-white/10 hover:border-hsq-peach/40 transition-all group">
                <h3 className="font-black uppercase tracking-tighter italic text-xl mb-3 text-hsq-peach group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- SETS GALLERY GRID (Ab aapki images load hongi) --- */}
          <div className="grid md:grid-cols-3 gap-8">
            {weddingGallery.map((imgSrc, i) => (
              <div key={i} className="glass-panel !p-0 overflow-hidden border-white/5 group relative aspect-[3/4]">
                <img
                  src={imgSrc} // Placeholder ki jagah imported image variable
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  alt={`Wedding Set ${i + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-hsq-peach italic">Explore Setup</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- CINEMATIC INFO PANEL --- */}
          <section className="glass-panel p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center bg-white/5">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
                Magazine Level <span className="text-hsq-peach">Visuals</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                From minimal elegant setups to royal wedding vibes — we provide a full creative environment 
                tailored to capture the essence of your special day.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-hsq-peach/80">
                <li className="flex items-center gap-2"><span>✔</span> Fully Customizable</li>
                <li className="flex items-center gap-2"><span>✔</span> Studio Assist</li>
                <li className="flex items-center gap-2"><span>✔</span> Controlled Lights</li>
                <li className="flex items-center gap-2"><span>✔</span> Video Ready</li>
              </ul>
            </div>
            <div className="glass-panel !p-2 bg-white/10 rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
               <img 
                 src={img5} // Yahan bhi aapki apni image use ho rahi hai
                 className="rounded-[30px] w-full h-full object-cover"
                 alt="Cinematic Wedding"
               />
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <div className="text-center space-y-8 pt-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Ready to capture the <span className="italic font-thin">Magic?</span></h2>
            <Link to="/booking">
              <button className="bg-hsq-peach text-hsq-earth px-16 py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.3em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(252,206,171,0.2)]">
                Book Your Wedding Set
              </button>
            </Link>
          </div>

        </main>
      </div>
    </>
  );
};

export default WeddingSets;