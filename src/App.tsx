import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navigation/NavBar';

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <BackendConnectionChecker />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </>
  )
}
export default App
