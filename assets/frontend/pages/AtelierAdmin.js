import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const AtelierAdmin = () => {
  const [ateliers, setAteliers] = useState([]);
  const [newAtelier, setNewAtelier] = useState({
    lien: "",
    image: null,
    titre: "",
    sousDescription: "",
    description: "",
    descriptionGras: "",
    description2: "",
    description3: "",
    imageCaroussel: null,
  });
  const [editingAtelier, setEditingAtelier] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/ateliers/list")
      .then((response) => setAteliers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setNewAtelier({ ...newAtelier, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (modalIsOpen) {
      setEditingAtelier({
        ...editingAtelier,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewAtelier({ ...newAtelier, [e.target.name]: e.target.files[0] });
    }
  };

  const handleAddAtelier = () => {
    const formData = new FormData();
    Object.keys(newAtelier).forEach((key) => {
      formData.append(key, newAtelier[key]);
    });

    axios
      .post("/api/ateliers/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setAteliers([...ateliers, response.data]);
        setNewAtelier({
          lien: "",
          image: null,
          titre: "",
          sousDescription: "",
          description: "",
          descriptionGras: "",
          description2: "",
          description3: "",
          imageCaroussel: null,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteAtelier = (id) => {
    axios
      .delete(`/api/ateliers/delete/${id}`)
      .then(() => setAteliers(ateliers.filter((atelier) => atelier.id !== id)))
      .catch((error) => console.log(error));
  };

  const openModalWithAtelier = (atelier) => {
    setEditingAtelier({ ...atelier });
    setModalIsOpen(true);
  };

  const handleModalInputChange = (e) => {
    setEditingAtelier({ ...editingAtelier, [e.target.name]: e.target.value });
  };

  const handleModalFileChange = (e) => {
    if (e.target.files.length > 0) {
      setEditingAtelier({
        ...editingAtelier,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleUpdateAtelier = () => {
    const formData = new FormData();
    Object.keys(editingAtelier).forEach((key) => {
      if (key === "image" || key === "imageCaroussel") {
        if (editingAtelier[key] instanceof File) {
          formData.append(key, editingAtelier[key]);
        }
      } else {
        formData.append(key, editingAtelier[key]);
      }
    });

    axios({
      method: "post",
      url: `/api/ateliers/update/${editingAtelier.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setAteliers(
          ateliers.map((item) =>
            item.id === editingAtelier.id ? response.data : item
          )
        );
        closeModal();
      })
      .catch((error) => console.log(error));
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingAtelier(null);
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
      </div>
    </div>
  </div>
)}

    </div>
  );
  
};

export default AtelierAdmin;
