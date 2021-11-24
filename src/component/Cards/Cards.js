
import CardItem from './CardItem'

import './Cards.css'
import {imgTechnology} from '../../img'
function Cards(){
    const listTechnology = [
        {
            title:'AI will be strong developed next 20 years',
            src:imgTechnology.ai,
            alt:'AI',
            text : 'Programing Language: Python'
        },
        {
            title:'With IoT, Everything\'s in hand',
            src:imgTechnology.iot,
            alt:'Iot',
            text : 'Programing Language: Python,C,C++'
        },
        {
            title:'Everything will be become automation',
            src:imgTechnology.automation,
            alt:'Automation',
            text : 'Programing Language: Python,C,C++,C#'
        },
        {
            title:'Microchip is brain of computer',
            src:imgTechnology.chip,
            alt:'Chip',
            text : 'Programing Language: C,MicroC,SystemC'
        },
        {
            title:'We will live in multiple universes',
            src:imgTechnology.universe,
            alt:'Universe',
            text : 'Updating...'
        },
        {
            title:'All people will fly out and discover the stars',
            src:imgTechnology.stars,
            alt:'Stars',
            text : 'Discover the stars and find new life in wide universe'
        },
    ]
    return(
        <section className="cards">
            <div className="cards-container">
                <h1 className="cards-title">Technology Is The Future</h1>
                <div className="cards-wrapper">
                    {listTechnology.map((item,index)=>{
                        return(
                            <CardItem key={index}
                                title={item.title}
                                alt={item.alt}
                                url={item.src}
                                text={item.text}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


export default Cards