/* Replace this by API request later */
import data from "../../assets/resources.json";
import { useParams } from "react-router-dom";
import ProfileLogement from "../../components/ProfileLogement";
import NotFound from "../NotFound";

const Logement = () => {
    const { logementId } = useParams();
    let logement = data.find((e) => e.id === logementId);
    if (!logement) return <NotFound />;
    return (
        <>
            <ProfileLogement logement={logement} />
        </>
    );
};

export default Logement;
