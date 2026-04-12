import React, { useState } from "react";

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

    // ✅ validation
    if (!formData.name || !formData.date || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    const phoneNumber = "923001234567";

    const text =
      `🎬 *New Booking Request - HSQ Productions*%0A%0A` +
      `👤 Name: ${formData.name}%0A` +
      `🎯 Service: ${formData.service}%0A` +
      `📅 Date: ${formatDate(formData.date)}%0A` +
      `📝 Details:%0A${formData.message}%0A%0A` +
      `---%0A` +
      `Sent via HSQ Website`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // ✅ success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div
      className="min-h-screen pt-28 pb-20 px-6 md:px-16 flex items-center justify-center"
      style={{ backgroundColor: "rgb(246,241,235)" }}
    >
      {/* CARD */}
      <div
        className="w-full max-w-2xl rounded-[30px] p-10 md:p-14 space-y-8 shadow-sm border"
        style={{
          backgroundColor: "rgb(239,231,222)",
          borderColor: "rgba(80,64,39,0.1)",
        }}
      >
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "rgb(80,64,39)" }}
          >
            Book Your Shoot
          </h2>

          <p style={{ color: "rgba(80,64,39,0.6)" }}>
            Fill the details below and we’ll connect you on WhatsApp.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleWhatsAppRedirect} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-transparent border outline-none transition"
            style={{
              borderColor: "rgba(80,64,39,0.2)",
              color: "rgb(80,64,39)",
            }}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          {/* SERVICE */}
          <select
            className="w-full p-4 rounded-xl bg-transparent border outline-none transition"
            style={{
              borderColor: "rgba(80,64,39,0.2)",
              color: "rgb(80,64,39)",
            }}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          >
            <option>Fashion Shoot</option>
            <option>Commercial TVC</option>
            <option>Studio Rental</option>
            <option>Post Production</option>
          </select>

          {/* DATE */}
          <input
            type="date"
            required
            className="w-full p-4 rounded-xl bg-transparent border outline-none transition"
            style={{
              borderColor: "rgba(80,64,39,0.2)",
              color: "rgb(80,64,39)",
            }}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />

          {/* MESSAGE */}
          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full p-4 rounded-xl bg-transparent border outline-none transition"
            style={{
              borderColor: "rgba(80,64,39,0.2)",
              color: "rgb(80,64,39)",
            }}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-full text-xs uppercase tracking-widest transition"
            style={{
              backgroundColor: "rgb(246,241,235)",
              color: "rgb(80,64,39)",
            }}
          >
            Send on WhatsApp
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p style={{ color: "green", marginTop: "10px" }}>
              Booking sent successfully!
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Booking;