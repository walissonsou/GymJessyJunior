import React from "react";
import Button from '../Button/Button'
import aboutimage from "../../data/images/about.png";
const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1> CONOCENOS </h1>
        <p>
          {" "}
          El Gimnasio Yessi Junior ha esta en la ciudad de Ñemby por más de 15
            años.Por el mismo han pasado grandes figuras televisivas como
            Larissa Riquelme, Dani Da rosa, Maricel Thomen, Luli Pereira, entre
            muchos otros. Pero por sobre grandes figuras deportivas: Nelson
            Cuevas, Roque Santa Cruz, Justo Villar, Victor Ferreira, Ever
            Almeida, Hugo Luzardi,Ramón Cardozo, Denis Caniza entre varios
            atletas.{" "}{" "}
        </p>
        
        {/* <Button title={'CONOCENOS'} href={'#'} /> */}
      </div>
    </div>
  );
};

export default About;
