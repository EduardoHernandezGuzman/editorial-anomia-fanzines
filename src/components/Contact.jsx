import { useState } from "react";
import "../styles/Contact.css";

const AboutFanzines = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = { ...formData };
    console.log("Data to send:", dataToSend);
    // Aquí puedes realizar la lógica para enviar los datos (ej. a una API)
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <h4>Contacta con nosotros</h4>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control m-2"
                id="name"
                name="name"
                placeholder="Aleister Crowley"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control m-2"
                id="email"
                name="email"
                placeholder="aleister@crowley.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="form-control m-2"
                id="message"
                name="message"
                rows="3"
                placeholder="Me encantan vuestros fanzines"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-6">
          <img
            className="contact-image"
            src="src/assets/images/003.jpg"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFanzines;
