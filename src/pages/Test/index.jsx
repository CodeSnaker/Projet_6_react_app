import Slideshow from "../../components/Slideshow";
import data from "../../assets/resources.json";

const Test = () => {
    return <Slideshow images={data[0].pictures} />;
};

export default Test;
