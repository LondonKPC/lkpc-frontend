import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HomeCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white">
      <Image src={imageSrc} alt="Card Image" className="w-full rounded-t-lg" />
      <div className="px-4 py-4">
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;