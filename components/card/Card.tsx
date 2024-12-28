import React from 'react';

type ImageProps = {
  imgSrc: string
  title: string
  alt: string

}

const Events = (props: ImageProps) => {
  return (
    <div>
      <img src={props.imgSrc} alt="" className="" />
      <h1 className=""></h1>
    </div>
  );
}

export default Events;
