import "./Home.scss";
import React, { useState, useEffect } from "react";
import { WhaleCarousel } from "../WhaleCarousel/WhaleCarousel";
import { HomepageCards } from "../HomepageCards/HomepageCards";

export const Home: React.FunctionComponent = () => {

  return (
    <main>
      <h1 className="home-main-header">Whale Spotting</h1>
      <section className="image-info-section">
        <WhaleCarousel />
      </section >
      <section>
        <HomepageCards />
      </section>
    </main>
  );
};
