import React from 'react';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import Prestations from '../components/Prestations';

const Home = () => {
  return (
    <div className='font-titlefont flex flex-col'>
      <Header />
      <main className="flex-grow">
        <h1 className="text-4xl p-4 pt-20 font-bold max-w-3/4">Titre qui claque bien et donne envie.</h1>
        <h2 className='max-w-3/4 p-4 font-subtitlefont'>Sous-texte aussi très sympathique. Consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.</h2>
        <div className='max-w-full bg-coloryellow h-96'></div>
        <Prestations />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
