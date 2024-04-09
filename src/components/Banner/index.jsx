import PropTypes from "prop-types";
import "./styles.scss";

const Banner = ({ src, alt, text }) => {
    return (
        <div className='banner'>
            {src && <img className='banner-background' src={src} alt={alt} />}
            <div className='banner-filter'></div>
            {text && <h1 className='banner-content'>{text}</h1>}
        </div>
    );
};

Banner.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;
