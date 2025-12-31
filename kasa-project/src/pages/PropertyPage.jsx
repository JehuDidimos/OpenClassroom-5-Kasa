import { useParams } from "react-router";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState } from "react";
import CarouselComponent from "../components/CarouselComponent";
import "../styles/pages/PropertyPageStyles.scss";
import TagComponent from "../components/TagComponent";

function PropertyPage() {
  let param = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "/api/projects/Web+Developer+P6/2024/JsonFile+P6.txt"
        );
        const jsonResponse = await res.json();
        const match = jsonResponse.find((item) => item.id === param.id);
        setData(match);
        console.log(match);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [param.id]);

  return (
    <div className="property-container">
      <CarouselComponent propertyId={param.id}></CarouselComponent>
      <div className="property-content">
        <div className="property-description">
          <p className="property-title">{data?.title}</p>
          <p className="location">{data?.location}</p>
        </div>

        <div className="property-icons">
          <div className="host-name">
            {data?.host?.name
            ?.split(/\s+/)
            .map((name, i) => (
              <span key={i}>{name}</span>
            ))
            }
          </div>
          <div className="host-image">
            <img src={data?.host?.picture} alt="" />
          </div>
        </div>
      </div>
      <div className="property-content">
          <div className="tags">
            {data?.tags?.map((tag, index) => (
              <TagComponent tagName={tag}/>
            ))}
          </div>
        </div>
    </div>
  );
}

export default PropertyPage;
