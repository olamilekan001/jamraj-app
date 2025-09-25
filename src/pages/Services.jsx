import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import PreloaderPage from "../components/PreloaderPage";

const Services = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <PreloaderPage />
      ) : (
        <>
          <Banner />
          <ServicesSection />
        </>
      )}
    </>
  );
};

export default Services;
