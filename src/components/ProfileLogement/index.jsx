import Rating from "../Rating";
import Slideshow from "../Slideshow";
import Tag from "../Tag";
import CollapseList from "../CollapseList";
import PropTypes from "prop-types";

const ProfileLogement = ({ logement }) => {
    const tags = logement.tags.map((tag, index) => {
        return <Tag content={tag} key={index} />;
    });

    return (
        <article className='profile-logement'>
            <Slideshow images={logement.pictures} />
            <div className='logement-infos'>
                <div className='logement-head'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='tags'>{tags}</div>
                </div>
                <div className='host-rating'>
                    <div className='host'>
                        <img
                            className='host-picture'
                            src={logement.host.picture}
                            alt={logement.host.name}
                        />
                        <p className='host-name'>{logement.host.name}</p>
                    </div>
                    <Rating grade={logement.rating} />
                </div>
                <div className='logement-info-bars'>
                    <CollapseList
                        category='Description'
                        entries={logement.description}
                    />
                    <CollapseList
                        category='Équipements'
                        entries={logement.equipments}
                    />
                </div>
            </div>
        </article>
    );
};

ProfileLogement.propTypes = {
    logement: PropTypes.object,
};

export default ProfileLogement;
