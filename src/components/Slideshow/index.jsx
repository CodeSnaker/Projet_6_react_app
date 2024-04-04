import PropTypes from "prop-types";
import rightArrow from "../../assets/carousel_arrow_right.svg";
import leftArrow from "../../assets/carousel_arrow_left.svg";
import { useState } from "react";

const Slideshow = ({ images }) => {
    let [index, setIndex] = useState(0);

    const sliderStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${images[index]})`,
    };

    const handleNextImage = () => {
        setIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    };

    const handlePrevImage = () => {
        setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    };

    // let carouselPictures = null;
    // let i = 0;
    // carouselPictures = images.map((image) => {
    //     return (
    //         <img
    //             className={"carousel-picture" + (i === 0 ? " active" : "")}
    //             src={image}
    //             alt='Image du logement'
    //             id={i}
    //             key={i++}
    //         />
    //     );
    // });

    // TODO change carousel-gallery to img
    // TODO test carousel animation
    return (
        <section className='carousel'>
            <div className='carousel-gallery' style={sliderStyle}></div>
            {images.length > 1 && (
                <>
                    <img
                        className='carousel-arrow right'
                        src={rightArrow}
                        alt='icône flèche droite'
                        onClick={handleNextImage}
                    />
                    <img
                        className='carousel-arrow left'
                        src={leftArrow}
                        alt='icône flèche gauche'
                        onClick={handlePrevImage}
                    />
                    <p className='carousel-gallery-index'>
                        {index + 1}/{images.length}
                    </p>
                </>
            )}
        </section>
    );
};

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
