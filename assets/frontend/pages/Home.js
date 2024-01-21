import React from 'react';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import Prestations from '../components/Prestations';

const Home = () => {
  return (
    <div className='font-titlefont'>
      <Header />
      <main className="flex-grow justify-center items-center">
        <div className='flex flex-col justify-center items-center relative z-10'>
        <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3">Titre qui claque bien et donne envie.</h1>
        <h2 className='text-4xl p-4 text-black mb-20 mr-20 pr-14 font-subtitlefont w-2/3'>Sous-texte aussi très sympathique. Consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.</h2>
        </div>
        <div className='max-w-full flex z-10 bg-coloryellow h-[70rem]'></div>
        <Prestations />
        <div className='max-w-full bg-white h-[100rem]'></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
