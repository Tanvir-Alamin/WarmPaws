import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import heroBg from "../assets/dogHero.png";
import petLove from "../assets/petLove.png";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="relative  h-[500px] ">
        <div className="bg-[#E4EBFD] h-120 flex justify-between">
          <div
            data-aos="fade-up"
            className="flex flex-col mx-15 my-auto gap-10"
          >
            <p className="text-5xl font-extrabold ">
              Your pet, <br></br> our priority
            </p>
            <div className=" items-center gap-2 flex">
              <Link className="bg-amber-300 flex items-center gap-1  py-2 font-semibold px-5 rounded-3xl">
                Learn more
              </Link>
              <Link
                to="/services"
                className="bg-amber-300 flex items-center gap-1  py-2 font-semibold px-5 rounded-3xl"
              >
                Book now <Heart size={16} strokeWidth={3} absoluteStrokeWidth />
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="absolute hidden md:block mr-15 bottom-[-33px] right-0 w-100 h-auto object-cover"
              src={heroBg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="my-15 mx-15 flex items-center justify-evenly">
        <img className="w-100 " src={petLove} alt="" />
        <div data-aos="fade-left" className="text-center">
          <p className="md:text-5xl text-3xl font-extrabold my-5">
            Happy pets, <br></br> happy humans
          </p>
          <p className="md:w-80 w-40 text-center ">
            We promise our best service and top-quality care for your pets.
            Every interaction is handled with love, attention, and dedication.
            From booking to adoption guidance, we ensure a seamless,
            trustworthy, and joyful experience. Your pet’s happiness and safety
            are our highest priority, always.
          </p>
          <a className="underline mt-3" href="">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
