import { useEffect } from "react";
import refunds from "../../data/refunds";

const Refunds = () => {
  useEffect(() => {
    document.title = "Refunds | Pizza Time";
  }, []);
  return (
    <main className="terms">
      <h2>Reembolsos</h2>
      <p>
      Esta Política de reembolsos ("Política") describe los términos y condiciones para solicitar un reembolso por los servicios de crecimiento de Instagram proporcionados por Pizza Time ("Pizaa Time", "nosotros", "nuestro" o "nos"). Al utilizar nuestros servicios, usted ("usted", "su" o "usuario") acepta cumplir con esta Política con respecto a las solicitudes de reembolso.
      </p>
      {refunds.map((content) => (
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

export default Refunds;
