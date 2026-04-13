import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/prop1.png";
import heroVideo from "../assets/hero-video.mp4"; // Video import updated

// --- IMAGES IMPORT (prop1 to prop18) ---
import prop1 from "../assets/prop2.png";
import prop2 from "../assets/prop8.jpeg";
import prop3 from "../assets/prop5.jpeg";
import prop4 from "../assets/prop14.jpeg";
// Note: Agar aapne prop5-prop18 use karni hain to wo bhi aise hi import hongi

const Home = () => {
    return (
        <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">

            {/* 🖼️ STATIC BACKGROUND LAYER */}
            <div className="fixed inset-0 -z-20">
                <img
                    src={heroImage}
                    className="w-full h-full object-cover"
                    alt="Studio Background"
                />
                <div className="absolute inset-0 brand-overlay"></div>
            </div>

            {/* 🧊 MAIN CONTENT WRAPPER */}
            <main className="relative z-10 p-4 md:p-10 max-w-[1600px] mx-auto space-y-12">

                {/* --- HERO GLASS PANEL --- */}
                <section className="glass-panel w-full min-h-[90vh] p-8 md:p-20 flex flex-col justify-between overflow-hidden">

                    {/* NAV BAR */}
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-4">
                        <div className="text-3xl font-black tracking-tighter italic">
                            Rizvi <span className="text-hsq-peach">Studio.</span>
                        </div>

                        <nav className="flex flex-wrap md:flex-nowrap justify-end md:justify-center gap-4 md:gap-10 text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] whitespace-nowrap">
                            <Link to="/gallery" className="hover:text-hsq-peach transition-all">Portfolio</Link>
                            <Link to="/wedding-sets" className="hover:text-hsq-peach transition-all">Wedding</Link>
                            <Link to="/props" className="hover:text-hsq-peach transition-all">Props</Link>
                            <Link to="/contact" className="hover:text-hsq-peach transition-all">Contact</Link>
                        </nav>
                    </div>

                    {/* HERO CONTENT */}
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8 space-y-6">
                            <h1 className="text-7xl md:text-[140px] font-black leading-[0.75] tracking-tighter uppercase">
                                CRAFTING <br />
                                <span className="italic font-thin text-hsq-peach/90">VISIONS</span>
                            </h1>
                            <p className="text-xl text-white/70 max-w-xl font-light leading-relaxed">
                                Lahore's premier destination for high-end TVCs, cinematic fashion shoots, and custom-built architectural sets.
                            </p>
                            <div className="flex gap-5 pt-4">
                                <Link to="/booking">
                                    <button className="bg-white text-hsq-earth px-12 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-hsq-peach transition-all shadow-2xl active:scale-95">
                                        Book Session
                                    </button>
                                </Link>
                                <Link to="/gallery">
                                    <button className="bg-[#413320] border-white/20 px-12 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all">
                                        Explore Sets
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* QUICK STATS */}
                        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                            {[["100+", "Sets"], ["24/7", "Support"], ["15k", "Props"], ["10yr", "Exp"]].map(([val, label]) => (
                                <div key={label} className="glass-panel p-6 border-white/5 bg-white/5 text-center">
                                    <div className="text-2xl font-black text-hsq-peach">{val}</div>
                                    <div className="text-[10px] uppercase tracking-widest opacity-40">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FEATURED SERVICES --- */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="glass-panel p-10 space-y-4 hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 rounded-full border border-hsq-peach/30 flex items-center justify-center mb-4 text-hsq-peach">01</div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter italic">Custom Set Design</h3>
                        <p className="text-sm text-white/50 leading-relaxed">Humein apne vision batayein, hamare art directors aapke liye zero se set khara karenge.</p>
                    </div>

                    <div className="glass-panel p-10 space-y-4 bg-hsq-peach/5 border-hsq-peach/20">
                        <div className="w-12 h-12 rounded-full border border-hsq-peach flex items-center justify-center mb-4 text-hsq-peach">02</div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter italic">Fashion Editorial</h3>
                        <p className="text-sm text-white/50 leading-relaxed">High-end lighting rigs aur international standard backgrounds for premium brands.</p>
                    </div>

                    <div className="glass-panel p-10 space-y-4 hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 rounded-full border border-hsq-peach/30 flex items-center justify-center mb-4 text-hsq-peach">03</div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter italic">Equipment Rental</h3>
                        <p className="text-sm text-white/50 leading-relaxed">Latest Arri/Red setups aur industry-grade lights available on floor.</p>
                    </div>
                </section>

                {/* --- 1. PORTFOLIO MASONRY PREVIEW --- */}
                <section className="space-y-10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 px-4">
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-hsq-peach">Visual Archive</h3>
                            <h2 className="text-5xl font-black uppercase tracking-tighter italic">Featured <span className="font-thin">Work</span></h2>
                        </div>
                        <Link to="/gallery" className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-hsq-peach pb-1 hover:text-hsq-peach transition-all">View All Projects</Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { id: 1, src: prop1, label: "Editorial Shoot" },
                            { id: 2, src: prop2, label: "Fashion Campaign" },
                            { id: 3, src: prop3, label: "Product Set" },
                            { id: 4, src: prop4, label: "TVC Production" },
                        ].map((item) => (
                            <div key={item.id} className="glass-panel !p-0 aspect-[3/4] overflow-hidden group relative border-white/5">
                                <img
                                    src={item.src}
                                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 group-hover:scale-110"
                                    alt={item.label}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all p-6 flex items-end">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-hsq-peach">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- 2. THE PROCESS --- */}
                <section className="glass-panel p-10 md:p-20 bg-white/5 border-white/5">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-hsq-peach">Our Workflow</h3>
                                <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-tight">From Concept <br /> to <span className="font-thin">Reality</span></h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { step: "01", t: "Briefing", d: "Humein apne requirements batayein." },
                                    { step: "02", t: "Set Building", d: "Hamari team physical construction shuru karti hai." },
                                    { step: "03", t: "Production", d: "Professional lights aur sets ke sath shoot karein." }
                                ].map(item => (
                                    <div key={item.step} className="flex gap-6 items-start">
                                        <span className="text-hsq-peach font-black italic text-xl">{item.step}</span>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-widest text-sm">{item.t}</h4>
                                            <p className="text-xs text-white/40">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-[40px] overflow-hidden glass-panel !p-0 border-white/20 group cursor-pointer">
                            <motion.video
                                src={heroVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 1,
                                    transition: { duration: 0.5 }
                                }}
                                className="w-full h-full object-cover opacity-60"
                            />
                        </div>
                    </div>
                </section>

                {/* --- 3. TRUSTED BY --- */}
                <section className="py-10 border-y border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.5em] text-center mb-10 opacity-40 font-bold">Partners in Excellence</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all text-white">
                        <span className="text-2xl font-black tracking-tighter italic">NISHAT</span>
                        <span className="text-2xl font-black tracking-tighter italic">KHAADI</span>
                        <span className="text-2xl font-black tracking-tighter italic">SAPPHIRE</span>
                        <span className="text-2xl font-black tracking-tighter italic">SANA SAFINAZ</span>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="glass-panel p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] uppercase tracking-[0.4em] opacity-40">Shadab, Lahore, Pakistan</p>
                    <div className="flex gap-8">
                        {['Instagram', 'WhatsApp'].map(social => (
                            <a key={social} href="#" className="text-[11px] uppercase tracking-widest hover:text-hsq-peach transition-all">{social}</a>
                        ))}
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.4em] opacity-40">© 2026 Rizvi Studio</p>
                </footer>

            </main>
        </div>
    );
};

export default Home;