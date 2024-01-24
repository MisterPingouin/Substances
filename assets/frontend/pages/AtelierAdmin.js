import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const AtelierAdmin = () => {
  const [ateliers, setAteliers] = useState([]);
  const [newAtelier, setNewAtelier] = useState(initialAtelierState());
  const [editingAtelier, setEditingAtelier] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchAteliers();
  }, []);

  function initialAtelierState() {
    return {
      lien: "",
      image: null,
      titre: "",
      sousDescription: "",
      description: "",
      descriptionGras: "",
      description2: "",
      description3: "",
      imageCaroussel: [],
    };
  }

  function fetchAteliers() {
    axios
      .get("/api/ateliers/list")
      .then((response) => setAteliers(response.data))
      .catch((error) => console.error("Error fetching ateliers:", error));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAtelier({ ...newAtelier, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "imageCaroussel") {
      const fileList = Array.from(files);
      setNewAtelier({ ...newAtelier, [name]: fileList });
    } else {
      const file = files[0];
      setNewAtelier({ ...newAtelier, [name]: file });
    }
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAtelier({ ...editingAtelier, [name]: value });
  };

  const handleModalFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "imageCaroussel") {
      const fileList = Array.from(files);
      setEditingAtelier({ ...editingAtelier, [name]: fileList });
    } else {
      const file = files[0];
      setEditingAtelier({ ...editingAtelier, [name]: file });
    }
  };


  const handleSubmitAtelier = (atelierData, isEditing = false) => {
    const formData = new FormData();
    Object.keys(atelierData).forEach((key) => {
      if (key === "imageCaroussel" && atelierData[key]) {
        Array.from(atelierData[key]).forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else if (atelierData[key] !== null) {
        formData.append(key, atelierData[key]);
      }
    });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const url = isEditing ? `/api/ateliers/update/${atelierData.id}` : "/api/ateliers/add";
    const method = "post";

    axios({ method, url, data: formData, headers: config.headers })
      .then((response) => {
        fetchAteliers();
        if (isEditing) {
          closeModal();
        } else {
          setNewAtelier(initialAtelierState());
        }
      })
      .catch((error) => console.error("Error submitting atelier:", error));
  };

  const handleAddAtelier = () => {
    handleSubmitAtelier(newAtelier);
  };

  const handleUpdateAtelier = () => {
    handleSubmitAtelier(editingAtelier, true);
  };

  const handleDeleteAtelier = (id) => {
    axios
      .delete(`/api/ateliers/delete/${id}`)
      .then(() => setAteliers(ateliers.filter((atelier) => atelier.id !== id)))
      .catch((error) => console.error("Error deleting atelier:", error));
  };

  const openModalWithAtelier = (atelier) => {
    setEditingAtelier({ ...atelier });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingAtelier(null);
  };

  const renderCarrouselImages = (images) => {
    return (images || []).map((file, index) => (
      <div key={index}>
        <img src={URL.createObjectURL(file)} alt={`Carrousel ${index}`} />
        <button onClick={() => handleRemoveImageFromCarrousel(index)}>Remove</button>
      </div>
    ));
  };

  const handleRemoveImageFromCarrousel = (index) => {
    const updatedCarrousel = newAtelier.imageCaroussel.filter((_, idx) => idx !== index);
    setNewAtelier({ ...newAtelier, imageCaroussel: updatedCarrousel });
  };

  return (
    <div className="container mx-auto">
      <HeaderAdmin />
  
      {/* Formulaire d'ajout d'atelier */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">Ajouter un nouvel atelier</h2>
        <input
          type="text"
          name="lien"
          placeholder="Lien"
          value={newAtelier.lien}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={newAtelier.titre}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="sousDescription"
          placeholder="Sous Description"
          value={newAtelier.sousDescription}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newAtelier.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
  name="descriptionGras"
  placeholder="Description Gras"
  value={newAtelier.descriptionGras}
  onChange={handleInputChange}
  className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
/>

        <textarea
          name="description2"
          placeholder="Description 2"
          value={newAtelier.description2}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description3"
          placeholder="Description 3"
          value={newAtelier.description3}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="file"
          name="imageCaroussel"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={handleAddAtelier}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
        {newAtelier.imageCaroussel && 
  renderCarrouselImages(newAtelier.imageCaroussel)}

      </div>
  
      {/* Liste des ateliers */}
      <div>
        {ateliers.map((atelier) => (
          <div
            key={atelier.id}
            className="border p-10 mb-4 m-8 bg-white shadow rounded"
          >
            <h3 className="font-bold text-lg">{atelier.titre}</h3>
            <p>{atelier.lien}</p>
            <p>{atelier.sousDescription}</p>
            <p>{atelier.description}</p>
            <p>{atelier.description2}</p>
            <p>{atelier.description3}</p>
            {atelier.image && (
              <img
                src={atelier.image}
                alt="Image de l'atelier"
                className="w-full h-auto rounded-lg mt-2"
              />
            )}
            {atelier.imageCaroussel && (
              <img
                src={atelier.imageCaroussel}
                alt="Image du carrousel"
                className="w-full h-auto rounded-lg mt-2"
              />
            )}
            <div className="flex justify-end mt-2">
              <button
                onClick={() => openModalWithAtelier(atelier)}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteAtelier(atelier.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {/* Modal de modification */}
{modalIsOpen && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
    <div className="relative top-20 mx-auto p-5 border w-1/3 shadow-lg rounded-md bg-white">
      <h2 className="text-lg font-bold mb-4">Modifier l'atelier</h2>
      <input
        type="text"
        name="lien"
        value={editingAtelier.lien}
        onChange={handleModalInputChange}
        placeholder="Lien"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      <input
        type="text"
        name="titre"
        value={editingAtelier.titre}
        onChange={handleModalInputChange}
        placeholder="Titre"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      <input
        type="text"
        name="sousDescription"
        value={editingAtelier.sousDescription}
        onChange={handleModalInputChange}
        placeholder="Sous Description"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      <textarea
        name="description"
        value={editingAtelier.description}
        onChange={handleModalInputChange}
        placeholder="Description"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      <textarea
  name="descriptionGras"
  value={editingAtelier.descriptionGras}
  onChange={handleModalInputChange}
  placeholder="Description Gras"
  className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
/>

      <textarea
        name="description2"
        value={editingAtelier.description2}
        onChange={handleModalInputChange}
        placeholder="Description 2"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      <textarea
        name="description3"
        value={editingAtelier.description3}
        onChange={handleModalInputChange}
        placeholder="Description 3"
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
                  <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Image Principale:
              </label>
      <input
        type="file"
        name="image"
        onChange={handleModalFileChange}
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
       </div>
      <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Image du carrousel:
              </label>
      <input
        type="file"
        name="imageCaroussel"
        onChange={handleModalFileChange}
        className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      />
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleUpdateAtelier}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Sauvegarder
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Annuler
        </button>
        {editingAtelier.imageCaroussel && 
  renderCarrouselImages(editingAtelier.imageCaroussel)}
      </div>
    </div>
  </div>
)}

    </div>
  );
  
};

export default AtelierAdmin;
