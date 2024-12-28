import { StaticImageData } from "next/image";
import React from "react";

interface GridButtonProps {
  imageSrc: StaticImageData;
  text: string;
}
function GridButton({ imageSrc, text }: GridButtonProps) {
  return (
    <div className="relative bg-transparent flex items-center justify-center transition duration-300 ease-in-out hover:scale-110">
      <img
        src={imageSrc.src}
        alt="Grid Button"
        className="rounded-full h-full w-full object-cover border-solid border-2"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xs md:text-sm lg:text-lg 2xl:text-4xl font-bold font-sans ">{text}</span>
      </div>

    </div>
  );
}

export default GridButton;
