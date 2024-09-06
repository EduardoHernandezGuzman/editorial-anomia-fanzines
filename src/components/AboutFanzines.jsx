import "../styles/AboutFanzines.css";

const AboutFanzines = () => {
  return (
    <div className="container">
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
            Un fanzine es una publicación independiente y autogestionada, creada
            por y para entusiastas de una variedad de temas.
          </p>
          <p>
            A menudo producidos con técnicas de bajo costo, como la fotocopia,
            los fanzines permiten una expresión creativa libre y sin
            restricciones comerciales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFanzines;
