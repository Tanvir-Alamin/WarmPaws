import React, { useEffect } from "react";
import vetsDoctor from "./vetsDoctor";
import catPeek from "../assets/catPeek.png";
import Aos from "aos";

const Vets = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-col items-center ">
        <p className="text-4xl font-sans font-bold pb-15">
          Meet Our Expert Vets
        </p>
        <p className="text-xl pb-20 text-gray-700 w-100 md:w-200 text-center">
          Our team of dedicated female veterinarians provides top-notch care,
          treatment, and advice for your beloved pets. With years of experience,
          they ensure every pet stays healthy, happy, and well-cared-for
        </p>
      </div>
      <img
        className="absolute w-70 ml-[-80px] mt-[-350px]"
        src={catPeek}
        alt=""
      />
      <div className="flex md:flex-row flex-col items-center mx-auto justify-evenly pb-25  gap-5">
        {vetsDoctor.map((vets) => (
          <div key={vets.id} data-aos="fade-up">
            <div className="card hover:scale-105 transform transition duration-200 ease-in-out bg-base-100 w-70 shadow-lg">
              <figure className="">
                <img className="" src={vets.image} alt="Shoes" />
              </figure>
              <div className="card-body bg-[#f5f2eb]">
                <h2 className="card-title font-bold">{vets.name}</h2>
                <div className="text-pink-500 font-semibold rounded-4xl">
                  {vets.specialty}
                </div>
                <p className="font-semibold ">{vets.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vets;
