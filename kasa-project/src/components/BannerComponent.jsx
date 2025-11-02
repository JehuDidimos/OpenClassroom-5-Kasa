import "../styles/components/BannerStyles.scss";

function BannerComponent(props) {

    console.log(props.imageSource)

    return ( 
        <div className="banner-container">
            <div className="image-overlay"></div>
            <img src={props.imageSource} />
        </div>
     );
}

export default BannerComponent;