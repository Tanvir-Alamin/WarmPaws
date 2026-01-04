import React, { useState } from "react";
import signUp from "../assets/signUp.jpg";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [eye, setEye] = useState(false);
  return (
    <div>
      <div>
        <div className="flex items-center  justify-center">
          <div className=" bg-green-300 flex justify-between  my-25 shadow-2xl rounded-2xl ">
            <img
              className="md:w-90 hidden md:block rounded-l-2xl h-full"
              src={signUp}
              alt=""
            />
            <form className="">
              <fieldset className="fieldset  border-none rounded-box mt-5 w-xs mx-15 border p-4">
                <div className="text-3xl text-center text-green-950 font-sans font-semibold">
                  Sing Up <br></br>
                  <span className="text-sm">
                    Create your account to get started
                  </span>
                </div>

                <label className="label text-gray-800 font-semibold">
                  Full Name *
                </label>
                <input
                  type=""
                  className="input  bg-green-50"
                  placeholder="Enter your full name"
                />
                <label className="label text-gray-800 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  className="input  bg-green-50"
                  placeholder="Enter your email"
                />
                <label className="label text-gray-800 font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  className="input  bg-green-50"
                  placeholder="Enter photo URL"
                />

                <label className="label text-gray-800 font-semibold">
                  Password *
                </label>
                <div className="items-center flex relative">
                  <input
                    type={!eye ? "password" : "text"}
                    className="input bg-green-50"
                    placeholder="Password"
                  />
                  <p
                    className="absolute ml-[90%]"
                    onClick={() => {
                      setEye(!eye);
                    }}
                  >
                    {" "}
                    {!eye ? <EyeOff /> : <Eye />}
                  </p>
                </div>

                <button className="btn btn-accent font-bold mt-4">
                  Sign up
                </button>
              </fieldset>

              <div className="flex my-5 justify-center">
                Already have an account?{" "}
                <Link to="/login" className="ml-1 text-blue-700 underline">
                  {" "}
                  Sign in here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
