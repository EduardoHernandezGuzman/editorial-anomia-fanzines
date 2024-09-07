import "../styles/AboutFanzines.css";
import { Link } from "react-scroll";

const AboutFanzines = () => {
  return (
    <div className="element-aboutZine">
      <div className="aboutZine-container container d-flex flex-column justify-content-center align-items-center">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              className="fanzine-imagen"
              src="src/assets/images/otras/cf003.jpg"
              alt="Fanzine"
            />
          </div>
          <div className="col-6">
            <h4>¿Qué es un fanzine?</h4>
            <p>
              Un fanzine es una publicación independiente y autogestionada,
              creada por y para entusiastas de una variedad de temas.
            </p>
            <p>
              A menudo producidos con técnicas de bajo costo, como la fotocopia,
              los fanzines permiten una expresión creativa libre y sin
              restricciones comerciales.
            </p>
            <Link
              to="aboutAnomia"
              smooth={true}
              duration={500}
              className="category-button aboutZine-button"
            >
              ¿Quienes somos?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFanzines;
