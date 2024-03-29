import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import ImageCarouselMobile from "./ImageCarouselMobile";
import arrow from "../../images/arrowright.svg";

const Ateliers = () => {
  const [ateliers, setAteliers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ateliers/list")
      .then((response) => {
        setAteliers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderWithLineBreaks = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className="text-4xl p-4 text-colorbrown mr-20 pr-14 space-y-2 mt-4 font-bold w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-10 lg:space-y-4">
        {ateliers.map((atelier, index) => (
          <div key={index} className="flex items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <a href={`#atelier-${atelier.id}`}>{atelier.lien}</a>
          </div>
        ))}
      </div>
      <div>
        {ateliers.map((atelier, index) => (
          <div
            key={index}
            id={`atelier-${atelier.id}`}
            className="flex flex-col items-center justify-center z-20 relative"
          >
            {/* {atelier.image && (
              <img
                src={atelier.image}
                alt={atelier.titre}
                className="w-full max-w-4xl"
              />
            )} */}
            <div className="flex flex-col text-colorbrown text-3xl mt-14 font-subtitlefont w-3/4 pl-4 pr-10 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-14">
              <div className="text-colorbrown border-t border-black relative z-10 lg:mb-10"></div>
              <div className="hidden lg:flex">
                {atelier.imageCaroussel &&
                  atelier.imageCaroussel.length > 0 && (
                    <ImageCarousel images={atelier.imageCaroussel} />
                  )}
              </div>
              <h1 className="text-7xl font-bold font-titlefont mt-20 lg:mt-12">
                {atelier.titre}
              </h1>
              <div className="lg:flex lg:space-x-24 ">
                <div className="lg:flex lg:flex-col lg:w-1/2">
                  <p className="mt-10 ">{atelier.sousDescription}</p>
                  <p className="mt-10 ">
                    {renderWithLineBreaks(atelier.description)}
                  </p>
                </div>
                <div className="lg:flex lg:flex-col lg:w-1/2 lg:mt-12">
                  <p className="mt-10 lg:mt-0 font-bold font-titlefont">
                    {renderWithLineBreaks(atelier.descriptionGras)}
                  </p>
                  <p className="mt-10 lg:mt-0">
                    {renderWithLineBreaks(atelier.description2)}
                  </p>
                  <p className="mt-10 font-bold font-titlefont">
                    {renderWithLineBreaks(atelier.description3)}
                  </p>
                  <div className="flex flex-col space-y-6 mt-10 mb-16 text-colorbrown font-bold text-3xl w-3/4">
                    <Link to="/contact">
                      <button
                        type="button"
                        className="inline-block font-titlefont rounded bg-coloryellow px-6 pb-2 pt-2.5 font-xl leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]"
                      >
                        Me Contacter
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {atelier.imageCaroussel && atelier.imageCaroussel.length > 0 && (
              <ImageCarouselMobile images={atelier.imageCaroussel} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Ateliers;
