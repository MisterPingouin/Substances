import React from "react";
import Header from "../components/nav/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import arrow from "../../images/arrowright.svg";
import Logo from "../components/Logo";

const Plan = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-597px)]">
        <div className="flex flex-col justify-center items-start relative">
          <div className="text-7xl text-colorbrown pt-20 mx-auto w-[85%] pr-14 font-bold lg:w-[80%]">
            <h1 className="block">Plan de site</h1>
          </div>
        </div>
        <div className="text-colorbrown mt-12 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
        <div className="hidden lg:flex justify-center items-center relative mb-10">
          <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
        </div>
        <div className="flex flex-col items-start space-y-6 text-4xl font-bold mx-auto w-[85%] lg:w-[80%]">
            <div className="lg:flex lg:space-x-60">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex justify-center items-center mt-4">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link to="/" className="ml-4 hover:text-gray-600 cursor-pointer">
              Accueil
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/about"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Faisons connaissance
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/conseil"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Conseils{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/formation"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Formations{" "}
            </Link>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-6">
          <div className="flex justify-center items-center mt-6 lg:mt-4">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/atelier"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Ateliers{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/contact"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Contact{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={arrow} alt="Arrow right" className="h-auto w-12 mr-4" />
            <Link
              to="/mention"
              className="ml-4 hover:text-gray-600 cursor-pointer"
            >
              Mention légales{" "}
            </Link>
          </div>
          </div>
          </div>
        </div>
      </main>
      <div className="hidden lg:block">
      <Logo />
      </div>
      <Footer />
    </>
  );
};

export default Plan;
