import { Link } from "react-router-dom";
import "./styles.scss";

function NotFound() {
    return (
        <main className='not-found-container'>
            <h1 className='not-found'>404</h1>
            <p className='not-found-prompt'>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className='not-found-link' to='/'>
                Retourner sur la page d'accueil
            </Link>
        </main>
    );
}

export default NotFound;
