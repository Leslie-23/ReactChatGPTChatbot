import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import App2 from "./App01";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);
