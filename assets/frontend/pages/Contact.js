import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';
import { Button } from "@material-tailwind/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    societe: '',
    objetDemande: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleButtonClick = (value) => {
    setFormData({ ...formData, objetDemande: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = 'Le nom est requis.';
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis.';
    if (!formData.telephone) newErrors.telephone = 'Le téléphone est requis.';
    if (!formData.email) newErrors.email = 'L\'email est requis.';
    if (!formData.message) newErrors.message = 'Le message est requis.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
        const response = await axios.post('http://votre_backend.com/api/contact', formData);
        console.log('Réponse du serveur', response.data);
        // Gérer la réponse ici (afficher un message de succès, par exemple)
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire', error);
        if (error.response) {
            // Gérer les erreurs de validation côté serveur ici
            setErrors(error.response.data);
        }
        // Autres traitements d'erreur
    }
};


  return (
    <div className=''>
      <Header />
      <main className="flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-7xl p-4 text-colorbrown pt-20 mr-20 pr-14 font-bold w-2/3">
            <span className="block">Contactez-moi</span>
          </h1>
          <h2 className="text-4xl p-4 text-colorbrown mr-20 pr-8 font-subtitlefont w-2/3">
          Choisissez l’objet
de votre message et ensuite
c’est à vous de jouer !
          </h2>
          <div className="p-4 text-colorbrown mr-20 pr-14 font-bold w-2/3">
            <div className="space-y-4 max-w-[70%]">
              {/* Boutons pour l'objet de la demande */}
              {['Formations produits', 'Conseil & accompagnement', 'Ateliers', 'Autre'].map((item) => (
                <button key={item} type="button" className={`px-4 py-2 mr-4 rounded-md text-2xl tracking-wider font-semibold outline-none border-4 ${formData.objetDemande === item ? 'bg-coloryellow text-white border-coloryellow' : 'bg-white text-coloryellow border-coloryellow'}`} onClick={() => handleButtonClick(item)}>{item}</button>
              ))}
            </div>
            <form className="mt-8 space-y-2" onSubmit={handleSubmit}>
              <label className='text-xl'>Nom</label>
              <input type='text' className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="nom" onChange={handleChange} />
              {errors.nom && <p className="text-red-500 text-sm italic">{errors.nom}</p>}
              <div className=""></div>
              <label className='text-xl'>Prénom</label>
              <input type='text' className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="prenom" onChange={handleChange} />
              {errors.prenom && <p className="text-red-500 text-sm italic">{errors.prenom}</p>}
              <div className=""></div>
              <label className='text-xl'>Téléphone</label>
              <input type='tel' className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="telephone" onChange={handleChange} />
              {errors.telephone && <p className="text-red-500 text-sm italic">{errors.telephone}</p>}
              <div className=""></div>
              <label className='text-xl'>Adresse mail</label>
              <input type='email' className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="email" onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm italic">{errors.email}</p>}
              <div className=""></div>
              <label className='text-xl'>Société</label>
              <input type='text' className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="societe" onChange={handleChange} />
              <div className=""></div>
              <label className='text-xl'>Message</label>
              <textarea placeholder='Message' rows="6" className="w-full rounded-md py-3 px-4 border-2 shadow-md border-colorbrown" name="message" onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 text-sm italic">{errors.message}</p>}
              <div className="h-4"></div>
              <Button type="submit" className=" text-2xl mt-4 bg-colorbrown capitalize">Envoyer</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
