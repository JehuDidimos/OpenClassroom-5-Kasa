import { useParams } from "react-router";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect } from "react";
import CarouselComponent from "../components/CarouselComponent";
import "../styles/pages/PropertyPageStyles.scss"

function PropertyPage() {
  let param = useParams();

    return (
      <div className="property-container">
          <CarouselComponent propertyId={param.id}></CarouselComponent>
      </div>
    );
}

export default PropertyPage;