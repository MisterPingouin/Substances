import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
      <div className="text-3xl p-4 text-colorbrown mr-20 pr-14 space-y-2 mb-14 mt-4 font-bold w-2/3">
        {conseils.map((conseil, index) => (
          <div key={index}>
            <a href={`#conseil-${conseil.id}`}>{conseil.lien}</a>
          </div>
        ))}
      </div>
      <div>
        {conseils.map((conseil, index) => (
          <div
            key={index}
            id={`conseil-${conseil.id}`}
            className="flex flex-col items-center justify-center z-20 relative"
          >
            {conseil.image && (
              <img
                src={conseil.image}
                alt={conseil.titre}
                className="w-full max-w-4xl"
              />
            )}
            <div className="flex flex-col justify-center text-colorbrown text-3xl font-subtitlefont w-2/3">
              <h1 className="text-6xl font-bold mt-20">{conseil.titre}</h1>
              <p className="mt-10 ">{conseil.sousDescription}</p>
              <p className="mt-10 ">
                {renderWithLineBreaks(conseil.description)}
              </p>
              {conseil.logoUrl && (
                <img src={conseil.logoUrl} alt="Logo" className="w-full" />
              )}
              <p className=" text-sm ">{conseil.logoDescription}</p>
            </div>
            <div className="flex flex-col space-y-4 mt-10 mb-10 text-colorbrown font-bold text-xl  w-2/3">
              <p className="">{renderWithLineBreaks(conseil.description2)}</p>
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-block rounded bg-coloryellow px-6 pb-2 pt-2.5  font-xl  leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  Me Contacter
                </button>{" "}
              </Link>
            </div>
          </div>
        ))}
              </div>
    </>
  );
};

export default Conseils;
