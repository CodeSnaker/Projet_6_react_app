import Card from "../Card";
import { useEffect } from "react";

/* Later replace this import by a fetch request */
import locations from "../../assets/resources.json";

const Gallery = () => {
    const cards = locations.map((location) => {
        return (
            <Card
                id={location.id}
                src={location.cover}
                alt={location.title}
                title={location.title}
                key={location.id}
            />
        );
    });

    return (
        <section className='gallery' id='gallery'>
            {cards}
        </section>
    );
};

export default Gallery;
