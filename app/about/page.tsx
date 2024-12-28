import React from 'react';
import water_capy from "@/images/water_capy.png";

export default function About() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <div className="w-[90%] h-[50%] bg-black mb-4 relative">
        <img 
          src={water_capy.src} 
          alt="capybara in water" 
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-[90%] h-[100%] flex justify-center -mt-[120px] z-10">
        <div className="w-[40%] h-[80%] shadow-[0px_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center m-10 bg-white">
          <p className="text-black">Get in Touch...</p>
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
