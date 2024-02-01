import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const LogoAdmin = () => {
  const [logos, setLogos] = useState([]);
  const [newLogo, setNewLogo] = useState({ logo: null });
  const [editingLogo, setEditingLogo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchLogos();
  }, []);

  function fetchLogos() {
    axios.get("/api/logo-company/list")
      .then((response) => setLogos(response.data))
      .catch((error) => console.error("Error fetching logos:", error));
  }

  const handleFileChange = (e) => {
    setNewLogo({ ...newLogo, logo: e.target.files[0] });
  };

  const handleModalFileChange = (e) => {
    setEditingLogo({ ...editingLogo, logo: e.target.files[0] });
  };

  const handleAddLogo = () => {
    const formData = new FormData();
    formData.append('logo', newLogo.logo);

    axios.post("/api/logo-company/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(() => {
        fetchLogos();
        setNewLogo({ logo: null });
      })
      .catch((error) => console.error("Error adding logo:", error));
  };

  const handleUpdateLogo = () => {
    const formData = new FormData();
    formData.append('logo', editingLogo.logo);

    axios.post(`/api/logo-company/update/${editingLogo.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(() => {
        fetchLogos();
        closeModal();
      })
      .catch((error) => console.error("Error updating logo:", error));
  };

  const handleDeleteLogo = (id) => {
    axios.delete(`/api/logo-company/delete/${id}`)
      .then(() => setLogos(logos.filter((logo) => logo.id !== id)))
      .catch((error) => console.error("Error deleting logo:", error));
  };

  const openModalWithLogo = (logo) => {
    setEditingLogo({ ...logo });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingLogo(null);
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      {/* Formulaire d'ajout de logo */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">Ajouter un nouveau logo</h2>
        <input
          type="file"
          name="logo"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={handleAddLogo}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des logos */}
      <div>
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex flex-col justify-center items-center border p-10 m-8 mb-4 bg-white shadow rounded"
          >
            {logo.logoPath && (
              <img
                src={logo.logoPath}
                alt="Logo"
                className="w-1/2 h-auto rounded-lg mt-2"
              />
            )}
            <div className="flex justify-end mt-2">
              <button
                onClick={() => openModalWithLogo(logo)}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteLogo(logo.id)}
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
            <h2 className="text-lg font-bold mb-4">Modifier le logo</h2>
            <input
              type="file"
              name="logo"
              onChange={handleModalFileChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdateLogo}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
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

export default LogoAdmin;
