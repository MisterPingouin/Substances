import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Formations = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/formations/list")
      .then((response) => {
        setFormations(response.data);
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
        {formations.map((formation, index) => (
          <div key={index}>
            <a href={`#formation-${formation.id}`}>{formation.lien}</a>
          </div>
        ))}
      </div>
      <div>
        {formations.map((formation, index) => (
          <div
            key={index}
            id={`formation-${formation.id}`}
            className="flex flex-col items-center justify-center z-20 relative"
          >
            {formation.image && (
              <img
                src={formation.image}
                alt={formation.titre}
                className="w-full max-w-4xl"
              />
            )}
            <div className="flex flex-col justify-center text-colorbrown text-3xl font-subtitlefont w-2/3">
              <h1 className="text-6xl font-bold mt-20">{formation.titre}</h1>
              <p className="mt-10 ">{formation.sousDescription}</p>
              <p className="mt-10 ">
                {renderWithLineBreaks(formation.description)}
              </p>
              {formation.logoUrl && (
                <img src={formation.logoUrl} alt="Logo" className="w-full" />
              )}
              <p className=" text-xl ">{formation.logoDescription}</p>
            </div>
            <div className="flex flex-col space-y-4 mt-10 mb-10 text-colorbrown font-bold text-3xl w-2/3">
              <p className="">{renderWithLineBreaks(formation.description2)}</p>
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

export default Formations;
