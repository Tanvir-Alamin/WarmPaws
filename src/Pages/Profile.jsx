import React, { useContext, useState } from "react";
import threeLine from "../assets/threeline.png";
import userFlow from "../assets/User flow.gif";
import catProfile from "../assets/catProfile.png";
import { AuthContext } from "../Context/AuthContext";
import { Camera, Mail, User, UserPen } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router";
import Spinner from "../Components/Spinner";
import { MdLogout } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { toast } from "react-toastify";

import { updateProfile, updateEmail } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, loading, signOutFromAll, setUpdate, update } =
    useContext(AuthContext);
  console.log(user);

  const editor = () => {
    setUpdate(true);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;

    const email = e.target.email.value;

    const name = e.target.name.value.trim();

    const photoURL = e.target.img.value.trim();
    setError("");
    setSuccess(false);
    if (!name) {
      setError("Full Name is required");
      return;
    }

    if (!imageRegex.test(photoURL)) {
      setError("Photo URL is required");
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

    updateProfile(user, { displayName: name, photoURL: photoURL })
      .then((result) => {
        updateEmail(result.user, email).then(() => {
          setSuccess(true);
        });
      })
      .catch((error) => setError(error.code));
    setUpdate(false);
    toast.success("Profile Update Successfully", { theme: "colored" });
  };

  const logOut = () => {
    signOutFromAll()
      .then(() => "")
      .catch((error) => console.log(error.message));
    navigate("/home");
  };

  if (loading) {
    return <Spinner></Spinner>;
  } else if (!user) {
    return (
      <div className="mb-5">
        <p className="text-3xl mt-10 text-center font-san font-bold">
          User not found
        </p>
        <img
          className="w-120 shadow-2xl rounded-2xl mx-auto"
          src={userFlow}
          alt=""
        />
        ;
      </div>
    );
  } else {
    return (
      <div className="flex md:flex-row flex-col bg-[#daf1de] justify-evenly items-center border-[#daf1de]">
        {" "}
        <div data-aos="fade-right" className="relative ">
          {window.scrollTo(0, 0)}
          <img className="absolute w-30 mx-auto" src={catProfile} alt="" />
          <div className="bg-white my-15  h-147 w-100 md:w-90 mx-auto rounded-3xl py-10 justify-center flex flex-col j">
            <div className="text-3xl text-center font-san font-bold">
              Profile Information
            </div>
            <div className="mt-8 mb-15 flex justify-evenly">
              <Link
                onClick={editor}
                className="text-lg btn  flex items-center gap-1 font-san bg-amber-400 rounded-xl px-3 py-1 font-semibold"
              >
                <UserPen /> Update profile
              </Link>
              <Link
                onClick={logOut}
                className="text-lg btn  flex items-center gap-1 font-san bg-amber-400 rounded-xl px-8 py-1 font-semibold"
              >
                <MdLogout /> Log out
              </Link>
            </div>
            <div className="flex mt-2 items-center justify-center">
              <p className="text-4xl ml-15 font-san font-bold">
                {user?.displayName || ""}
              </p>
              <img className="mt-[-35px] w-15" src={threeLine} alt="" />
            </div>
            <div className=" py-5 mb-5 flex justify-center">
              {" "}
              <img
                className="rounded-full w-35  border-4 border-blue-600"
                src={user?.photoURL || ""}
                alt=""
              />
            </div>
            <div className="flex justify-evenly mb-10">
              <div className="text-sm  bg-[#aec3b0] text-center py-1  w-40 rounded-xl font-san font-semibold">
                <span className="text-gray-700 text-sm  flex items-center gap-0.5 justify-center">
                  <User /> Name <br></br>
                </span>{" "}
                {user.displayName}
              </div>
              <div className="text-sm  bg-[#aec3b0]  py-1 text-center w-40 rounded-xl font-san font-semibold">
                <span className="text-gray-700 text-sm flex items-center gap-0.5 justify-center">
                  <Mail /> Email <br></br>{" "}
                </span>
                {user.email}
              </div>
            </div>
          </div>
        </div>
        {update ? (
          <div
            data-aos="fade-left"
            className=" bg-base-100 rounded-2xl flex justify-center items-center h-147 w-90"
          >
            {" "}
            <form onSubmit={handleUpdate} className=" ">
              <fieldset className="fieldset  border-none rounded-box mt-5 w-xs mx-15 border p-4">
                <div className="text-2xl py-5 text-center text-green-950 font-sans font-semibold">
                  Update your information
                </div>

                <label className="label text-lg text-gray-800 font-semibold">
                  New Name *
                </label>
                <input
                  name="name"
                  type=""
                  className="input  bg-green-50"
                  placeholder="Enter your full name"
                />
                <label className="label text-lg text-gray-800 font-semibold">
                  New Email *
                </label>
                <input
                  name="email"
                  type="email"
                  className="input  bg-green-50"
                  placeholder="Enter your email"
                />
                <label className="label text-lg text-gray-800 font-semibold">
                  New Photo URL
                </label>
                <input
                  name="img"
                  type="text"
                  className="input  bg-green-50"
                  placeholder="Enter photo URL"
                />
                {error ? (
                  <p className="text-red-500 font-semibold text-xm">{error}</p>
                ) : (
                  ""
                )}
                {success ? (
                  <p className="text-blue-600 font-sans font-semibold">
                    Your account has been successfully updated <FaCat />
                  </p>
                ) : (
                  ""
                )}

                <button className="btn text-lg btn-accent my-5 font-bold mt-2">
                  Sign up
                </button>
                <button
                  onClick={(e) => {
                    setUpdate(false), e.target.reset();
                  }}
                  className="btn text-lg btn-soft my-5 font-bold mt-2"
                >
                  Cancel
                </button>
              </fieldset>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default Profile;
