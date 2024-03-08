import React from 'react';
import Header from "../components/nav/Header";
import Footer from "../components/Footer";


const Mention = () => {
    return (
      <>
          <Header />
          <main className="mt-12 min-h-[calc(100vh-597px)]">
        <div className="flex flex-col justify-center items-start relative">
          <div className="text-7xl text-colorbrown pt-20 mx-auto w-[85%] pr-14 font-bold lg:w-[80%]">
            <h1 className="block">Mention légales</h1>    
          </div>
          <div className="text-colorbrown mt-12 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
        <div className="hidden lg:flex justify-center items-center relative mb-10">
          <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
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

export default Mention;
