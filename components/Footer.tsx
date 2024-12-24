import React from 'react';
import disc from "@/images/discord.png";
import insta from "@/images/insta.png";
import email from "@/images/email.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#7a7c7b] w-full h-[50px] flex items-center justify-center">
        <div className="flex gap-4">
          <a href="https://www.roblox.com/home" className="w-[24px] h-[24px] inline-block ">
            <img src={email.src} className="w-full h-full hover:opacity-30" />
          </a>
          <a href="https://www.roblox.com/home" className="w-[24px] h-[24px] inline-block">
            <img src={insta.src} className="w-full h-full hover:opacity-30" />
          </a>
          <a href="https://www.roblox.com/home" className="w-[24px] h-[24px] inline-block">
            <img src={disc.src} className="w-full h-full hover:opacity-30" />
          </a>
        </div>
      </div>
      <div className="flex w-full h-[20%] bg-[#18181a] flex-row p-14 z-1">
        <div className="mx-[12%] text-[30px]">
          LondonKPC
        </div>

        <div className="mx-[10%] text-[30px] w-[7%]">
          <p>
            Service
          </p>
          <div className="text-[16px]">
            Sunday: 2:15pm
            Friday: 6:30pm
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;