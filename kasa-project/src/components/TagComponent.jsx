import "../styles/components/TagStyles.scss"
export default function TagComponent(prop){
        
    return(
        <div key={prop.id} className="tag-container">
            {prop.tagName}
        </div>
    )
}