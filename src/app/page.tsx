import Image from "next/image";
import BG_Image from "../../public/home/bg_image.jpg";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main>
      <div className=" flex flex-col relative justify-center items-center h-screen  ">
        <Image src={BG_Image} alt="bg_image" fill className=" blur-sm" />
        <div className=" absolute  font-extrabold text-lg bg-purple-200 rounded-md p-4 m-5 sm: flex flex-col">
          <div className=" flex justify-center items-center">
            <SparklesIcon className="w-12 h-12 text-purple-900" />
            <p className="text-sm lg:text-4xl justify-center items-center text-purple-900">
              Sunshine Book Library
            </p>
          </div>
          <div className=" flex  justify-center items-center m-5 ">
            <Link href={"/store"} className=" bg-purple-500 p-2 sm:text-sm ">
              Visit Store
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
