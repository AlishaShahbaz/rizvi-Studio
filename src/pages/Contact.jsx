const Contact = () => {
  return (
    <div className="bg-[#f6f1eb] pt-28 pb-24 px-6 md:px-16">

      {/* HEADER */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Let’s Talk
        </h1>
        <p className="text-black/60 text-lg">
          Have a project in mind? We’d love to hear about it. 
          Fill out the form or reach us directly.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - FORM */}
        <div className="space-y-6">

          <div className="space-y-4">
            <input
              placeholder="Your Name"
              className="w-full p-4 border border-black/20 rounded-xl bg-transparent focus:outline-none focus:border-black transition"
            />
            <input
              placeholder="Email Address"
              className="w-full p-4 border border-black/20 rounded-xl bg-transparent focus:outline-none focus:border-black transition"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
              className="w-full p-4 border border-black/20 rounded-xl bg-transparent focus:outline-none focus:border-black transition"
            />
          </div>

          <button className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#b07a6e] transition">
            Send Message
          </button>
        </div>

        {/* RIGHT - INFO PANEL */}
        <div className="bg-[#efe7de] p-10 rounded-[30px] space-y-8">

          <div>
            <h3 className="text-sm uppercase tracking-widest text-black/50 mb-2">
              Location
            </h3>
            <p className="text-lg font-medium">
              Gulberg III, Lahore
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-black/50 mb-2">
              Contact
            </h3>
            <p className="text-lg font-medium">+92 300 1234567</p>
            <p className="text-black/60">hello@hsqprod.com</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-black/50 mb-2">
              Social
            </h3>
            <div className="flex gap-4 text-sm">
              <span className="hover:underline cursor-pointer">Instagram</span>
              <span className="hover:underline cursor-pointer">WhatsApp</span>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-24">
        <h2 className="text-3xl font-bold mb-4">
          Prefer a quick booking?
        </h2>
        <a
          href="/booking"
          className="inline-block border border-black px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          Go to Booking
        </a>
      </div>

    </div>
  );
};

export default Contact;