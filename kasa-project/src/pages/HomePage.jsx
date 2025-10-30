import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
    return (
        <>
          <div className="main-container">
            <HeaderComponent />
            <div className="content">Home page</div>
            <FooterComponent />
          </div>
        </>

    );
}

export default HomePage;