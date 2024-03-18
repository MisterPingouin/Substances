import React, { useEffect, useState } from "react";
import Header from "../components/nav/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Certification from "../components/Certification";
import aboutDesktop from "../../images/JuliaHome-Desktop.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
  const [aboutData, setAboutData] = useState({
    subtitle: "",
    bloc1: "",
    bloc2: "",
    bloc3: "",
    bloc4: "",
  });

  useEffect(() => {
    axios
      .get("/api/about/")
      .then((response) => {
        if (response.data) {
          setAboutData(response.data);
        }
      })
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  const renderWithLineBreaks = (text) => {
    return text.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <HelmetProvider>
      <div className="font-titlefont">
        <Helmet>
          <title>Substances | Julia-Charlotte Basso</title>
          <meta name="description" content="A propos de moi." />
          <meta
            name="keywords"
            content="Zythologue, Spiritueux, Saké, WSET, Cicerone"
          />
        </Helmet>
        <Header />
        <div className="hidden lg:flex justify-center items-center relative z-10">
          <div className="text-colorbrown border-t w-[80%] mt-8 border-black  "></div>
        </div>
        <main className="flex-grow justify-center items-center">
          <div className="flex flex-col justify-center items-center relative z-10">
            <h1 className="text-7xl p-4 text-colorbrown pt-20 mb-2 font-bold w-[75%] lg:hidden">
              <span className="block">Faisons</span>
              <span className="block">Connaissance</span>
            </h1>
            <h1 className="hidden font-bold text-7xl mt-14 mb-6 lg:block lg:w-[80%]">
              Faisons connaissance
            </h1>
            <h2 className="text-4xl p-4 text-colorbrown mb-20 font-subtitlefont w-[75%] lg:w-[80%] lg:mr-0 lg:p-0 lg:mb-14">
              Moi c’est Julia-Charlotte Basso. Enchantée!
            </h2>
          </div>
          <div className="hidden lg:flex justify-center items-center relative z-10">
            <div className="text-colorbrown border-t w-[80%] mb-10 border-black  "></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full lg:w-[80%]">
              <img
                src={aboutDesktop}
                alt="Photo de Julia-Charlotte Basso"
                className="w-full lg:hidden"
              />
              <img
                src={aboutDesktop}
                alt="Photo de Julia-Charlotte Basso"
                className="hidden lg:block w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center z-20 relative">
            <div className="flex flex-col justify-center text-colorbrown text-3xl font-subtitlefont w-[75%] lg:w-[80%] lg:text-2xl">
              <h1 className="text-6xl font-bold font-titlefont uppercase mt-20 lg:hidden">
                En quelques mots 💬{" "}
              </h1>
              <h1 className="hidden lg:block text-6xl font-bold font-titlefont uppercase mt-20">
                En quelques mots 💬{" "}
              </h1>
              <p className="mt-10 font-bold font-titlefont">
                {aboutData.subtitle}
              </p>
              <h1 className="text-6xl font-bold uppercase mt-16 mb-8 font-titlefont lg:hidden">
                En détail... 🔍{" "}
              </h1>
              <h1 className="hidden lg:block text-6xl font-bold uppercase mt-16 mb-8 font-titlefont">
                En détail... 🔍{" "}
              </h1>
              <div className="lg:flex lg:space-x-32">
                <div className="lg:flex lg:flex-col lg:w-1/2">
                  <p className="mt-8">
                    {renderWithLineBreaks(aboutData.bloc1)}
                  </p>
                  <p className="mt-8">
                    {renderWithLineBreaks(aboutData.bloc2)}
                  </p>
                  <p className="mt-8">
                    {renderWithLineBreaks(aboutData.bloc3)}
                  </p>
                </div>
                <div className="lg:flex lg:flex-col lg:w-1/2">
                  <p className="mt-8">
                    {renderWithLineBreaks(aboutData.bloc4)}
                  </p>{" "}
                  <div className="flex flex-col font-titlefont space-y-2 mt-10 mb-10 text-colorbrown font-bold text-4xl w-[75%] lg:text-3xl">
                    <p>Assez parlé de moi.</p>
                    <p>Parlons de vous.</p>
                    <Link to="/contact">
                      <button
                        type="button"
                        className="inline-block font-titlefont mt-4 rounded bg-coloryellow px-6 pb-2 pt-2.5 text-4xl lg:text-3xl leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]"
                      >
                        Me contacter
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Certification />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default About;
