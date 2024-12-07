import { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";
import React from "react";
import img1 from "../images/slider/img1.webp";
import img2 from "../images/slider/img2.webp";
import img3 from "../images/slider/img3.webp"
import img4 from "../images/slider/img4.webp"
import img5 from "../images/slider/img5.gif"

function ImageSlider() {
  const Links = [
    // "src/images/slider/img1.webp",
    // "src/images/slider/img2.webp",
    // "src/images/slider/img3.webp",
    // "src/images/slider/img4.webp",
    // "src/images/slider/img5.gif",
    img1,img2,img3,img4,img5
  ];

  const [index, setIndex] = useState(0);

  const divRef = useRef(
    Links.map(() => React.createRef()) 
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Links.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [Links.length]);

  useEffect(() => {
    // Reset styles for all dots
    divRef.current.forEach((ref, idx) => {
      if (ref.current) {
        ref.current.style.width = "10px";
        ref.current.style.backgroundColor = "grey";
        ref.current.style.borderRadius = "50%";
      }
    });

    // Highlight the active dot
    const activeRef = divRef.current[index];
    if (activeRef?.current) {
      activeRef.current.style.width = "30px";
      activeRef.current.style.backgroundColor = "black";
      activeRef.current.style.borderRadius = "10px";
    }
  }, [index]);

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + Links.length) % Links.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % Links.length);
  };

  return (
    <>
      <div id="sliderImages">
        <button type="button" id="leftbtn" onClick={handlePrevious}>
          <i className="fa-solid fa-less-than"></i>
        </button>

        <img src={Links[index]} alt={`Slide ${index + 1}`} />

        <button type="button" id="rightbtn" onClick={handleNext}>
          <i className="fa-solid fa-greater-than"></i>
        </button>

      </div>
      <div id="sliderDiv">
        {Links.map((_, idx) => (
          <div ref={divRef.current[idx]} key={idx}></div>
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
