import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateSighting } from './components/CreateSighting';
import { ColourSchemeChecker } from './ColourSchemeChecker';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/createsighting" element={<CreateSighting />} />
      </Routes>
    </>
  )
}
export default App
