import React from 'react';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import Prestations from '../components/Prestations';
import { Link } from 'react-router-dom';
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";
import Logo from '../components/Logo';
import about from '../../images/Julia-Home.png';


const Home = () => {
  return (
    <div className='font-titlefont'>
      <Header />
      <main className="flex-grow justify-center items-center">
        <div className='flex flex-col justify-center items-center relative z-10'>
        <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3 lg:w-3/4">Passion Substances Licites</h1>
        <h2 className='text-4xl p-4 text-black mb-20 mr-20 pr-14 font-subtitlefont w-2/3 lg:w-3/4'>Le monde des bières, des spiritueux et des sakés est un univers aux 1000 merveilles dans lequel on découvre toujours un nouveau savoir faire, une nouvelle personne, une nouvelle boisson qui nait de l'imagination et de l'expérience de personnes incroyables.</h2>
        </div>
        <div className='max-w-full flex flex-col  bg-coloryellow justify-center items-center relative z-10'>
        <img src={about} alt="Photo de Julia-Charlotte Basso" className="w-full max-w-4xl" />
        <div className='flex flex-col justify-center items-center relative z-10'>
        <h2 className="text-5xl p-4 text-colorbrown mt-10 pt-20 mr-20 pr-14 font-bold w-2/3">Julia-Charlotte Basso</h2>
        <p className='text-4xl p-4 text-black mb-2 mr-20 pr-14 font-subtitlefont w-2/3'>15 ans d’expérience et d’expertise en substances licites (bière, spiritueux & saké). Enchantée !</p>
        <div className='text-4xl p-4 text-colorbrown mr-20 pr-14 font-bold w-2/3'>
              <Link to="/about">
                <button
                  type="button"
                  className="inline-block rounded bg-white mb-28 px-6 pb-2 pt-2.5 font-bold font-xl  leading-normal text-colorbrown shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  Faisons connaissance
                </button>{" "}
              </Link>
              </div>
              </div>
        </div>
        <div className='lg:hidden'>
        <Prestations/>
        </div>
        <div className='hidden w-full h-auto lg:flex flex-col justify-center items-center m-4'>
        <h1 className="ml-4 self-start text-5xl mt-14 font-bold mb-8">Mes Prestations</h1>
        <div className='flex space-x-12 m-4 w-[90%]'>
       <Card/>
       <Card1/>
       <Card2/>
       </div>
      </div>
      <div className="ml-12 mt-24 relative z-20">
      <div className="text-colorbrown border-t border-black w-[85%] mb-16 ml-8 mr-20 mx-auto relative z-10"></div>

        <h3 className="text-6xl p-4 text-colorbrown ml-4 font-bold  w-[87%]">Rien de mieux qu’un coup de fil pour discuter de vos besoins.</h3>
        <p className='text-3xl p-4 text-black ml-4 font-subtitlefont w-[87%]'>Et ça tombe bien, vous pouvez prendre rendez-vous en 2 minutes !</p>
        <Link to="/about">
                <button
                  type="button"
                  className="text-4xl inline-block rounded bg-coloryellow px-8 pb-3 pt-3 ml-7 mt-2 font-bold font-xl  leading-normal text-colorbrown shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  Me contacter
                </button>{" "}
              </Link>
        </div> 
        <Logo/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
