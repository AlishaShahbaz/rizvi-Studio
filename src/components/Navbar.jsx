import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", path: "/gallery" },
    { name: "Wedding Sets", path: "/wedding-sets" },
    { name: "Props", path: "/props" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div
          className={`glass-panel flex justify-between items-center px-8 py-4 transition-all duration-500 ${isScrolled
              ? "bg-black/60 backdrop-blur-xl border-white/20 shadow-2xl"
              : "bg-black/20 backdrop-blur-md border-white/10 shadow-lg"
            }`}
        >
          {/* LOGO */}
          <Link to="/" className="group">
            <div className="text-2xl md:text-3xl font-black tracking-tighter italic text-white">
              Rizvi <span className="text-hsq-peach group-hover:text-white transition-colors">Studio.</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:text-hsq-peach relative group ${location.pathname === link.path ? "text-hsq-peach" : "text-white/70"
                    }`}
                >
                  {link.name}
                  {/* Active Indicator Dot */}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-hsq-peach transition-all duration-300 ${location.pathname === link.path ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
                    }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-6">
            <Link to="/booking" className="hidden md:block">
              <button className="bg-white text-hsq-earth px-8 py-3 rounded-full font-bold uppercase text-[9px] tracking-widest hover:bg-hsq-peach transition-all active:scale-95 shadow-lg">
                Book A Set
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-hsq-peach mb-1.5 transition-all"></div>
              <div className="w-4 h-0.5 bg-white transition-all"></div>
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div className={`lg:hidden fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl transition-all duration-700 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
          }`}>
          <button
            className="absolute top-10 right-10 text-white text-4xl font-thin"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter italic hover:text-hsq-peach transition-all"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="mt-8 bg-hsq-peach text-hsq-earth px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-widest">
              Reserve Space
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;