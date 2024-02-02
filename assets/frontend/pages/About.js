import React from 'react';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import about from '../../images/About.jpg';
import { Link } from 'react-router-dom';
import Certification from '../components/Certification';


const About = () => {
  return (
    <div className="font-titlefont">
      <Header />
      <main className="flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 mb-2 pr-14 font-bold w-2/3">
            <span className="block">Faisons</span>
            <span className="block">Connaissance</span>
          </h1>
          <h2 className="text-4xl p-4 text-colorbrown mr-20 pr-8 mb-20 font-subtitlefont w-2/3">
            Moi c’est Julia-Charlotte Basso. Enchantée!
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <img src={about} alt="Photo de Julia-Charlotte Basso" className="w-full max-w-4xl" />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center z-20 relative'>
        <div className="flex flex-col justify-center text-colorbrown text-3xl font-subtitlefont w-2/3">
          <h1 className="text-6xl font-bold font-titlefont uppercase mt-20">💬 En quelques mots</h1>
          <p className="mt-10 font-bold font-titlefont">Professionnelle experte dans l’industrie agro-alimentaire, spécialisée secteur boisson depuis 2007. Formatrice diplômée (Cicerone®, WSET®, IFCO, Saké Sommelier®) dans les domaines des spiritueux, bières et saké.</p>
          <h1 className="text-6xl font-bold uppercase mt-16 mb-8 font-titlefont">🔍 En détail...</h1>
          <p className="mt-8">Ingénieure agroalimentaire, formation complétée par un master en marketing et management en Australie, j'ai pu évoluer depuis 2007 dans des missions chez des acteurs de la filière brassicole et des spiritueux comme Cheffe de Marché, Cheffe de produit & Innovation en France comme à l'étranger puis Directrice de l’offre Produit chez Ninkasi jusqu'en 2023.</p>
          <p className="mt-8">J'ai pu développer une expertise holistique en brand management, innovation, business développement, stratégie distributive, export et RSE qui pourra vous aider dans vos projets professionnels.</p>
          <p className="mt-8">Au travers de ces années, une passion produit pour les substances licites est née! En 2020, j'ai rejoint la première promotion de Zythologues à l’IFCO et j'ai passé le niveau 1 du diplôme de Sake Sommelier de la Sake Sommelier Association of London en 2020. Je continue sur ma lancée en passant le WSET Spiritueux niveau 3 en 2023.</p>
          <p className="mt-8">Cette même année, je décide de créer « Substances » avec pour objectif transmettre ma passion produits pour les boissons fermentées (et éventuellement distillées !) et de mettre mon expérience acquise au cours de ces années au service des acteurs de ces filières par le biais du conseil et de la formation en devenant notamment formatrice à l'IFCO (et oui je passe de l'autre côté cette fois-ci) mais aussi en partageant des moments de convivialités à tout.e curieux.se qui souhaite en apprendre davantage sur les bières, les spiritueux et le saké japonais.</p>
        </div>
        <div className="flex flex-col space-y-2 mt-10 mb-10 text-colorbrown font-bold text-4xl w-2/3">
          <p>Assez parlé de moi</p><p> parlons de vous.</p>
          <Link to="/contact">
            <button
              type="button"
              className="inline-block mt-4 rounded bg-coloryellow px-6 pb-2 pt-2.5 text-4xl leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              Me contacter
            </button>
          </Link>
        </div>
        </div>
        <Certification />
      </main>
      <Footer />
    </div>
  );
};

export default About;