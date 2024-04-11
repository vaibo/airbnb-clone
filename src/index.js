import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Airbnb from "./Airbnb";
import "./shared/styles/resets.scss";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Airbnb />
        </Router>
    </React.StrictMode>
);

reportWebVitals();
