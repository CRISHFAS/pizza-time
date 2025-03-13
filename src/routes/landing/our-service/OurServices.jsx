import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import companyServices from "../../../data/company-services";
import "./our-service.css";

const OurServices = () => {
  return (
    <article className="homepage__services">
      <h2 className="pop-font">Nuestros Servicios</h2>
      <p className="pop-font section-description">
      Pizza Time ofrece servicios en todo el pais: ¡variedad de comidas y bebidas, tú eliges! Lo que nos hace especiales son nuestros equipos de profesionales con amplios conocimientos de toda la gastronomía que tenemos para ofrecer.
      </p>
      <section className="services__items flex-container flex-column">
        {companyServices.map((service) => (
          <Tilt key={service.id}>
            <section className="services__item flex-container flex-column">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                }}
                width="50"
                height="50"
                src={service.img}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />

              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
    </article>
  );
};

export default OurServices;
