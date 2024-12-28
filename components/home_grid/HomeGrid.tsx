import React from 'react';
import GridButton from './GridButton';

// Import images using ES6 import syntax
import box1 from '@/images/home_grid/box1.jpg';
import box2 from '@/images/home_grid/box2.jpg';
import box3 from '@/images/home_grid/box3.jpg';
import box4 from '@/images/home_grid/box4.jpg';
import box5 from '@/images/home_grid/box5.jpg';
import box6 from '@/images/home_grid/box6.jpg';
import box7 from '@/images/home_grid/box7.jpg';
import box8 from '@/images/home_grid/box8.jpg';
import box9 from '@/images/home_grid/box9.jpg';

const HomeGrid = () => {
  return (
    <div className="home-grid">
      <GridButton imageSrc={box1} text="About" />
      <GridButton imageSrc={box2} text="Group" />
      <GridButton imageSrc={box3} text="School" />
      <GridButton imageSrc={box4} text="News" />
      <GridButton imageSrc={box5} text="Ministry" />
      <GridButton imageSrc={box6} text="Family" />
      <GridButton imageSrc={box7} text="Offering" />
      <GridButton imageSrc={box8} text="Events" />
      <GridButton imageSrc={box9} text="Contact" />
    </div>
  );
};

export default HomeGrid;