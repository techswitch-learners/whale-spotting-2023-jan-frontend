import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateSighting } from './components/CreateSighting';
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/sighting/create" element={<CreateSighting />} />
        <Route path="/sighting/:id" element={<WhaleSightingDetail />}></Route>
      </Routes>
    </>
  )
}
export default App
