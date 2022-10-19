import React from "react";
import ReactDOM from "react-dom/client";
// import Dogs from "./Dogs.js";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DogFinder from "./components/pages/dogfinder/DogFinder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DogFinder />);
