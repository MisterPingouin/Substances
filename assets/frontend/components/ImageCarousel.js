import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000, 
      opacity: 0,
    })
  };

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const ImageCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='w-full h-[70rem] relative mb-10 mt-10 pb-10 '>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          className="w-full absolute h-full"
          onDragEnd={(e, { offset, velocity }) => 
          {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="top-1/2 -translate-y-1/2 absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg left-2.5 scale-x-[-1] z-20"
       onClick={() => paginate(-1)}>
        {"‣"}
      </div>
      <div className="top-1/2 -translate-y-1/2 absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg right-2.5 z-20"
       onClick={() => paginate(1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default ImageCarousel;
