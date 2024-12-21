import React from "react";
import Sidebar from "./components/Side/Sidebar";
import Ma from "./components/main/Ma";
import Card from "./components/main/Team";
import Mem1 from "./components/main/Mem1";
import "./App.css";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Forms from "./components/main/Forms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path ='/home' element={<Ma/>}/>
        <Route path="/forms" element={<Forms/>}/>
      </Routes>
    </div>
  );
}

export default App;
