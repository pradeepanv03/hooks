import React, { useState } from "react";
import Call from "./Calll";

// Parent Component
export default function Callback() {
  const [UIColor, setUIColor] = useState(null);

  // Our callback function
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <h1
        className="App_color_container"
        style={{ color: UIColor }}
        
      >color change</h1>
      <h1>color name : {UIColor}</h1>
      <Call getColor={getColor} />
    </div>
  );
}