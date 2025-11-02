import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import bannerImage from "../assets/Mts.png";
import BannerComponent from "../components/BannerComponent";

console.log(bannerImage)

function HomePage() {
    return (
        <>
          <div className="main-container">
              <BannerComponent imageSource={bannerImage}/>
          </div>
        </>

    );
}

export default HomePage;