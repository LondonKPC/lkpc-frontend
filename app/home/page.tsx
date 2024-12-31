import React from "react";
import HomeCard from "@/components/home_card/HomeCard";
import box1 from "@/images/boxes/box1.jpg";
import box2 from "@/images/boxes/box2.jpg";
import box3 from "@/images/boxes/box3.jpg";
import box4 from "@/images/boxes/box4.jpg";


function Home() {
  return (
    <div className="h-full">
      <div
        className="flex justify-center items-center w-full h-full bg-cover md:bg-full bg-center"
        //style={{ backgroundImage: `url(${churchBackground.src})` }}
      >
        {/* Desktop */}
        <div className="bg-white w-full h-full bg-opacity-50">
          <div className="flex flex-col items-center justify-center my-52">
            <h1 className="text-white text-4xl font-bold">Connect With Us</h1>
            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
              <HomeCard imageSrc={box1} description="Gr. 7-12" />
              <HomeCard imageSrc={box2} description="Gr. 7-12" />
              <HomeCard imageSrc={box3} description="Gr. 7-12" />
              <HomeCard imageSrc={box4} description="Gr. 7-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;