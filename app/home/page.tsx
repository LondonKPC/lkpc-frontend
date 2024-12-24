import React from "react";
import Footer from "@/components/Footer";
import GridButton from "@/components/GridButton";

function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-300">
      <div className="grid grid-cols-3 gap-4 h-[500px] w-[500px]">
        <GridButton imageSrc={require("@/images/grid/box1.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box2.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box3.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box4.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box5.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box6.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box7.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box8.jpg").default} />
        <GridButton imageSrc={require("@/images/grid/box9.jpg").default} />
      </div>
    </div>
  );
}

export default Home;