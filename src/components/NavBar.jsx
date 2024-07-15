import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import '../styles/NavBar.css'

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">anomia fanzines</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="aboutZine" smooth={true} duration={500}>Fanzines</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="aboutAnomia" smooth={true} duration={500}>Editorial</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="store" smooth={true} duration={500}>Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar;