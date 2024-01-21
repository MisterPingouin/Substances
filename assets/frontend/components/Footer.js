import React from 'react';
import logo from '../../images/logo.svg'; 
import backgroundImageFooter from '../../images/FormeFooter.svg';

const Footer = () => {
  return (
    <footer className="text-colorbrown  mx-auto relative">
    <div className="text-colorbrown border-t border-black w-11/12 mx-auto relative z-10">
      </div>
      <div className='absolute flex justify-center items-center bottom-0 right-0 left-0'>
        <img src={backgroundImageFooter} alt="Background" className="w-full" />
      </div>

      <div className="py-6 relative"> 
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex flex-col ml-6 mb-4 text-2xl font-bold text-black">
              <a href="/contact" className='hover:text-coloryellow'>Contact</a>
              <a href="/formation" className='hover:text-coloryellow' >Formation produit</a>
              <a href="/conseil"  className='hover:text-coloryellow'>Conseil & Coaching</a>
              <a href="/atelier"  className='hover:text-coloryellow'>Ateliers</a>
              <a href="#" className='hover:text-coloryellow'>A propos</a>
            </div>
            <div className="ml-6 flex text-xl space-x-12 text-black ">
              <a href="#" className='hover:text-gray-800'>Mentions légales</a>
              <a href="#" className='hover:text-gray-800'>Plan de site</a>
            </div>
          </div>
          <div className="ml-auto self-end items-end mr-6">
            <img src={logo} alt="Logo" className="min-h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
