import "./index.css"; // ⭐ 반드시 가장 위에 있어야 Tailwind 적용됨
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

