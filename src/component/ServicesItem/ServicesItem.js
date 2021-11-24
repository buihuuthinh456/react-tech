import { Link } from 'react-router-dom'
import './ServicesItem.css'
import {imgTechnology} from '../../img/index'


function ServicesItem(){
    const services = [
        {
            id:0,
            url:imgTechnology.ai,
            title:"Artificial Intelligent",
            name:"Artificial Intelligent - Trí tuệ nhân tạo",
            description:"Chúng tôi phát triển những giải pháp tốt nhất có thể về những vấn đề AI, xử lý ảnh, tự động hóa....",
            like:32,
        },
        {
            id:1,
            url:imgTechnology.automation,
            title:'Automation Machine',
            name:"Automation Machine - Tự động hóa máy móc",
            description:"Chúng tôi phát triển những giải pháp tốt nhất có thể về những vấn đề AI, xử lý ảnh, tự động hóa....",
            like:46,
        },
        {
            id:2,
            url:imgTechnology.chip,
            title:'Microchip Design',
            name:"Micropchip Desin - Thiết kế vi mạch",
            description:"Chúng tôi phát triển những giải pháp tốt nhất có thể về những vấn đề AI, xử lý ảnh, tự động hóa....",
            like:22,
        },
        {
            id:3,
            url:imgTechnology.stars,
            title:'Research about stars',
            name:"Research about stars - Nghiên cứu về các vì sao",
            description:"Chúng tôi phát triển những giải pháp tốt nhất có thể về những vấn đề AI, xử lý ảnh, tự động hóa....",
            like:26,
        },
        {
            id:4,
            url:imgTechnology.universe,
            title:'Develop to universes',
            name: "Develop to universes - Phát triển đa vũ trụ",
            description:"Chúng tôi phát triển những giải pháp tốt nhất có thể về những vấn đề AI, xử lý ảnh, tự động hóa....",
            like:44,
        },
    ]
    return(
        <div className="services-container">
            <h1 className="services-title"> 
                Những dịch vụ của chúng tôi
            </h1>
            <div className="services-wrapper">
                {services.map((item,index)=>{
                    return(
                        <div className="services-item" key={index}>
                            <h3 className="services-item__heading">
                                {item.title}
                            </h3>
                            <div className="services-item__content">
                                <Link className="services-item__content-img" style={{ backgroundImage:`url(${item.url})`}} to='/product'></Link>
                                <div className="services-item__content-text">
                                    <span className="services-item__content-text__name">
                                        {item.name}
                                    </span>
                                    <p className="services-item__content-text__description">
                                        {item.description}
                                    </p>
                                    <span className="services-item__content-text__vote"> {item.like} <i className="far fa-heart"></i></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesItem