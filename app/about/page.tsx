import React from 'react';
import water_capy from "@/images/water_capy.png";

export default function About() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <div className="w-[95%] h-[50%] bg-[#48a4c9] mt-16 relative opacity-80">
        <img 
          src={water_capy.src} 
          alt="capybara in water" 
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
          <p className="text-3xl font-bold">
            Get in touch...
          </p>
          <p className="text-xl">
            If you have any questions or concerns, we are here to help.
          </p>
        </div>
      </div>
      <div className="w-[90%] h-[100%] flex justify-center -mt-[120px] z-10">
        <div className="w-[40%] h-[80%] shadow-[0px_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center m-10 bg-white">
          <p className="text-black">
            Call/message xxx-xxx-xxxx if you want to ask any questions idk
            </p>
        </div>
        <div className="w-[40%] h-[80%] shadow-[0px_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center m-10 bg-white">
          <p className="text-black">
            Contacts: idk1111@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
