import React from "react";
import logo from "../assets/images/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { pageLinks } from "../data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";
import { useState, useEffect } from "react";

const Footer = () => {
  const [visible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-dark-radial bg-dark section-padding">
      <div className="lg:flex items-center justify-between">
        <div>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" width={90} />
            </Link>
          </div>
          <p className="flex items-center gap-2 text-[16px] text-amber-50 font-bold custom-space">
            <FaLocationDot />
            NO 20, DURO ADEWALE STREET, ABARANJE, IKOTUN LAGOS..
          </p>
          <p className="flex items-center gap-2 text-[16px] text-amber-50 font-bold custom-space">
            <FaPhoneAlt />
            07084659570, 08061468865.
          </p>
          <p className="flex items-center gap-2 text-[16px] text-amber-50 font-bold custom-space">
            <CiMail />
            jamrajconstruction@gmail.com
          </p>

          <div className="flex gap-1 custom-space">
            <a
              href="https://web.facebook.com/profile.php?id=61579927739312"
              target="_blank"
              className="text-xl bg-[#0eef1d] social text-amber-50 custom-space  btn-lg-square btn btn-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/jamrajbuilders?igsh=eW9xeDAyNHFlMmtk&utm_source=ig_contact_invite"
              target="_blank"
              className="text-xl bg-[#0eef1d] social text-amber-50 custom-space  btn-lg-square btn btn-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="lg:flex gap-15 custom-space-2">
            <div className="">
              <h2 className="text-2xl uppercase text-white custom-space font-bold">
                Quick Links
              </h2>
              <div className="">
                {pageLinks.map(({ id, text, path }) => (
                  <NavLink
                    key={id}
                    to={path}
                    className={`flex items-center text-xl text-amber-50`}
                  >
                    <MdKeyboardArrowRight />
                    {text}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="">
              <h2 className="mb-2 text-2xl uppercase custom-space text-white font-bold">
                Popular Links
              </h2>
              <div>
                {pageLinks.map(({ id, text, path }) => (
                  <NavLink
                    key={id}
                    to={path}
                    className={`flex items-center text-xl text-amber-50`}
                  >
                    <MdKeyboardArrowRight />
                    {text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="custom-space mr-7">
            <h1 className="custom-space text-2xl uppercase font-bold text-amber-50">
              News letter
            </h1>

            <form>
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder={`Your Email Address`}
                  className="input placeholder:text-gray-400 bg-amber-50 outline-0"
                />
                <button className="bg-[#0eef1d] rounded-r-xl rounded-br-xl uppercase btn-2 text-white font-medium">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between custom-space">
        <div>
          <p className="footer-name text-white">
            &copy;
            <Link to={"/"} className="text-[rgb(14,239,29)]">
              jamraj-builders.com.ng
            </Link>
            All Right Reserved
          </p>
        </div>

        <div className="footer-shape relative bg-[rgb(14,239,29)]">
          <p className="footer-name text-white">
            Designed by
            <a href="" className="text-black">
              {" "}
              CODE & CANVA
            </a>
          </p>
        </div>
      </div>

      {visible && (
        <div className="lg:flex justify-center back-to-top">
          <button
            className="btn-3 bg-[rgb(14,239,29)] rounded-[50%]  btn"
            onClick={handleScroll}
          >
            <i className="text-2xl">
              {" "}
              <GoArrowUp className="text-white cursor-pointer text-center" />
            </i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Footer;
