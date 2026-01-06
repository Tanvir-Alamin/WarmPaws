import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import threeLine from "../assets/threeline.png";
import catPlay from "../assets/catPlay.png";
import { NavLink } from "react-router";
import { Heart } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .then(() => {
        Aos.init({
          duration: 1400,
          once: true,
        });
      }, [])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div data-aos="fade-up" className="my-35 relative">
      {window.scrollTo(0, 0)}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center mb-15">
          {" "}
          <p className="text-4xl font-bold">
            Our Winter Pet Care Services
          </p>{" "}
          <img className="mt-[-35px]" src={threeLine} alt="" />
        </div>
        <img
          className="w-95 absolute hidden md:block  mt-[-120px] ml-[-950px]"
          src={catPlay}
          alt=""
        />
        <p className="text-xl pb-35 w-100 md:w-150 text-center text-gray-600">
          Keep your pets healthy and protected throughout the year with
          essential vaccinations for puppies, kittens, and adult pets.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid  grid-cols-2 gap-10  md:grid-cols-3">
          {services.map((service) => (
            <div className="card w-50 md:w-90  hover:scale-105 transform transition-all duration-300 ease-in-out bg-base-100 shadow-lg">
              <figure className="w-full h-65 flex justify-center items-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={service.image}
                  alt=""
                />
              </figure>
              <div className="card-body bg-[#E4EBFD]">
                <div className="flex justify-between">
                  <span className="font-semibold bg-[#f5f1eb] rounded-lg skeleton text-lg py-1 px-2">
                    {service.category}
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaStar /> {service.rating}
                  </span>
                </div>
                <h2 className="card-title font-bold">{service.serviceName}</h2>
                <p>{service.description}</p>
                <div className="flex justify-between">
                  <span className="font-semibold text-lg rounded-lg py-1 px-2">
                    Price ${service.price}
                  </span>
                  <span className="flex gap-1 items-center text-gray-800 ">
                    Slots available: {service.slotsAvailable}
                  </span>
                </div>
                <NavLink
                  to={`/details/${service.serviceId}`}
                  className="bg-amber-300 flex items-center gap-1 btn py-2 font-semibold px-5 rounded-3xl"
                >
                  Book now{" "}
                  <Heart size={16} strokeWidth={3} absoluteStrokeWidth />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
