import { useParams } from "react-router";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect } from "react";
import CarouselComponent from "../components/CarouselComponent";

function PropertyPage() {
  let param = useParams();
  useEffect(() => {
    console.log(param);
  })
    return (
      <div className="main-container">
        <>
          <CarouselComponent propertyId={param.id}></CarouselComponent>
        </>
      </div>
    );
}

export default PropertyPage;