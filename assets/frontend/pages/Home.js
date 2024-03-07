import React from "react";
import Header from "../components/nav/Header";
import Footer from "../components/Footer";
import Prestations from "../components/Prestations";
import { Link } from "react-router-dom";
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";
import Logo from "../components/Logo";
import Avis from "../components/Avis";
import about from "../../images/Julia-Home.png";

const Home = () => {
  return (
    <div className="font-titlefont">
      <Header />
      <main className="flex-grow justify-center items-center lg:mx-auto">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-12 font-bold w-2/3 lg:mr-0 lg:p-0 lg:mt-44 lg:w-[80%]">
            Passion substances licites...
          </h1>
          <h2 className="text-4xl p-4 text-black mb-20 mr-20 pr-12 font-subtitlefont w-2/3 lg:mr-0 lg:p-0 lg:mt-10 lg:mb-32 lg:w-[80%]">
            Le monde des bières, des spiritueux et des sakés est un univers aux
            1000 merveilles dans lequel on découvre toujours un nouveau savoir
            faire, une nouvelle personne, une nouvelle boisson qui nait de
            l'imagination et de l'expérience de personnes incroyables.
          </h2>
        </div>
        <div className="max-w-full lg:grid lg:grid-cols-2 bg-coloryellow justify-center items-stretch h-full relative z-10">
          <img
            src={about}
            alt="Photo de Julia-Charlotte Basso"
            className="w-full h-auto lg:h-full object-cover"
          />
          <div className="flex flex-col space-y-5 ml-24 pl-10 mr-48 lg:mb-10 relative z-10 p-4">
            <h2 className="text-5xl text-colorbrown mt-10 pt-20 font-bold w-full">
              Julia-Charlotte Basso
            </h2>
            <p className="text-4xl lg:text-2xl text-black font-subtitlefont w-full">
              Avec plus de 15 ans d'expertise en substances licites : bières
              puis spiritueux... la production de saké ne m'a pas laissée
              indifférente.
            </p>
            <p className="text-4xl lg:text-2xl text-black mb-2 pb-6 font-subtitlefont w-full">
              A votre disposition pour échanger dans ces univers sur une
              démarche de conseil en compétences métiers ou bien un souhait de
              monter en compétence sur ces produits !
            </p>
            <Link to="/about">
              <button
                type="button"
                className="text-4xl inline-block rounded bg-white mb-24 lg:mb-0 px-6 pb-2 pt-2.5 font-bold font-xl  leading-normal text-colorbrown shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                Faisons connaissance
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <Prestations />
        </div>
        <div className="hidden w-full h-auto lg:flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-10 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3 lg:mr-0 lg:p-0 lg:mt-16 lg:w-[80%]">
            Mes Prestations
          </h1>
          <div className="flex space-x-12 w-[80%] relative z-10">
            <Card />
            <Card1 />
            <Card2 />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center relative z-10">
          <div className="text-colorbrown border-t w-[80%] mt-24 border-black  "></div>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:relative lg:z-10">
          <div className="ml-12 mt-14 lg:ml-0 lg:mt-12 lg:flex lg:w-[80%] lg:justify-center lg:items-center relative z-20">
            <div className="text-colorbrown border-t border-black w-[90%] mb-16 ml-8 mr-20 mx-auto relative z-10 lg:hidden"></div>
            <div>
              <h3 className="text-6xl lg:text-5xl p-4 lg:pl-0 text-colorbrown ml-4 lg:ml-0 font-bold  w-[87%] lg:w-[80%]">
                Envie d'échanger sur votre projet ?
              </h3>
              <p className="text-4xl lg:text-2xl p-4 lg:pl-0 text-black ml-4 lg:ml-0 font-subtitlefont w-[87%] lg:w-[80%]">
                Des questions sur les produits ou un savoir faire métier comme
                le marketing, la RSE ou la distribution ? Rien de plus simple !
                Pour me contacter c'est par ici !
              </p>
            </div>
            <Link to="/contact">
              <button
                type="button"
                className="text-4xl lg:text-3xl inline-block whitespace-nowrap rounded bg-coloryellow px-10 lg:px-24 pb-3 lg:pb-6 pt-3 lg:pt-6 ml-7 lg:ml-0 mt-2 lg:mr-10 font-bold font-xl  leading-normal text-colorbrown shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                Envoyer un petit mot
              </button>{" "}
            </Link>
          </div>
        </div>
      </main>
      <Avis />
      <Logo />
      <Footer />
    </div>
  );
};

export default Home;
