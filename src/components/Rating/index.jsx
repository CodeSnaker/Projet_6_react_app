import PropTypes from "prop-types";

const Rating = ({ grade }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <i
                key={i}
                className={"fa-solid fa-star" + (i <= grade ? " active" : "")}
            ></i>
        );
    }

    return <div className='rating'>{stars}</div>;
};

Rating.propTypes = {
    grade: PropTypes.string,
};

export default Rating;
