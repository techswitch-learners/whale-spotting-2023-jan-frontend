import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
      </Routes>
    </>
  )
}
export default App
