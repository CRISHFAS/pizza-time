import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <article className="about__customers">
      <div className="about__customers_gallery">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="about__customers__content">
        <h2 className="sub-title">Clientes felices</h2>
        <h3>Más de 16000 comentarios positivos</h3>
        <p>
        Creemos que nuestro éxito se debe a nuestro compromiso de ofrecer comida de alta calidad y un servicio excepcional. Nuestro menú incluye una amplia variedad de deliciosas pizzas, ensaladas, sándwiches, platos de pasta y más, todos elaborados con ingredientes frescos de origen local. Nos aseguramos de que cada plato se prepare con la máxima atención al detalle, para que cada bocado sea tan delicioso como el anterior. 
        También entendemos que la buena comida es solo una parte de la ecuación. Es por eso que ponemos un gran énfasis en brindar un servicio excepcional a cada cliente que cruza nuestras puertas. Nuestro equipo de personal dedicado se compromete a brindar un ambiente cálido y acogedor que haga que cada huésped se sienta como si fuera parte de la familia.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
}


export default AboutCustomers;