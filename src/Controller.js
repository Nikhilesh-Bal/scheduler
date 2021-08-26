import React from 'react';
import Webpage from './Webpage';
import Signup from './Signup';
import Home from './Home';
import CalendarPage from './CalendarPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function Controller()
{
    return(
      <Router>
        <Switch>
            <Route exact path="/" component={Webpage}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/calendar" component={CalendarPage}/>

        </Switch>
      </Router>
        
    );
}

  export default Controller;