import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import VideoGallerySection from "../components/VideoGallerySection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <VideoGallerySection />
    </>
  );
};

export default Home;
