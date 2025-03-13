import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './welcome.css'
import img375 from '../../../assets/images/section-one/section-one-375.webp'
import img700 from '../../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../../assets/images/welcome-section/pizza-one-parallax.png'
import PizzaTwo from '../../../assets/images/welcome-section/pizza-two-parallax.png'
import { motion } from "framer-motion";

const imageParentVariant = {
  initial: {},
  whileInView: {}
}


const leftImageVariant = {
  initial: { opacity: 0, left: -100 },
  whileInView: {
    opacity: 0.7, left: 0,
    transition: { duration: 4 }
  },

}

const rightImageVariant = {
  initial: { opacity: 0, right: -100 },
  whileInView: {
    opacity: 0.7, right: 0,
    transition: { duration: 4, }
  },

}

const WelcomeSection = () => {
  return (
    <article className="homepage__welcome">
      <motion.section className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>
        <motion.img
          loading='lazy'
          src={PizzaOne} alt="" 
          aria-hidden="true"
          variants={leftImageVariant}
          width={500}
          height={499}
        />
        <motion.img
          loading='lazy'
          src={PizzaTwo} alt=""
           aria-hidden="true"
          variants={rightImageVariant}
          width={500}
          height={499}
        />
        <h2 className="txt-white">
        Bienvenido al <span>Restaurant</span> Pizza Time
        </h2>
        <p>
        Fundada en 2022, ¡llevamos la pizza porción por porción al siguiente nivel! Nuestra marca única y estar en la industria de la pizza son la fórmula de nuestro éxito. Entendemos lo que la gente quiere y convertimos los deseos en experiencias únicas de sabor. La frescura, la originalidad y la calidad son solo una pequeña parte de nuestras prioridades. Costos asequibles, ubicación prácticamente en cualquier lugar al que vayas, un increíble sistema operativo en línea para pedir comida con un solo clic. Opciones de pedidos anticipados fáciles de navegar y opciones increíbles para fiestas corporativas. En Pizza Time nos preocupamos por ti porque eres quien nos hace especiales.!
        </p>
      </motion.section>
      <LazyLoadImage
        className="welcome__cover"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;