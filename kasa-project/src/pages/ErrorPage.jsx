import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import "../styles/pages/ErrorPageStyles.scss";

function ErrorPage() {
    return (
      <div className="main-container">
        <>
          <div className="main-container">
            <div className="error-code">
              404
            </div>

            <div className="error-message">
              Oops! The page you’re looking for doesn’t exist.
            </div>

            <div className="home-link">
              <a href="/home">
                Return to home page
              </a>
            </div>
          </div>
        </>
      </div>
    );
}

export default ErrorPage;