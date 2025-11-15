import "../styles/components/DropdownStyles.scss"
import closedVector from "../assets/Vector-up.png"
import { useState } from "react";
function DropdownComponent() {
    const [flipped, setFlipped] = useState(false);

    function toggleFlipAnimation(){
        setFlipped(prev => !prev);
        console.log(flipped);
    }
    return (
      <>
        <div className="dropdown-main" onClick={() => toggleFlipAnimation()}>
          <div className="dropdown-title">Sample Title</div>
          <div className="vector">
            <img
              className={flipped ? "vector-normal" : "vector-flipped"}
              src={closedVector}
            />
          </div>
        </div>
        <div className={flipped ? "content-shown" : "content-hidden"}></div>
      </>
    );
}

export default DropdownComponent;