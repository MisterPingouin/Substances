import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const AvisAdmin = () => {
  const [avis, setAvis] = useState([]);
  const [newAvis, setNewAvis] = useState({
    content: "",
    name: "",
    fonction: "",
    company: ""
  });
  const [editingAvis, setEditingAvis] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchAvis();
  }, []);

  const fetchAvis = () => {
    axios.get("/api/avis/list")
         .then(response => setAvis(response.data))
         .catch(error => console.error("Error fetching avis:", error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAvis(prev => ({ ...prev, [name]: value }));
  };

  const handleAddAvis = () => {
    const formData = new FormData();
    Object.entries(newAvis).forEach(([key, value]) => formData.append(key, value));

    axios.post("/api/avis/add", formData)
         .then(response => {
           setAvis([...avis, response.data]);
           setNewAvis({
             content: "",
             name: "",
             fonction: "",
             company: ""
           });
         })
         .catch(error => console.error("Error adding avis:", error));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAvis(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateAvis = () => {
    const formData = new FormData();
    Object.entries(editingAvis).forEach(([key, value]) => formData.append(key, value));

    axios.post(`/api/avis/update/${editingAvis.id}`, formData)
         .then(response => {
           setAvis(avis.map(item => item.id === editingAvis.id ? response.data : item));
           closeModal();
         })
         .catch(error => console.error("Error updating avis:", error));
  };

  const handleDeleteAvis = (id) => {
    axios.delete(`/api/avis/delete/${id}`)
         .then(() => setAvis(avis.filter(item => item.id !== id)))
         .catch(error => console.error("Error deleting avis:", error));
  };

  const openModalWithAvis = (avis) => {
    setEditingAvis({ ...avis });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingAvis({});
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">Ajouter un nouvel avis</h2>
        <input
          type="text"
          name="content"
          value={newAvis.content}
          onChange={handleInputChange}
          placeholder="Contenu de l'avis"
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="name"
          value={newAvis.name}
          onChange={handleInputChange}
          placeholder="Nom de la personne"
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="fonction"
          value={newAvis.fonction}
          onChange={handleInputChange}
          placeholder="Fonction de la personne"
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="company"
          value={newAvis.company}
          onChange={handleInputChange}
          placeholder="Entreprise de la personne"
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button onClick={handleAddAvis} className="bg-coloryellow text-white font-bold py-2 px-4 rounded">
          Ajouter
        </button>
      </div>

      <h1 className="p-10 m-8 text-xl font-semibold">Avis Clients</h1>
      <div>
        {avis.map((avisItem) => (
          <div key={avisItem.id} className="flex flex-col justify-center items-center border p-10 m-8 mb-4 bg-white shadow rounded">
            <p className="font-bold">{avisItem.content}</p>
            <p>{avisItem.name}</p>
            <p>{avisItem.fonction}</p>
            <p>{avisItem.company}</p>
            <div className="flex justify-end mt-2">
              <button onClick={() => openModalWithAvis(avisItem)} className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2">
                Modifier
              </button>
              <button onClick={() => handleDeleteAvis(avisItem.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-1/3 shadow-lg rounded-md bg-white">
            <h2 className="text-lg font-bold mb-4">Modifier l'avis</h2>
            <input
              type="text"
              name="content"
              value={editingAvis.content || ''}
              onChange={handleEditInputChange}
              placeholder="Contenu de l'avis"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="name"
              value={editingAvis.name || ''}
              onChange={handleEditInputChange}
              placeholder="Nom de la personne"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="fonction"
              value={editingAvis.fonction || ''}
              onChange={handleEditInputChange}
              placeholder="Fonction de la personne"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="company"
              value={editingAvis.company || ''}
              onChange={handleEditInputChange}
              placeholder="Entreprise de la personne"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <div className="flex justify-between">
              <button onClick={handleUpdateAvis} className="bg-coloryellow text-white font-bold py-2 px-4 rounded">
                Sauvegarder
              </button>
              <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvisAdmin;
