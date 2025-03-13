import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Oh, no, tu carrito está vacío</h3>
      <p>Parece que aún no has añadido nada a tu carrito.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
      Explorar menú
      </Link>
    </React.Fragment>
  );
}

export default EmptyCart;
