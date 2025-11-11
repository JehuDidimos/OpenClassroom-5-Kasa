import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import BannerComponent from "../components/BannerComponent";
import bannerImage from "../assets/sky.png"
import DropdownComponent from "../components/DropdownComponent";
import "../styles/pages/AboutPageStyles.scss"

function AboutPage() {
    return (
        <>
            <div className="about-container">
                <BannerComponent imageSource={bannerImage}/>
                <div className="dropdown-container">
                    <DropdownComponent/>
                    <DropdownComponent/>
                    <DropdownComponent/>
                    <DropdownComponent/>
                </div>
                
            </div>
        </>
      
    );
}

export default AboutPage;