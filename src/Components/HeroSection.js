import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute h-full w-full bg-black/60"></div>
        <div className="bg-black bg-opacity-40 z-50 p-6 rounded-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl text-white font-bold mb-6"
          >
            Book Your Stay At Sagar Darshan Guest House
          </motion.h2>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:+918769751266"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
            >
              <Phone size={20} /> Call Now
            </a>
            <a
              href="https://wa.me/+918769751266"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600"
            >
              <MessageCircle size={20} /> Whatsapp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
