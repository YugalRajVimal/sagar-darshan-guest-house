import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <div>
      {/* Booking Section */}
      <section
        id="booking"
        className="py-16 px-6 md:px-20 flex flex-col justify-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#002D5B] mb-6 text-center">
          Room Book in Sagar Darshan Guest House
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
          Booking your stay is quick and easy. With a variety of room options,
          we cater to solo travelers, couples, and families. Every room is
          designed for comfort and equipped with essential facilities to make
          your visit stress-free.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { name: "Sea View Room", price: "3800", img: "/1room.png" },
            { name: "2 Bed Sea View Room", price: "4800", img: "/2room.png" },
            {
              name: "Luxury Suit with Jacuzzi",
              price: "4000",
              img: "/3room.png",
            },
            { name: "Luxury Room", price: "3500", img: "/4room.png" },
          ].map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={room.img}
                alt={room.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-5 space-y-3 text-center">
                <h3 className="font-semibold text-lg">
                  {room.name} <br /> Rs.{room.price}/-
                </h3>
                <a
                  href="tel:+918769751266"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#002D5B] text-white rounded-md hover:bg-[#004080]"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BookingSection;
