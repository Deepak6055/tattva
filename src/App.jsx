import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs/Aboutus";
import Installation from "./components/Intsallation/Installation";
import Documentation from "./components/Documentation/Documentation";
import Conditionals from "./components/Documentation/documents/Conditionals";
import Cusloops from "./components/Documentation/documents/Cusloops";
import Arrays from "./components/Documentation/documents/Arrays";
import ExamplePro from "./components/Documentation/documents/ExamplePro";
import Variables from "./components/Documentation/Variables";  // Corrected import
import Header from "./components/Header";  // Keeping this as it might be used elsewhere

function App() {
  return (
    <Router>
      <div className="flex bg bg-[#ffff3c]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/variables" element={<Variables />} />
          <Route path="/documentation/conditionals" element={<Conditionals />} />
          <Route path="/documentation/cusloops" element={<Cusloops />} />
          <Route path="/documentation/arrays" element={<Arrays />} />
          <Route path="/documentation/exampleprograms" element={<ExamplePro />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

