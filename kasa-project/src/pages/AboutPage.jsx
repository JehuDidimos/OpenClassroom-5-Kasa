import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import BannerComponent from "../components/BannerComponent";
import bannerImage from "../assets/sky.png"

function AboutPage() {
    return (
        <>
            <div className="main-container">
                <BannerComponent imageSource={bannerImage}/>
            </div>
        </>
      
    );
}

export default AboutPage;