import { useState, React } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/modal";

const Header = () => {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div id="main">
      <div className="name">
        <h2> SIN EXCUSAS </h2>
        <h1>
          {" "}
          <span>EL ÚNICO LÍMITE ERES</span> <br /> TU
        </h1>
        <p className="details"> MÁS QUE UN GIMNASIO, UNA FAMÍLIA </p>
        <Button title={"PRE REGISTRO"} onClick={() => setOpenModal(!openModal)} />
      </div>
      <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
         

      </Modal>
    </div>
  );
};

export default Header;
