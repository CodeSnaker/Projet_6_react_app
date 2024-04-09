import Card from "../Card";
import "./styles.scss";

/* Later replace this import by a fetch request */
import locations from "../../assets/resources.json";

const Gallery = () => {
    const cards = locations.map((location) => {
        return (
            <Card
                id={location.id}
                src={location.cover}
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
