import './App.css';
import React,{useState} from 'react';
import Home from './components/Home';
import About from './components/About';
import Partner from './components/Partner';
import Footer from './components/Footer';
import { FaTimes } from 'react-icons/fa';


function App() {
  const [menuPos, setmenuPose] = useState(true)

  function canceling(){
    setmenuPose(!menuPos)
  }

  return (
    <div className="container">
      <div className={ menuPos ? "menu canceled" : "menu"} >
        <FaTimes className='cancelBtn' onClick={canceling} />
        <li>HOME</li>
        <li>CONTACT</li>
        <li className='li3'>LOGIN</li>
        <li className='li4'>SIGN UP</li>
      </div>
      <Home barClicked={canceling} />
      <About />
      <div className="aboutpadding"></div>
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
