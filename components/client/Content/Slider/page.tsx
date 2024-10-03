'use client'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import BoxSlider from './Slider.module.scss'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={BoxSlider.sliderContent}>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ borderRadius: '5px !important' }}>
                <Carousel.Item>
                    <img src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/goi-hoi-vien-500-khoa-183k.jpg" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/goi-hoi-vien-500-khoa-183k.jpg" alt="#" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/goi-hoi-vien-500-khoa-183k.jpg" alt="#" />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default ControlledCarousel;