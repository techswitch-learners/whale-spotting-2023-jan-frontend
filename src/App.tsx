import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Home />
      <BackendConnectionChecker />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
export default App
