import Banner from "../../components/Banner";
import bannerBackground from "../../assets/forest-and-mountains-background.webp";
import CollapseList from "../../components/CollapseList";
import data from "../../assets/apropos-resources.json";

const Apropos = () => {
    return (
        <main className='a-propos-container'>
            <Banner
                src={bannerBackground}
                alt='Background with forest and mountains'
                text=''
            />
            <div className='collapse-bars'>
                {data.map((entry, index) => (
                    <CollapseList
                        category={entry.category}
                        entries={entry.entries}
                        key={index}
                    />
                ))}
            </div>
        </main>
    );
};

export default Apropos;
