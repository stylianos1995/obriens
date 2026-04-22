import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero1.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Cocktail bar hero section"
    >
      <div className="container">
        <p className="eyebrow">Cocktails & Draft Beer</p>
        <h1>Crafted Drinks. Cold Pours. Good Nights.</h1>
        <p className="hero-text">
          From signature shaken cocktails to perfectly chilled draft taps,
          O&apos;briens brings elevated bar energy with a neighborhood soul.
        </p>
        <div className="hero-highlights">
          <span>12 Signature Cocktails</span>
          <span>8 Rotating Draft Lines</span>
          <span>Happy Hour Daily</span>
        </div>
        <a href="#contact" className="btn-primary">
          Reserve a Table
        </a>
      </div>
    </section>
  );
}

export default Hero;
