function BannerBackground({ src, alt }) {
    return (
        <>
            <img className='banner-background' src={src} alt={alt} />
        </>
    );
}

function Banner({ src, alt, text }) {
    return (
        <div className='banner'>
            <BannerBackground src={src} alt={alt} />
            <div className='banner-filter'></div>
            <div className='banner-content'>{text}</div>
        </div>
    );
}

export default Banner;
