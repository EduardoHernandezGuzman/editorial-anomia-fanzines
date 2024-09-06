import "../styles/FanzineCard.css";

const FanzineCard = ({ titulo, fecha, imagen, enlace }) => {
  return (
    <div className="fanzine-card">
      <img src={imagen} alt={titulo} className="fanzine-image" />
      <h5>{titulo}</h5>
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        id="buy"
      >
        Comprar
      </a>
    </div>
  );
};

export default FanzineCard;
