import React from "react";
import Button from '../Button/Button'
const Header = () => {
  return (
    <div id='main'>
      <div className='name'>
        <h2> SIN EXCUSAS </h2>
        <h1>
          {" "}
          <span>EL ÚNICO LÍMITE ERES</span> <br /> TU 
        </h1>
        <p className='details'> MÁS QUE UN GIMNASIO, UNA FAMÍLIA </p>
        
        <Button title={'SUBSCRIBIRSE'} href={'http://wa.me/message/AGRVNKUMDIHAC1'} />
      </div>
    </div>
  );
};

export default Header;
