import {useState, useEffect} from "react"

import {SlArrowLeft, SlArrowRight} from "react-icons/sl"
import { slideData } from "./SlideData";

import "./Slider.css"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = slideData.length;

    const autoScroll = false;
    let slideInterval;
    let slideTime = 5000;

    const nextSlide = () => {
        currentSlide === slideLength - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        currentSlide === 0 ? setCurrentSlide(slideLength - 1) : setCurrentSlide(currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, slideTime);
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            {/* <div class="arrows prev"></div>
            <div class="arrows next"></div> */}
            <SlArrowLeft class="arrow prev" onClick={prevSlide}/>
            <SlArrowRight class="arrow next" onClick={nextSlide}/>
            {
                slideData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide active" : "slide"} key={index}>
                            {
                                index === currentSlide && (
                                    <div>
                                        <img src={require(`${slide.image}`)} alt="background" />
                                        <div className={slide.className}>
                                            <h1>{slide.title}</h1>
                                            <p>{slide.text}</p>
                                            <button>{slide.buttonText}</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Slider;

/*
onClick={currentSlide === 0 ? setCurrentSlide(slideLength - 1) : setCurrentSlide(currentSlide - 1)}

onClick={currentSlide === slideLength - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)}
*/