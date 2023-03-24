import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <BackendConnectionChecker />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
      </Routes>
    </>
  )
}
export default App
