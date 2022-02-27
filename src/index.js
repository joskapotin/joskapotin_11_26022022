import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { HousingContextProvider } from "./HousingContext";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Turns URL path into router basename by removing everything after the last slash
 *
 * @HindleyMilner getBasename :: string -> string
 *
 * @pure
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 *
 * @example
 * getBaseName('/some/structure/page'); // => '/some/structure'
 */
const getBasename = path => path.substring(0, path.lastIndexOf("\\"));

ReactDOM.render(
  <React.StrictMode>
    <HousingContextProvider>
      <Router>
        {console.log(getBasename(window.location.pathname))}
        <App />
      </Router>
    </HousingContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
