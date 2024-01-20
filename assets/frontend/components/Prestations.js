import React, { useState } from 'react';
import { motion } from "framer-motion";
import test from "../../images/test.png";
import test1 from "../../images/test1.png";
import test2 from "../../images/test2.png";

const Prestations = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [movingDirection, setMovingDirection] = useState("none"); // "left", "right", "none"

  const handleNext = () => {
    setMovingDirection("right");
    setPositionIndexes(prevIndexes => 
      prevIndexes.map(prevIndex => (prevIndex + 1) % 3)
    );
  };

  const handleBack = () => {
    setMovingDirection("left");
    setPositionIndexes(prevIndexes => 
      prevIndexes.map(prevIndex => (prevIndex + 2) % 3)
    );
  };

  const images = [test, test1, test2];
  const positions = ["left", "center", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1 },
    left: { x: "-100%", scale: 0.8 },
    right: { x: "100%", scale: 0.8 },
  };

  const transitionSettings = {
    duration: 0.5
  };

  const calculateZIndex = (index, direction) => {
    const position = positions[positionIndexes[index]];
    if (position === "center") return 3;
    if (direction === "right" && position === "right") return 2;
    if (direction === "left" && position === "left") return 2;
    return 1;
  };

  return (
    <div className="relative w-full flex justify-center items-center my-8">
      <div className="relative w-full h-[200px] flex justify-center items-center">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="rounded-[12px] w-1/3 object-contain absolute"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={transitionSettings}
            style={{ zIndex: calculateZIndex(index, movingDirection) }}
          />
        ))}
      </div>
      <button
        className="absolute left-0 text-black text-4xl rotate-180 rounded-md py-2 px-4 z-10"
        onClick={handleBack}
      >
        {"▸"}
      </button>
      <button
        className="absolute right-0 text-black text-4xl rounded-md py-2 px-4 z-10"
        onClick={handleNext}
      >
        {"▸"}
      </button>
    </div>
  );
};

export default Prestations;
