import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 

// --- CLEAN & RENAMED IMPORTS (prop1 to prop18 format) ---
import propHeroBG from "../assets/prop1.png"; // Hero/Background setup
import prop1 from "../assets/prop1.png";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";
import prop4 from "../assets/prop4.jpeg";
import prop5 from "../assets/prop5.jpeg"; 
import prop6 from "../assets/prop6.jpeg"; 
import prop7 from "../assets/prop7.jpeg"; 
import prop8 from "../assets/prop8.jpeg"; 
import prop9 from "../assets/prop9.jpeg"; 
import prop10 from "../assets/prop10.jpeg";
// Agar prop11 se prop18 tak use karni hain to wo bhi isi tarah add kar lein.

const Props = () => {
    const propItems = [
        { src: prop1, name: "Luxury Setup", cat: "Studio Tools" },
        { src: prop2, name: "Vintage Piece", cat: "Antique Collection" },
        { src: prop3, name: "Modern Prop", cat: "Creative Objects" },
        { src: prop4, name: "Minimal Accent", cat: "Studio Tools" },
        { src: prop5, name: "Texture Backdrop", cat: "Textured Backdrops" },
        { src: prop6, name: "Production Gear", cat: "Studio Tools" },
        { src: prop7, name: "Aesthetic Object", cat: "Creative Objects" },
        { src: prop8, name: "Premium Chair", cat: "Luxury Items" },
        { src: prop9, name: "Art Deco", cat: "Vintage Props" },
        { src: prop10, name: "Grand Asset", cat: "Luxury Items" },
    ];

    return (
        <>
        <Navbar/>
        <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">

            {/* --- FIXED BACKGROUND LAYER --- */}
            <div className="fixed inset-0 -z-20">
                <img
                    src={propHeroBG} 
                    className="w-full h-full object-cover"
                    alt="Props Page Background"
                />
                <div className="absolute inset-0 brand-overlay"></div>
            </div>

            {/* --- SECTION CONTENT LAYER --- */}
            <main className="relative z-10 p-4 md:p-10 max-w-[1600px] mx-auto pt-32 pb-20 space-y-12">
                
                {/* BREADCRUMBS */}
                <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 ml-4 mt-32 md:mt-40 mb-6">
                    <Link to="/" className="hover:text-hsq-peach transition-colors text-white">Home</Link>
                    <span className="text-white/20">/</span>
                    <span className="text-hsq-peach">PROP LIBRARY</span>
                </nav>

                {/* --- PROCESS STEPS --- */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { step: "01", title: "Browse", desc: "Explore our categorized digital catalog." },
                        { step: "02", title: "Select", desc: "Choose items that match your creative theme." },
                        { step: "03", title: "Create", desc: "Integrate assets into your set seamlessly." }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel p-8 bg-white/5 border-white/5 hover:bg-white/10 transition-all">
                            <span className="text-hsq-peach font-black text-sm tracking-widest uppercase italic">{item.step} — Process</span>
                            <h3 className="font-bold text-2xl mt-2 tracking-tighter uppercase italic">{item.title}</h3>
                            <p className="text-white/50 text-sm mt-2 font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- CATEGORIES --- */}
                <section className="space-y-6">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 ml-2">Popular Categories</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        {["Vintage Props", "Luxury Items", "Studio Tools", "Creative Objects", "Textured Backdrops"].map((cat) => (
                            <div key={cat} className="min-w-[220px] glass-panel !p-5 !rounded-full text-center text-[10px] font-bold uppercase tracking-widest border-white/10 hover:border-hsq-peach/50 cursor-pointer transition-all bg-white/5">
                                {cat}
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PROP GRID --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {propItems.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="glass-panel !p-0 aspect-square overflow-hidden mb-4 border-white/5 relative">
                                <img
                                    src={item.src} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 opacity-90 group-hover:opacity-100"
                                    alt={item.name}
                                />
                                <div className="absolute inset-0 bg-hsq-peach/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="px-2 space-y-1">
                                <p className="text-xs font-bold uppercase tracking-widest group-hover:text-hsq-peach transition-colors">
                                    {item.name}
                                </p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest italic font-bold">
                                    {item.cat}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FINAL CTA --- */}
                <section className="glass-panel py-20 text-center space-y-8 bg-white/5 border-white/5">
                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            Need specific <span className="italic font-thin text-hsq-peach">Assets?</span>
                        </h3>
                        <p className="text-white/50 font-light max-w-md mx-auto">
                            Our library is constantly growing. Reserve items for your next big campaign instantly.
                        </p>
                    </div>
                    <Link to="/booking">
                        <button className="bg-white text-hsq-earth px-14 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-hsq-peach transition-all shadow-2xl">
                            Book Props Now
                        </button>
                    </Link>
                </section>

            </main>
        </div>
        </>
    );
};

export default Props;