import React from 'react';
import Table from '../images/table.png';
import Lamp from '../images/lamp.png';
import AppLogo from '../images/app.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="section1">
            <div className="content">
                <h1>Relax, You're Home!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Consequatur facere magni non! Non ut <br /> blanditiis <br /> nisi dolore modi ea odit porro molestias. <br /> Quis in omnis corporis possimus consequuntur corrupti tenetur! Sint fugiat eos <br /> consequuntur error accusamus.</p>
                <button>Sign Up</button>
            </div>
            <img src={Table} alt="furniture" />
            <div className="circle"></div>
        </div>
        <div className="section2">
            <div className="images">
                <img src={Lamp} className="lamp" alt="lamp" />
                <button>Download App Now</button>
                <div className="appBox">
                    <img src={AppLogo} className="appimg" alt="app" />
                </div>
            </div>
            <form>
                <h2>Contact Us</h2>
                <label htmlFor="name">ENTER NAME</label>
                <input type="text" id='name' />
                <label htmlFor="mail">ENTER MAIL</label>
                <input type="text" id='mail' />
                <textarea placeholder='ENTER MESSAGE' ></textarea>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Footer