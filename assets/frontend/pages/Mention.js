import React from 'react';
import Header from "../components/nav/Header";
import Footer from "../components/Footer";


const Mention = () => {
    return (
        <div className='font-titlefont'>
          <Header />
          <main className="flex-grow justify-center items-center">
            <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3">Mention légale</h1>
            <h2 className='text-4xl p-4 text-black mb-20 mr-20 pr-14 font-subtitlefont w-2/3'>Blibloublou</h2>
          </main>
          <Footer />
        </div>
      );
    };

export default Mention;
