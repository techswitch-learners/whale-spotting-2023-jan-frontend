import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React, { useContext, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navigation/NavBar';
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { WhaleInfo } from './components/WhaleInfo/WhaleInfo';
import { CreateUser } from "./components/CreateUser/CreateUser";
import { UserLeaderBoard } from "./components/UserLeaderBoard/UserLeaderBoard";
import { ColourSchemeChecker } from './ColourSchemeChecker';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer';
import './App.scss';
import { LoginContext, LoginManager } from "./components/Login/LoginManager";
import { TripPlanner } from "./components/TripPlanner/TripPlanner";

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
        <Route path="/users/create" element={<CreateUser />}/>
        <Route path="/whale/species-identification" element={<SpeciesIdentification />} />
        <Route path="/users/leaderboard" element={<UserLeaderBoard />} />
        <Route path="/plan-trip" element={<TripPlanner />} />
      </Routes>
      <Footer />
    </LoginManager>
  )
}
export default App
