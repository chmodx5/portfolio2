import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" h-[90vh]  bg-white bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('hero-bg.svg')" }}
    >
      <div className="bg-white/80   h-full flex items-center">
        <div className="app-container grid grid-cols-12  ">
          <div className="col-span-12 md:col-span-6 order-last md:order-first flex items-center">
            <div className="space-y-3">
              <div>
                <div className="flex ml-1 gap-2 mb-1">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      className="h-3 w-4 -skew-x-[30deg] bg-primary"
                      key={i}
                    ></div>
                  ))}
                </div>
                <h6>Hello i'm</h6>
              </div>

              <div>
                <h1 className="font-bold text-2xl">Onesmas Wanjala</h1>
                <h3 className="font-semibold text-xl">
                  A Full Stack Developer
                </h3>
              </div>

              <h6 className="text-center md:text-left">
                A dedicated web developer who is passionate about building
                responsive, mobile-first web applications with modern front-end
                technologies such as Vue and React.
              </h6>
              <motion.Link
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                to="/portfolio"
                className="btn-primary"
              >
                Discover More
              </motion.Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <div
              className=" h-96 w-full bg-[url('hero-svg.svg')] bg-contain bg-white bg-no-repeat rounded-3xl
            relative"
            >
              <div className="bg-primary  h-24 w-24 rounded-full absolute md:top-20 md:right-0 -top-5 left-[15%] md:left-[85%]"></div>
              <div className=" h-24 w-24 rounded-full absolute top-3 right-[15%] md:top-[70%] md:left-0 overflow-hidden flex gap-1 rotate-45">
                {Array.from({ length: 13 }, (_, i) => (
                  <div className="h-full w-1 bg-primary" key={i}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
