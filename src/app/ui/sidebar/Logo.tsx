import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";

const Logo = () => {
  return (
    <div className=" flex gap-1 justify-center items-center  leading-none">
      <SparklesIcon className=" w-8 h-8 md:w-12 md:h-12  text-white" />
      <div className=" flex flex-col">
        <p className=" text-white text-[28px] font-bold hidden md:block ">
          Sunshine
        </p>
        <p className=" text-white text-[28px] font-bold hidden md:block">
          Book Library
        </p>
      </div>
    </div>
  );
};

export default Logo;
