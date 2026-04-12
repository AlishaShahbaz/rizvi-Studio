import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/gallery" },
    { name: "Wedding Sets", path: "/wedding-sets" },
    { name: "Spaces", path: "/rental-spaces" },
    { name: "Sets", path: "/pre-made-sets" },
    { name: "Props", path: "/props" },
    { name: "Services", path: "/production-services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#f6f1eb]/80 backdrop-blur-md border-b border-black/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-black"
        >
          ABC <span className="text-[#b07a6e]">PROD.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/booking"
            className="ml-4 bg-black text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#b07a6e] transition"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#f6f1eb] border-t border-black/10 px-6 py-8 flex flex-col gap-6 shadow-xl">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-black text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-black text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;