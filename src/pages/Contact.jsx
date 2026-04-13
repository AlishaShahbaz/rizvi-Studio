import { Link } from "react-router-dom";
import heroImage from "../assets/prop10.jpeg";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (<>
        <Navbar />
        <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">
            {/* 🖼️ FIXED BACKGROUND */}
            <div className="fixed inset-0 -z-20">
                <img
                    src={heroImage}
                    className="w-full h-full object-cover"
                    alt="Contact Background"
                />
                <div className="absolute inset-0 brand-overlay"></div>
            </div>

            {/* Main Content Area - Padding increased to pt-72 to clear the Navbar height */}
            <main className="relative z-10 p-6 md:p-10 max-w-[1600px] mx-auto pt-72 pb-24 space-y-12">

                {/* --- MINIMALIST BREADCRUMBS --- */}
                {/* ml-4 used for better horizontal alignment with the boxes below */}
                <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 ml-4 mt-32 md:mt-40 mb-6">
    <Link to="/" className="hover:text-hsq-peach transition-colors text-white">Home</Link>
    <span className="text-white/20">/</span>
    <span className="text-hsq-peach">Contact Us</span>
</nav>

                {/* --- MAIN GRID --- */}
                <div className="grid md:grid-cols-12 gap-10 items-start">

                    {/* LEFT - FORM PANEL */}
                    <div className="md:col-span-7 glass-panel p-8 md:p-12 space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-hsq-peach">Inquiry Form</h3>
                            <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Get in <span className="font-thin">Touch</span></h2>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-hsq-peach/50 transition-all font-light"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-hsq-peach/50 transition-all font-light"
                                />
                            </div>
                            <textarea
                                placeholder="Tell us about your project requirements..."
                                rows="6"
                                className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-hsq-peach/50 transition-all font-light"
                            />

                            <button className="w-full md:w-auto bg-white text-hsq-earth px-16 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-hsq-peach transition-all shadow-2xl active:scale-95">
                                Submit Message
                            </button>
                        </form>
                    </div>

                    {/* RIGHT - INFO PANEL */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="glass-panel p-10 space-y-10 border-hsq-peach/20 bg-hsq-peach/5">
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-hsq-peach/60">Visit Studio</h3>
                                <p className="text-2xl font-bold tracking-tighter italic uppercase">Gulberg III, Lahore</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-hsq-peach/60">Direct Line</h3>
                                <p className="text-2xl font-bold tracking-tighter italic uppercase">+92 300 1234567</p>
                                <p className="text-white/60 font-light">hello@rizvistudio.com</p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-hsq-peach/60">Socials</h3>
                                <div className="flex gap-8">
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-hsq-peach transition-all">Instagram</a>
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-hsq-peach transition-all">WhatsApp</a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 bg-white/5 border-white/5 text-center space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-60 italic">Reserved Slots Only</p>
                            <Link to="/booking" className="block w-full border border-white/20 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                                Check Availability
                            </Link>
                        </div>
                    </div>
                </div>

                <footer className="text-center pt-20 opacity-30">
                    <p className="text-[9px] uppercase tracking-[0.6em] font-bold">
                        Elevating Content Creation • Rizvi Studio
                    </p>
                </footer>
            </main>
        </div>
    </>
    );
};

export default Contact;