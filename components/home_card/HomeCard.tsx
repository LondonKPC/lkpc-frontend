import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HomeCardProps {
  imageSrc: StaticImageData;
  description: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ imageSrc, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageSrc} alt="Card Image" className="w-full" />
      <div className="px-4 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;