import React, { useEffect, useState } from "react";
import "./Events.css";

const weeklyEvents = [
  {
    day: "Monday",
    title: "Game Night",
    time: "20:00 - Late",
    description: "Board games, card battles, and social team challenges.",
    image: "",
  },
  {
    day: "Tuesday",
    title: "Movie Night",
    time: "21:00 - 00:00",
    description: "Big screen classics, cult films, and themed drink specials.",
    image: "",
  },
  {
    day: "Wednesday",
    title: "Erasmus Night",
    time: "22:00 - Late",
    description: "International crowd, welcome shots, and playlist takeovers.",
    image: "",
  },
  {
    day: "Thursday",
    title: "Beer Pong Night",
    time: "21:30 - Late",
    description: "Tournament brackets, draft specials, and team prizes.",
    image: "",
  },
  {
    day: "Friday",
    title: "Live DJ Party",
    time: "23:00 - 03:00",
    description: "Cocktail signatures, dance floor energy, and late-night vibes.",
    image: "",
  },
];

function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalEvents = weeklyEvents.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalEvents);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [totalEvents]);

  function goNext() {
    setActiveIndex((current) => (current + 1) % totalEvents);
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + totalEvents) % totalEvents);
  }

  return (
    <section className="events section" id="events">
      <div className="container">
        <h2>Our Events</h2>
        <div className="events-carousel">
          <div className="events-track-wrap">
            {weeklyEvents.map((eventItem, index) => (
              <article
                className={`event-slide ${index === activeIndex ? "active" : ""}`}
                key={eventItem.day}
                style={{
                  backgroundImage: eventItem.image
                    ? `linear-gradient(120deg, rgba(18, 12, 8, 0.35), rgba(18, 12, 8, 0.55)), url(${eventItem.image})`
                    : "linear-gradient(125deg, #a85a2f 0%, #8f3d33 52%, #4f315f 100%)",
                }}
                aria-hidden={index !== activeIndex}
              >
                <div className="event-content">
                  <p className="event-day">{eventItem.day}</p>
                  <h3>{eventItem.title}</h3>
                  <p className="event-time">{eventItem.time}</p>
                  <p className="event-description">{eventItem.description}</p>
                </div>
              </article>
            ))}

            <button
              type="button"
              className="carousel-control left"
              onClick={goPrev}
              aria-label="Previous event"
            >
              &#8592;
            </button>

            <button
              type="button"
              className="carousel-control right"
              onClick={goNext}
              aria-label="Next event"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="carousel-dots" aria-label="Event slide indicators">
          {weeklyEvents.map((eventItem, index) => (
            <button
              key={eventItem.day}
              type="button"
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${eventItem.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
