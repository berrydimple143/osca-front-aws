import React, { useState } from 'react';
import Image from 'next/image';
import { SliderData } from '../data/SliderData';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery'>
            <h1>Gallery</h1>
            <div>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                            {index === current && (
                                    <Image
                                    src={slide.image}
                                    alt='/'
                                    width='1366'
                                    height='400'
                                    object-fit='cover'
                                />
                                )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Slider;
