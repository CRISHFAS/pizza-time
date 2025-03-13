import { Link } from "react-router-dom";
import { useEffect } from "react";
//components
import ResetLocation from "../../helpers/ResetLocation";
//data
import careers from "../../data/careers";
import './careers.css'

const Careers = () => {
    useEffect(() => {
        document.title = "Careers | Pizza Time";
    }, []);
    return (
        <main className="careers">
            <h2>Carreras</h2>
            <h3>Si crees que puedes agregar valor con tu experiencia, pasión y trabajo duro, ¡quizás seas el indicado!</h3>
            <section className="careers__inner">
                {careers.map((career) =>
                    <section key={career.id} className="careers__listings">
                        <section>
                            <h4>{career.title}</h4>
                            <p>{career.description}</p>
                            <hr aria-hidden="true" />
                        </section>
                        <Link to="/contact" onClick={ResetLocation}>Aplicar</Link>
                    </section>
                )}
            </section>
        </main>
    )
}

export default Careers;