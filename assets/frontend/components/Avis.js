import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import arrowright from "../../images/Bw-right.svg";
import arrowleft from "../../images/Bw-left.svg";

const Avis = () => {
  const [avis, setAvis] = useState([]);
  const avisWidth = 500; 
  const spaceBetweenAvis = 30;
  const marginEnd = 100;
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchAvis();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const totalWidth = avis.length * (avisWidth + spaceBetweenAvis);
      const overflowWidth =
        totalWidth > window.innerWidth
          ? totalWidth - window.innerWidth + marginEnd
          : 0;
      setWidth(overflowWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [avis]);

  const fetchAvis = () => {
    axios
      .get("/api/avis/list")
      .then((response) => setAvis(response.data))
      .catch((error) => console.error("Error fetching avis:", error));
  };

  const nextAvis = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < avis.length ? prevIndex + 2 : prevIndex));
  };

  const prevAvis = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : prevIndex));
  };

  return (
    <>
      <div className="text-colorbrown mt-20 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
      </div>
      <div className="ml-12 lg:ml-0 lg:mt-0 relative z-20 lg:hidden">
        <h2 className="ml-6 text-5xl mt-14 mb-8 font-bold lg:hidden">
          Partage d'expérience
        </h2>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            className="flex items-start space-x-10"
          >
            {avis.map((unAvis, index) => (
              <motion.div
                key={unAvis.id}
                className={`flex-none ${index === 0 ? "ml-6" : ""} ${
                  index === avis.length - 1 ? "mr-12" : ""
                } border-coloryellow border-4 p-8`}
                style={{ width: `${avisWidth}px` }}
              >
                <div className="text-4xl font-bold">
                  <p>{unAvis.content}</p>
                  <div className="text-coloryellow text-2xl mt-4">
                    <h4>{unAvis.name}</h4>
                    <p>{unAvis.fonction}</p>
                    <p>{unAvis.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex mt-16 lg:justify-center lg:items-center w-full">
      <div className="flex flex-col self-start w-[20%]">
          <h2 className="text-5xl font-bold">Partage</h2>
          <h2 className="text-5xl font-bold">d'expérience</h2>
        </div>
        <div className="flex space-x-10 items-start w-[60%] pl-16">
          {avis.slice(currentIndex, currentIndex + 2).map((unAvis) => (
            <div
              key={unAvis.id}
              className="flex border-coloryellow border-4 p-8"
              style={{ width: `${avisWidth}px` }}
            >
              <div className="text-3xl font-bold">
                <p className="mb-3">{unAvis.content}</p>
                <div className="text-coloryellow text-2xl">
                  <h4>{unAvis.name}</h4>
                  <p>{unAvis.fonction}</p>
                  <p>{unAvis.company}</p>
                </div>
              </div>
            </div>
          ))}
         <div className="flex flex-col self-start space-y-2">
        <button onClick={prevAvis}>
          <img src={arrowleft} alt="Left" className="min-h-10 min-w-10" />
        </button>
        <button onClick={nextAvis}>
          <img src={arrowright} alt="Right" className="min-h-10 min-w-10" />
        </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Avis;
