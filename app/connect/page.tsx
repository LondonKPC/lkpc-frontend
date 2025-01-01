import React from 'react';
import churchBackground from '@/images/church.jpg';
import ConnectCard from '@/components/connectCard/ConnectCard';


export default function Connect() {
  return (
    <div className="flex justify-center items-center w-full min-h-full bg-cover md:bg-full bg-center" style={{ backgroundImage: `url(${churchBackground.src})` }}>
        {/* Desktop */}
        <div className="bg-white w-full h-screen bg-opacity-50">
          <div className="flex flex-col items-center justify-center my-52">
            <h1 className="text-center text-white text-4xl font-bold">Connect With Us</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <ConnectCard groupName="HI-C" groupDescription="Gr. 7-12"/>
              <ConnectCard groupName="CU" groupDescription="College &  University" />
              <ConnectCard groupName="Adults" groupDescription="Graduates+" />
          </div>
        </div>
      </div>
    </div>
  );
}