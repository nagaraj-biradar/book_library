import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";

const Sidebar = () => {
  return (
    <div className=" m-5">
      <Link href={"/store"} />
      <div className=" bg-purple-600 p-2 rounded-md ">
        <Logo />
      </div>
      <div className=" mt-5 flex gap-1 md:flex-col">
        <NavLinks />
        <form>
          <button
            className=" flex gap-5 justify-center items-center bg-purple-600 text-white p-1
                rounded-md w-[50px]  text-sm
                "
          >
            <ArrowLeftEndOnRectangleIcon className=" w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
