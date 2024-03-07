import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const LogoAdmin = () => {
  // État pour les logos d'entreprise
  const [logos, setLogos] = useState([]);
  const [newLogo, setNewLogo] = useState({ logo: null });
  const [editingLogo, setEditingLogo] = useState(null);

  // État pour les certifications
  const [certifications, setCertifications] = useState([]);
  const [newCertification, setNewCertification] = useState({ logo: null });
  const [editingCertification, setEditingCertification] = useState(null);

  // Contrôle du modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'logo' ou 'certification'

  useEffect(() => {
    fetchLogos();
    fetchCertifications();
  }, []);

  function fetchLogos() {
    axios
      .get("/api/logo-company/list")
      .then((response) => setLogos(response.data))
      .catch((error) => console.error("Error fetching logos:", error));
  }

  function fetchCertifications() {
    axios
      .get("/api/certification/list")
      .then((response) => setCertifications(response.data))
      .catch((error) => console.error("Error fetching certifications:", error));
  }

  const handleFileChange = (e, type) => {
    if (type === "logo") {
      setNewLogo({ ...newLogo, logo: e.target.files[0] });
    } else {
      setNewCertification({ ...newCertification, logo: e.target.files[0] });
    }
  };

  const handleModalFileChange = (e) => {
    if (modalType === "logo") {
      setEditingLogo({ ...editingLogo, logo: e.target.files[0] });
    } else {
      setEditingCertification({
        ...editingCertification,
        logo: e.target.files[0],
      });
    }
  };

  const handleAdd = (type) => {
    const formData = new FormData();
    const data = type === "logo" ? newLogo : newCertification;
    formData.append("logo", data.logo);

    const endpoint =
      type === "logo" ? "/api/logo-company/add" : "/api/certification/add";

    axios
      .post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        if (type === "logo") {
          fetchLogos();
          setNewLogo({ logo: null });
        } else {
          fetchCertifications();
          setNewCertification({ logo: null });
        }
      })
      .catch((error) => console.error(`Error adding ${type}:`, error));
  };

  const handleUpdate = () => {
    const formData = new FormData();
    const data = modalType === "logo" ? editingLogo : editingCertification;
    formData.append("logo", data.logo);

    const endpoint =
      modalType === "logo"
        ? `/api/logo-company/update/${editingLogo.id}`
        : `/api/certification/update/${editingCertification.id}`;

    axios
      .post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        if (modalType === "logo") {
          fetchLogos();
        } else {
          fetchCertifications();
        }
        closeModal();
      })
      .catch((error) => console.error(`Error updating ${modalType}:`, error));
  };

  const handleDelete = (id, type) => {
    const endpoint =
      type === "logo"
        ? `/api/logo-company/delete/${id}`
        : `/api/certification/delete/${id}`;

    axios
      .delete(endpoint)
      .then(() => {
        if (type === "logo") {
          setLogos(logos.filter((logo) => logo.id !== id));
        } else {
          setCertifications(
            certifications.filter((certification) => certification.id !== id)
          );
        }
      })
      .catch((error) => console.error(`Error deleting ${type}:`, error));
  };

  const openModalWithItem = (item, type) => {
    if (type === "logo") {
      setEditingLogo({ ...item });
    } else {
      setEditingCertification({ ...item });
    }
    setModalType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingLogo(null);
    setEditingCertification(null);
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      {/* Formulaire d'ajout de logo d'entreprise */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">
          Ajouter un nouveau logo d'entreprise
        </h2>
        <input
          type="file"
          name="logo"
          onChange={(e) => handleFileChange(e, "logo")}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={() => handleAdd("logo")}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* Formulaire d'ajout de certification */}
      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">
          Ajouter un nouveau logo de certification
        </h2>
        <input
          type="file"
          name="certification"
          onChange={(e) => handleFileChange(e, "certification")}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={() => handleAdd("certification")}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des logos d'entreprise */}
      <h1 className="p-10 m-8 text-xl font-semibold  ">
        Logo ils me font confiances
      </h1>
      <div className="flex">
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
                onClick={() => openModalWithItem(logo, "logo")}
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(logo.id, "logo")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Liste des certifications */}
      <h1 className="p-10 m-8 text-xl font-semibold  ">Certifications</h1>

      <div className="flex">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className="flex flex-col justify-center items-center border p-10 m-8 mb-4 bg-white shadow rounded"
          >
            {certification.Logo && (
              <img
                src={certification.Logo}
                alt="Certification"
                className="w-1/2 h-auto rounded-lg mt-2"
              />
            )}
            <div className="flex justify-end mt-2">
              <button
                onClick={() =>
                  openModalWithItem(certification, "certification")
                }
                className="bg-coloryellow text-white font-bold py-2 px-4 rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(certification.id, "certification")}
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
            <h2 className="text-lg font-bold mb-4">
              Modifier le{" "}
              {modalType === "logo" ? "logo" : "logo de certification"}
            </h2>
            <input
              type="file"
              name={modalType}
              onChange={handleModalFileChange}
              className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdate}
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
