import "../styles/components/DropdownStyles.scss"
import closedVector from "../assets/Vector-up.png"
import { useEffect, useRef, useState } from "react";
function DropdownComponent({children, title}) {
    const [flipped, setFlipped] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
      console.log(contentRef.current.scrollHeight)
    }, [flipped])


    function toggleFlipAnimation(){
        setFlipped(prev => !prev);
    }
    return (
      <div className="dropdown-single">
        <div className="dropdown-main" onClick={() => toggleFlipAnimation()}>
          <div className="dropdown-title">
            {title}
          </div>
          <div className="vector">
            <img
              className={flipped ? "vector-normal" : "vector-flipped"}
              src={closedVector}
            />
          </div>
        </div>
        <div className="content-hidden"
          ref={contentRef}
          style={{ 
            height: flipped ? `${contentRef.current.scrollHeight}px` : '0',
            transform: flipped ? '' : `translateY(-100px)`
          }}
        >
          <p
          style={{opacity: flipped ? '1' : '0'}}>
            {children}
          </p>
          

        </div>
      </div>
    );
}

export default DropdownComponent;