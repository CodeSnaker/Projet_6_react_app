import LogoFooter from "../../assets/logo_kasa_footer.png";
import "./styles.scss";

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt='Logo Kasa en blanc' />
            <div className='copyright'>© 2020 Kasa. All rights reserved</div>
        </footer>
    );
};

export default Footer;
