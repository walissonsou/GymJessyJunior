import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKGROUND_STYLE = {
  position: 'absolute',
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "10000000",

};
const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  color: "black",
};

const STYLE_BUTTON = {
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "",
};

export default function Modal({ isOpen, children, setOpenModal }) {
  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <button onClick={setOpenModal} className="closed-button">
            {" "}
            X{" "}
          </button>{" "}
          <div style={STYLE_BUTTON}> </div>
          <div>
            <form className="form">
              <label> NOMBRE *</label>
              <input type="text" required />
              <label> TELÉFONO * </label>
              <input type="text" placeholder="123-45-678" required/>
              <label> SEXO  </label>
              <select id="estado" name="estado">
                <option value="SP">MAS</option>
                <option value="RJ">FEM</option>
              </select>
              <label> SERVICIO DESEADO * </label>
              <select id="estado" name="estado" required>
                <option value="FUNCIONAL">FUNCIONAL</option>
                <option value="FUNCIONAL">FUNCIONAL</option>{" "}
                <option value="FUNCIONAL">FUNCIONAL</option>{" "}
                <option value="FUNCIONAL">FUNCIONAL</option>{" "}
                <option value="FUNCIONAL">FUNCIONAL</option>
              </select>
              <label> FECHA DE NACIMIENTO * </label>
              <input type="date" required />
              <label> OBSERVACIÓN </label>
              <input></input>
              <button type="submit" className="header-bttn" onClick={() => showToastMessage()} >
                {" "}
                ENVIAR{" "}
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
        ;
      </div>
    );
  }
  return null;
}
