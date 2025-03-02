import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<BrowserRouter basename="/EstimaciondeTiempo">*/}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
