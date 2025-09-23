import React from "react";

import img1 from "../assets/images/img-12.jpeg";
import img2 from "../assets/images/img-5.jpeg";
import img3 from "../assets/images/img-15.jpeg";
import img4 from "../assets/images/img-16.jpeg";
import img5 from "../assets/images/img-10.jpeg";
import img6 from "../assets/images/img-8.jpeg";
import img7 from "../assets/images/img-7.jpeg";
import img8 from "../assets/images/img-17.jpeg";
import img9 from "../assets/images/img-4.jpeg";
import img10 from "../assets/images/img-20.jpeg";
import img11 from "../assets/images/img-13.jpeg";
import img12 from "../assets/images/img-18.jpeg";

import { FaPlus } from "react-icons/fa6";

const portfolioImg = [
  { id: 1, img: img1, icon: <FaPlus /> },
  { id: 2, img: img2, icon: <FaPlus /> },
  { id: 3, img: img4, icon: <FaPlus /> },
  { id: 4, img: img4, icon: <FaPlus /> },
  { id: 5, img: img5, icon: <FaPlus /> },
  { id: 6, img: img6, icon: <FaPlus /> },
  { id: 7, img: img7, icon: <FaPlus /> },
  { id: 8, img: img8, icon: <FaPlus /> },
  { id: 9, img: img9, icon: <FaPlus /> },
  { id: 10, img: img10, icon: <FaPlus /> },
  { id: 11, img: img11, icon: <FaPlus /> },
  { id: 12, img: img12, icon: <FaPlus /> },
];

const PortfolioSection = () => {
  return (
    <section className="bg-light-radial bg-[#F4F6F8]">
      <div className="custom-space-4">
        <div className="text-center">
          <h1 className="uppercase text-5xl font-bold leading-16">
            some of our <span className="text-[rgb(14,239,29)]">popular</span>{" "}
            <br />
            projects
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 portfolio-item">
          {portfolioImg.map(({ id, img, icon }) => {
            return (
              <div key={id} className="portfolio-box relative">
                <img src={img} alt="" className="h-100 w-100" />
                <a href="" className="portfolio-btn">
                  <i className="text-white">{icon}</i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
