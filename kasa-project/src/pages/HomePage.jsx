import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import bannerImage from "../assets/Mts.png";
import BannerComponent from "../components/BannerComponent";
import PropertyListComponent from "../components/PropertyListComponent";
import "../styles/pages/HomeStyles.scss";

//TODO ABout dropdown text needs paddding-top
//TODO Look into themes

console.log(bannerImage)

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