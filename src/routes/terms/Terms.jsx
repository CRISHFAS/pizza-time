import { useEffect } from "react";
import termsContent from "../../data/terms";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms | Pizza Time";
  }, []);
  return (
    <main className="terms">
      <h2>Términos y condiciones</h2>
      <p>
      Bienvenido a Pizza Time. Estos Términos de servicio describen las reglas y
      pautas para usar nuestro sitio web y nuestros servicios. Al acceder o usar nuestro sitio web, usted acepta cumplir con estos términos. Léalos detenidamente antes de continuar.
      </p>
      {termsContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
    </main>
  );
};

export default Terms;
