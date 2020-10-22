import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  text: "text",
  darkmode: false,
  setText: () => {},
  setDarkmode: () => {}
};

export const MyContext = createContext(defaultValue);

// function to return a component
export const MyContextProviderOverride = ({ children }) => {
  const [textState, setTextState] = useState("hello");
  const [darkState, setDarkState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        text: textState,
        setText: setTextState,
        darkmode: darkState,
        setDarkmode: setDarkState
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
