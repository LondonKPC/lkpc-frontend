import React from "react";
import Footer from "@/components/footer/Footer";
import HomeGrid from "@/components/home_grid/HomeGrid";
import "./home.css";

function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-300">
      <HomeGrid />
    </div>
  );
}


export default Home;