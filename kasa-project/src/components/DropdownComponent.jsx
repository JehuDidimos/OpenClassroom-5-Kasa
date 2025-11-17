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
      <div className="dropdown-single">
        <div className="dropdown-main" onClick={() => toggleFlipAnimation()}>
          <div className="dropdown-title">Sample Title</div>
          <div className="vector">
            <img
              className={flipped ? "vector-normal" : "vector-flipped"}
              src={closedVector}
            />
          </div>
        </div>
        <div className={flipped ? "content-shown" : "content-hidden"}>
          <p>
            Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
          </p>
        </div>
      </div>
    );
}

export default DropdownComponent;