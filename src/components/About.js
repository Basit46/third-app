import React from 'react';
import Dots from '../images/dots.svg';
import Aboutitems from './Aboutitems';

const About = () => {
  return (
    <div className="about">
        <div className="aboutleft">
            <img src={Dots} alt="" />
        </div>
        <div className="aboutcenter">
          <Aboutitems pword="Safe" />
          <Aboutitems pword="Easy Payments" />
          <Aboutitems pword="Anytime" />
        </div>
        <div className="aboutright">
            <img src={Dots} alt="" />
        </div>
    </div>
  )
}

export default About