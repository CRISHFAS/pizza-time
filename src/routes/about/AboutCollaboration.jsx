import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about__collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="about__collaboration__content">
        <h2 className="sub-title">Colaboración</h2>
        <h3>Únase al negocio</h3>
        <p>
        Ya sea que se trate de un servicio de catering para un evento corporativo, de un almuerzo para una reunión de negocios o simplemente de una deliciosa comida para que disfruten los empleados, estamos comprometidos a satisfacer las necesidades únicas de las empresas de nuestra zona. Nuestro menú incluye una amplia gama de opciones, desde pizzas y ensaladas clásicas hasta sándwiches y platos de pasta, por lo que puede estar seguro de que habrá algo para que todos disfruten. No olvide que Pizza Time es una pizzería ficticia.
        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Solicitar una llamada</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
