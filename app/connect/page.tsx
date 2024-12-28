import React from 'react';
import Card from '@/components/card/Card';
import churchBackground from '@/public/church.jpg';
import testing from "@/public/potluck.png"

export default function Connect() {
  return (
    <div>
        <div className="relative justify-center items-center bg-gray-100 h-screen">
            {/* Image Container */}
            <div
                className="flex justify-center items-center w-full h-full bg-cover bg-center bg-opacity-50"
                style={{ backgroundImage: `url(${churchBackground.src})` }}>

                <h1 className="text-white text-4xl font-bold">Connect With Us</h1>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center p-8 bg-blue-50">
            <h1 className="justify-center items-center text-black font-bold text-4xl"> Blah </h1>
            <div className="flex space-x-3">
              <a href="/contact" className="text-black hover:text-blue-100">
                <Card imgSrc={testing.src} title="tesing" alt=""/>
              </a>
            </div>
        </div>
    </div>
  );
}
