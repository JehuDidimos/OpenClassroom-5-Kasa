import { useParams } from "react-router";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect } from "react";

function PropertyPage() {
  let propertyId = useParams();
  useEffect(() => {
    console.log(propertyId);
  })
    return (
      <div className="main-container">
        <>
          <div className="main-container">
            {propertyId.id}
          </div>
        </>
      </div>
    );
}

export default PropertyPage;