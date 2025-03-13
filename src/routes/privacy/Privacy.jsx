import { useEffect } from "react";
import privacyContent from "../../data/privacy";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | Pizza Time";
  }, []);
  return (
    <main className="terms">
      <h2>Privacidad</h2>
      <p>
      Esta Política de privacidad ("Política") describe cómo Pizza Time ("Pizza Time", "nosotros", "nuestro" o "nos") recopila, usa y protege su
      información personal cuando utiliza nuestros servicios de crecimiento de Instagram. Al utilizar nuestros servicios, usted ("usted", "su" "usuario") acepta las prácticas descritas en esta Política.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
      Si tiene alguna pregunta o inquietud con respecto a nuestra Política de privacidad, contáctenos a info@pizzatime.com. Gracias por confiar su información personal a Pizza Time.
      </p>
    </main>
  );
};

export default Privacy;
