
import { useState,useEffect,useRef } from 'react'
import {imgTechnology} from '../../img/index'
import './Slider.css'



function SliderComponent(){
    const listSlider = [
        {
            id:0,
            url:imgTechnology.ai,
        },
        {
            id:1,
            url:imgTechnology.automation,
        },
        {
            id:2,
            url:imgTechnology.chip,
        },
        {
            id:3,
            url:imgTechnology.stars,
        },
        {
            id:4,
            url:imgTechnology.universe,
        },
    ]
    const [currentSlider,setCurrentSlider] = useState(1)
    const sliderWrapper = useRef()
    const timeChange = 5000;
    console.log(currentSlider)
    // Khống chế counter slider index
    useEffect(()=>{
        let counter=0
        if(currentSlider>=6){
            setCurrentSlider(1)
            counter = setInterval(()=>{
                setCurrentSlider(prev=>prev+1)
            },timeChange)
        }
        else{
            counter = setInterval(()=>{
                setCurrentSlider(prev=>prev+1)
            },timeChange)
        }
        return (()=>{
            return clearInterval(counter)
        })
    },[currentSlider])
    // Add class Active đến slider tương ứng 
    useEffect(()=>{
        const listSliderItem = sliderWrapper.current.childNodes
        let set
        listSliderItem.forEach((item,index)=>{
            item.classList.remove('active')
            item.classList.remove('left')
            item.classList.remove('center')
            item.classList.remove('right')
        })
        listSliderItem.forEach((item,index)=>{
            if(currentSlider-1===index||currentSlider===index||currentSlider+1===index){
                item.classList.add('active')
                if(currentSlider-1===index){
                    item.classList.add('left')
                }
                if(currentSlider===index){
                    item.classList.add('center')
                }
                if(currentSlider+1===index){
                    item.classList.add('right')
                }
            }
        })

        return (()=>clearTimeout(set))
    },[currentSlider])
    // Add animation vào slider
    useEffect(()=>{
        const sliderItem = document.querySelectorAll('.slider-item')
        console.log(sliderItem)
        let widthSlider
        if(currentSlider>=6){
            widthSlider = sliderItem[0].offsetWidth;
        }
        else{
            widthSlider = sliderItem[currentSlider+1].offsetWidth;
        }
        
        const widthSliderCenter = sliderItem[currentSlider].offsetWidth;
        const distance = widthSliderCenter - Math.floor(widthSliderCenter*0.6) +widthSlider;
        let animationCenter = sliderItem[currentSlider].animate([
            {   
                transform: `scale(0.6,1) translateX(${distance}px)`,
                filter:'brightness(40%)'
            },
            { 
                transform: 'scale(1,1.1) translateX(0px)',
                filter:'brightness(100%)',
             }
        ],{
            duration:1200,
        })
        animationCenter.play()
        let animationLeft = sliderItem[currentSlider-1].animate([
            {   
                transform: `scale(1,1.1) translateX(${widthSlider}px)`,
                filter:'brightness(100%)'
            },
            { 
                transform: 'scale(0.8,1) translateX(0px)',
                filter:'brightness(40%)',
             }
        ],{
            duration:1000,
        })
        animationLeft.play();
        let animationRight
        if(currentSlider>=6){
            animationRight = sliderItem[0].animate([
                {   
                    transform: `translateX(${widthSlider}px)`,
                    filter:'brightness(100%)'
                },
                { 
                    transform: 'translateX(0px)',
                    filter:'brightness(40%)',
                 }
            ],{
                duration:1000,
            })
        }
        else{
            animationRight = sliderItem[currentSlider+1].animate([
                {   
                    transform: `translateX(${widthSlider}px)`,
                    filter:'brightness(100%)'
                },
                { 
                    transform: 'translateX(0px)',
                    filter:'brightness(40%)',
                 }
            ],{
                duration:1000,
            })
        }
        animationRight.play();
    },[currentSlider])
    return(
        <div className="slider-container">
            <div className="slider-wrapper" ref={sliderWrapper}>
                <div className="slider-item" key={'aa'}>
                    <div 
                        style={{ backgroundImage:`url(${listSlider[4].url})`}}
                        className="slider-item__img"
                    >
                    </div>
                </div>
                {listSlider.map((each, index) =>(
                    <div className="slider-item" key={index}>
                        <div 
                            style={{ backgroundImage:`url(${each.url})`}}
                            className="slider-item__img"
                        >
                        </div>
                    </div>
                ))}
                <div className="slider-item" key={'ff'}>
                    <div 
                        style={{ backgroundImage:`url(${listSlider[0].url})`}}
                        className="slider-item__img"
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderComponent