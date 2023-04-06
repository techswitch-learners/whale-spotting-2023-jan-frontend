import "./Landing.scss";
import React, { useState, useEffect } from "react";
import { WhaleCarousel } from "../WhaleCarousel/WhaleCarousel";
import { Link } from "react-router-dom";

export const Landing: React.FunctionComponent = () => {

  return (
    <main>
      <section className="landing">
        <img className="landing-image" src="https://wallpapercrafter.com/desktop1/601269-killer-whale-animals-nature-wildlife-predator.jpg"></img>
        <h2 className="landing-message">
        <Link className="landing-link" to='/home'>
        Into the Whale Wonderland
        </Link>
        </h2>
        
      </section >
    </main>
  );
};
