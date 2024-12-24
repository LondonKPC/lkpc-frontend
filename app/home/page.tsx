import React from "react";
import Footer from "@/components/Footer";
import GridButton from "@/components/GridButton";
import "./home.css";

function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-300">
      <div className="home-grid">
        <GridButton imageSrc={require("@/images/grid/box1.jpg").default} text="About"/>
        <GridButton imageSrc={require("@/images/grid/box2.jpg").default} text="Group"/>
        <GridButton imageSrc={require("@/images/grid/box3.jpg").default} text="School"/>
        <GridButton imageSrc={require("@/images/grid/box4.jpg").default} text="News"/>
        <GridButton imageSrc={require("@/images/grid/box5.jpg").default} text="Ministry"/>
        <GridButton imageSrc={require("@/images/grid/box6.jpg").default} text="Family"/>
        <GridButton imageSrc={require("@/images/grid/box7.jpg").default} text="Offering"/>
        <GridButton imageSrc={require("@/images/grid/box8.jpg").default} text="Events" />
        <GridButton imageSrc={require("@/images/grid/box9.jpg").default} text="Contact"/>
      </div>
    </div>
  );
}


export default Home;