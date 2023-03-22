import React from 'react';
import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <img src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." width="200" />
      <h1>Whale Spotting</h1>
      <BackendConnectionChecker />
      <Route>
        <Route path="/sighting/:id" element={<WhaleSightingDetail />}></Route>
      </Route>
    </>
  )
}
export default App
