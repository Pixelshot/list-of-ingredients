import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.css";
import App from "./App";
// Removed registerServiceWorker because it clashes it Rails routing and may resolve it unable to access ActiveAdmin.

ReactDOM.render(<App />, document.getElementById("root"));
