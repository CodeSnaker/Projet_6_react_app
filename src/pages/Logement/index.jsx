/* Replace this by API request later */
import data from "../../assets/resources.json";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import CollapseList from "../../components/CollapseList";
import NotFound from "../NotFound";

const Logement = () => {
    const { logementId } = useParams();
    let logement = data.find((e) => e.id === logementId);
    if (!logement) return <NotFound />;

    const tags = logement.tags.map((tag, index) => {
        return <Tag content={tag} key={index} />;
    });

    return (
        <main className='profile-logement'>
            <Slideshow images={logement.pictures} />
            <div className='logement-infos'>
                <div className='logement-head'>
                    <div className='logement-head-text'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className='tags'>{tags}</div>
                </div>
                <div className='host-and-rating'>
                    <div className='host'>
                        <p className='host-name'>{logement.host.name}</p>
                        <img
                            className='host-picture'
                            src={logement.host.picture}
                            alt={logement.host.name}
                        />
                    </div>
                    <Rating grade={logement.rating} />
                </div>
            </div>
            <div className='logement-bars'>
                <CollapseList
                    category='Description'
                    entries={logement.description}
                />
                <CollapseList
                    category='Équipements'
                    entries={logement.equipments}
                />
            </div>
        </main>
    );
};

export default Logement;
