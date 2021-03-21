import '../assets/css/Banner.css';
import imageBanner from '../assets/images/image-banner.png';

function Banner() {
    return(
        <div className="banner">
            <div className="container banner-container">
                <div className="text-banner">
                    <h1 className="title-banner">Tecnología <span className="span-title">dePrimera</span></h1>
                    <p className="subtitle-banner">Las mejores notebooks en un solo lugar.</p>
                </div>
                <img className="img-banner" src={imageBanner} alt="Banner" />
            </div>
        </div>
    );
}

export default Banner;