import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div>
      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#002D5B] mb-4">
            Welcome to Sagar Darshan Guest House
          </h2>
          <h3 className="text-xl font-semibold mb-3">
            Your Comfort Stay Near Somnath
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Looking for a peaceful and affordable stay by the sea?{" "}
            <b>Sagar Darshan Guest House</b> is the perfect choice for
            travelers, pilgrims, and families visiting Somnath. Located close to
            the famous Somnath Temple and the serene Arabian Sea, our guest
            house offers a blend of comfort, hospitality, and convenience.
          </p>
          {/* <a
            href="#about"
            className="inline-block px-6 py-3 bg-[#002D5B] text-white rounded-lg hover:bg-[#004080]"
          >
            📖 Read More
          </a> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/about.png"
            alt="Guest House"
            className="rounded-tl-[60px] rounded-br-[60px] shadow-lg border-orange-400 border-[3px]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;
