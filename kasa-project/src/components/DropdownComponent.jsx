import "../styles/components/DropdownStyles.scss"
import closedVector from "../assets/Vector-up.png"
function DropdownComponent() {
    return ( 
        <div className="dropdown-main">
            <div className="dropdown-title">
                Sample Title
            </div>
            <div className="vector">
                <img src={closedVector} alt="" />
            </div>
        </div>
     );
}

export default DropdownComponent;