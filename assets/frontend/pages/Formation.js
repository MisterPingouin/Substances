import React from "react";
import Header from "../components/nav/Header";
import Formations from "../components/Formations";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Formation = () => {
  return (
    <HelmetProvider>
      <div className="font-titlefont">
        <Helmet>
          <title>Substances | Formation en Bières & Spiritueux </title>
          <meta
            name="description"
            content="Professionnels ou particuliers, développez vos compétences avec nos formations aux produits bières & spiritueux.
            Formation certifiante WSET® proposée."
          />
          <meta
            name="keywords"
            content="Formation, Bières, Spiritueux, Certification, WSET"
          />
        </Helmet>
        <Header />
        <div className="hidden lg:flex justify-center items-center relative z-10">
          <div className="text-colorbrown border-t w-[80%] mt-8 border-black  "></div>
        </div>
        <main className="flex-grow justify-center items-center">
          <div className="flex flex-col justify-center items-center relative z-10">
            <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3 lg:mr-0 lg:p-0 lg:mt-16 lg:mb-8 lg:w-[80%]">
            Formation
            </h1>
            <h2 className="text-4xl p-4 text-colorbrown  mr-20 pr-8 font-subtitlefont w-2/3 lg:mr-0 lg:p-0 lg:w-[80%]">
              Bières et spiritueux n'auront plus de secret pour vous. Soit par
              intérêt professionnel, soit par simple curiosité, participez à
              l'une de ces formations pour développer vos connaissances.
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center content-center w-full">
              <Formations />
            </div>
          </div>
          <div className="text-colorbrown mt-20 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
          <div className="hidden lg:flex justify-center items-center relative z-10">
            <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
          </div>
          <div className="flex flex-col justify-center w-max-[80%] items-center lg:flex-row-reverse lg:items-center lg:justify-center lg:w-full mt-12 z-20">
            <div className="flex flex-col text-2xl w-[80%] items-start z-20">
              <p className="z-20">
              Substances est intégrée à l'organisme de formation "Auxime", certifié Qualiopi au titre de la catégorie d’action suivante: Actions de formation.              </p>
              <p className="z-20 mt-2">
              Pour les acteurs de la filière, renseignez-vous auprès de contact privilégié de votre OPCO ou autre financeur de la formation professionnelle afin de connaitre les conditions de financement.              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Formation;
