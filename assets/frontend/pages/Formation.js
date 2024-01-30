import React from "react";
import Header from "../components/nav/Header";
import Formations from "../components/Formations";
import Footer from '../components/Footer';


const Formation = () => {
  return (
    <div className="font-titlefont">
      <Header />
      <main className="flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3">
            <span className="block">Formations</span>
            <span className="block">produits</span>
          </h1>
          <h2 className="text-4xl p-4 text-colorbrown  mr-20 pr-8 font-subtitlefont w-2/3">
            Accompagnement en profondeur ou conseil sur une problématique
            spécifique, découvrez mes deux offres de conseil aux professionels.
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center content-center w-full">
            <Formations />
          </div>
        </div>
              </main>
              <Footer />
    </div>
  );
};

export default Formation;
