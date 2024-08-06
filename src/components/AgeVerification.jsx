import "../styles/AgeVerification.css";

const AgeVerification = ({ onConfirm }) => {
  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <h2>Confirmación de Edad</h2>
        <p>
          Debes ser mayor de edad para ver este contenido. ¿Eres mayor de 18
          años?
        </p>
        <button onClick={() => onConfirm(true)}>Sí</button>
        <button onClick={() => onConfirm(false)}>No</button>
      </div>
    </div>
  );
};

export default AgeVerification;
