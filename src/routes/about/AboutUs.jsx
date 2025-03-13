import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about__company">
      <section className="about__company__content">
        <h2>Sobre nosotros</h2>
        <h3 className='sub-title'>Más que comida deliciosa</h3>
        <p>
        Fundada en 2022, ¡llevamos la pizza porción a porción al siguiente nivel! Nuestra marca única y estar en la industria de la pizza son la fórmula de nuestro éxito. Entendemos lo que la gente quiere y convertimos los deseos en experiencias únicas de sabor. La frescura, la originalidad y la calidad son solo una pequeña parte de nuestras prioridades. Costos asequibles, ubicación prácticamente en cualquier lugar al que vayas, un increíble sistema operativo en línea para pedir comida con un solo clic. Opciones de pedidos anticipados fáciles de navegar y opciones increíbles para fiestas corporativas. En Pizza Time nos preocupamos por ti porque eres quien nos hace especiales. El proyecto Pizza Time fue creado con amor por la pizza por Ekaterine Mitagvaria.
        </p>
        <div className="about__company__glass"></div>
      </section>
      <section className="about__company__gallery">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;