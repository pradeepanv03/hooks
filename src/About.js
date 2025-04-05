// import React, { useContext } from "react";
// import { ColorContext } from "./Main";

// export default function About() {
//   const { color } = useContext(ColorContext);

//   return (
//     <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
//       <h1>About Page</h1>
//       <p>The background color is: {color}</p>
//     </div>
//   );
// }


import React from "react";
import { useLocation } from "react-router-dom";
 
export default function About () {
  const location = useLocation();
  const { color } = location.state;
  
  return (
    <>
   <div style={{ background: color, height: "100vh", padding: "20px"}}>About Page
   <h1>color name : {color}</h1>
   </div>
  </>
  );
};
