import React from 'react';
import Spotify from '../images/spotify.svg';
import Dell from '../images/dell.svg';
import Cisco from '../images/cisco.svg';
import Disney from '../images/disney.svg';
import Deezer from '../images/deezer.svg';
import Verizon from '../images/verizon.svg';
import Texas from '../images/texas.svg';

const Partner = () => {
  return (
    <div className="partner">
        <h1>Our Partners</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse <br /> accusantium vero, tempora cum nobis! Perferendis veniam <br /> quidem sapiente quod.</p>
        <div className="line1">
            <div className="gridbox"><img src={Spotify} alt="spotify"/></div>
            <div className="gridbox"><img src={Dell} alt="dell"/></div>
            <div className="gridbox"><img src={Cisco} alt="cisco"/></div>
            <div className="gridbox"><img src={Disney} alt="disney"/></div>
        </div>
        <div className="line2">
            <div className="gridbox"><img src={Deezer} alt="deezer"/></div>
            <div className="gridbox"><img src={Verizon} alt="verizon"/></div>
            <div className="gridbox"><img src={Texas} alt="texas"/></div>
        </div>
    </div>
  )
}

export default Partner