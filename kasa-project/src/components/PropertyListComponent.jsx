import { useEffect, useState } from "react";
import "../styles/components/PropertyListComponentStyles.scss"

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

    return ( 
        <>
        <div className="property-table">
            {data.map((data, index) => (
                <>
                
                <div className="property-card" key={data.id}>
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