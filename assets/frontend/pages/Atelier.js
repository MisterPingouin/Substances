import React from "react";
import Header from "../components/nav/Header";
import Ateliers from "../components/Ateliers";
import Footer from "../components/Footer";

const Conseil = () => {
  return (
    <div className="font-titlefont">
      <Header />
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-8 border-black  "></div>
      </div>
      <main className="flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 mb-4 font-bold w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-16">
            <span className="block">Ateliers</span>
          </h1>
          <h2 className="text-4xl p-4 text-colorbrown mr-20 pr-8 font-subtitlefont w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-6">
            Le temps d'un atelier entre collègues ou entre amis, venez à la
            découverte des secrets de fabrication de ces produits et apprenez à
            les déguster.
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center content-center w-full">
            <Ateliers />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conseil;
