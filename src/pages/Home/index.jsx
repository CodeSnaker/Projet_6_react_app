import Banner from "../../components/Banner";
import HomeBannerBackground from "../../assets/beach-and-cliff-background.webp";
import Gallery from "../../components/Gallery";

const Home = () => {
    return (
        <main className='home-container'>
            <Banner
                className='banner-home'
                src={HomeBannerBackground}
                alt='Plage entourée de montagnes'
                text='Chez vous, partout et ailleurs'
            />
            <Gallery />
        </main>
    );
};

export default Home;
