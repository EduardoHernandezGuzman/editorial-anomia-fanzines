import fanzines from "../data/IconostasisData";
import FanzineCard from "./FanzineCard";
import "../styles/Store.css";

const Store = () => {
  return (
    <div className="store-container">
      <h4>Nuestros Fanzines</h4>
      <div className="fanzine-grid">
        {fanzines.map((fanzine) => (
          <FanzineCard
            key={fanzine.id}
            title={fanzine.titulo}
            description={fanzine.fecha}
            image={fanzine.image}
            link={fanzine.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
