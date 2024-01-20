import React from 'react';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import Prestations from '../components/Prestations';

const Home = () => {
  return (
    <div className='font-titlefont'>
      <Header />
      <main className="flex-grow">
        <h1 className="text-6xl p-4 text-colorbrown pt-20 font-bold max-w-3/4">Titre qui claque bien et donne envie.</h1>
        <h2 className='text-3xl max-w-3/4 p-4 text-colorbrown font-subtitlefont'>Sous-texte aussi très sympathique. Consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.</h2>
        <div className='max-w-full bg-coloryellow h-96'></div>
        <div className='h- '>
        <Prestations />
        </div>
      </main>
      <div className='bottom-0 h-[700px]'>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
