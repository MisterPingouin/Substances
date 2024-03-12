import React, { useState } from "react";
import axios from "axios";
import Header from "../components/nav/Header";
import Footer from "../components/Footer";
import { Button } from "@material-tailwind/react";
import Logo from "../components/Logo";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    societe: "",
    objetDemande: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleButtonClick = (value) => {
    setFormData({ ...formData, objetDemande: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = "Le nom est requis.";
    if (!formData.prenom) newErrors.prenom = "Le prénom est requis.";
    if (!formData.telephone) newErrors.telephone = "Le téléphone est requis.";
    if (!formData.email) newErrors.email = "L'email est requis.";
    if (!formData.message) newErrors.message = "Le message est requis.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      const response = await axios.post(
        "https://agence-substances.com/api/send-email",
        formData
      );
      console.log("Réponse du serveur", response.data);
      // Vous pouvez ajouter ici une logique pour afficher un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };

  return (
        <HelmetProvider>
          <div className="font-titlefont">
            <Helmet>
          <title>Substances | Contactez-Moi</title>
          <meta name="description" content="Envie de me parler de votre projet professionnel ou personnel en lien avec l'univers Bières, Spiritueux & Saké ? Contactez-moi!" />
          <meta
            name="keywords"
            content="Contact, conseil, atelier, Formation, bières"
          />
        </Helmet>
      <Header />
      <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-8 border-black  "></div>
      </div>
      <main className="flex-grow justify-center items-center min-h-full">
        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="text-7xl p-4 lg:p-0 lg:mt-24 text-colorbrown pt-20 mr-20 lg:mb-6 lg:mr-0 pr-14 lg:pr-0 font-bold w-2/3 lg:w-[80%]">
          <h1 className="block">Contactez-moi</h1>
          </div>
          <h2 className="text-4xl p-4 lg:p-0 lg:mb-8 text-colorbrown mr-20 lg:mr-0 pr-8 font-subtitlefont w-2/3 lg:w-[80%]">
          Envie de m'envoyer un petit mot ou de me parler de votre projet ? Vous pouvez me contacter par téléphone ou bien m'envoyez un message écrit. 
Pour cela, choisissez le sujet de votre message et ensuite c'est à vous de jouer !
          </h2>
          <div className="p-4 text-colorbrown mr-20 lg:mr-0 pr-14 lg:pr-0 font-bold w-2/3 lg:flex lg:flex-col lg:justify:center lg:items-center lg:w-full lg:p-0">
            <div className="space-y-4  lg:w-[80%]">
              {/* Boutons pour l'objet de la demande */}
              {[
                "Conseils",
                "Formations",
                "Ateliers",
                "Donner mon avis !",
                "Autres",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`px-4 py-2 mr-4 rounded-md text-2xl tracking-wider font-semibold outline-none border-4 
                      ${
                        formData.objetDemande === item
                          ? "bg-coloryellow text-white border-coloryellow"
                          : "bg-white text-coloryellow border-coloryellow hover:bg-coloryellow hover:text-white"
                      }`}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <form
              className="lg:hidden mt-8 space-y-2 w-full"
              onSubmit={handleSubmit}
            >
              <label className="text-xl">Nom</label>
              <input
                type="text"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="nom"
                onChange={handleChange}
              />
              {errors.nom && (
                <p className="text-red-500 text-sm italic">{errors.nom}</p>
              )}
              <div className=""></div>
              <label className="text-xl">Prénom</label>
              <input
                type="text"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="prenom"
                onChange={handleChange}
              />
              {errors.prenom && (
                <p className="text-red-500 text-sm italic">{errors.prenom}</p>
              )}
              <div className=""></div>
              <label className="text-xl">Téléphone</label>
              <input
                type="tel"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="telephone"
                onChange={handleChange}
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm italic">
                  {errors.telephone}
                </p>
              )}
              <div className=""></div>
              <label className="text-xl">Adresse mail</label>
              <input
                type="email"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm italic">{errors.email}</p>
              )}
              <div className=""></div>
              <label className="text-xl">Société</label>
              <input
                type="text"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="societe"
                onChange={handleChange}
              />
              <div className=""></div>
              <label className="text-xl">Message</label>
              <textarea
                rows="6"
                className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                name="message"
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm italic">{errors.message}</p>
              )}
              <div className="h-4"></div>
              <Button
                type="submit"
                className=" text-2xl mt-4 bg-colorbrown capitalize"
              >
                Envoyer
              </Button>
              <div className="h-4"></div>
            </form>
            <div className="hidden lg:flex flex-col relative justify-center items-center w-full ">
              <form
                className="mt-8 space-y-6 lg:w-[80%]"
                onSubmit={handleSubmit}
              >
                <div className="flex justify-center items-center space-x-20">
                  <div className="space-y-2 w-1/2">
                    <label className="text-xl">Nom</label>
                    <input
                      type="text"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="nom"
                      onChange={handleChange}
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-sm italic">
                        {errors.nom}
                      </p>
                    )}
                    <label className="text-xl block mt-1">Prénom</label>
                    <input
                      type="text"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="prenom"
                      onChange={handleChange}
                    />
                    {errors.prenom && (
                      <p className="text-red-500 text-sm italic">
                        {errors.prenom}
                      </p>
                    )}
                    <label className="text-xl block mt-1">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="telephone"
                      onChange={handleChange}
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-sm italic">
                        {errors.telephone}
                      </p>
                    )}
                    <label className="text-xl block mt-1">Adresse mail</label>
                    <input
                      type="email"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="email"
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm italic">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2 w-3/4">
                    <label className="text-xl">Société</label>
                    <input
                      type="text-xl"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="societe"
                      onChange={handleChange}
                    />
                    <label className="text-xl inline-block mt-1">Message</label>
                    <textarea
                      rows="8"
                      className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown"
                      name="message"
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm italic">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className=" text-2xl mt-4 bg-colorbrown capitalize"
                >
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex"></div>
      </main>
      <Logo />
      <Footer />
      </div>
      </HelmetProvider>
  );
};

export default Contact;
