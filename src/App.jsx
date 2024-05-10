import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/Aboutus";
import Installation from "./components/Intsallation/Installation";
import Documentation from "./components/Documentation/Documentation";
import Conditionals from "./components/Documentation/documents/Conditionals"
import Cusloops from "./components/Documentation/documents/Cusloops"
import Arrays from "./components/Documentation/documents/Arrays"
import ExamplePor from "./components/Documentation/documents/ExamplePro"


import Varibles from "./components/Documentation/documents/Variables";
function App() {
  return (
    <>
       <Router>
        <div className="flex ">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="installation" element={<Installation />} />
          {/* <Route path="/documentation" element={<Documentation />} /> */}
          <Route path="documentation" element={<Documentation />}/>
          <Route path="documentation/variables" element={<Varibles/>}/>
          <Route path="documentation/conditonals" element={<Conditionals/>}/>
          <Route path="documentation/cusloops" element={<Cusloops/>}/>
          <Route path="documentation/arrays" element={<Arrays/>}/>
          <Route path="documentation/exampleprograms" element={<ExamplePor/>}/>
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
        </div>
       </Router>
    </>
  );
}

export default App;
