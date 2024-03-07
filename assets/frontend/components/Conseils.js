import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from '../../images/arrowright.svg';


const Conseils = () => {
  const [conseils, setConseils] = useState([]);

  useEffect(() => {
    axios
      .get("/api/conseils/list")
      .then((response) => {
        setConseils(response.data);
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
      <div className="text-4xl p-4 text-colorbrown mr-20 pr-14 space-y-2 mt-4 font-bold w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-10 lg:flex lg:space-x-24">
        {conseils.map((conseil, index) => (
          <div key={index} className="flex items-center">
                      <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
  <a href={`#conseil-${conseil.id}`}>{conseil.lien}</a>
          </div>
        ))}
      </div>
      <div>
        {conseils.map((conseil, index) => (
          <div
            key={index}
            id={`conseil-${conseil.id}`}
            className="flex flex-col items-center z-20 relative"
          >
            <div className="flex flex-col text-colorbrown text-3xl mt-14 font-subtitlefont w-3/4 pl-4 pr-10 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-14">
            <div className="text-colorbrown border-t border-black relative z-10 lg:mb-10"></div>
            {conseil.image && (
  <div className="hidden lg:flex relative overflow-hidden w-full max-w-4xl h-[16em] items-center"> 
    <img
      src={conseil.image}
      alt={conseil.titre}
      className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto"
    />
  </div>
)}      
              <h1 className="text-7xl font-bold font-titlefont mt-20">{conseil.titre}</h1>
              <div className="lg:flex lg:space-x-24"> 
              <div className="lg:flex lg:flex-col lg:w-1/2">
              <p className="mt-10 font-titlefont font-bold ">{conseil.sousDescription}</p>
              <p className="mt-10 ">
                {renderWithLineBreaks(conseil.description)}
              </p>
              </div>
              <div className="lg:flex lg:flex-col lg:w-1/2">
              {conseil.logoUrl && (
                <img src={conseil.logoUrl} alt="Logo" className="w-auto mx-auto max-h-[5em]" />
              )}
              <p className="text-xl">{conseil.logoDescription}</p>
            
            <div className="flex flex-col space-y-6 mt-10 mb-16 text-colorbrown font-bold font-titlefont text-3xl w-3/4">
              <p className="">{renderWithLineBreaks(conseil.description2)}</p>
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-block rounded bg-coloryellow px-7 pb-2 pt-2.5  font-xl  leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  Me Contacter
                </button>{" "}
              </Link>
              </div>
            </div>
            </div>
            </div>
            {conseil.image && (
              <img
                src={conseil.image}
                alt={conseil.titre}
                className="w-full max-w-4xl lg:hidden"
              />
            )}
          </div>
        ))}
        
              </div>
    </>
  );
};

export default Conseils;
