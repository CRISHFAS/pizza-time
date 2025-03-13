import React from "react";
import { useState } from "react";
import validateForm from "../../../components/validateForm";
import './newsletter.css'
const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validate = validateForm("newsletter");
  return (

    <section className="homepage__newsletter">
        <h3 className="newsletter__title">
        Suscríbete a nuestro boletín para recibir actualizaciones sobre el menú y disfrutar de increíbles regalos!
        </h3>
      {submit && Object.keys(formError).length === 0 ?
        <p className="newsletter__success">Te has suscrito con éxito a nuestra newsletter!</p> :
          <form onSubmit={handleSubmit} className="newsletter__form">
            <div className="webflow-style-input">
              <input name="email" onChange={handleValidation} value={formValue.email} placeholder="What's your email?" />
            </div>
            <span className="newsletter__error">{formError.email}</span>
            <button type="submit" className="active-button-style">
            Regístrate
            </button>
          </form>
      }
    </section>
  );
}

export default Newsletter;
