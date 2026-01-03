import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Contectpage from "./components/Contectpage";
import "./App.css";

const App = () => {
  const [userdata, setuserdata] = useState(null);

  return (
    <>
      <div className="navbar">
        <Link className="logo" to="/">
          <h1>DevOps</h1>
        </Link>

        <div className="nav-items">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contect">
            Contect
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Homepage userdata={userdata} />}></Route>
        <Route path="/about" element={<Aboutpage />} />
        <Route
          path="/contect"
          element={<Contectpage setuserdata={setuserdata} />}
        />
      </Routes>

    </>
  );
};

export default App;
