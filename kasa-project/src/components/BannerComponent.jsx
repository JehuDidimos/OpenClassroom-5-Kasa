import "../styles/components/BannerStyles.scss";

function BannerComponent(props) {


    return ( 
        <div className={"banner-container " + (!props.size ? "" : props.size)}>
            <div className={!props.overlay ? "" : props.overlay}></div>
            <img src={props.imageSource} />
        </div>
     );
}

export default BannerComponent;