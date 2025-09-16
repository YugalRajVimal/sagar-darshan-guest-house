import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection";
import BookingSection from "./Components/BookingSection";
import ExperienceSection from "./Components/ExperienceSection";
import TourismInSomnath from "./Components/TourismInSomnath";
import Footer from "./Components/Footer";

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
    </div>
  );
};

export default App;
