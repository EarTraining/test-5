import React, { useContext } from "react";
import { MyContext } from "./context.js";
//import { MyContextProviderOverride } from "./context.js";
//import { OverrideTest } from "./OverrideTest.js";

function App() {
  const contextValue = useContext(MyContext);

  var text = contextValue.text;
  var setText = contextValue.setText;
  var darkmode = contextValue.darkmode;
  var setDarkmode = contextValue.setDarkmode;

  console.log(text);

  return (
    <div className="App">
      {text}
      {darkmode}
      <input
        onChange={e => {
          setDarkmode(e);
        }}
      ></input>
    </div>
  );
}

export default App;
