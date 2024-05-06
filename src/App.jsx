import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/Aboutus";
import Installation from "./components/Intsallation/Installation";
import Documentation from "./components/Documentation/Documentation";
import Header from "./components/Header";

function App() {
  return (
    <>
       <Router>
        <div className="flex ">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        </div>
       </Router>
    </>
  );
}

export default App;
