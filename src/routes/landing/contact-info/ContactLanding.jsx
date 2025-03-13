import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import './contact-info.css';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Coordenadas de Posadas, Misiones, Argentina
const position = [-27.2787, -55.9480];

const ContactLanding = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHideMap(false);
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <motion.section aria-labelledby="contact-title" className="homepage__contact flex-container flex-column" ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {!hideMap && <section
        className="map" aria-label="Company Location">
        <MapContainer
          id="map"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
          loading="lazy"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </MapContainer>
      </section>}
      <section className="contact__info">
        <h3 id="contact-title">Contacta con nosotros</h3>
        <p>Tienes alguna pregunta, sugerencia o simplemente quieres saludarnos? Nos encantaría saber de ti!</p>
        <div>
          <h4>Atención al cliente:</h4>
          <p>Nuestro dedicado equipo de atención al cliente está listo para ayudarlo con cualquier consulta que pueda tener.</p>
          <ul>
            <li> Email: soporte@pizzatime.com</li>
            <li> Teléfono: 000 (000) 123 4567</li>
            <li> Horario de atención: De Lunes a Viernes, <time dateTime="08:00">8:00am</time> - <time dateTime="21:00">9:00pm</time>(AR)</li>
          </ul>
        </div>
        <div>
          <h4>Consultas generales:</h4>
          <p>Si tiene preguntas generales sobre nuestra empresa, asociaciones o cualquier otra cosa, no dude en ponerse en contacto con nosotros.</p>
          <ul>
            <li>Email: info@pizzatime.com</li>
          </ul>
        </div>
        <div>
          <h4>Comentarios y sugerencias:</h4>
          <p>Valoramos sus comentarios y siempre nos esforzamos por mejorar. Si tiene alguna sugerencia, comentario o idea sobre cómo podemos mejorar nuestra oferta, háganoslo saber.</p>
          <ul>
            <li> Email: sugerencias@pizzatime.com</li>
          </ul>
        </div>
      </section>
    </motion.section>
  );
}

export default ContactLanding;
