import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";     // tailwind v3 loaded
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
