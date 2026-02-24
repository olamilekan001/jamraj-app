import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-[#F4F6F8] z-40">
      <div className="sm:flex custom-space-4 flex-col">
        <div className="text-center">
          <h1 className="uppercase lg:text-[37px] font-semibold mb-2.5 lg:text-center custom-space-2 text-2xl">
            Please <span className="text-[rgb(239,14,14)]">Feel Free</span> To{" "}
            <br />
            drop your inquiries & <br /> comment.
          </h1>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9598086790875!2d3.2418244735883457!3d6.526760423128337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85766af8b04d%3A0xc1b9039e192eadea!2s20%20Duro%20Adewale%20St%2C%20Ijegun%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756381196107!5m2!1sen!2sng"
              width={`450`}
              height="450"
              aria-hidden="false"
              tabIndex={`0`}
              frameBorder={`0`}
            ></iframe>
          </div>

          <div className=" bg-white">
            <form>
              <div className="text-center">
                <div className="">
                  <div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="input-2 placeholder:text-gray-400 bg-amber-50 outline-0 focus:outline-4 focus:outline-[#F6CFBF]"
                    />

                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="input-2 placeholder:text-gray-400 bg-amber-50 outline-0 focus:outline-4  focus:outline-[#F6CFBF]"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="input-3 placeholder:text-gray-400 bg-amber-50 outline-0 focus:outline-4  focus:outline-[#F6CFBF]"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="input-3 placeholder:text-gray-400 bg-amber-50 outline-0 focus:outline-4  focus:outline-[#F6CFBF]"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="uppercase text-white font-semibold input-3 bg-[rgb(239,14,14)] rounded-2xl cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
