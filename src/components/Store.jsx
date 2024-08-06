import { useState } from "react";
import listadoAnomia from "../data/ListadoAnomia";
import FanzineCard from "./FanzineCard";
import AgeVerification from "./AgeVerification";
import "../styles/Store.css";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const fanzinesPerPage = 10;

  const categories = ["Iconostasis", "Iconostasis Mini", "Otros"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredFanzines = selectedCategory
    ? listadoAnomia.filter((fanzine) => fanzine.categoria === selectedCategory)
    : listadoAnomia;

  const indexOfLastFanzine = currentPage * fanzinesPerPage;
  const indexOfFirstFanzine = indexOfLastFanzine - fanzinesPerPage;
  const currentFanzines = filteredFanzines.slice(
    indexOfFirstFanzine,
    indexOfLastFanzine
  );

  const totalPages = Math.ceil(filteredFanzines.length / fanzinesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAgeVerification = (isAdult) => {
    if (isAdult) {
      setIsVerified(true);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  if (!isVerified) {
    return <AgeVerification onConfirm={handleAgeVerification} />;
  }

  return (
    <div className="store-container">
      <h4>Nuestros Fanzines</h4>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="fanzine-grid">
        {currentFanzines.map((fanzine) => (
          <FanzineCard
            key={fanzine.id}
            titulo={fanzine.titulo}
            fecha={fanzine.fecha}
            imagen={fanzine.imagen}
            enlace={fanzine.enlace}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Store;
