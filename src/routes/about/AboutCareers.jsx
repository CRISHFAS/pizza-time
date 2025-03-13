import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about__careers">
      <section className="about__careers__content">
        <h2 className="sub-title">Carreras</h2>
        <h3>Únete al equipo</h3>
        <p>
        Te apasiona la buena comida, el servicio al cliente excepcional y trabajar con un equipo divertido y dinámico? Si es así, ¡nos encantaría que te unas a nuestro equipo en Pizza Time!
        Siempre estamos buscando personas talentosas y motivadas para que se unan a nuestro equipo en una variedad de roles, desde meseros y chefs hasta personal de cocina y administración. Ya sea que recién estés comenzando en la industria de servicios de alimentos o tengas años de experiencia, ofrecemos un entorno de trabajo colaborativo y de apoyo que fomenta el crecimiento personal y profesional.
        </p>
        <Link to="/careers" onClick={ResetLocation} className="active-button-style">Únete ahora</Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
