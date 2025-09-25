import React from "react";
import { FaCheck } from "react-icons/fa";
import aboutImg from "../assets/images/img-2.jpeg";

const AboutSection = () => {
  return (
    <section className="section-space custom-space-3">
      <div className="grid lg:grid-cols-2 lg:gap-50">
        <div>
          <h1 className="uppercase text-start text-[37px] font-semibold mb-2.5">
            We are among <span className="text-[rgb(14,239,29)]">the Leaders</span> in
            Construction Business
          </h1>
          <p className="text-start custom-space text-[rgb(119,119,119)] para">
            At Jamraj Builders Construction Company, we believe that every great
            investment begins with a confident first step, and this week could
            be yours. Imagine this the home you’ve dreamed of, the property that
            grows in value year after year, or the land that becomes a legacy
            for generations to come. These things don’t happen by chance; they
            happen when you make bold, smart choices—choices that set you up for
            wealth, stability, and peace of mind. This is where we come in.
            Whether you’re buying, leasing, or investing, Jamraj Builders
            Construction Company is here to guide you every step of the way. Our
            team is committed to helping you secure properties that meet your
            needs today while preparing you for a stronger tomorrow
          </p>
          <div className="grid lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Indigenous Real Estate
              </p>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Property Sales & Management
              </p>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Property Lease & Broker
              </p>
            </div>
            <div>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Perfect Planning
              </p>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Facility Management
              </p>
              <p className="flex items-center gap-3 text-[rgb(119,119,119)]">
                <FaCheck className="text-[rgb(14,239,29)]" />
                Procurements & Logistics
              </p>
            </div>
          </div>
          <p className="custom-space text-[rgb(119,119,119)] para">
            We are not just about properties; we are about people. Our
            commitment to you is unwavering. We promise to listen, to
            understand, and to act in your best interest. We promise to provide
            you with the information and support you need to make informed
            decisions. And we promise to be there for you, not just today, but
            for all the tomorrows that follow.
          </p>
        </div>

        <div className="custom-space-3">
          <div className="relative bg-dark-radial h-140 w-100 z-10">
            <img
              src={aboutImg}
              alt="about"
              className="absolute w-100 h-140 top-10 right-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
