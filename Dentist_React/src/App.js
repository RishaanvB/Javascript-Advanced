import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
// import appointments from "./Appointments";

import startingState from "./utils";




const App = () => {
  const [appointments, setAppointments] = useState(startingState);
  console.log(appointments, "appointments in App.js")


  return(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar view</Link>
          </li>
          <li>
            <Link to="/day">Day view</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={appointments} />
          </Route>
          <Route path="/day">
            <Day appointments={appointments.filter((app) => app.day === 1)} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>


)
};
export default App;
