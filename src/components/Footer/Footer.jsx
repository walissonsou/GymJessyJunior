import React from "react";
import logo1 from "../../data/images/logo1.png";
import kyrios from "../../data/images/kyrios.png";
import conemby from "../../data/images/conemby.png";
import { Link } from "react-scroll";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footer" id="footer" style={{ color: "white" }}>
      <div className="footer_box">
        <div className="footer_box_social">
          <Link to="main" className="logo">
            <a href="#">
              {" "}
              <img src={logo1} alt="/" />{" "}
            </a>
          </Link>
          <p>
            {" "}
            Determinación y enfoque, este es el resultado de una mente sana. Pon
            una pizca de movimiento en tu vida y haz ejercicio. La fuerza no
            siempre gana, se necesita resiliencia. Coloca con cuidado la
            arandela sobre la barra porque hará tus sueños realidad.
          </p>
          <div className="footer_social">
            <a
              href="https://www.facebook.com/GimnasioYessiJunior/"
              target="_blank"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.instagram.com/gym_jessyjunior/"
              target="_blank"
            >
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className="footer_box_discover">
          <h3> Apoyo y acuerdo </h3>
          <Link to="main" className="logo">
            <a href="#">
              {" "}
              <img
                style={{ width: 100, height: 100 }}
                src={kyrios}
                alt="/"
              />{" "}
            </a>
          </Link>
          <Link to="main" className="logo">
            <a href="#">
              {" "}
              <img
                style={{ width: 100, height: 100 }}
                src={conemby}
                alt="/"
              />{" "}
            </a>
          </Link>
        </div>
        <div className="footer_box_help">
          <h3> Ligue 0994 345862 </h3>

          <div className="subscribe">
            <h3> Ubicacion </h3> Calle Santa Rosa y 10 de agosto, Nemby,
            Paraguay
          </div>
         
          <div className="subscribe_box_info">
            <p>Horarios: Lunes - Viernes (7:30hs a 12hs) (14hs a 21hs)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
