import { useEffect, useState } from "react";
import "../styles/components/PropertyListComponentStyles.scss"
import { useNavigate } from "react-router";

function PropertyListComponent() {

    const [data, setData] = useState([]);
    const navigate = useNavigate(); //Use with redux 

    useEffect(() =>  {
        const fetchData = async () => {
            try{
                const res = await fetch('/api/projects/Web+Developer+P6/2024/JsonFile+P6.txt');
                if (!res.ok) throw new Error(res.status);
                const jsonResponse = await res.json();
                setData(jsonResponse);
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
                <div className="property-card" key={data.id} onClick={() => pageRedirect(data.id)}>
                    <div key={data.id} className="card-overlay"></div>
                    <p>
                        {data.title}
                    </p>
                    <img src={data.cover} alt="" />
                </div>                
            ))}
        </div>
        </>
     );
}

export default PropertyListComponent;