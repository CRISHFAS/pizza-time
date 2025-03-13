import { useEffect } from "react";
import './not-found.css'
const NotFound = () => {
    useEffect(() => {
        document.title = "404 | Pizza Time";
    }, []);
    return (
        <main className="not-found">
            <img
                src="https://media2.giphy.com/media/KTrm3NshQvM1M80sSO/200w.webp?cid=ecf05e4752zryvnz616xiuea6iitfabr5vfs70z4x1u0qsyy&ep=v1_stickers_search&rid=200w.webp&ct=ts"
                alt=""
                aria-hidden="true"
            />
            <h2>Esta página no está disponible</h2>
            <p>Lo sentimos, no pudimos encontrar la página que estás buscando.
            </p>
        </main>
    )
}

export default NotFound;