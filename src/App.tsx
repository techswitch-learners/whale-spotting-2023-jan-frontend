import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Navbar } from './components/Navigation/NavBar';
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { WhaleInfo } from './components/WhaleInfo/WhaleInfo';
import { CreateUser } from "./components/CreateUser/CreateUser";
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
        <Route path="/sightings" element={<WhaleSightingViewer />} />
        <Route path="/sightings/submit" element={<CreateSighting />} />
        <Route path="/sightings/:id" element={<WhaleSightingDetail />}></Route>
        <Route path="/users/create" element={<CreateUser />}></Route>
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
      </Routes>
    </>
  )
}
export default App
