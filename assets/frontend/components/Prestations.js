import React, { useState } from 'react';
import { motion } from "framer-motion";
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";

const Prestations = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [movingDirection, setMovingDirection] = useState("none");

  const handleNext = () => {
    setMovingDirection("right");
    setPositionIndexes(prevIndexes => prevIndexes.map(prevIndex => (prevIndex + 1) % 3));
  };

  const handleBack = () => {
    setMovingDirection("left");
    setPositionIndexes(prevIndexes => prevIndexes.map(prevIndex => (prevIndex + 2) % 3));
  };

  const cards = [<Card />, <Card1 />, <Card2 />];
  const positions = ["left", "center", "right"];
  const cardVariants = {
    center: { x: "0%", scale: 1.4, zIndex: 5 },
    left: { x: "-80%", scale: 1, zIndex: 2 },
    right: { x: "80%", scale: 1, zIndex: 1 },
  };

  const transitionSettings = {
    duration: 0.5,
    zIndex: { duration: 0.25 }
  };

  const calculateZIndex = (index, direction) => {
    const position = positions[positionIndexes[index]];
    return (position === "center") ? 3 : ((direction === "right" && position === "right") || (direction === "left" && position === "left")) ? 2 : 1;
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const handleSwipe = (direction, index) => {
    if (positions[positionIndexes[index]] === "center") {
      direction === "left" ? handleNext() : handleBack();
    }
  };

  return (
    <div className="relative w-full flex justify-center text-colorbrown flex-col items-center my-8">
      <h1 className="text-5xl ml-6 mb-8 self-start font-bold max-w-3/4">Mes Prestations</h1>
      <div className="relative w-full h-[700px] pr-10 pl-10 flex justify-center items-center">
        {cards.map((cardComponent, index) => (
          <motion.div
            key={index}
            className="rounded-[12px] absolute"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={cardVariants}
            transition={transitionSettings}
            style={{ zIndex: calculateZIndex(index, movingDirection),
                 }}
            onPan={(event, info) => {
              const swipe = swipePower(info.offset.x, info.velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleSwipe("left", index);
              } else if (swipe > swipeConfidenceThreshold) {
                handleSwipe("right", index);
              }
            }}
          >
            {cardComponent}
          </motion.div>
        ))}
      </div>
      <button
        className="absolute left-0 text-black text-6xl rotate-180 rounded-md py-2 px-4 z-10"
        onClick={handleBack}
      >
        {"▸"}
      </button>
      <button
        className="absolute right-0 text-black text-6xl rounded-md py-2 px-4 z-10"
        onClick={handleNext}
      >
        {"▸"}
      </button>
    </div>
  );
};

export default Prestations;
