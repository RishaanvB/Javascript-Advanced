import React, { useState } from "react";
import generateRandomAppointments from "./utils";


function Appointments (){
    const startingState = generateRandomAppointments(20).sort(
        (a, b) => a.time - b.time
      );
    const [appointments, setAppointments] = useState(startingState)
    console.log(appointments, "appointments in startingState");

  return (
    <>
    
    </>
  );
};

export default Appointments;
