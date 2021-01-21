import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import startingState from "./utils";
import dentistData from "./json-data/dentists.json";
import assistantData from "./json-data/assistants.json";
import patientData from "./json-data/patients.json";

/* newState = addDentist(
  state,
  "Toos",
  "Trekker",
  "06-12345678",
  "toos@tandartspraktijkbvt.nl"
); */

const App = () => {
  const [appointments, setAppointments] = useState(startingState);
  const [dentists, setDentists] = useState(dentistData);
  const [assistants, setAssistants] = useState(assistantData);
  const [patients, setPatients] = useState(patientData);
 
 const addDentist=()=>{
console.log("add dentist");
console.log(dentistData, "data");
   setDentists(
     [...dentists,
    { name: "Toos",
     surname:"Trekker",
     phone_number:"06-12345678",
     email_address: "toos@tandartspraktijkbvt.nl"}]
   );
   console.log(dentists)
console.log(dentistData, "data");

 }
 

  console.log(dentists, "appointments in App.js");

  return (
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
              <Home addDentist={addDentist} dentists={dentists}/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};
export default App;
