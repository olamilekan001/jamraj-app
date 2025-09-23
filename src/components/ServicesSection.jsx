import React from "react";

import img1 from "../assets/img/service-1.jpg";
import img2 from "../assets/img/construct2.jpg";
import img3 from "../assets/img/construct3.jpg";
import img4 from "../assets/img/construct4.jpg";
import img5 from "../assets/img/service-5.jpg";
import img6 from "../assets/img/construct7.jpg";

import { FaBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    id: 1,
    img: img1,
    title: "BUILDING CONSTRUCTION",
    text: "We specialize in delivering high-quality building construction services—from concept to completion. Whether it's residential homes, commercial properties, or multi-unit developments, our team ensures every project is built to the highest standards, using durable materials and modern construction techniques. We handle everything from site preparation and structural design to finishing and compliance, providing you with a seamless and stress-free construction experience",
    icon: <FaBuilding />,
  },

  {
    id: 2,
    img: img2,
    title: "HOUSE RENOVATION",
    text: " We offer professional house renovation services designed to refresh, upgrade, and modernize your living space. Whether you're remodeling a kitchen, renovating bathrooms, or transforming an entire home, our skilled team ensures top-quality workmanship and thoughtful design. We manage every step—from planning and material selection to finishing touches—bringing new life to your property while increasing its beauty, functionality, and long-term value.",
    icon: <FaHome />,
  },

  {
    id: 3,
    img: img3,
    title: "ARCHITECTURE DESIGN",
    text: "Our architecture design service blends creativity with functionality to bring your vision to life. From residential homes to commercial spaces, we create thoughtful, efficient designs tailored to your needs and lifestyle.We focus on aesthetics, sustainability, and structural integrity.Ensuring each project is both beautiful and buildable. With close attention to detail, we guide you from concept development through to final architectural drawings.",
    icon: <FaDraftingCompass />,
  },

  {
    id: 4,
    img: img4,
    title: "INTERIOR DESIGN",
    text: "Our interior design service transforms spaces into stylish, functional environments that reflect your taste and lifestyle. Whether it’s a new build or a renovation, we curate layouts, materials, colors, and furnishings to achieve a harmonious look and feel. From concept to execution, we ensure every detail enhances comfort and aesthetics—creating interiors that are both visually striking and perfectly tailored to your needs.",
    icon: <IoMdColorPalette />,
  },

  {
    id: 5,
    img: img5,
    title: "FIXING & SUPPORT",
    text: "Our fixing and support service ensures your property remains in top condition with reliable, timely maintenance solutions. From minor repairs to technical fixes, we handle plumbing, electrical, carpentry, and structural issues with professionalism and care. We prioritize safety, durability, and quick response—giving you peace of mind. Whether it’s routine upkeep or urgent support, our team is here to keep things running smoothly",
    icon: <FaTools />,
  },

  {
    id: 6,
    img: img6,
    title: "PAINTING",
    text: "Our professional painting service adds the perfect finishing touch to your property, inside and out. We offer expert color consultation, surface preparation, and flawless application using high-quality, long-lasting paints. Whether it’s a fresh coat for a new space or a full repaint for renovation, we deliver smooth, vibrant results. With attention to detail and clean execution, we enhance your property’s beauty and appeal.",
    icon: <FaPaintBrush />,
  },
];
const ServicesSection = () => {
  return (
    <section className="custom-space-4">
      <div className="text-center text-5xl font-bold custom-space-2">
        <h1>WE PROVIDE <span className="text-[rgb(14,239,29)] leading-16">THE BEST</span> <br/> CONSTRUCTION SERVICES</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.map(({ id, img, title, text, icon }) => {
          return (
            <div
              key={id}
              className="service-item bg-white flex flex-col items-center text-center"
            >
              <img src={img} alt="" />
              <div className="service-icon bg-white">
                <i className="text-5xl text-[rgb(14,239,29)]">{icon}</i>
              </div>
              <div>
                <h4 className="font-bold text-2xl">{title}</h4>
                <p className="text-start leading-6  text-[rgb(119,119,119)]">{text}</p>
                <a
                  href=""
                  className="flex items-center text-center justify-center text-[rgb(14,239,29)] mt-4"
                >
                  READ MORE <FaArrowRightLong />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
