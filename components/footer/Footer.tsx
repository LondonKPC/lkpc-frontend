import React from "react";
import Image from "next/image";
import Discord from "@/images/discord.svg";
import Instagram from "@/images/instagram.svg";
import Email from "@/images/email.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#7a7c7b] w-full h-[50px] flex items-center justify-center">
        <div className="flex gap-4">
          <Image src={Discord} alt="Discord" width={20} height={20} />
          <Image src={Instagram} alt="Instagram" width={20} height={20} />
          <Image src={Email} alt="Email" width={20} height={20} />
        </div>
      </div>
      <div className="flex w-full bg-[#18181a] py-14">
        <div className="px-8 text-[30px] flex-1 text-center">
          LondonKPC
        </div>
        <div className="px-8 text-[30px] flex-1 text-center">
          <p>Service</p>
          <div className="text-[16px]">
            <p><b>Sunday:</b> 2:15pm - 4:30pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
