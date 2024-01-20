import React from 'react';
import logo from '../../images/logo.svg'; 
import backgroundImageFooter from '../../images/FormeFooter.svg';

const Footer = () => {
  return (
    <footer className="text-colorbrown  mx-auto relative z-10">
        <div className="text-colorbrown border-t border-black w-11/12 mx-auto relative z-10">
      </div>
      <div className='absolute bottom-0 right-0 left-0 z-0'>
        <img src={backgroundImageFooter} alt="Background" className="w-[62rem]" />
      </div>

      <div className="py-6 z-30 relative"> 
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex flex-col ml-6 mb-4 text-2xl font-bold">
              <a href="/contact" className="text-black hover:text-gray-600">Contact</a>
              <a href="/formation" className="text-black hover:text-gray-800">Formation produit</a>
              <a href="/conseil" className="text-black hover:text-gray-800">Conseil & Coaching</a>
              <a href="/atelier" className="text-black hover:text-gray-800">Ateliers</a>
              <a href="#" className="text-black hover:text-gray-800">A propos</a>
            </div>
            <div className="ml-6 flex text-xl space-x-8">
              <a href="#" className="text-black hover:text-gray-800">Mentions légales</a>
              <a href="#" className="text-black hover:text-gray-800">Plan de site</a>
            </div>
          </div>
          <div className="ml-auto self-end items-end mr-6">
            <img src={logo} alt="Logo" className="w-24" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
