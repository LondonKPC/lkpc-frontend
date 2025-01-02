import React from "react";
import HomeCard from "@/components/home_card/HomeCard";
import background from "@/images/home_background.png";
import box1 from "@/images/boxes/box1.jpg";
import box2 from "@/images/boxes/box2.jpg";
import box3 from "@/images/boxes/box3.jpg";
import box4 from "@/images/boxes/box4.jpg";

function Home() {
  return (
      <div
        className="flex justify-center bg-cover w-full min-h-full md:bg-full bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        {/* Desktop */}
        <div className="w-[90%]">
          <div className="flex flex-col items-center justify-center my-52 space-y-10">
            <h1 className="text-black text-center text-4xl font-bold mb-10"> Welcome to LondonKPC EM</h1>
            <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 justify-center">
              <HomeCard
                imageSrc={box1}
                title="About Us"
                description="Text Here"
              />
              <HomeCard
                imageSrc={box2}
                title="Our Mission"
                description="Text Here"
              />
              <HomeCard imageSrc={box3} title="Title" description="Text here" />
              <HomeCard imageSrc={box4} title="Title" description="Text here" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
