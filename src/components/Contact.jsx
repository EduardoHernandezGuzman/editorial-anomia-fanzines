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
          <div className="contact-form">
            <span className="heading">Contacta con nosotros</span>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Aleister Crowley"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="aleister@crowley.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Me encantan vuestros fanzines"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>

        <div className="col-6">
          <img
            className="contact-image"
            src="src/assets/images/otras/ave001.jpg"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFanzines;
