import "../styles/HeaderStyles.scss";
import logo from "../assets/LOGO.png"

function HeaderComponent() {
    return ( 

        <div className="header-container">
            
            <div className="icon-container">
                <img src={logo} alt="" />
            </div>

            <div className="nav-buttons">
                {/* Temporary Routing */}
                <div><a href="/Home">Home</a></div>
                <div><a href="/About">About</a></div>
            </div>
        </div>
     );
}

export default HeaderComponent;