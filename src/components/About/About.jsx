import React from "react";
import aboutimage from "../../data/images/about.png";
const About = () => {
  return (
    <div id="about">
     
      <div className="about-text">
        <h1> CONOCENOS </h1>
        <p>
          {" "}
          Determinación y enfoque, este es el resultado de una mente sana. Pon una pizca de movimiento en tu vida y haz ejercicio. La fuerza no siempre gana, se necesita resiliencia. Coloca con cuidado la arandela sobre la barra porque hará tus sueños realidad.{" "}
        </p>
        <div className="pr-btns">
          <a href="#" className="pr-btn">
            CONOCENOS
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
