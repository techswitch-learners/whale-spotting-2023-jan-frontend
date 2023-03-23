import "./Home.scss";
import React, { useState, useEffect } from "react";
import { WhaleCarousel } from "../WhaleCarousel/WhaleCarousel";

export const Home: React.FunctionComponent = () => {

  return (
    <main>
      <h1 className="main-header">Whale Spotting</h1>
      <section className="image-info-section">
        <img className="main-image" src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." />
        <WhaleCarousel />
      </section >
    </main>
  );
};
