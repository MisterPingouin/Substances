import React from "react";
import Header from "../components/nav/Header";
import Conseils from "../components/Conseils";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Conseil = () => {
  return (
    <HelmetProvider>
    <div className="font-titlefont">
              <Helmet>
          <title>
          Substances | Conseil en Stratégie, Audit, Accompagnement - Univers des boissons fermentées
          </title>
          <meta
            name="description"
            content="Professionnels du secteur des boissons fermentées, Substances vous accompagne et conseille sur vos problématiques stratégiques (marketing, distribution, ventes...). "
          />
          <meta
            name="keywords"
            content="Conseil, Audit, Stratégie, Marketing, Brasserie"
          />
        </Helmet>
      <Header />
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-8 border-black  "></div>
      </div>
      <main className="flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 mb-4 font-bold w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-16">
          Conseil
          </h1>
          <h2 className="text-4xl p-4 text-colorbrown mr-20 pr-8 font-subtitlefont w-2/3 lg:w-[80%] lg:mr-0 lg:p-0 lg:mt-6">
          Audit d'une problématique spécifique ou accompagnement stratégique & holistique sur la gestion de votre activité ? Parlons du votre projet professionnel !
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center content-center w-full">
            <Conseils />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </HelmetProvider>
  );
};

export default Conseil;
