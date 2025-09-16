import React from "react";

const WhyChooseUsSection = () => {
  return (
    <div>
      {/* Why Choose Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 flex flex-col justify-center items-center">
        <h2 className="text-2xl w-full max-w-7xl md:text-3xl font-bold text-[#002D5B] mb-8 ">
          Why Choose Sagar Darshan Guest House?
        </h2>
        <ul className="max-w-7xl  w-full space-y-4 text-lg text-gray-700 list-disc list-inside">
          <li>Prime location near Somnath Temple and seashore</li>
          <li>Clean, spacious, and well-maintained rooms</li>
          <li>Friendly staff and homely atmosphere</li>
          <li>Affordable pricing with modern amenities</li>
          <li>
            Easy online <b>room booking facility</b>
          </li>
        </ul>
        <p className="max-w-7xl  w-full space-y-4 text-lg text-gray-700 py-6">
          Whether you are here for a spiritual journey or a relaxing seaside
          vacation, our guest house ensures a memorable stay.
        </p>
      </section>
      ;
    </div>
  );
};

export default WhyChooseUsSection;
