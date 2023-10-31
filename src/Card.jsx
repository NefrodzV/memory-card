import "./memory-card.css"
export default function Card({id, url, clickListener}) {
    const handleClick = ()=> {
        clickListener(id)
    }
    return <img className="card" src={url} onClick={handleClick}/> 
    
}