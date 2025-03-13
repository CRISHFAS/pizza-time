import React from "react";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ currentUser, totalPayment, productsQuantity, taxes }) => {
  const [formValue, setFormValue] = useState({
    fullname: currentUser.fullname, email: currentUser.email, dirección: currentUser.address, number: currentUser.number, chooseDelivery: "", promoCode: ''
  });
  const [submit, setSubmit] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const togglePromocode = () => {
    setPromoCode(!promoCode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
    ResetLocation();
  }
  useEffect(() => {
    if (submit && Object.keys(formError).length === 0) {
      return navigate('/payment');
    }
  }, [submit, formError, navigate]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {}
    if (!value.chooseDelivery) {
      errors.chooseDelivery = "Por favor seleccione un tipo de entrega"
    }
    if (!value.promoCode && promoCode) {
      errors.promoCode = "Por favor indique su código promocional"
    }
    if (value.promoCode && value.promoCode.length < 5 && promoCode) {
      errors.promoCode = "Código promocional no válido!"
    }
    if (currentUser.address === null && value.chooseDelivery === "delivery") {
      errors.address = "Por favor agregue su dirección"
    }
    if (currentUser.number === null) {
      errors.number = "Por favor agregue su número"
    }


    return errors;
  }

  return (
    <section className="checkout__form">
      <h3>Información personal <span><Link onClick={ResetLocation} to="/profile">Editar perfil</Link></span></h3>
      <section>
        <p>{currentUser.fullname}</p>
        <p>{currentUser.email}</p>
        {currentUser.address !== null ?
          <p>Dirección: {currentUser.address}</p> :
          <p className="checkout__form__address">Aún no has añadido la dirección<span><Link onClick={ResetLocation} to="/profile">Agregar dirección</Link></span></p>}
        <span className="checkout__form__error">{formError.address}</span>
        {currentUser.number !== null ?
          <p>Número de Contacto: {currentUser.number}</p> :
          <p className="checkout__form__number">Por favor agregue su número de contacto<span><Link onClick={ResetLocation} to="/profile">Añadir número</Link></span></p>}
        <span className="checkout__form__error">{formError.number}</span>
      </section>
      <form onSubmit={handleSubmit}>
        <h3>Detalles de entrega</h3>
        <label htmlFor="takeaway" className="checkout__form__takeaway" name="chooseDelivery">
          <RiShoppingBagLine />
          Llevar
          <input
            type="radio"
            placeholder="Address"
            value="takeaway"
            name="chooseDelivery"
            onChange={handleValidation}
          />
        </label>
        <label htmlFor="delivery" className="checkout__form__delivery" name="chooseDelivery">
          <FaShippingFast />
          Entrega
          <input
            type="radio"
            placeholder="Address"
            value="delivery"
            name="chooseDelivery"
            onChange={handleValidation}
          />
        </label>
        <span className="checkout__form__error">{formError.chooseDelivery}</span>
        <section className="checkout__form-promo-code">
          {promoCode === false ? <p onClick={togglePromocode}>Tengo un código promocional!</p> : (
            <React.Fragment>
              <p onClick={togglePromocode}>Sin código de promoción</p>
              <input
                name="promoCode"
                className=" pop-font"
                type="text"
                placeholder="Enter the 5-digit code"
                onChange={handleValidation}
                value={formValue.promoCode}
              />
            </React.Fragment>
          )}
          <span className="checkout__form__error">{formError.promoCode}</span>
        </section>
        {productsQuantity > 0 &&
          <section className="checkout__totals">
            <section className="checkout__totals__content">
              <h4>Impuesto 10%:</h4>
              <p>$ {taxes}</p>
            </section>
            <section className="checkout__totals__content">
              <h4>Cantidad:</h4>
              <p> {productsQuantity}</p>
            </section>
            <section className="checkout__totals__content" >
              <h4>Total:</h4>
              <p>$ {totalPayment}</p>
            </section>
          </section>}
        <button type="submit" className="active-button-style">
        Proceder al pago
        </button>
      </form>
    </section>
  );
}


export default CheckoutForm;
