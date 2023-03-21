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
      {/* <header><Navbar /></ header>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/whaleinfo" element=<YYYY /> />
        <Route path="/leaderboard" element=<YYYY /> />
        <Route path="/whalesightingviewer" element=<YYYY /> />
        <Route path="/submitsighting" element=<YYYY /> />
        <Route path="/speciesid" element=<YYYY /> />
        <Route path="/planatrip" element=<YYYY /> />
        <Route path="/login" element=<YYYY /> />
        <Route path="/signup" element=<YYYY /> />
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App




// const App: React.FunctionComponent = () => {


