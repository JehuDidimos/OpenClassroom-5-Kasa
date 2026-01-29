import { useParams } from "react-router";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState } from "react";
import CarouselComponent from "../components/CarouselComponent";
import "../styles/pages/PropertyPageStyles.scss";
import TagComponent from "../components/TagComponent";
import DropdownComponent from "../components/DropdownComponent";

function PropertyPage() {
  let param = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "/api/projects/Web+Developer+P6/2024/JsonFile+P6.txt",
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
        <div className="property-details">
          <div className="property-description">
            <p className="property-title">{data?.title}</p>

            <p className="location">{data?.location}</p>
            <div className="tags">
              {data?.tags?.map((tag, index) => (
                <TagComponent key={tag + index} tagName={tag} />
              ))}
            </div>
          </div>
        </div>

        <div className="property-icon-rating">
          <div className="property-icons">
            <div className="host-name">
              {data?.host?.name?.split(/\s+/).map((name, index) => (
                <span key={name + index}>{name}</span>
              ))}
            </div>
            <div className="host-image">
              <img src={data?.host?.picture} alt="" />
            </div>
          </div>

          <div className="rating">
            {Array.from({ length: parseInt(data?.rating, 10) }).map((_, i) => (
              <i
                key={`star-filled-${i}`}
                className="fa-solid fa-star"
                style={{ color: "#FF6060" }}
              ></i>
            ))}
            {Array.from({ length: 5 - parseInt(data?.rating, 10) }).map(
              (_, i) => (
                <i
                  key={`star-empty-${i}`}
                  className="fa-solid fa-star"
                  style={{ color: "#E3E3E3" }}
                ></i>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="property-dropdown">
        <div className="dropdown-container">
          <DropdownComponent size="small" title="Description">
            {" "}
            {data?.description}
          </DropdownComponent>
        </div>
        <div className="dropdown-container">
          <DropdownComponent size="small" title="Amenities">
            {data?.equipments?.map((item, index) => (
              <p key={item + index}>{item}</p>
            ))}
          </DropdownComponent>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
