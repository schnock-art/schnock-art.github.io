import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Home/Footer";
import  Home from "./Pages/Home/Homescreen";
import CVComponent from "./Pages/CV/CVComponent";


function App() {
  return (
    <div className="Schnock">
      <Router>
        <div>
          {location.pathname == '/' && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/*<Route path="/cv" element={<CVComponent />}></Route>*/}
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          {location.pathname == '/' && <Footer />}
        </div>
      </Router>
    </div>
  );
}

export default App;
