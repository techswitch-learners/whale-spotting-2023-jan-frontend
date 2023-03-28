import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navigation/NavBar';
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer';
import './App.scss';
import { WhaleInfo } from './components/WhaleInfo/WhaleInfo';

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <BackendConnectionChecker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/sighting" element={<WhaleSightingViewer />} />
        <Route path="/sightings/submit" element={<CreateSighting />} />
        <Route path="/sightings/:id" element={<WhaleSightingDetail />} />
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
      </Routes>
    </>
  )
}
export default App
