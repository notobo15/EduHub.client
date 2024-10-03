'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlider from './ProductSlider';
import x from './sliderproductcategory.module.scss'
// import './sliderproductcategory.module.scss'

export default function SliderProductCategory() {
    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    right: '10px',
                    top: '150px', // Đảm bảo nằm dưới header
                    zIndex: 999, // Đặt z-index thấp hơn header
                }}
                onClick={onClick}
            />
        );
    };

    // Nút prev (quay lại)
    const SamplePrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    left: '10px',
                    top: '150px', // Đảm bảo nằm dưới header
                    zIndex: 999, // Đặt z-index thấp hơn header
                }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Tự động chuyển slide
        autoplaySpeed: 3000, // Tốc độ chuyển (mili giây)
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
                <div className={x.itemSliderCategory}>
                    <ProductSlider />
                </div>
            </Slider>
        </div>
    );
}