import React, { useState } from 'react';
import './ImageSlider.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    let slider = slides.map((slide, index) => {
        return (
            <div key={slide.id}>
                <div className={index === current ? 'slide slide-active' : 'no-slide' } >
                    
                    {index === current && (
                        <>
                            <div className ="project-title">
                                <h3>{slide.projName}</h3>
                            </div>

                            <img src={slide.image} alt={slide.projName}/>
                            
                            <div className ="project-description">
                                <p>{slide.description}</p>
                            </div>
                        </>
                    )}

                </div>
            </div>
        );
    });

    return (
        <section className='slider' key='slider'>
            <MdKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
            <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
            {slider}
        </section>
    );
};

export default ImageSlider;