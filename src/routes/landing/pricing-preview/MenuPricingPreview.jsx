import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../../helpers/ResetLocation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import menuPricing from "../../../data/menu-pricing";
import "./pricing-preview.css";

const MenuPricingPreview = () => {
  return (
    <motion.article
      className="homepage__pricing-preview flex-container "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
      <h2 className="txt-center pop-font txt-white">Precios del Menú</h2>
      <p className="section-description">
      Cada bocado de cada plato es diferente y especial. Nunca te aburrirás y siempre podrás encontrar algo nuevo e interesante para ti. 
      Descubre todas las opciones deliciosas que tenemos para ofrecerte.
      </p>
      <section className="pricing-preview__items flex-container flex-column">
        {menuPricing.map((menu) => (
          <Tilt key={menu.id}>
            <Link
              onClick={ResetLocation}
              to="/menu"
              className="pricing-preview__item flex-container flex-row">
              <img
                className="pricing-preview__img"
                alt={menu.name}
                src={menu.img375}
                width={96}
                height={96}
                loading="lazy"
              />
              <section className="pricing-preview__prices flex-container flex-column">
                <section className="pricing-preview__prices-details flex-container flex-row txt-center">
                  <h3 className="pop-font">{menu.name}</h3>
                  <p>
                    <span>{menu.currency}</span>
                    {menu.price}
                  </p>
                </section>
                <p>{menu.description}</p>
              </section>
            </Link>
          </Tilt>
        ))}
      </section>
    </motion.article>
  );
};
export default MenuPricingPreview;
