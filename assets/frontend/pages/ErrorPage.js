import React from "react";

const ErrorPage = () => {
  return (
    <div className="font-titlefont">
      <Header />
      <main className="flex-grow justify-center items-center">
        <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3">
          404 Not Found
        </h1>
        <h2 className="text-4xl p-4 text-black mb-20 mr-20 pr-14 font-subtitlefont w-2/3">
          Désolés, la page que tu essayes de joindre n'existe pas.
        </h2>
      </main>
    </div>
  );
};

export default ErrorPage;
