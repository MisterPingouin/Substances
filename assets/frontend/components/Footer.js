import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import backgroundImageFooter from "../../images/FormeFooter.svg";

const Footer = () => {
  return (
    <footer className="text-colorbrown mx-auto relative">
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-14 border-black"></div>
      </div>
      <div className="text-colorbrown border-t mt-10 border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
      <div className="mt-10 mr-20 ml-12 lg:ml-0 lg:mr-0">
        <div className="absolute flex justify-center items-center bottom-0 right-[33rem] lg:right-[70rem] 2xl:right-[95rem] left-0">
          <img
            src={backgroundImageFooter}
            alt="Background"
            className="w-full"
          />
        </div>
        <div className="lg:hidden py-6 relative">
          <div className="flex flex-col sm:flex-row justify-between">
            {/* Gauche - Liens et Mentions */}
            <div>
              <div className="flex">
                <div className="flex flex-col ml-6 mb-4 text-3xl font-bold text-colorborwn space-y-1">
                <Link to="/conseil" className="hover:text-gray-600 cursor-pointer">
                  Conseils
                </Link>
                <Link to="/formation" className="hover:text-gray-600 cursor-pointer">
                  Formations
                </Link>
                <Link to="/atelier" className="hover:text-gray-600 cursor-pointer">
                  Ateliers
                </Link>
                <Link to="/about" className="hover:text-gray-600 cursor-pointer">
                  Faisons connaissance
                </Link>
                <Link to="/contact" className="hover:text-gray-600 cursor-pointer">
                  Contact
                </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end mr-2">
              <div className="flex space-x-7">
                <div className="bg-black rounded-full p-5">
                  <a href="#" className="hover:underline hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-black rounded-full p-5">
                  <a href="#" className="hover:underline hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-6 flex justify-between items-center">
            <div className="flex text-xl space-x-12 text-colorborwn mb-20">
            <div className="flex flex-col">
            <p>© Photo Justine Nerini</p>
              <div className="flex space-x-12">
            <Link to="/mention" className="hover:text-gray-600 cursor-pointer">
                Mentions légales
              </Link>
              <Link to="/plan" className="hover:text-gray-600 cursor-pointer">
                Plan de site
              </Link>
              </div>
              </div>
            </div>
            <div className="mb-20">
              <img src={logo} alt="Logo Substances" className="min-h-12" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center relative z-10">
          {/* Gauche - Liens et Mentions */}
          <div className="flex w-[80%]">
            <div className="flex justify-between w-full">
              <div className="flex flex-col  mb-16 text-xl font-bold text-colorbrown space-y-1">
              <Link to="/conseil" className="hover:text-gray-600 cursor-pointer">
                  Conseil
                </Link>
              <Link to="/formation" className="hover:text-gray-600 cursor-pointer">
                  Formation
                </Link>
                <Link to="/atelier" className="hover:text-gray-600 cursor-pointer">
                  Atelier
                </Link>
                <Link to="/about" className="hover:text-gray-600 cursor-pointer">
                  Faisons connaissance
                </Link>
              </div>
              <div className="flex flex-col mb-16 justify-end text-xl space-y-1 text-colorborwn ">
              <Link to="/contact" className="font-bold hover:text-gray-600 cursor-pointer">
                  Contactez-moi
                </Link>
                <p>© Photo Justine Nerini</p>
              <Link to="/mention" className="hover:text-gray-600 cursor-pointer">
                  Mentions légales
                </Link>
                <Link to="/plan" className="hover:text-gray-600 cursor-pointer">
                  Plan de site
                </Link>
              </div>
              <div className="flex items-end mb-16">
                <div className="flex space-x-9">
                  <div className="bg-black rounded-full p-5">
                    <a
                      href="https://www.linkedin.com/in/julia-charlotte-basso-41434912/"
                      className="hover:underline hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <div className="bg-black rounded-full p-5">
                    <a
                      href="https://www.instagram.com/subs_stances?igsh=ZTM1MHYxbW12Ymhu&utm_source=qr"
                      className="hover:underline hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="self-end mb-14">
                <img src={logo} alt="Logo substances" className="min-h-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
