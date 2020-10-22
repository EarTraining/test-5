import React, { useContext } from "react";
import { MyContext } from "/.context";

export const OverrideTest = () => {
  const contextValue = useContext(MyContext);

  var text = contextValue.text;
  var setText = contextValue.setText;
  var darkmode = contextValue.darkmode;
  var setDarkmode = contextValue.setDarkmode;

  return (
    <div>
      {text}
      {darkmode}
    </div>
  );
};
