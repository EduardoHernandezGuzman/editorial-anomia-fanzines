import "../styles/FanzineCard.css";

const FanzineCard = ({ titulo, fecha, image, link }) => {
  return (
    <div className="fanzine-card">
      <img src={image} alt={titulo} className="fanzine-image" />
      <h5>{titulo}</h5>
      <p>{fecha}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Comprar
      </a>
    </div>
  );
};

export default FanzineCard;
