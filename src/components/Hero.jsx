import React from "react";
import heroImage from "/hero.JPG";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideUp } from "../utility/animation";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-100 mt-auto py-10 md:px-10 md:py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] gap-6 md:gap-0">
          {/* My Information */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left py-5 md:py-0">
            <motion.p
              variants={SlideRight(0.7)}
              initial="hidden"
              animate="visible"
              className="text-xl pl-2 sm:text-xl md:text-2xl text-gray-600 max-w-[90%] md:max-w-[650px]"
            >
              Hey, I'm Subrat Thapa <span>👋🏻</span>
            </motion.p>
            <motion.h1
              variants={SlideRight(1.3)}
              initial="hidden"
              animate="visible"
              className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="primary">Frontend</span>
              <br />
              Developer
            </motion.h1>
            <motion.p
              variants={SlideLeft(1.5)}
              initial="hidden"
              animate="visible"
              className="text-lg pl-2 sm:text-xl md:text-2xl mt-5 text-gray-600 max-w-[90%] md:max-w-[650px]]"
            >
              I build interactive and responsive web applications using React,
              Tailwind, and modern web technologies.
            </motion.p>
          </div>

          {/* My Image */}
          <div className="flex justify-center items-center mx-auto my-auto">
            <div
              className="rounded-full border-2 image-border flex justify-center items-center p-6
              w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]"
            >
              <motion.img
                src={heroImage}
                alt="My Personal Photo"
                className="w-full h-full rounded-full object-cover drop-shadow-lg"
                variants={SlideUp(0.4)}
                initial="hidden"
                animate="visible"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
