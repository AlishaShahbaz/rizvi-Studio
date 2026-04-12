import React, { useState } from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/prop1.png"; 

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "Fashion Shoot",
    date: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // ✅ format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    const phoneNumber = "923001234567"; // Apna number yahan add karein

    const text =
      `🎬 *New Booking Request - RIZVI STUDIO*%0A%0A` +
      `👤 Name: ${formData.name}%0A` +
      `🎯 Service: ${formData.service}%0A` +
      `📅 Date: ${formatDate(formData.date)}%0A` +
      `📝 Details:%0A${formData.message}%0A%0A` +
      `---%0A` +
      `Sent via Portfolio Website`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white font-sans selection:bg-hsq-peach selection:text-hsq-earth">
        
        {/* 🖼️ FIXED BACKGROUND (Consistency with other pages) */}
        <div className="fixed inset-0 -z-20">
          <img 
            src={heroImage}
            className="w-full h-full object-cover" 
            alt="Background"
          />
          <div className="absolute inset-0 brand-overlay"></div>
        </div>

        <main className="relative z-10 flex items-center justify-center pt-40 pb-20 px-6">
          
          {/* --- GLASS FORM CARD --- */}
          <div className="w-full max-w-2xl glass-panel p-8 md:p-16 space-y-10 border-white/10 backdrop-blur-2xl">
            
            {/* HEADER */}
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Reserve Your <br />
                <span className="text-hsq-peach italic font-thin">Session</span>
              </h2>
              <p className="text-white/50 text-sm uppercase tracking-[0.2em] font-bold">
                Connect with us instantly via WhatsApp
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">

              {/* NAME */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-hsq-peach ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-hsq-peach/50 transition-all text-white placeholder:text-white/20"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* SERVICE */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-hsq-peach ml-1">Service Type</label>
                  <select
                    className="w-full p-5 rounded-2xl bg-[#1a1a1a] border border-white/10 outline-none focus:border-hsq-peach/50 transition-all text-white appearance-none"
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option className="bg-black">Fashion Shoot</option>
                    <option className="bg-black">Commercial TVC</option>
                    <option className="bg-black">Studio Rental</option>
                    <option className="bg-black">Post Production</option>
                  </select>
                </div>

                {/* DATE */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-hsq-peach ml-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-hsq-peach/50 transition-all text-white custom-calendar-icon"
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-hsq-peach ml-1">Project Details</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your creative vision..."
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-hsq-peach/50 transition-all text-white placeholder:text-white/20 resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-6 rounded-full bg-hsq-peach text-hsq-earth font-black uppercase text-xs tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(252,206,171,0.2)]"
              >
                Send Request via WhatsApp
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-center text-hsq-peach text-xs font-bold uppercase tracking-widest animate-pulse">
                  Redirecting to WhatsApp...
                </p>
              )}
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Booking;