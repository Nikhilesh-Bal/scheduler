import React from 'react';
import './Home.scss';
import {BsCalendar} from 'react-icons/bs';
import Images from './Images/background1.jpg';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div className="body3" style={{background: `url(${Images})`,backgroundSize:"cover"}}>
        <div className="schedule-box" >
        <div className="schedule-container">
             <div className="schedule-header">
                    <div >
                      <h3>WELCOME ABOARD</h3>
                     Schedule your events!
                    </div>
                    <BsCalendar className="schedule-icon"/>
        </div>
    <form>
      <input className="name" type="text" placeholder="Name"/>
      <input className="description" type="text" placeholder="description"/>
      <input className="start-time" type="text" placeholder="Start time"/>
      <input className="end-time" type="text" placeholder="End time"/><br/>
      <input className="day" type="text" placeholder="Day of the week"/><br/>
      <Link to="/calendar">
      <button className="schedule-submit" type="submit">Schedule</button>
      </Link>
      
    </form>
    </div>
    </div>
    </div>
    );
    
    }
    export default Home;