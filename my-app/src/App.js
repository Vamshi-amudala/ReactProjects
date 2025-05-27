// import './App.css';

// import { useState } from 'react';
// // import styles  from "./App.module.css"
// import React from 'react';
// import {User} from './User';  

// // function App() {
// //   // const name = <h1>My Blog</h1>;
// //   // const age = <h2>22</h2>;
// //   // const email = <a href="http://www.google.com">Vamshiamudala@gmail.com</a>;
// //   return (
// //     <div className="App">
// //       <User name = "vamshi" salary={45000} company="Google"  email="vamshi@gmail.com"/>
// //       <User name = "ayan" salary ={64000} company="Civo" email = "ayansamger@gmail.com"/>
// //       <User name = "sai" salary ={54000} company="Google" email = "sai@gmail.com"/>
      
// //     </div>
// //   );
// // }


// // const User  = (props) =>{
// //   return (
// //     <div>
// //       <h1>{props.name}</h1>
// //       <h2>{props.salary}</h2>
// //       <h2>{props.company}</h2>
// //       <h3>{props.email}</h3>
// //     </div>
// //   );
// // };


// // const GetNameComponent = () => {
// //   return <h1>My name is {getName()}</h1>
// // };



// //    -------class 3  this is import using  "./module"


// // function App(){
// //     return (

// //       <div className={styles.App}>
// //         <h1 className={styles.name}>Vamshiamudala</h1>
// //       </div>
// //     );
// // }

// // const age = 15;
// // if(age >= 18){
// //   console.log("Is over age");
// // }
// // else{
// //   console.log("Is under age");
// // }

// // function App(){

// //   const age = 22;
// //   const isGreen = true;
// // // if(age >= 18){
// // //  return <h1>Over Age</h1>;
// // // }
// // // else{
// // //   return <h1>Underage</h1>;
// // // }

// // // using ternary inside return
// //   return (
// //   <div className="App">

// //  {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1> }
// //  <h1 style={{color: isGreen ? "green": "red", backgroundColor:"black"}}>This has some color</h1>

// // // if green is true , shows button , else it hides button
// //  {isGreen && <button>This is a Button </button>}
// //   </div>);
// // }


// // function App(){

// //   //const names = ["vamshi", "Ayan", "Sai","Gunnu"];

// //   const users = [
// //     {name: "Vamshi", age: 22},
// //     {name: "Ayan", age: 23},
// //     {name: "Sai", age: 24},
// //     {name: "Gunnu", age: 25},
// //   ];
// //   return (

// //     <div className="App">
// //       {users.map((user, index) => {
// //         return (<User name={user.name} age={user.age} key={index} />);
// //       }
// //       )}
// //     </div>
// //   );
// // }



// // --- class 4 ----
// // states in react - are variables
// // we used  {useState} hook

// // function App() {
// //   // Age logic
// //   const [age, setAge] = useState(15);
// //   const increaseAge = () => {
// //     setAge(age + 1);
// //   };

// //   // Text show/hide logic
// //   const [showText, setShowText] = useState(false);
// //   const toggleText = () => {
// //     setShowText(!showText);
// //   };

// //   // Text color toggle logic
// //   const [textColor, setTextColor] = useState("green");
// //   // const toggleColor = () => {
// //   //   setTextColor(textColor === "red" ? "green" : "red");
// //   // };

// //   return (
// //     <div className="App">
// //       {/* Age Section */}
// //       <h2>Age: {age}</h2>
// //       <button onClick={increaseAge}>Increase Age</button>

// //       <br /><br />

// //       {/* Show/Hide Section */}
// //       <button onClick={toggleText}>
// //         {showText ? "Hide Text" : "Show Text"}
// //       </button>
// //       {showText && (
// //         <h1 >My name is Vamshi Amudala</h1>
// //       )}

// //       <br /><br />

// //       {/* Text Color Toggle Section */}
// //      <button onClick={() => setTextColor(textColor === "green" ? "red" : "green")}>
// //   Change Text Color
// // </button>
// //       <h2 style={{ color: textColor }}>Hello there</h2>
// //     </div>
// //   );
// // }


// // -------- class 5   using CRUD operations [Todo List]

// function App(){


//   return (
//     <div className="App">

//         <div className="addTask"></div>
//         <div className="list"></div>
//     </div>
//   );
// }

// export default App;