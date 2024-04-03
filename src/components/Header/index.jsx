import { Link } from "react-router-dom";
import Logo from "../../assets/logo_kasa.png";
import LogoMobile from "../../assets/logo_kasa_mobile.png";

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img src={Logo} className='logo' alt='Logo Kasa' />
            </Link>
            <nav>
                <Link to='/' className='nav-link'>
                    Accueil
                </Link>
                <Link to='/A-propos' className='nav-link'>
                    À propos
                </Link>
            </nav>
        </header>
    );
};

export default Header;
