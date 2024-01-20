import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black w-11/12 mx-auto">
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between ">
          <div>
            <div className="flex flex-col mb-4 font-bold">
              <a href="#" className="text-black hover:text-gray-800">Contact</a>
              <a href="#" className="text-black hover:text-gray-800">Formation produit</a>
              <a href="#" className="text-black hover:text-gray-800">Conseil & Coaching</a>
              <a href="#" className="text-black hover:text-gray-800">Ateliers</a>
              <a href="#" className="text-black hover:text-gray-800">A propos</a>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-black hover:text-gray-800">Mentions légales</a>
              <a href="#" className="text-black hover:text-gray-800">Plan de site</a>
            </div>
          </div>
          <div className="ml-auto">
            <img src="logo-url.jpg" alt="Logo" className="h-8 w-8 md:h-12 md:w-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
