import { Link } from "react-router-dom";
const ProductionServices = () => {
    const coreServices = [
        "Photography",
        "Videography",
        "Art Direction",
    ];

    const extraServices = [
        "Professional Models",
        "Makeup Artists",
        "Fashion Stylists",
        "Set Designers",
        "Lighting Crew",
        "Production Assistants",
    ];

    return (
        <div className="bg-[#f6f1eb] pt-28 pb-20 px-6 md:px-16">

            {/* HERO */}
            <div className="max-w-4xl">
                <h1 className="text-5xl font-extrabold mb-6">
                    Production Services
                </h1>

                <p className="text-black/60 text-lg mb-12 leading-relaxed">
                    From concept to execution — we provide full-scale production support
                    including creative planning, execution, and professional crew setup.
                </p>
            </div>

            {/* CORE SERVICES */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
                {coreServices.map((service, i) => (
                    <div
                        key={i}
                        className="p-8 bg-[#efe7de] border border-black/10 rounded-2xl"
                    >
                        <h3 className="text-xl font-semibold mb-2">{service}</h3>
                        <p className="text-sm text-black/60">
                            High-end professional service tailored for premium production quality.
                        </p>
                    </div>
                ))}
            </div>

            {/* FULL PRODUCTION TEAM SECTION */}
            <div className="bg-[#efe7de] border border-black/10 rounded-2xl p-10 md:p-14 mb-16">

                <h2 className="text-3xl font-bold mb-6">
                    Complete Production Team
                </h2>

                <p className="text-black/60 mb-8">
                    We provide everything you need for a full-scale shoot — from talent
                    to technical crew — all under one roof.
                </p>

                <div className="grid md:grid-cols-3 gap-4 text-sm text-black/70">
                    {extraServices.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span>✔</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                    Need a full production setup?
                </h3>

                <p className="text-black/60 mb-6">
                    Book our complete production team for your next project.
                </p>

                <Link to="/booking">
                    <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-80 transition">
                        Book Production Service
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ProductionServices;