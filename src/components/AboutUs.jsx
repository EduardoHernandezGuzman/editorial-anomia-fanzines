import '../styles/AboutUs.css'

const AboutUs = () => {

    return (
        <div className="container">
        <div className="row align-items-center">
           
            <div className="col-6">
                <h4>¿Quienes somos?</h4>
                <p>Fundada en octubre de 2022 en la enigmática Isla de San Borondón, esta editorial emergió como un faro de creatividad. </p>
                <p>En un susurro del destino, lanzó su primer fanzine al mes siguiente y desde entonces ha producido mensualmente, desafiando convenciones y explorando los abismos de la imaginación.</p>
                <p>Cada fanzine es un conjuro que invita al lector a un viaje singular.</p>
            </div>
            <div className="col-6">
                <img className="us-image" src="src/assets/images/002.jpeg" alt="aboutus" />
            </div>
        </div>
    </div>
    )
}

export default AboutUs;