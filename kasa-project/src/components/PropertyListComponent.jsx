import { useEffect, useState } from "react";
import "../styles/components/PropertyListComponentStyles.scss"
import { useNavigate } from "react-router";

function PropertyListComponent() {
    const propertyTitles = [
        "Modern Downtown Apartment",
        "Cozy Suburban Home",
        "Luxury Beachfront Villa",
        "Rustic Mountain Cabin",
        "Charming Country Cottage",
        "Spacious City Loft"
    ];

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>  {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/projects/Web+Developer+P6/2024/JsonFile+P6.txt');
                const jsonResponse = await res.json();
                setData(jsonResponse);
                console.log(jsonResponse)
            } catch (error){
                console.log("Fetch Error: " + error);
            }
        };
        fetchData();
    }, []);

    function pageRedirect(propertyId){
        navigate(`/property/${propertyId}`);
    }

    return ( 
        <>
        <div className="property-table">
            {data.map((data, index) => (
                <>
                
                <div className="property-card" key={data.id} onClick={() => pageRedirect(data.id)}>
                    <div className="card-overlay"></div>
                    <p>
                        {data.title}
                    </p>
                </div>
                </>
                
            ))}
        </div>
        </>
     );
}

export default PropertyListComponent;