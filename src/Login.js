import React from 'react';
import {Link} from 'react-router-dom';
import {RiLoginCircleFill} from 'react-icons/ri';
import './Login.scss';
//import Signup from './Signup.js';
function Login(){
    //let location=useLocation();
    return(
        <div className="login-container">
              <div className="login-header">
          <div >
              <h3>SIGN IN</h3>
               Enter your Username and Password.
          </div>
          <RiLoginCircleFill className="login-icon"/>
        </div>
        <form>
            <input className="username" type="text" placeholder="username"/>
            <input className="password" type="text" placeholder="password"/><br/>
            <Link to="/home">
            <button className="login-submit" type="submit">Log In!</button>
            </Link>
        </form>
        <br/>
        <div className="login-footer">  
              Don't have account?
              <Link to="/signup" >
                 <div>Sign Up!</div>
              </Link>
                
        </div>
        </div>
       
           

       
        
    );
}
export default Login;