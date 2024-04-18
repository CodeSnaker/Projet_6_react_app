import PropTypes from "prop-types";
import rightArrow from "../../assets/carousel_arrow_right.svg";
import leftArrow from "../../assets/carousel_arrow_left.svg";
import { useState, useRef, useEffect } from "react";
import "./styles.scss";

const Slideshow = ({ images }) => {
    let carouselRef = useRef(null);
    let [index, setIndex] = useState(0);
    let [galleryWidth, setGalleryWidth] = useState(null);
    let [carouselWidth, setCarouselWidth] = useState(null);

    /* Carousel Responsiveness */

    const setWidth = () => {
        const width = carouselRef.current.offsetWidth;
        setCarouselWidth(width);
        setGalleryWidth(width * images.length);
    };

    useEffect(() => {
        setWidth();
    }, [carouselRef.current]);

    useEffect(() => {
        document.body.addEventListener("resize", () => {
            setWidth();
        });

        return document.body.removeEventListener("resize", () => {
            setWidth();
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth();
        });

        return window.removeEventListener("resize", () => {
            setWidth();
        });
    }, []);

    useEffect(() => {
        window.addEventListener("fullscreenchange", () => {
            setWidth();
        });

        return window.removeEventListener("fullscreenchange", () => {
            setWidth();
        });
    }, []);

    /* Carousel responsiveness end */

    const handleNextImage = () => {
        setIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    };

    const handlePrevImage = () => {
        setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    };

    let carouselPictures = null;
    let i = 0;
    carouselPictures = images.map((image, index) => {
        return (
            <img
                className={"carousel-picture"}
                src={image}
                alt='Image du logement'
                id={i}
                key={i++}
                style={{ width: `${carouselWidth}px` }}
            />
        );
    });

    return (
        <section className='carousel' ref={carouselRef}>
            <div
                className='carousel-gallery'
                style={{
                    width: `${galleryWidth}px`,
                    transform: `translateX(-${carouselWidth * index}px)`,
                }}
            >
                {carouselPictures}
            </div>
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
