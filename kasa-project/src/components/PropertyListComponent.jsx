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
    return ( 
        <>
        <div className="property-table">
            {propertyTitles.map((property, index) => (
                <>
                
                <div className="property-card" key={index}>
                    <div className="card-overlay"></div>
                    <p>
                        {property}
                    </p>
                </div>
                </>
                
            ))}
        </div>
        </>
     );
}

export default PropertyListComponent;