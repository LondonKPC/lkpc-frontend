import { StaticImageData } from "next/image";
import React from "react";

interface GridButtonProps {
  imageSrc: StaticImageData;
}
function GridButton({ imageSrc }: GridButtonProps) {
  return (
    <div className="bg-red-500 flex items-center justify-center">
      <img
        src={imageSrc.src}
        alt="Grid Button"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default GridButton;
