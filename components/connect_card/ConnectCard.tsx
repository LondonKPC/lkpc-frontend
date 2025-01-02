// ConnectCard.tsx
// Card that contains links to group album and event pages

import React, { ReactElement } from 'react';
import Image from 'next/image';
import CalendarWhite from "@/images/icons/calendar_white.svg"
import PhotoAlbum from "@/images/icons/photo_album.svg"


interface ConnectCardProp {
  groupName: string
  groupDescription: string
}

const ConnectCard: React.FC<ConnectCardProp> = ({groupName, groupDescription}): ReactElement => {
  return (
    <div className="flex text-black py-4">
      {/* Desktop */}
      <div className="p-4 w-80 h-52">
        <h1 className="flex justify-center items-center text-xl font-bold"> {groupName} </h1>
        <h3 className="flex justify-center items-center font-bold"> {groupDescription} </h3>
        <div className="space-y-5">
          <div className="flex justify-center items-center bg-black text-white font-bold p-2 m-4 border-2 hover:bg-slate-700 cursor-pointer">
            <Image
              className="mx-1 md:mx-2"
              src={PhotoAlbum}
              alt="Events"
              width={20}
              height={20}
            />
            <p> Photo Album </p>
          </div>
          <div className="flex justify-center items-center bg-black text-white font-bold p-2 m-4 border-2 hover:bg-slate-700 cursor-pointer"> 
            <Image
              className="mx-1 md:mx-2"
              src={CalendarWhite}
              alt="Events"
              width={20}
              height={20}
            />
            <p> Event Page </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
