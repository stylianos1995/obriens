import React from "react";
import DecorativeSprites from "./components/DecorativeSprites";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuGallery from "./components/MenuGallery";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <DecorativeSprites />
      <Header />
      <main>
        <Hero />
        <MenuGallery />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
