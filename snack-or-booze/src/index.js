import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Render the main App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Register the service worker for offline capabilities
// Note: This comes with some pitfalls. Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
