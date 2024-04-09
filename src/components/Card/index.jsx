import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

const Card = ({ id, src, alt, title }) => {
    return (
        <Link to={"Logement/" + id} className='thumbnail'>
            <img src={src} alt={alt ? alt : ""} />
            <div className='thumbnail-title'>{title}</div>
        </Link>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Card;
