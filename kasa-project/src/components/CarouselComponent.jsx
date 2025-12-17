import { useEffect, useState } from "react";
import "../styles/components/CarouselStyles.scss";
import BannerComponent from "./BannerComponent";

function CarouselComponent({ propertyId }) {
  const [data, setData] = useState({});
  const [index, setIndex] = useState(0);
  const length = data?.pictures?.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "/api/projects/Web+Developer+P6/2024/JsonFile+P6.txt"
        );
        if (!res.ok) throw new Error(res.status);
        const jsonResponse = await res.json();
        const match = jsonResponse.find((item) => item.id === propertyId);
        console.log(match);
        setData(match);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [propertyId]);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel-container">
      <BannerComponent imageSource={data?.pictures?.[index]} size="large" />
      <div className="carousel-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default CarouselComponent;
