import React from "react";
import './App.css';
import { useState } from 'react';
import { useFormState } from "react-dom";

// function Assessment() {
//   const Planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Saturn", isGasPlanet: true },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       {/* {Planets.filter(planet=> !planet.isGasPlanet)
//       .map((planet, index) => (
//         <h1 key={index} >{planet.name}</h1>
//         ))} */}

//         {Planets.map(
//         (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>   
//          )}
//     </div>
//   );
// }

function Assessment() {
 const [count,setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

   const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  };
  return (
    <div className="App">

      {/* {/* /* directly way  */ }
      {/* <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}> Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {count} */}

      <button onClick={increaseCount} style={buttonStyle}>Increase</button>
      <button onClick={decreaseCount} style={buttonStyle}>Decrease</button>  
      <button onClick={resetCount} style={buttonStyle}>Reset</button>
      {count}
    </div>
  );
}
export default Assessment;
