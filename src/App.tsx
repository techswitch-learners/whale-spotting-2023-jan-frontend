import './App.css'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
      <img src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." width="200" />
      <h1>Whale Spotting</h1>
      
      <BackendConnectionChecker />

      <Routes>
        <Route path="/" element={<></>} />
      </Routes>

    </>
  )
}

export default App