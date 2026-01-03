import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import threeLine from "../assets/threeline.png";
import { NavLink } from "react-router";
import { Heart } from "lucide-react";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="my-25 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center mb-10">
          {" "}
          <p className="text-4xl font-bold">
            Our Winter Pet Care Services
          </p>{" "}
          <img className="mt-[-35px]" src={threeLine} alt="" />
        </div>
        <p className="text-xl pb-15 w-100 md:w-150 text-center text-gray-600">
          Keep your pets healthy and protected throughout the year with
          essential vaccinations for puppies, kittens, and adult pets.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10  md:grid-cols-3">
          {services.map((service) => (
            <div className="card hover:scale-105 w-50 md:w-90 transform transition duration-200 ease-in-out bg-base-100 shadow-lg">
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
                  to="/details"
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
