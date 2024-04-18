import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../assets/logo_kasa.png";
import LogoMobile from "../../assets/logo_kasa_mobile.png";
import "./styles.scss";

const Header = () => {
    let location = useLocation();

    useEffect(() => {
        const accueilLink = document.getElementById("link-accueil");
        const aproposLink = document.getElementById("link-a-propos");

        if (location.pathname === "/") {
            accueilLink.classList.add("active");
            aproposLink.classList.remove("active");
        } else if (location.pathname === "/A-propos") {
            accueilLink.classList.remove("active");
            aproposLink.classList.add("active");
        } else {
            accueilLink.classList.remove("active");
            aproposLink.classList.remove("active");
        }
    }, [location]);

    return (
        <header>
            <Link to='/'>
                <img
                    src={Logo}
                    srcSet={LogoMobile + " 146w, " + Logo + " 211w"}
                    sizes='(max-width: 540px) 146px, 211px'
                    className='logo'
                    alt='Logo Kasa'
                />
            </Link>
            <nav>
                <Link to='/' className='nav-link' id='link-accueil'>
                    Accueil
                </Link>
                <Link to='/A-propos' className='nav-link' id='link-a-propos'>
                    À propos
                </Link>
            </nav>
        </header>
    );
};

export default Header;
