/**
 * Mama Mindfully - main.tsx
 * Entry point: initializes React application.
 * Author: Alexandria Shinaut
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Safer root element access
const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Root element not found. Ensure there is a <div id='root'></div> in index.html.",
  );
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
