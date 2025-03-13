import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha"
import { Link } from "react-router-dom";
import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";
import './contact.css'

const Contact = () => {
  const [formValue, setFormValue] = useState({ fullname: '', email: '', mensage: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState('')
  const validate = validateForm("contact");
  const captchaRef = useRef();
  useEffect(() => {
    document.title = "Contact | Pizza Time";
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      setSubmit(false);
      return;
    }
    else {
      let captchaToken = captchaRef.current?.getValue();
      if (captchaToken.length === 0) {
        setCaptchaError("reCaptcha is mandatory")
        setLoading(false);
        setSubmit(false);
        return;
      }
      const verification = await verifyCaptcha(captchaToken);
      captchaRef.current?.reset();
      if (verification) {
        setLoading(false);
        setSubmit(true);
        ResetLocation()
        setFormValue({ fullname: '', email: '', mensage: "" })
        setCaptchaError("");
      }
      else {
        ResetLocation()
        setLoading(false);
        setSubmit(false);
        setFormValue({ fullname: '', email: '', mensage: "" });
        setCaptchaError("");
      }

    }
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const verifyCaptcha = async (captchaToken) => {
    try {
      const response = await fetch(import.meta.env.VITE_CAPTCHA_URL, {
        method: 'POST',
        body: JSON.stringify({
          secret: import.meta.env.VITE_CAPTCHA_SECRET,
          captchaToken
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (error) {
      console.error("Could not verify captcha!", error.message);
      return false;
    }
  }
  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      {loading ?
        <section className="contact-loader">
          <p>Casi llegamos...</p>
          <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
        </section>
        :
        submit && Object.keys(formError).length === 0 ?
          <section className="contact__success-msg">
            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo en breve! 🍕</p>
            <section>
              <Link className="active-button-style" to="/menu">Ir al menú</Link>
              <button className="passive-button-style" type="button" onClick={() => { setSubmit(false); }}>Enviar de nuevo</button>
            </section>
          </section>
          :
          <form onSubmit={handleSubmit} className="flex-container flex-column">
            <div className="webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.fullname}
                name="fullname"
                className="pop-font"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <span className="input-validation-error">{formError.fullname}</span>
            <div className="webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                className="pop-font"
                type="text"
                placeholder="Email"
              />
            </div>
            <span className="input-validation-error">{formError.email}</span>
            <div className=" webflow-style-input">
              <textarea
                onChange={handleValidation}
                value={formValue.message}
                name="message"
                className="pop-font"
                placeholder="Message"
              />
            </div>
            <span className="input-validation-error">{formError.message}</span>
            <ReCAPTCHA ref={captchaRef} sitekey={import.meta.env.VITE_CAPTCHA_KEY} theme="dark" />
            <span className="input-validation-error">{captchaError}</span>
            <button type="submit" className="active-button-style" >
            Enviar
            </button>
          </form>
      }
      <section className="contact__cover"></section>
      <section className="contact__inner pop-font">
        <h2 className="">Contacta con nosotros</h2>
        <p>
        Esperamos su respuesta y estamos ansiosos por recibir cualquier consulta que pueda tener. No dude en comunicarse con nosotros si necesita más aclaraciones o ayuda. Sus comentarios y preguntas son de suma importancia para nosotros y estamos aquí para brindarle el apoyo que necesita. ¡Esperamos tener noticias suyas pronto!
        </p>
      </section>
    </motion.main>
  );
}


export default Contact;