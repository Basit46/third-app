import React from 'react'
import Couch from '../images/couch.png'
import Appimage from '../images/app.svg'
import Logoname from '../images/logo.svg'

const Home = ({barClicked}) => {
  return (
    <div className="home">
        <nav>
            <ul>
                <li>HOME</li>
                <li>CONTACT</li>
            </ul>
            <div className="logo">
                <img src={Logoname} alt="logoname" />
            </div>
            <div className="buttons">
                <button className='login'>LOGIN</button>
                <button>SIGN UP</button>
            </div>
            
            <div className="bar" onClick={barClicked}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </nav>
        <img src={Couch} alt="couch" className='couch' />
        <div className="appimageBox">
            <img src={Appimage} className='appimage' alt="" />
            <button>Download The App</button>
        </div>
    </div>
  )
}

export default Home