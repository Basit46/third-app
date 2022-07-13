import React from 'react';
import icon from '../images/logomark.svg';

const Aboutitems = ({pword}) => {
  return (
    <div className="item">
        <img src={icon} alt="icon" />
        <p className='p' style={{fontWeight:"bold"}}>{pword}</p>
        <p className="words">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Illum, rem?
        </p>
    </div>
  )
}

export default Aboutitems