import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import BannerComponent from "../components/BannerComponent";
import bannerImage from "../assets/sky.png"
import DropdownComponent from "../components/DropdownComponent";
import "../styles/pages/AboutPageStyles.scss"
import { useState, useRef, useEffect } from "react";

function AboutPage() {
    return (
        <>
            <div className="about-container">
                <BannerComponent imageSource={bannerImage} overlay="overlay"/>
                <div className="dropdown-container">
                    <DropdownComponent title="Reliability">  
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </DropdownComponent>
                    <DropdownComponent title="Respect">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </DropdownComponent>
                    <DropdownComponent title="Service">  
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </DropdownComponent>
                    <DropdownComponent title="Security">  
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </DropdownComponent>
                </div>
            </div>
        </>
      
    );
}

export default AboutPage;