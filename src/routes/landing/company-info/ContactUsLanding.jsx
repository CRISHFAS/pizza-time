import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../../assets/images/contact-us/image-one-parallax.webp'
import './company-info.css'

const ContactUsLanding = () => {
  return (
    <section className="homepage__company-info flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 300, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img"
        loading='lazy'
      />
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 200, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img" loading='lazy'
      />
      <motion.img
        initial={{ opacity: 0, right: 50 }}
        whileInView={{ opacity: 0.8, right: 100, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img" loading='lazy'
      />
      <section className='company-info__details'>
        <div>
          <h2>000 (000) 123 4567</h2>
          <p>Contáctanos si tienes alguna pregunta</p>
        </div>
        <div>
          <h2>506 Avenue Las Peras 80202</h2>
          <p>Posadas, Misiones</p>
        </div>
        <div>
          <h2>Abierto de Lunes a Viernes</h2>
          <p>De 8:00am - 9:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;