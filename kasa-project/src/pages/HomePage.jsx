import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
    return (
      <div className="main-container">
        <>
          <div className="main-container">
            <HeaderComponent />
            Home Page
            <FooterComponent />
          </div>
        </>
      </div>
    );
}

export default HomePage;