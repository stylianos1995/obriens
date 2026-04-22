import React, { useEffect, useState } from "react";
import "./MenuGallery.css";
import menuImageOne from "../assets/menu1.webp";
import menuImageTwo from "../assets/menu2.webp";

function MenuGallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <section className="menu-gallery section" id="menu-gallery">
        <div className="container">
          <h2>Our Menu</h2>
          <p>Signature cocktails and draft beer selections.</p>
          <div className="menu-grid">
            <img
              src={menuImageOne}
              alt="O'briens menu page one"
              onClick={() => setActiveImage(menuImageOne)}
            />
            <img
              src={menuImageTwo}
              alt="O'briens menu page two"
              onClick={() => setActiveImage(menuImageTwo)}
            />
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="menu-lightbox" onClick={() => setActiveImage(null)}>
          <img
            src={activeImage}
            alt="Zoomed menu"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default MenuGallery;
