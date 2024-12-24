import React from "react";
import capy from "@/images/capy.png";
import Footer from "@/components/Footer";
import GridButton from "@/components/GridButton";

function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 h-[500px] w-[500px]">
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
        <GridButton imageSrc={capy} />
      </div>
    </div>
  );
}

export default Home;