import React from 'react';
import './Webpage.scss'
//import {RiLoginCircleFill} from 'react-icons/ri';
//import {SiGnuprivacyguard} from 'react-icons/si';
import Images from './Images/coal.jpg';
import Login from './Login'
//import Signup from './Signup';
//import { useLocation } from 'react-router';
 function Webpage(){
  // let location=useLocation();
    return(
        <div className="body" style={{background: `url(${Images})`,backgroundSize:"cover"}}>
          <div className="login-box">
             <Login/>
          </div>
        </div>
        
    );
 }
 export default Webpage;