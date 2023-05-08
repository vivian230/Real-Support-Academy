import React, {useState} from 'react'
import Button from './buttons'
import Data from './data'
import './testimonials.css'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== Data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === Data.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Data.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {Data.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/images/story${index + 1}.png`} 
                        />
                    </div>
                )
            })}
            <Button moveSlide={nextSlide} direction={"next"} />
            <Button moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>
                       </div>
                ))}
            </div>
        </div>
    )
} 