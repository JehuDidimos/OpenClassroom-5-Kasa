import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import bannerImage from "../assets/Mts.png";
import BannerComponent from "../components/BannerComponent";
import PropertyListComponent from "../components/PropertyListComponent";
import "../styles/pages/HomeStyles.scss";

//TODO Look into themes

function HomePage() {
    return (
        <>
          <div className="main-container">
              <BannerComponent imageSource={bannerImage}/>
              <PropertyListComponent/>
          </div>
        </>

    );
}

export default HomePage;