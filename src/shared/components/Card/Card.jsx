import React from "react";
import "./Card.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({element}) => {

    const { placeName, rating, images} = element
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="cards">
            <div className="cards-images-box">
                <Slider {...settings}>
                    {
                        images.map((i)=>{
                            return (
                                <div className="img-box">
                                    <img
                                        className="card-img"
                                        src={`${i}`}
                                        alt="card"
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
                <div></div>
                <div className="heart-icon-box">
                    <img
                        className="heart-img"
                        src="images/heart-icon.svg"
                        alt="Wishlist"
                    />
                </div>
            </div>
            <div className="cards-details-box">
                <div className="place-rating-box">
                    <h6 className="place-text">{placeName}</h6>
                    <h6 className="rating">
                        <img
                            className="star-img"
                            src="images/star-icon.svg"
                            alt="star"
                        />
                        <span className="rating-text">{rating}</span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Card;
