import React from "react";
import "./App.css";

export default ({ addDentist, dentists }) => {
  console.log(dentists, "home");
  const dentistList = dentists.map((dentist) => {
    return <h1>{dentist.name}</h1>;
  });
  return (
    <>
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        value={inputData.songTitle}
        id="name"
        
      />
      <button onClick={addDentist}>Add Dentist</button>
      <div>Home!</div>
      <div>{dentistList}</div>
    </>
  );
};
