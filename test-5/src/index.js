import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyContextProviderOverride } from "./context.js";

ReactDOM.render(
  <React.StrictMode>
    <MyContextProviderOverride>
      <App />
    </MyContextProviderOverride>
  </React.StrictMode>,
  document.getElementById("root")
);
