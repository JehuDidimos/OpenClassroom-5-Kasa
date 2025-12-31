import "../styles/components/TagStyles.scss"
export default function TagComponent(prop){
        
    return(
        <div className="tag-container">
            {prop.tagName}
        </div>
    )
}