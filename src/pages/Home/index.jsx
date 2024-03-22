import Banner from "../../components/Banner";
import HomeBannerBackground from "../../assets/beach-and-cliff-background.webp";

function Home() {
    return (
        <main>
            <Banner
                src={HomeBannerBackground}
                alt='Plage entourée de montagnes'
                text='Chez vous, partout et ailleurs'
            />
        </main>
    );
}

export default Home;
