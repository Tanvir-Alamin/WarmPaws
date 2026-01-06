import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import { Heart } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { VscEditSession } from "react-icons/vsc";
import { IoMdMail } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Spinner";

const Details = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);
  const service = services.find((p) => String(p.serviceId) === String(id));
  console.log(service);

  const [error, setError] = useState("");
  const { loading } = useContext(AuthContext);

  const bookingSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameOfUser = e.target.name.value.trim();
    const email = e.target.email.value;

    if (!nameOfUser) {
      setError("Full Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain @ symbol");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    toast.success("Booking Confirmed", { theme: "colored" });
    e.target.reset();
  };

  if (loading) return <Spinner></Spinner>;
  else
    return (
      <div data-aos="fade-up">
        {window.scrollTo(0, 0)}
        <div className="my-15">
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-start mx-auto">
            <div className="w-full mt-5 flex justify-center">
              <div className="card w-50 md:w-130 h-134 rounded-2xl  bg-base-100 shadow-lg">
                <figure className="w-full h-65 flex justify-center items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={service?.image}
                    alt=""
                  />
                </figure>
                <div className="card-body bg-[#E4EBFD]">
                  <div className="flex justify-between">
                    <span className="font-semibold bg-[#f5f1eb] rounded-lg skeleton text-lg py-1 px-2">
                      {service?.category}
                    </span>
                    <span className="flex gap-1 items-center">
                      <FaStar /> {service?.rating}
                    </span>
                  </div>
                  <h2 className="card-title font-bold">
                    {service?.serviceName}
                  </h2>
                  <p>{service?.description}</p>
                  <div className="flex justify-between">
                    <span className="font-semibold text-2xl rounded-lg py-1 px-2">
                      Price ${service?.price}
                    </span>
                    <span className="flex text-xl gap-1 items-center text-gray-800 ">
                      Slots available: {service?.slotsAvailable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-140 bg-base-200 ">
              <div className="hero-content  ">
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                  <div className="text-center pt-3 w-100 lg:text-left">
                    <h1 className="text-3xl gap-1 justify-center items-center font-mono py-5 flex font-bold">
                      <VscEditSession /> Book This Service
                    </h1>
                    <p className="text-2xl flex justify-center font-light">
                      Discuss Your Pet Problem With Us
                    </p>
                  </div>
                  <form onSubmit={bookingSubmit}>
                    <div className="card-body py-10">
                      <fieldset className="fieldset">
                        <label className="label">
                          <FaUser />
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="input w-full"
                          placeholder="Enter your full name"
                        />
                        <label className="label">
                          <IoMdMail />
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="input w-full"
                          placeholder="Enter your email address"
                        />
                        <fieldset className="fieldset">
                          <label className="label">
                            <MdOutlineMessage />
                            Message
                          </label>
                          <textarea
                            className="textarea w-full h-24"
                            placeholder="Type your message"
                          ></textarea>
                        </fieldset>
                        {error ? (
                          <p className="text-red-500 font-semibold text-xm">
                            {error}
                          </p>
                        ) : (
                          ""
                        )}
                        <button className="btn bg-amber-300 rounded-sm mt-4">
                          Book now
                        </button>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;
