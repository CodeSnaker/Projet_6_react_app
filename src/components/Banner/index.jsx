import PropTypes from "prop-types";
import "./styles.scss";

const Banner = ({ src, alt, text }) => {
    return (
        <div className='banner'>
            <img className='banner-background' src={src} alt={alt} />
            <div className='banner-filter'></div>
            <div className='banner-content'>{text}</div>
        </div>
    );
};

Banner.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;
