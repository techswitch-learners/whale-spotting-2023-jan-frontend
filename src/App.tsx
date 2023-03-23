import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';

function App() {

  return (
    <>
      <img src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." width="200" />
      <h1>Whale Spotting</h1>
      <BackendConnectionChecker />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/sighting" element={<WhaleSightingViewer />} />
      </Routes>

    </>
  )
}

export default App
