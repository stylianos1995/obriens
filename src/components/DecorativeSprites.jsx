import React from "react";
import "./DecorativeSprites.css";
import ob1 from "../assets/ob1.png";
import ob2 from "../assets/ob2.png";
import ob3 from "../assets/ob3.png";
import ob4 from "../assets/ob4.png";

function DecorativeSprites() {
  return (
    <div className="decorative-sprites" aria-hidden="true">
      <img src={ob1} alt="" className="sprite sprite-one" />
      <img src={ob2} alt="" className="sprite sprite-two" />
      <img src={ob3} alt="" className="sprite sprite-three" />
      <img src={ob4} alt="" className="sprite sprite-four" />
    </div>
  );
}

export default DecorativeSprites;
