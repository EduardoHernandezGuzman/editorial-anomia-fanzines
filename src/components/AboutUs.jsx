import "../styles/AboutUs.css";
import { Link } from "react-scroll"; // Importamos Link para hacer scroll

const AboutUs = () => {
  return (
    <div className="element-aboutAnomia">
      {/* Contenedor con sombra */}
      <div className="aboutUs-container container d-flex flex-column justify-content-center align-items-center">
        <div className="row align-items-center">
          <div className="col-6">
            <h4>¿Quiénes somos?</h4>
            <p>
              Fundada en octubre de 2022 en la enigmática Isla de San Borondón,
              esta editorial emergió como un faro de creatividad.
            </p>
            <p>
              En un susurro del destino, lanzó su primer fanzine al mes
              siguiente y desde entonces ha producido mensualmente, desafiando
              convenciones y explorando los abismos de la imaginación.
            </p>
            <p>
              Cada fanzine es un conjuro que invita al lector a un viaje
              singular.
            </p>
            {/* Botón para ir a la sección "store" */}
            <Link
              to="store"
              smooth={true}
              duration={500}
              className="category-button aboutUs-button"
            >
              Ir a la tienda
            </Link>
          </div>
          <div className="col-6">
            <img
              className="us-image"
              src="src/assets/images/otras/imp001.jpg"
              alt="aboutus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
