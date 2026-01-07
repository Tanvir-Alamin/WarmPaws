import React from "react";
import threeLine from "../assets/threeline.png";
import me from "../assets/me.png";
import catDogPlay from "../assets/catDogPlay.png";
import Aos from "aos";

const About = () => {
  Aos.init({
    duration: 1400,
    once: true,
  });
  return (
    <div data-aos="fade-up">
      <div>
        {window.scrollTo(0, 0)}
        <div className="flex my-25 items-center justify-center">
          <p className="text-4xl font-san font-bold">About us</p>
          <img className="mt-[-35px]" src={threeLine} alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-evenly">
          <h1 className="flex flex-col mt-[-95px] gap-3">
            <span className="text-3xl font-san font-bold">Who We Are</span>
            <span className="font-sans w-55 text-gray-700">
              We are a dedicated pet care platform committed to providing
              trusted treatment, medicine, and wellness support for pets
              nationwide. Our mission is to ensure every pet receives safe,
              reliable, and compassionate care.
            </span>
          </h1>
          <img className="w-90 rounded-4xl" src={me} alt="" />
        </div>
      </div>
      <div>
        <div className="flex mt-20 bg-[#f5f2eb] py-15 flex-col md:flex-row gap-5 items-center justify-evenly">
          <h1 className="flex flex-col mt-[-95px] gap-3">
            <span className="text-3xl font-san font-bold">Our Impact</span>
            <span className="font-sans w-55 text-gray-700">
              Through compassionate care, trusted treatment, and quality medical
              support, we have positively impacted the lives of thousands of
              pets and their families nationwide. Our commitment to excellence
              ensures better health, faster recovery, and long-term wellbeing
              for pets of all kinds. Every service we provide is driven by love,
              responsibility, and a deep understanding of pet care.
            </span>
          </h1>
          <img className="w-90 rounded-4xl" src={catDogPlay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
