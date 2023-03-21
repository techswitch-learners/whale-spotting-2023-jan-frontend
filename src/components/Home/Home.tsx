import "./Home.scss";
import React, { useState, useEffect } from "react";

export const Home: React.FunctionComponent = () => {

  return (
    <main>
      <h1 className="main-header">Whale Spotting</h1>
      <p className="main-welcome-message"> </p>
      <section className="image-info-section">
      <img className="main-image"src ="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars."/> 
      {/* code here for Showing top / most recent sightings
change every few seconds similar to mars mission */}
      </section >
    </main>
  );
};