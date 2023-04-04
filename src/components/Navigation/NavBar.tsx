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
        if (hamburgerOpen) {
            setDropDownOpen1(false);
            setDropDownOpen2(false);
            setDropDownOpen3(false);
        }
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

    const closeHamburger = () => {
        setHamburgerOpen(false);
        setDropDownOpen1(false);
        setDropDownOpen2(false);
        setDropDownOpen3(false);
    };

    return (
        <div className="navbar">
            <img className="logo" src="/logo.png" />
            <nav>
                <div className="burger-button" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
                <ul className={hamburgerOpen ? "hamburger-open" : "hamburger-closed"}>
                    <li>
                        <Link className="navigation-button" to="/" onClick={closeHamburger}>
                            <AiFillHome />
                            <br />
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button onClick={(event) => { toggleDropdown1(); }} className="dropbtn">
                                <GiWhaleTail />
                                <br />
                                Whale Information
                            </button>
                            <div id="myDropdown1" className={dropDownOpen1 ? "dropdown-content show" : "dropdown-content"}>
                                <Link to="/whale/about" onClick={(event) => { closeHamburger(); }} >
                                    <GiWhaleTail />
                                    <br />
                                    About
                                </Link>
                                <Link to="/whale/species" onClick={(event) => { closeHamburger(); }}>
                                    <GiArchiveResearch />
                                    <br />
                                    Species
                                </Link>
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
                                <Link to="/sightings" onClick={closeHamburger}>
                                    <GiBinoculars />
                                    <br />
                                    Sightings
                                </Link>
                                <Link to="/sightings/submit" onClick={closeHamburger}>
                                    <AiOutlineForm />
                                    <br />
                                    Submit
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="navigation-button" to="/plan-trip" onClick={closeHamburger}>
                            <GiFishingBoat />
                            <br />
                            Plan a trip
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
                                <Link to="/users/create" onClick={closeHamburger}>
                                    <AiOutlinePlusCircle />
                                    <br />
                                    Create
                                </Link>
                                <Link to="/users/leaderboard" onClick={closeHamburger}>
                                    <ImTrophy />
                                    <br />
                                    Leaderboard
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="navigation-button" to="/login" onClick={closeHamburger}>
                            <FiLogIn />
                            <br />
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
