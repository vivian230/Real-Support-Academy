import React from "react";
import "./testimonials.css";
import leftArrow from "./icons/left.png";
import rightArrow from "./icons/right.png";

export default function buttons({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}