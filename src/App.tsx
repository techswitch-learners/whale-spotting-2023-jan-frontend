import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { CreateSighting } from './components/CreateSighting';
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { WhaleInfo } from './components/WhaleInfo/WhaleInfo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
      </Routes>
    </>
  )
}
export default App
