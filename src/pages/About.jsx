import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "../components/AboutSection";
import PreloaderPage from "../components/PreloaderPage";

const About = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PreloaderPage />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Banner />
          <AboutSection />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;
