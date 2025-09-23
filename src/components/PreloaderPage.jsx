import React, { useState, useEffect } from "react";

import logo from "../assets/images/logo.jpeg";
import Home from "../pages/Home";

const PreloaderPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader" id="preloader">
        <img src={logo} alt="logo" />
      </div>
    );
  }
  return (
    <>
      <Home />
    </>
  );
};

export default PreloaderPage;
