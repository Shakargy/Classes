// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Room501 from "./Components/Room501";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/room501" element={<Room501 />} />
      </Routes>
    </div>
  );
}
