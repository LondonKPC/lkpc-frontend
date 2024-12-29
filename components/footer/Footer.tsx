import React from 'react';
import disc from "@/public/discord.png";
import insta from "@/public/insta.png";
import email from "@/public/email.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#7a7c7b] w-full h-[50px] flex items-center justify-center">
        <div className="flex gap-4">
          <a href="https://www.roblox.com/home" className="w-[24px] h-[24px] inline-block">
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
      <div className="flex w-full bg-[#18181a] py-14 flex-wrap">
        <div className="px-8 flex-1 text-center">
          <p className="text-[20px] md:text-[24px] sm:text-[16px]">LondonKPC</p>
        </div>
        <div className="px-8 flex-1 text-center">
          <p className="text-[20px] md:text-[24px] sm:text-[16px]">Service</p>
          <div>
            <p className="text-[10px] md:text-xl sm:text-lg">
              Sunday: 2:15pm - 4:30pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
