import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiWhaleTail, GiBinoculars, GiArchiveResearch,GiFishingBoat } from "react-icons/gi";
import {AiFillHome, AiOutlineForm} from "react-icons/ai"
import { FiLogIn} from "react-icons/fi"
import {ImTrophy} from "react-icons/im";
import "./NavBar.scss";
import Hamburger from "./Hamburger";

export const Navbar: React.FunctionComponent = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav>
      <img className="logo" src="/logo.png"/>
      <div className="burger-button" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <ul className={hamburgerOpen ? "hamburger-open" : "hamburger-closed"}>
        <li />
        <li>
          <Link className="navigation-button" to="/">
            <AiFillHome />
            <br></br>Home
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/about">
            <GiWhaleTail />
            <br />
            About Whales
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/leaderboard">
            <ImTrophy />
            <br />
            Leaderboard
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/sightings">
            <GiBinoculars />
            <br />
            Whale Sightings
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/submit-whale-sighting">
            <AiOutlineForm />
            <br />
            Submit Whale Sighting
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/species-identification">
            <GiArchiveResearch />
            <br />
            Whale Species
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/plan-trip">
            <GiFishingBoat />
            <br />
            Plan a trip!
          </Link>
        </li>
        <li>
          <Link className="navigation-button" to="/login">
            <FiLogIn />
            <br />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};


