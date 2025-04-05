import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
}

