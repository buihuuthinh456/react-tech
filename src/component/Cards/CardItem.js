import { Link } from 'react-router-dom'
function CardItem({title,url,text,onClick}){
    return(
        <div className="cards-item">
            <h3 className="cards-item__title">{title}</h3>
            <Link className="cards-item__img" to='/product'
                style={
                    {backgroundImage:`url(${url})`}}
                onClick={onClick}
            >
            </Link>
            <p className="cards-item__text">{text}</p>
        </div>
    )
}


export default CardItem