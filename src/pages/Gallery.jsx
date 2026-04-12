import React, { useState } from 'react';
import { projects } from '../constants/data';
import { Link } from "react-router-dom";


const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Fashion', 'Commercial', 'Sets'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#f6f1eb] text-[#2b2b2b] min-h-screen pt-28 pb-20 px-6 md:px-16">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          Selected Work
        </h2>
        <p className="text-black/60 text-lg">
          A curated collection of fashion, commercial and set design projects.
        </p>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm uppercase tracking-widest pb-1 border-b transition ${
              filter === cat
                ? 'border-black text-black'
                : 'border-transparent text-black/40 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
    {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
  {filteredProjects.map((project, i) => (
    <div
      key={project.id}
      className={`group relative overflow-hidden rounded-2xl ${
        i % 5 === 0 ? 'row-span-2' : ''
      }`}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
        <p className="text-xs text-[#d6a77a] uppercase tracking-widest mb-1">
          {project.category}
        </p>
        <h3 className="text-white text-xl font-semibold">
          {project.title}
        </h3>
      </div>
    </div>
  ))}
</div>


      {/* FEATURE SECTION */}
      <section className="mt-32 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Built for Creative Freedom
          </h2>
          <p className="text-black/60 leading-relaxed">
            Every project you see here is crafted inside our production ecosystem.
            From lighting to props — everything is designed to elevate your vision.
          </p>

          <button className="border-b border-black text-sm uppercase tracking-widest">
            Explore Sets
          </button>
        </div>

        <div className="rounded-[30px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


      {/* CTA */}
      <section className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Create Something Exceptional
        </h2>
        <Link to="/booking">
        <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#b07a6e] transition">
          Book Your Shoot
        </button>
        </Link>
      </section>

    </div>
  );
};

export default Gallery;