import React from 'react'; 
import './Signup.scss';
import Images from './Images/coal.jpg';
import {BsFillLockFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Signup(){
return(
    <div className="body2" style={{background: `url(${Images})`,backgroundSize:"cover"}}>
    <div className="signup-box" >
    <div className="signup-container">
         <div className="signup-header">
                <div >
                  <h3>SIGN UP</h3>
                  Welcome!! Fill your details.
                </div>
                <BsFillLockFill className="Signup-icon"/>
    </div>
<form>
  <input className="fname" type="text" placeholder="first name"/>
  <input className="lname" type="text" placeholder="last name"/>
  <input className="email" type="text" placeholder="email"/>
  <input className="password" type="text" placeholder="password"/><br/>
  <Link to="/home">
  <button className="signup-submit" type="submit">Sign Up!</button>
  </Link>
  
</form>
</div>
</div>
</div>
);

}
export default Signup;