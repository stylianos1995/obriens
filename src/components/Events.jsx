import React, { useEffect, useState } from "react";
import "./Events.css";
import galleryImageOne from "../assets/hero1.png";
import galleryImageTwo from "../assets/ob2.png";
import galleryImageThree from "../assets/ob3.png";
import galleryImageFour from "../assets/ob4.png";

const galleryPhotos = [
  {
    key: "photo-1",
    title: "Main floor atmosphere",
    description: "Warm lights, packed tables, and classic O'briens vibes.",
    image: galleryImageOne,
  },
  {
    key: "photo-2",
    title: "Bar counter moments",
    description: "Signature pours and favorite drinks served all night.",
    image: galleryImageTwo,
  },
  {
    key: "photo-3",
    title: "Friends and music",
    description: "Shared laughs, live beats, and unforgettable snapshots.",
    image: galleryImageThree,
  },
  {
    key: "photo-4",
    title: "Night energy",
    description: "Late-night crowd, dancing, and pure party spirit.",
    image: galleryImageFour,
  },
];

function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPhotos = galleryPhotos.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalPhotos);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [totalPhotos]);

  function goNext() {
    setActiveIndex((current) => (current + 1) % totalPhotos);
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + totalPhotos) % totalPhotos);
  }

  return (
    <section className="events section" id="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="events-carousel">
          <div className="events-track-wrap">
            {galleryPhotos.map((photoItem, index) => (
              <article
                className={`event-slide ${index === activeIndex ? "active" : ""}`}
                key={photoItem.key}
                style={{
                  backgroundImage: photoItem.image
                    ? `linear-gradient(120deg, rgba(18, 12, 8, 0.35), rgba(18, 12, 8, 0.55)), url(${photoItem.image})`
                    : "linear-gradient(125deg, #a85a2f 0%, #8f3d33 52%, #4f315f 100%)",
                }}
                aria-hidden={index !== activeIndex}
              >
                <div className="event-content">
                  <p className="event-day">O&apos;briens moments</p>
                  <h3>{photoItem.title}</h3>
                  <p className="event-description">{photoItem.description}</p>
                </div>
              </article>
            ))}

            <button
              type="button"
              className="carousel-control left"
              onClick={goPrev}
              aria-label="Previous photo"
            >
              &#8592;
            </button>

            <button
              type="button"
              className="carousel-control right"
              onClick={goNext}
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="carousel-dots" aria-label="Gallery slide indicators">
          {galleryPhotos.map((photoItem, index) => (
            <button
              key={photoItem.key}
              type="button"
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${photoItem.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
