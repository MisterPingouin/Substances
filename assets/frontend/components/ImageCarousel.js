import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [page, setPage] = useState(0);

  const variants = {
    enter: (direction) => ({
      x: direction < 0 ? -1000 : 1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }),
  };

  const navigateToImage = (index) => {
    setPage(index);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <div className='w-full h-[70rem] relative mb-10 mt-10 pb-10'>
      <AnimatePresence initial={false}>
        <motion.img
          key={page}
          src={images[page]}
          custom={page}
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
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              navigateToImage((page + 1) % images.length);
            } else if (swipe > swipeConfidenceThreshold) {
              navigateToImage((page - 1 + images.length) % images.length);
            }
          }}
          className="w-full h-full absolute"
        />
      </AnimatePresence>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex">
  <div className="rounded-full bg-white bg-opacity-40 p-1">
    {images.map((_, index) => (
      <span
        key={index}
        className={`mx-1 cursor-pointer ${index === page ? 'text-coloryellow text-4xl' : 'text-white text-4xl'}`}
        onClick={() => navigateToImage(index)}
      >
        ●
      </span>
    ))}
  </div>
</div>
    </div>
  );
};

export default ImageCarousel;
