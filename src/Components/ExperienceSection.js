import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl  space-y-10">
        {/* Experience Sagar Darshan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3c5d]">
            Experience Sagar Darshan Somnath
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Somnath is one of the most sacred destinations in India, known for
            the{" "}
            <span className="font-semibold">Somnath Jyotirlinga Temple</span>{" "}
            and its scenic coastal beauty. At{" "}
            <span className="font-semibold">Sagar Darshan Somnath</span>, you
            not only stay close to this divine landmark but also experience the
            calming sound of ocean waves and breathtaking sunsets.
          </p>
        </motion.div>

        {/* Book Your Stay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3c5d]">
            Book Your Stay Today
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold">Sagar Darshan Somnath</span>, we
            welcome you with warmth and care. Whether it’s a short visit or a
            long holiday, our guest house is your home away from home in
            Somnath.
          </p>
          <p className="font-semibold text-lg text-gray-900">
            Namaste, Book Your Rooms Now at Sagar Darshan Guest House!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
