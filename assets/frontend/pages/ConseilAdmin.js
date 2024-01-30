import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const ConseilAdmin = () => {
  const [conseils, setConseils] = useState([]);
  const [newConseil, setNewConseil] = useState({
    lien: "",
    image: null,
    titre: "",
    sousDescription: "",
    description: "",
    description2: "",
    logoDescription: "",
    logoUrl: null,
  });
  const [editingConseil, setEditingConseil] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/conseils/list")
      .then((response) => setConseils(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setNewConseil({ ...newConseil, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (modalIsOpen) {
      setEditingConseil({
        ...editingConseil,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewConseil({ ...newConseil, [e.target.name]: e.target.files[0] });
    }
  };

  const handleAddConseil = () => {
    const formData = new FormData();
    Object.keys(newConseil).forEach((key) => {
      formData.append(key, newConseil[key]);
    });

    axios
      .post("/api/conseils/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setConseils([...conseils, response.data]);
        setNewConseil({
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

  const handleDeleteConseil = (id) => {
    axios
      .delete(`/api/conseils/delete/${id}`)
      .then(() => setConseils(conseils.filter((conseil) => conseil.id !== id)))
      .catch((error) => console.log(error));
  };

  const openModalWithConseil = (conseil) => {
    setEditingConseil({ ...conseil });
    setModalIsOpen(true);
  };

  const handleModalInputChange = (e) => {
    setEditingConseil({ ...editingConseil, [e.target.name]: e.target.value });
  };

  const handleModalFileChange = (e) => {
    if (e.target.files.length > 0) {
      setEditingConseil({
        ...editingConseil,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleUpdateConseil = () => {
    const formData = new FormData();
    Object.keys(editingConseil).forEach((key) => {
      if (key === "image" || key === "logoUrl") {
        if (editingConseil[key] instanceof File) {
          formData.append(key, editingConseil[key]);
        }
      } else {
        formData.append(key, editingConseil[key]);
      }
    });

    axios({
      method: "post",
      url: `/api/conseils/update/${editingConseil.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setConseils(
          conseils.map((item) =>
            item.id === editingConseil.id ? response.data : item
          )
        );
        closeModal();
      })
      .catch((error) => console.log(error));
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingConseil(null);
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      {/* Formulaire d'ajout de conseil */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">
          Ajouter un nouveau conseil
        </h2>
        <input
          type="text"
          name="lien"
          placeholder="Lien"
          value={newConseil.lien}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={newConseil.titre}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <input
          type="text"
          name="sousDescription"
          placeholder="Sous Description"
          value={newConseil.sousDescription}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newConseil.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="description2"
          placeholder="Description 2"
          value={newConseil.description2}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="logoDescription"
          placeholder="Description du Logo"
          value={newConseil.logoDescription}
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
          onClick={handleAddConseil}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des conseils */}
      <div>
        {conseils.map((conseil) => (
          <div
            key={conseil.id}
            className=" flex flex-col justify-center items-center border p-10 m-8 mb-4 bg-white shadow rounded"
          >
            <h3 className="font-bold text-lg">{conseil.titre}</h3>
            <p>{conseil.lien}</p>
            <p>{conseil.sousDescription}</p>
            <p>{conseil.description}</p>
            <p>{conseil.description2}</p>
            <p>{conseil.logoDescription}</p>
            {/* Affichage des images si présentes */}
            {conseil.image && (
              <img
                src={conseil.image}
                alt="Image du conseil"
                className="w-1/2 h-auto rounded-lg mt-2"
              />
            )}
            {conseil.logoUrl && (
              <img
                src={conseil.logoUrl}
                alt="Logo"
                className="max-h-1/4 w-auto rounded-lg mt-2"
              />
            )}
            <div className="flex justify-end mt-2">
              <button
                onClick={() => openModalWithConseil(conseil)}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteConseil(conseil.id)}
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
            <h2 className="text-lg font-bold mb-4">Modifier un Conseil</h2>
            <input
              type="text"
              name="lien"
              value={editingConseil.lien}
              onChange={handleModalInputChange}
              placeholder="Lien"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="titre"
              value={editingConseil.titre}
              onChange={handleModalInputChange}
              placeholder="titre"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <input
              type="text"
              name="sousDescription"
              value={editingConseil.sousDescription}
              onChange={handleModalInputChange}
              placeholder="sousDescription"
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={editingConseil.description}
              onChange={handleModalInputChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="description2"
              placeholder="Description 2"
              value={editingConseil.description2}
              onChange={handleModalInputChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <textarea
              name="logoDescription"
              placeholder="Description du Logo"
              value={editingConseil.logoDescription}
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
                onClick={handleUpdateConseil}
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

export default ConseilAdmin;
