import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import arrowright from "../../images/Bw-right.svg";
import arrowleft from "../../images/Bw-left.svg";

const Logo = () => {
  const [logos, setLogos] = useState([]);
  const logoWidth = 200;
  const spaceBetweenLogos = 50;
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchLogos();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const totalWidth = logos.length * (logoWidth + spaceBetweenLogos);
      const overflowWidth =
        totalWidth > window.innerWidth
          ? totalWidth - window.innerWidth 
          : 0;
      setWidth(overflowWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [logos]);

  const fetchLogos = () => {
    axios
      .get("/api/logo-company/list")
      .then((response) => setLogos(response.data))
      .catch((error) => console.error("Error fetching logos:", error));
  };

  const nextLogo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < logos.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const prevLogo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <>
      <div className="text-colorbrown mt-20 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
      </div>
      <div className="ml-12 lg:ml-0 lg:mt-0 relative z-20">
        <h1 className="ml-6 text-5xl mt-14 font-bold lg:hidden">
          Ils me font confiance
        </h1>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            className="flex items-center ml-6 space-x-10 lg:hidden"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                className={`flex-none ${
                  index === logos.length - 1 ? "mr-12" : ""
                }`}
                style={{ width: `${logoWidth}px` }}
              >
                <img src={logo.logoPath} alt="Logo" style={{ width: "100%" }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="hidden lg:flex mt-16 lg:justify-center lg:items-center w-full">
          <div className="w-[80%] space-x-24 flex items-center">
            <h2 className="text-5xl font-bold w-[15%]">
              Ils me font confiance
            </h2>
            <div className="flex space-x-10 min-w-[65%]">
              <button onClick={prevLogo}>
                <img src={arrowleft} alt="Left" />
              </button>
              {logos.slice(currentIndex, currentIndex + 4).map((logo) => (
                <div
                  key={logo.id}
                  className="h-auto w-40 flex justify-center items-center"
                >
                  <img
                    src={logo.logoPath}
                    alt="Logo"
                    className="w-auto h-auto"
                  />
                </div>
              ))}
              <button onClick={nextLogo}>
                <img src={arrowright} alt="Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
