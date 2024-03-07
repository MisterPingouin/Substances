import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const FormationAdmin = () => {
  const [formations, setFormations] = useState([]);
  const [newFormation, setNewFormation] = useState({
    lien: "",
    image: null,
    titre: "",
    sousDescription: "",
    description: "",
    description2: "",
    logoDescription: "",
    logoUrl: null,
  });
  const [editingFormation, setEditingFormation] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/formations/list")
      .then((response) => setFormations(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setNewFormation({ ...newFormation, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (modalIsOpen) {
      setEditingFormation({
        ...editingFormation,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewFormation({ ...newFormation, [e.target.name]: e.target.files[0] });
    }
  };

  const handleAddFormation = () => {
    const formData = new FormData();
    Object.keys(newFormation).forEach((key) => {
      formData.append(key, newFormation[key]);
    });

    axios
      .post("/api/formations/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setFormations([...formations, response.data]);
        setNewFormation({
          lien: "",
          image: null,
          titre: "",
          sousDescription: "",
          description: "",
          description2: "",
          logoDescription: "",
          logoUrl: null,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteFormation = (id) => {
    axios
      .delete(`/api/formations/delete/${id}`)
      .then(() =>
        setFormations(formations.filter((formation) => formation.id !== id))
      )
      .catch((error) => console.log(error));
  };

  const openModalWithFormation = (formation) => {
    setEditingFormation({ ...formation });
    setModalIsOpen(true);
  };

  const handleModalInputChange = (e) => {
    setEditingFormation({
      ...editingFormation,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalFileChange = (e) => {
    if (e.target.files.length > 0) {
      setEditingFormation({
        ...editingFormation,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleUpdateFormation = () => {
    const formData = new FormData();
    Object.keys(editingFormation).forEach((key) => {
      if (key === "image" || key === "logoUrl") {
        if (editingFormation[key] instanceof File) {
          formData.append(key, editingFormation[key]);
        }
      } else {
        formData.append(key, editingFormation[key]);
      }
    });

    axios({
      method: "post",
      url: `/api/formations/update/${editingFormation.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setFormations(
          formations.map((item) =>
            item.id === editingFormation.id ? response.data : item
          )
        );
        closeModal();
      })
      .catch((error) => console.log(error));
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingFormation(null);
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      {/* Formulaire d'ajout de formation */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">
          Ajouter un nouveau formation
        </h2>
        <input
          type="text"
          name="lien"
          placeholder="Lien"
          value={newFormation.lien}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={newFormation.titre}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="sousDescription"
          placeholder="Sous Description"
          value={newFormation.sousDescription}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newFormation.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description2"
          placeholder="Description 2"
          value={newFormation.description2}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="logoDescription"
          placeholder="Description du Logo"
          value={newFormation.logoDescription}
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
          name="logoUrl"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={handleAddFormation}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des formations */}
      <div>
        {formations.map((formation) => (
          <div
            key={formation.id}
            className=" flex flex-col justify-center items-center border p-10 m-8 mb-4 bg-white shadow rounded"
          >
            <h3 className="font-bold text-lg">{formation.titre}</h3>
            <p>{formation.lien}</p>
            <p>{formation.sousDescription}</p>
            <p>{formation.description}</p>
            <p>{formation.description2}</p>
            <p>{formation.logoDescription}</p>
            {/* Affichage des images si présentes */}
            {formation.image && (
              <img
                src={formation.image}
                alt="Image du formation"
                className="w-1/2 h-auto rounded-lg mt-2"
              />
            )}
            {formation.logoUrl && (
              <img
                src={formation.logoUrl}
                alt="Logo"
                className="w-full h-auto rounded-lg mt-2"
              />
            )}
            <div className="flex justify-end mt-2">
              <button
                onClick={() => openModalWithFormation(formation)}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteFormation(formation.id)}
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
            <h2 className="text-lg font-bold mb-4">Modifier une Formation</h2>
            <input
              type="text"
              name="lien"
              value={editingFormation.lien}
              onChange={handleModalInputChange}
              placeholder="Lien"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="titre"
              value={editingFormation.titre}
              onChange={handleModalInputChange}
              placeholder="titre"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="sousDescription"
              value={editingFormation.sousDescription}
              onChange={handleModalInputChange}
              placeholder="sousDescription"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={editingFormation.description}
              onChange={handleModalInputChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="description2"
              placeholder="Description 2"
              value={editingFormation.description2}
              onChange={handleModalInputChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="logoDescription"
              placeholder="Description du Logo"
              value={editingFormation.logoDescription}
              onChange={handleModalInputChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            {/* Champ de fichier pour l'image principale */}
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

            {/* Champ de fichier pour l'image du logo */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Image du Logo:
              </label>
              <input
                type="file"
                name="logoUrl"
                onChange={handleModalFileChange}
                className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleUpdateFormation}
                className="bg-coloryellow hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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

export default FormationAdmin;
