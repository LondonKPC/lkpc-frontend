'use client'

import React, { ReactElement } from 'react';
import Image from "next/image"

interface ImageProps {
  imgSrc: string
  imgAlt: string
  imgWidth: number
  imgHeight: number
}

const Card: React.FC<ImageProps> = ({imgSrc, imgAlt, imgWidth, imgHeight}): ReactElement => {
  return (
    <div>
      <Image 
      src={imgSrc}
      alt={imgAlt}
      width={imgWidth}
      height={imgHeight}
      unoptimized={true}
      />
      <h1 className=""></h1>
    </div>
  );
}

export default Card;