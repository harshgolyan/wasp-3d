import React from "react";
import { createContext, useState } from "react";

export const ModelPositionContext = createContext();

export const ModelPositionProvider = ({ children }) => {
  const [position, setPosition] = useState({
    x: 1,
    y: 0,
    z: 1,
    rotationY: 1.2
  });

  return (
    <ModelPositionContext.Provider value={{ position, setPosition }}>
      {children}
    </ModelPositionContext.Provider>
  );
};
