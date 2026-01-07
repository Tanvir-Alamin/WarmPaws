import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-95px)]">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
