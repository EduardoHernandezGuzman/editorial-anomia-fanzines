import { useState } from "react";
import emailjs from "emailjs-com";
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

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          message: formData.message,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Gracias por contactar con nosotros.");

        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      });
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
              Enviar
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
