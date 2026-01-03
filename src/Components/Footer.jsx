import React from "react";
import paw from "../assets/paw.jpg";
import threeLine from "../assets/threeline.png";
import footerDog from "../assets/footerDog.png";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { ChevronDown, Heart } from "lucide-react";

const Footer = () => {
  const link = (
    <div className="flex lg:flex-row flex-col gap-4">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <a className="flex ">
          Home <ChevronDown />
        </a>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <a className="flex ">
          About <ChevronDown />
        </a>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <a className="flex ">
          Services <ChevronDown />
        </a>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <a className="flex ">
          My Profile <ChevronDown />
        </a>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <a className="flex ">
          Login <ChevronDown />
        </a>
      </NavLink>
    </div>
  );
  return (
    <div className="bg-[#E4EBFD] py-5">
      <div>
        <div className="flex justify-between mx-25 items-center">
          <img className="w-25 rounded-xl" src={paw} alt="" />
          <div className="flex gap-2 flex-col md:flex-row">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaXTwitter size={30} />
            <FaPinterest size={30} />
          </div>
        </div>
        <div className="flex items-center pt-5">
          <div className="border border-gray-400 h-0 w-full"></div>
          <div>
            <IoIosArrowDropupCircle size={20} />
          </div>
          <div className="border border-gray-400 h-0 w-full"></div>
        </div>
        <div className="flex mx-25  justify-between items-center">
          <div className="md:w-100 w-40 font-semibold my-8">
            Caring for your pets like family – providing treatment, medicine,
            and complete health support nationwide.
          </div>
          <div>{link}</div>
        </div>
        <div className="flex flex-col pt-23 items-center">
          <div className="text-4xl font-bold ">
            Are you ready to get started?
          </div>
          <div className="flex items-center gap-5 justify-evenly pt-20">
            <div className="font-semibold">warmpaws@programminghero.net</div>
            <div className="flex">
              <Link className="bg-amber-300 w-35 flex items-center gap-1  py-2 font-semibold px-5 rounded-3xl">
                Book now <Heart size={16} strokeWidth={3} absoluteStrokeWidth />
              </Link>
              <img className="w-10 h-10 mt-[-25px]" src={threeLine} alt="" />
            </div>
            <div className="font-semibold"> Call or Text +880 1999-999-999</div>
          </div>
        </div>
        <div className="flex justify-center gap-40 pt-10 items-center">
          <img className="mb-[-20px]" src={footerDog} alt="" />
          <div>WarmPaws © 2026 | Powered by Programming Hero</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
