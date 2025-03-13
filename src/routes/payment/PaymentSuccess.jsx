import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tick from "../../assets/images/success-tick.png";
const PaymentSuccess = ({totalPayment, transactionId}) => {
    return(
        <article className="payment__success">
        <section className="payment__success__title">
          <h2>Tu comida está en camino!</h2>
          <p>Gracias por realizar el pedido. Actualizaremos el estado de su pedido una vez que el restaurante lo confirme. </p>
        </section>
        <img src={Tick} alt="" aria-hidden="true" />
        <section className="ayment__success__details">
          <p>Monto pagado: <span>{totalPayment} $</span></p>
          <p>Identificación de transacción: <span>{transactionId}</span></p>
          <h3>Tiempo estimado de entrega: 24mins.</h3>
        </section>
        <section className="payment__success__interaction">
          <Link className="active-button-style" to="/order" onClick={ResetLocation}>Seguimiento de mi pedido</Link>
          <Link to="/menu" onClick={ResetLocation}>Ordena algo más</Link>
        </section>
      </article>
    )
}
export default PaymentSuccess;