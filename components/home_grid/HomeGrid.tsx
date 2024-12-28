import React from 'react'
import GridButton from './GridButton'

const HomeGrid = () => {
  return (
    <div className="home-grid">
        <GridButton imageSrc={require("@/images/home_grid/box1.jpg").default} text="About"/>
        <GridButton imageSrc={require("@/images/home_grid/box2.jpg").default} text="Group"/>
        <GridButton imageSrc={require("@/images/home_grid/box3.jpg").default} text="School"/>
        <GridButton imageSrc={require("@/images/home_grid/box4.jpg").default} text="News"/>
        <GridButton imageSrc={require("@/images/home_grid/box5.jpg").default} text="Ministry"/>
        <GridButton imageSrc={require("@/images/home_grid/box6.jpg").default} text="Family"/>
        <GridButton imageSrc={require("@/images/home_grid/box7.jpg").default} text="Offering"/>
        <GridButton imageSrc={require("@/images/home_grid/box8.jpg").default} text="Events" />
        <GridButton imageSrc={require("@/images/home_grid/box9.jpg").default} text="Contact"/>
      </div>
  )
}

export default HomeGrid