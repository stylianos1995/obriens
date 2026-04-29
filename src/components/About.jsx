import React, { useMemo } from "react";
import "./About.css";
import aboutImageOne from "../assets/hero1.png";
import aboutImageTwo from "../assets/ob1.png";
import aboutImageThree from "../assets/ob2.png";
import aboutImageFour from "../assets/ob3.png";
import aboutImageFive from "../assets/ob4.png";

const aboutShowcase = [
  {
    title: "Signature Cocktails",
    description:
      "A curated collection of house signatures and modern classics, handcrafted with premium spirits, fresh citrus, and balanced flavor profiles.",
    accent: "cocktails",
  },
  {
    title: "Draft Selection",
    description:
      "Rotating draft lines with crisp lagers, hoppy IPAs, and seasonal taps. We keep the pours fresh and the list evolving every week.",
    accent: "draft",
  },
  {
    title: "Bar Experience",
    description:
      "Warm interior lighting, social energy, and a full-room atmosphere that turns every night into an event worth remembering.",
    accent: "experience",
  },
];

function About() {
  const randomPhotos = useMemo(() => {
    const imagePool = [aboutImageOne, aboutImageTwo, aboutImageThree, aboutImageFour, aboutImageFive];
    const shuffled = [...imagePool].sort(() => Math.random() - 0.5);
    return aboutShowcase.map((_, index) => shuffled[index % shuffled.length]);
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2>About O&apos;briens</h2>
        <p className="about-intro">
          O&apos;briens combines old-school pub comfort with modern bar craft. Our
          bartenders focus on balanced cocktails while our draft lines feature a
          rotating mix of crisp lagers, IPAs, and seasonal favorites.
        </p>
        <div className="about-showcase">
          {aboutShowcase.map((item, index) => (
            <article
              className={`about-feature ${index % 2 !== 0 ? "reverse" : ""}`}
              key={item.title}
            >
              <div className={`about-image about-image-${item.accent}`}>
                <img src={randomPhotos[index]} alt={`${item.title} at O'briens`} />
              </div>
              <div className="about-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
