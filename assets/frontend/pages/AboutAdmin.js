import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../components/nav/HeaderAdmin";

const AboutAdmin = () => {
  const [aboutData, setAboutData] = useState({
    subtitle: "",
    bloc1: "",
    bloc2: "",
    bloc3: "",
    bloc4: "",
  });

  useEffect(() => {
    axios
      .get("/api/about/")
      .then((response) => {
        if (response.data) {
          setAboutData(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  const handleUpdateAbout = () => {
    const formData = new FormData();
    Object.keys(aboutData).forEach((key) => {
      formData.append(key, aboutData[key]);
    });

    axios
      .post(`/api/about/update/1`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto">
      <HeaderAdmin />

      <div className="mb-8 p-10 m-8">
        <h2 className="text-xl font-semibold mb-3">
          Modifier la page faisons connaissance
        </h2>
        <textarea
          name="subtitle"
          placeholder="Sous-titre"
          value={aboutData.subtitle}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="bloc1"
          placeholder="Bloc 1"
          value={aboutData.bloc1}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="bloc2"
          placeholder="Bloc 2"
          value={aboutData.bloc2}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="bloc3"
          placeholder="Bloc 3"
          value={aboutData.bloc3}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <textarea
          name="bloc4"
          placeholder="Bloc 4"
          value={aboutData.bloc4}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-3 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        />
        <button
          onClick={handleUpdateAbout}
          className="bg-coloryellow text-white font-bold py-2 px-4 rounded"
        >
          Sauvegarder les modifications
        </button>
      </div>
    </div>
  );
};

export default AboutAdmin;
