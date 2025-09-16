import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection";
import BookingSection from "./Components/BookingSection";
import ExperienceSection from "./Components/ExperienceSection";
import TourismInSomnath from "./Components/TourismInSomnath";
import Footer from "./Components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <BookingSection />
      <ExperienceSection />
      <TourismInSomnath />
      <Footer />
      <div className="fixed flex h-[150px] items-center  justify-between p-6 md:p-10 w-full bottom-[20px] sm:bottom-0 left-0 ">
        <a href={`tel:+918769751266`} className="">
          <FaPhoneAlt className="text-5xl text-white bg-black p-2 rounded-full" />
        </a>
        <a href={`http://wa.me/+918769751266`}>
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </div>
  );
};

export default App;
