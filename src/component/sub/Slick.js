import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slick = ({img}) => {
    const path = process.env.PUBLIC_URL;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    console.log(img)

    return (
        <Slider {...settings}>
            {img.map((image, index) => (
                <img key={index} src={path + image} />
            ))}
        </Slider>
    );
}
export default Slick;