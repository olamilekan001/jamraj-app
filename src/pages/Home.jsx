import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import VideoGallerySection from "../components/VideoGallerySection";
import PreloaderPage from "../components/PreloaderPage";

const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <PreloaderPage />
      ) : (
        <>
          <Banner />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <VideoGallerySection />
        </>
      )}
    </>
  );
};

export default Home;
