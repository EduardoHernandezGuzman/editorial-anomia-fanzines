import "../styles/Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="element-home">
      <div className="container home-container d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h4>Bienvenidos a la web de Anomia Fanzines</h4>
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <p className="home-description">
                <strong>Anomia</strong> es un concepto utilizado en sociología y
                psicología que describe una condición o estado de desorden y
                confusión social o personal, generalmente causado por la ruptura
                de normas y valores establecidos. El término fue popularizado
                por el sociólogo francés Émile Durkheim.
              </p>
              <Link
                to="aboutZine"
                smooth={true}
                duration={500}
                className="category-button home-button"
              >
                ¿Qué es un fanzine?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
