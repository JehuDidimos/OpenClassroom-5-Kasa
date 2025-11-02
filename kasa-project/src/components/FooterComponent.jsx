import "../styles/components/FooterStyles.scss";
import logo from "../assets/LOGO_footer.png"
function FooterComponent() {
    return ( 
        <div className="footer-container">
            <div className="icon">
                <img src={logo} alt="" />
            </div>
            <div className="footer-content">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
     );
}

export default FooterComponent;