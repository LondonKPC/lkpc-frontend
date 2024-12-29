import React from 'react';
import Card from '@/components/card/Card';
import churchBackground from '@/public/church.jpg';
import test from "@/public/potluck.png"


export default function Connect() {
  return (
    <div>
        <div className="justify-center items-center bg-gray-100 h-screen">
            {/* Image Container */}
            <div
                className="flex justify-center items-center w-full h-full bg-cover bg-center bg-opacity-50"
                style={{ backgroundImage: `url(${churchBackground.src})` }}>

                <h1 className="text-white text-4xl font-bold">Connect With Us</h1>
            </div>
        </div>
        <div className="my-4">
          <div className="flex flex-col justify-center items-center text-center text-black">
              <div className="my-4 mb-8">
                <p className="break-words">
                  Here we ___ healthy church and mature Christian and would love for you to get involved with our community.
                </p>
                <p>
                  Connect with teachers 
                </p>
              </div>
              {/* Dynamic Rectangle */}
              <div className="bg-blue-900 h-0.5 inline-block w-[calc(100%)]" >
            </div>
          </div>
        </div>
        <div className="py-10 bg-white">
          <div className="text-black p-10">
            <div className="columns-2">
              <h1 className="pl-60 mb-20 mt-5 text-7xl"> Sunday School </h1>
              <div className="pl-60 pr-36">
              <p>
                Information about sunday school here
              </p>
              <button className="bg-blue-400 rounded-md"> More information about Sunday school group </button>
              </div>
              <div className="flex justify-around items-center w-full">
                <a href="/contact" className="text-black hover:text-blue-100">
                  <Card imgSrc={test.src} imgAlt="" imgWidth={480} imgHeight={480} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-black p-10">
            <div className="columns-2">
              <h1 className="pl-60 mb-20 mt-5 text-7xl"> HI-C </h1>
              <div className="pl-60 pr-36">
              <p>
                Information about hic here
              </p>
              <button className="bg-blue-400 rounded-md"> More information about HIC group </button>
              </div>
              <div className="flex justify-around items-center w-full">
                <a href="/contact" className="text-black hover:text-blue-100">
                  <Card imgSrc={test.src} imgAlt="" imgWidth={480} imgHeight={480} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-black p-10">
            <div className="columns-2">
              <h1 className="pl-60 mb-20 mt-5 text-7xl"> College and University </h1>
              <div className="pl-60 pr-36">
              <p>
                Information about CU here
              </p>
              <button className="bg-blue-400 rounded-md"> More information about CU group </button>
              </div>
              <div className="flex justify-around items-center w-full">
                <a href="/contact" className="text-black hover:text-blue-100">
                  <Card imgSrc={test.src} imgAlt="" imgWidth={480} imgHeight={480} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-black p-10">
            <div className="columns-2">
              <h1 className="pl-60 mb-20 mt-5 text-7xl"> Adults </h1>
              <div className="pl-60 pr-36">
              <p>
                Information about adults here
              </p>
              <button className="bg-blue-400 rounded-md"> More information about adult group </button>
              </div>
              <div className="flex justify-around items-center w-full">
                <a href="/contact" className="text-black hover:text-blue-100">
                  <Card imgSrc={test.src} imgAlt="" imgWidth={480} imgHeight={480} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}