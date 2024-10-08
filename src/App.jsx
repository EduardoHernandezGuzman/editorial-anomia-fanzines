import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Home from "./components/Home";
import AboutFanzines from "./components/AboutFanzines";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Store from "./components/Store";

const App = () => {
  return (
    <div>
      <NavBar />

      <Element name="home" className="section element-home">
        <Home />
      </Element>

      <Element name="aboutZine" className="section element-aboutZine">
        <AboutFanzines />
      </Element>

      <Element name="aboutAnomia" className="section element-aboutAnomia">
        <AboutUs />
      </Element>

      <Element name="store" className="section element-store">
        <Store />
      </Element>

      <Element name="contact" className="section element-contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
