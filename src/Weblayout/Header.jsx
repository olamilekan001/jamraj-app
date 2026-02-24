import React, { useState } from "react";
import logo from "../assets/images/logo-2.jpeg";
import { pageLinks } from "../data";
import { Link, NavLink } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-dark-radial bg-dark w-full h-[95%] top-0 left-0 sticky section-padding z-50">
      <div className="flex justify-between items-center h-full">
        <div className="flex flex-grow-1 lg:flex-grow-0 items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="" width={90} className="mr-2" />
          </Link>

          <button
            className="lg:hidden cursor-pointer border menu-button text-dark rounded"
            onClick={handleMenu}
          >
            <i className="text-3xl text-red-500">
              <CiMenuBurger />
            </i>
          </button>
        </div>
        <div
          className={`lg:flex list lg:items-center lg:gap-5 text-xl fixed lg:static top-23 left-0 lg:h-fit lg:w-fit bg-dark-radial w-full bg-dark transition-all duration-300 space-y-5 ml-2 lg:translate-x-0 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {pageLinks.map(({ id, path, text }) => (
            <div
              key={id}
              className="uppercase text-[rgba(239,213,14,0.89)] hover:text-green-500  nav-link pb-5 flex"
            >
              <NavLink to={path} className={`btn-2`}>
                {text}
              </NavLink>
            </div>
          ))}
          {/* <a
            href="https://www.instagram.com/jamrajbuilders?igsh=eW9xeDAyNHFlMmtk&utm_source=ig_contact_invite"
            target="_blank"
            className="btn bg-[rgba(239,213,14,0.89)] text-[rgba(175,14,239,0.89)] rounded-xl flex items-center gap-1 uppercase cursor-pointer"
          >
            Get a Quote
            <FaArrowRightLong />
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
