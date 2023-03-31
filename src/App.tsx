import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Navbar } from './components/Navigation/NavBar';
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { WhaleInfo } from './components/WhaleInfo/WhaleInfo';
import { CreateUser } from "./components/CreateUser/CreateUser";
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer';
import './App.scss';
import { LoginContext, LoginManager } from "./components/Login/LoginManager";

function App() {
  const loginContext = useContext(LoginContext);

  return (
    <LoginManager>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/backend-checker" element={<BackendConnectionChecker />} />
        <Route path="/sightings" element={
          <LoginContext.Consumer>
            {value => <WhaleSightingViewer loggedIn={value.isLoggedIn} />}
          </LoginContext.Consumer>} />
        <Route path="/sightings/submit" element={
          <LoginContext.Consumer>
            {value => value.isLoggedIn
              ? <CreateSighting />
              : <Login />}
          </LoginContext.Consumer>} />
        <Route path="/sightings/:id" element={<WhaleSightingDetail />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
        <Route path="/sighting" element={<WhaleSightingViewer />} />
        <Route path="/sightings/submit" element={<CreateSighting />} />
        <Route path="/sightings/:id" element={<WhaleSightingDetail />}></Route>
        <Route path="/users/create" element={<CreateUser />}></Route>
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
        <Route path="/whale/about" element={<WhaleInfo />} />
      </Routes>
      <Footer />
    </LoginManager>
  )
}
export default App
