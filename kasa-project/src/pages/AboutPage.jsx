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
                <BannerComponent imageSource={bannerImage}/>
                <div className="dropdown-container">
                    <DropdownComponent title="Sample Title">  
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                    </DropdownComponent>
                    <DropdownComponent title="Sample Title">
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                    </DropdownComponent>
                    <DropdownComponent title="Sample Title">  
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                    </DropdownComponent>
                    <DropdownComponent title="Sample Title">  
                        Vivamus aliquet turpis non nunc fermentum, eget vulputate libero tincidunt. Duis sed felis non magna dictum volutpat.
                    </DropdownComponent>
                </div>
                
            </div>
        </>
      
    );
}

export default AboutPage;