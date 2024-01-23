import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/nav/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nomPrenom: '',
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
    if (!formData.nomPrenom) newErrors.nomPrenom = 'Le nom est requis.';
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
      // Envoi des données via Axios à l'API Symfony
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error);
    }
  };

  return (
    <div className='my-6'>
      <Header />
      <div className="max-w-6xl mx-auto rounded-lg">
        <div className="relative z-50 grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-subtitlefont">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="pl-2 text-xl font-titlefont font-semibold text-[#333]">Je suis intéressé par...</p>
            <div className="space-y-4 max-lg:mt-4">
              {/* Boutons pour l'objet de la demande */}
              {['Conseil / Formation', 'Atelier Particuliers', 'Atelier Professionnels', 'Simplement un petit mot', 'Autre'].map((item) => (
                <button key={item} type="button" className={`px-4 py-2 mr-4 rounded-md text-sm tracking-wider font-medium outline-none border-2 ${formData.objetDemande === item ? 'bg-coloryellow text-white border-coloryellow' : 'bg-transparent text-gray-500 border-gray-300'}`} onClick={() => handleButtonClick(item)}>{item}</button>
              ))}
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input type='text' placeholder='Nom Prénom' className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" name="nomPrenom" onChange={handleChange} />
              {errors.nomPrenom && <p className="text-red-500 text-xs italic">{errors.nomPrenom}</p>}
              <input type='tel' placeholder='Téléphone' className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" name="telephone" onChange={handleChange} />
              {errors.telephone && <p className="text-red-500 text-xs italic">{errors.telephone}</p>}
              <input type='email' placeholder='Email' className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" name="email" onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              <input type='text' placeholder='Société' className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" name="societe" onChange={handleChange} />
              <textarea placeholder='Message' rows="6" className="w-full rounded-md px-4 text-sm pt-3 outline-[#a91079]" name="message" onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
              <button type='submit' className="text-white font-titlefont bg-colorbrown hover:bg-colorbrown font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full">Envoyer le Message</button>
            </form>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold font-titlefont text-black">Entrons en Contact</h1>
            <p className="text-sm text-black mt-3">Vous avez des questions sur l’agence, les services que nous proposons ou tout simplement envie de nous laisser un petit mot? N’hésitez pas! Remplissez le formulaire ci-dessous et vous serez contacté dans les plus brefs délais.</p>
            {/* Autres éléments d'information, si nécessaire */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
