import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiWhaleTail, GiBinoculars, GiArchiveResearch, GiFishingBoat } from "react-icons/gi";
import { AiFillHome, AiOutlineForm, AiOutlinePlusCircle } from "react-icons/ai"
import { FiLogIn } from "react-icons/fi"
import { ImTrophy } from "react-icons/im";
import "./NavBar.scss";
import Hamburger from "./Hamburger";

export const Navbar: React.FunctionComponent = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [dropDownOpen1, setDropDownOpen1] = useState(false);
    const [dropDownOpen2, setDropDownOpen2] = useState(false);
    const [dropDownOpen3, setDropDownOpen3] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const toggleDropdown1 = () => {
        setDropDownOpen1(!dropDownOpen1);
    };

    const toggleDropdown2 = () => {
        setDropDownOpen2(!dropDownOpen2);
    };

    const toggleDropdown3 = () => {
        setDropDownOpen3(!dropDownOpen3);
    };

    return (
        <nav>
            <img className="logo" src="/logo.png" />
            <div className="burger-button" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
            <ul className={hamburgerOpen ? "hamburger-open" : "hamburger-closed"}>
                <li />
                <li>
                    <Link className="navigation-button" to="/">
                        <AiFillHome />
                        <br />
                        Home
                    </Link>
                </li>
                <li>
                    <div className="dropdown">
                        <button onClick={toggleDropdown1} className="dropbtn">
                            <GiWhaleTail />
                            <br />
                            Whale Information
                        </button>
                        <div id="myDropdown1" className={dropDownOpen1 ? "dropdown-content show" : "dropdown-content"}>
                            <a href="/whale/about">
                                <GiWhaleTail />
                                <br />
                                About
                            </a>
                            <a href="/whale/species">
                                <GiArchiveResearch />
                                <br />
                                Species
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button onClick={toggleDropdown2} className="dropbtn">
                            <GiBinoculars />
                            <br />
                            Whale Sightings
                        </button>
                        <div id="myDropdown2" className={dropDownOpen2 ? "dropdown-content show" : "dropdown-content"}>
                            <a href="/sightings">
                                <GiBinoculars />
                                <br />
                                Sightings
                            </a>
                            <a href="/sightings/submit">
                                <AiOutlineForm />
                                <br />
                                Submit
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <Link className="navigation-button" to="/plan-trip">
                        <GiFishingBoat />
                        <br />
                        Plan a trip!
                    </Link>
                </li>
                <li>
                    <div className="dropdown">
                        <button onClick={toggleDropdown3} className="dropbtn">
                            <AiOutlinePlusCircle />
                            <br />
                            User
                        </button>
                        <div id="myDropdown3" className={dropDownOpen3 ? "dropdown-content show" : "dropdown-content"}>
                            <a href="/users/create">
                                <AiOutlinePlusCircle />
                                <br />
                                Create
                            </a>
                            <a href="/users/leaderboard">
                                <ImTrophy />
                                <br />
                                Leaderboard
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
