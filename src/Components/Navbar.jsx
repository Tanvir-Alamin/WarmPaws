import React, { useContext } from "react";
// import petLogo from "../assets/petLogo.png";
// import petLogo from "../assets/petLogo.png";
import paw from "../assets/paw.jpg";
import { Link, NavLink } from "react-router";
import { ChevronDown, Heart, Phone, Underline } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);

  const link = (
    <div className="flex items-center lg:flex-row flex-col gap-4">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <p className="flex ">
          Home <ChevronDown />
        </p>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <p className="flex ">
          About <ChevronDown />
        </p>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `font-semibold text-sm hover:text-blue-900 ${
            isActive ? "underline decoration-1 underline-offset-8" : ""
          }`
        }
      >
        <p className="flex ">
          Services <ChevronDown />
        </p>
      </NavLink>
      {user ? (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `font-semibold text-sm hover:text-blue-900 ${
              isActive ? "underline decoration-1 underline-offset-8" : ""
            }`
          }
        >
          <img
            className="w-12 border-3 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </NavLink>
      ) : (
        ""
      )}
      {!user ? (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `font-semibold text-sm hover:text-blue-900 ${
              isActive ? "underline decoration-1 underline-offset-8" : ""
            }`
          }
        >
          <p className="flex ">
            Login <ChevronDown />
          </p>
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div className="navbar bg-[#E4EBFD] -100 mx-auto shadow-sm">
      <div className="navbar-start ml-5 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="flex w-f ml-5 items-center">
          <img className="w-17 rounded-xl" src={paw} alt="" />
          <Link to="/home">
            {" "}
            <p className="btn btn-ghost text-xl">WarmPaws</p>
          </Link>
        </div>
      </div>
      <div className="navbar-end mr-5 hidden  lg:flex gap-4">
        <p className="flex items-center gap-1">
          +880 1999-999-999
          <Phone />
        </p>
        <NavLink
          to="/services"
          className="bg-amber-300 flex items-center gap-1  py-2 font-semibold px-5 rounded-3xl"
        >
          Book now <Heart size={16} strokeWidth={3} absoluteStrokeWidth />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
