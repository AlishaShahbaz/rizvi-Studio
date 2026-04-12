import React, { useState } from 'react';
import { Link } from "react-router-dom";
import heroImage from "../assets/prop1.png"; 
import Navbar from '../components/Navbar';

// --- CLEANED IMPORTS (No Spaces) ---
import feature_studio from "../assets/prop18.jpeg";
import prop1 from "../assets/prop1.png";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";
import prop4 from "../assets/prop4.jpeg";
import prop5 from "../assets/prop15.jpeg"; 


const Gallery = () => {
  // Array mein prop5 ko top par rakha hai lambi image ke liye
  const myProjects = [
    { id: 5, img: prop5, title: "Editorial Vision", category: "Sets" }, 
    { id: 1, img: prop1, title: "Fashion Campaign", category: "Fashion" },
    { id: 2, img: prop2, title: "Commercial Setup", category: "Commercial" },
    { id: 3, img: prop3, title: "Architectural Set", category: "Sets" },
    { id: 4, img: prop4, title: "Studio Production", category: "Commercial" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">
        
        {/* 🖼️ FIXED BACKGROUND */}
        <div className="fixed inset-0 -z-20">
          <img src={heroImage} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 brand-overlay"></div>
        </div>

        <main className="relative z-10 p-4 md:p-10 max-w-[1600px] mx-auto pt-32 pb-20 space-y-20">

          {/* BREADCRUMBS */}
          <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 ml-4 mt-32 md:mt-40 mb-6">
            <Link to="/" className="hover:text-hsq-peach transition-colors text-white">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-hsq-peach">Portfolio</span>
          </nav>

          {/* --- PORTFOLIO GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
            {myProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden glass-panel !p-0 border-white/10 ${
                  i === 0 ? 'row-span-2' : '' // Pehli image (prop5) lambi show hogi
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-[10px] text-hsq-peach uppercase tracking-[0.3em] font-bold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tighter italic">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* --- FEATURE SECTION --- */}
          <section className="glass-panel p-8 md:p-16 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
                Built for <br />
                <span className="text-hsq-peach italic font-light">Creative Freedom</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                Every project is crafted inside our production ecosystem. 
                From high-end lighting to architecture-grade props.
              </p>
              <Link to="/props">
                <button className="bg-white text-hsq-earth px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-hsq-peach transition-all">
                  Explore Props Library
                </button>
              </Link>
            </div>

            <div className="glass-panel !p-2 border-white/5 overflow-hidden rotate-2 group hover:rotate-0 transition-transform duration-700">
              <img
                src={feature_studio} 
                className="w-full h-full object-cover rounded-[30px]"
                alt="Studio Setup"
              />
            </div>
          </section>

          {/* CTA */}
          <section className="glass-panel py-20 text-center space-y-8 border-hsq-peach/20 bg-hsq-peach/5">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Ready to <span className="italic font-thin">Create?</span>
            </h2>
            <Link to="/booking">
              <button className="bg-hsq-peach text-hsq-earth px-14 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-all shadow-2xl">
                Book Your Shoot Now
              </button>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default Gallery;