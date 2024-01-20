import React, { useState } from 'react';
import { motion } from "framer-motion";
import test from "../../images/test.png";
import test1 from "../../images/test1.png";
import test2 from "../../images/test2.png";

const Prestations = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes(prevIndexes => 
      prevIndexes.map(prevIndex => (prevIndex + 1) % 3)
    );
  };

  const handleBack = () => {
    setPositionIndexes(prevIndexes => 
      prevIndexes.map(prevIndex => (prevIndex + 2) % 3)
    );
  };

  const images = [test, test1, test2];
  const positions = ["left", "center", "right"];

  const imageVariants = {
    center: { 
      x: "0%", 
      scale: 1, 
      zIndex: 5 
    },
    left: { 
      x: "-100%", 
      scale: 0.8, 
      zIndex: 2
    },
    right: { 
      x: "100%", 
      scale: 0.8, 
      zIndex: 1
    },
  };

  const transitionSettings = {
    duration: 0.5,
    zIndex: { duration: 0.25 } 
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
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
        />
      ))}
      <button
        className="absolute left-0 text-black bg-indigo-400 rounded-md py-2 px-4 z-10"
        onClick={handleBack}
      >
        &#8592;
      </button>
      <button
        className="absolute right-0 text-black bg-indigo-400 rounded-md py-2 px-4 z-10"
        onClick={handleNext}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Prestations;
