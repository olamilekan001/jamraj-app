import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsPhoneVibrate } from "react-icons/bs";

const TopNav = () => {
  return (
    <>
      <div className="lg:flex items-center gap-[3rem] h-[8rem] justify-evenly hidden">
        <div className="inline-flex items-center gap-3 pt-[1rem] bo">
          <i className="text-5xl text-green-400 font-semibold">
            <SlLocationPin />
          </i>
          <div className="flex flex-col gap-3">
            <h6 className="uppercase text-[15px] px-3.5 font-semibold pb-3">
              our office:
            </h6>
            <p className="text-[15px] font-light">
              NO 20, DURO ADEWALE STREET, <br />
              ABARANJE, IKOTUN LAGOS..
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-3 pt-[1rem]">
          <i className="text-5xl text-green-400 font-semibold">
            <HiOutlineMailOpen />
          </i>
          <div className="flex flex-col gap-3">
            <h6 className="uppercase text-[15px] px-3.5 font-semibold pb-3">
              email us:
            </h6>
            <p className="text-[15px] font-light">
              jamrajconstruction@gmail.com
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-3 pt-[1rem]">
          <i className="text-5xl text-green-400 font-semibold">
            <BsPhoneVibrate />
          </i>
          <div className="flex flex-col gap-3">
            <h6 className="uppercase text-[15px] px-3.5 font-semibold pb-3">
              call us:
            </h6>
            <p className="text-[15px] font-light">07084659570, 08061468865.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
