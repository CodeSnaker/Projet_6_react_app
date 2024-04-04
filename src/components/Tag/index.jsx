import PropTypes from "prop-types";

const Tag = ({ content }) => {
    return <div className='tag'>{content}</div>;
};

Tag.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Tag;
