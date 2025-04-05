// import React, { useContext } from "react";
// import { ColorContext } from "./Main";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const { changeColor } = useContext(ColorContext);
//   const navigate = useNavigate();

//   const handleClick = (color) => {
//     changeColor(color);
//     navigate("/about");
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={() => handleClick("red")}>Red</button>
//       <button onClick={() => handleClick("blue")}>Blue</button>
//       <button onClick={() => handleClick("green")}>Green</button>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {


      const navigate = useNavigate();
      const handleChange = (color) => {
        navigate("/about", { state: { color } });
      };

  return (
    <div >
      Home Page
      <button onClick={() => handleChange("red")}>Red</button>
      <button onClick={() => handleChange("green")}>Green</button>
      <button onClick={() => handleChange("blue")}>Blue</button>
    </div>
  );
}