import React, { useEffect } from "react";
import petTips from "../Components/petTips";
import Aos from "aos";
const Tips = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="my-20 text-center flex flex-col items-center">
      <div className="text-4xl font-bold mb-5">Pet Care Tips You Can Trust</div>
      <p className="text-xl pb-10 text-gray-600">
        Easy and practical tips to keep your pets healthy, happy, and safe every
        day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
        {petTips.map((idea) => (
          <div key={idea.id} data-aos="zoom-in-up" className="">
            <div className="m-5 p-5  bg-[#f5f2eb] w-80 text-center  hover:scale-110 transform transition duration-200 ease-in-out rounded-2xl">
              <p className="text-5xl">{idea.icon}</p>
              <h1 className="font-semibold text-lg">{idea.title}</h1>
              <p className="text-gray-700">{idea.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
