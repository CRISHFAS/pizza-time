import React, { useEffect, useState } from "react";
import validateForm from "../../components/validateForm";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import ResetLocation from "../../helpers/ResetLocation";
import "./register.css";
const Register = ({ activateLoginModal }) => {
  const [formValue, setFormValue] = useState({
    id: "",
    email: "",
    password: "",
    repeatPassword: "",
    fullname: "",
    address: "",
    number: "",
  });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [registrationFail, setRegistrationFail] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_USERS_URL);
      const body = await response.json();

      return body.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const createUser = async (user) => {
    const users = await getUsers();
    const repetitiveEmail = users.some((u) => u.email === user.email);
    const id = uuidv4();
    user.id = id;
    try {
      if (repetitiveEmail) {
        return false;
      } else {
        const response = await fetch(import.meta.env.VITE_USERS_URL, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status === 200) {
          return true;
        } else {
          console.log("Error al crear usuario");
          return false;
        }
      }
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue));
    window.scrollTo(0, 0);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    } else {
      let currForm = { ...formValue };
      if (currForm.repeatPassword.length > 0) {
        delete currForm.repeatPassword;
      }
      if (currForm.address !== undefined) {
        delete currForm.address;
      }
      if (currForm.number !== undefined) {
        delete currForm.number;
      }
      currForm.email = currForm.email.toLowerCase();
      const accCreation = await createUser(currForm);
      if (accCreation === false) {
        setLoading(false);
        setSubmit(false);
        setRegistrationFail(true);
        setFormValue({
          id: "",
          email: "",
          password: "",
          repeatPassword: "",
          fullname: "",
          address: "",
          number: "",
        });
      } else {
        setLoading(false);
        setRegistrationFail(false);
        setSubmit(true);
        setFormValue({
          id: "",
          email: "",
          password: "",
          repeatPassword: "",
          fullname: "",
          address: "",
          number: "",
        });
      }
    }
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("registration");

  useEffect(() => {
    document.title = "Registration | Pizza Time";
  }, []);
  return (
    <motion.main
      className="register"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <h2>
        {submit && Object.keys(formError).length === 0
          ? "Exito!"
          : "Registro"}
      </h2>
      {loading ? (
        <div
          role="status"
          className="loader">
          <p>Casi llegamos...</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="register__success">
          <p>Ya puedes iniciar sesión y realizar un pedido!</p>
          <button
            className="passive-button-style txt-white"
            onClick={() => {
              ResetLocation();
              activateLoginModal();
              setSubmit(false);
            }}>
            Acceso
          </button>
        </section>
      ) : (
        <form
          className="register__form"
          onSubmit={handleSubmit}>
          {registrationFail && (
            <p className="register__error">
            Parece que este correo electrónico ya ha sido registrado!
            </p>
          )}
          <section className="register__form__field">
            <input
              type="text"
              placeholder="Nombre completo"
              name="fullname"
              value={formValue.fullname}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.fullname}</span>
          </section>
          <section className="register__form__field">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formValue.email}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.email}</span>
          </section>
          <section className="register__form__field">
            <input
              type="password"
              placeholder="Nueva contraseña"
              name="password"
              value={formValue.password}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.password}</span>
            <input
              type="password"
              placeholder="Repetir contraseña"
              name="repeatPassword"
              value={formValue.repeatPassword}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.repeatPassword}</span>
          </section>
          <section className="register__form__field-b">
            <input
              type="text"
              placeholder="Dirección (opcional)"
              name="address"
              value={formValue.address}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.address}</span>
          </section>
          <section className="register__form__field-b">
            <input
              type="text"
              placeholder="Número (optional)"
              name="number"
              value={formValue.number}
              onChange={handleValidation}
            />
            <span className="register__error">{formError.number}</span>
          </section>
          <p className="terms-warning register__form__terms">
          Al hacer clic en Registrarse, acepta nuestros Términos, Política de datos y Política de cookies. Puede recibir una notificación por correo electrónico de nuestra parte y puede cancelar su suscripción en cualquier momento.
          </p>
          <button
            className="register__submit"
            type="submit">
            Inscribirse
          </button>
        </form>
      )}
    </motion.main>
  );
};

export default Register;
