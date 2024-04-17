import React, { useEffect, useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HEADERS_MENU_CONSTANTS } from "../../constants/headersConstants";
import DestinationPopup from "../../popups/DestinationPopup";
import DatesPopup from "../../popups/DatesPopup";
import GuestPopup from "../../popups/GuestPopup";

const Header = () => {
    const [handleScroll, setHandleScroll] = useState(true);

    const [menuActive, setMenuActive] = useState("Stays");
    const [searchMenu, setSearchMenu] = useState("");

    const navigate = useNavigate();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > window.innerHeight / 2) {
                setHandleScroll(false);
            } else {
                setHandleScroll(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`airbnb-header-container `}>
            <div
                className={` airbnb-header-container_one ${
                    handleScroll ? "default" : "scroll"
                }`}
            >
                <div className="box-container">
                    <div className="airbnb-header-container_contain">
                        <div className="airbnb-header-container_contain_logo-box">
                            <img
                                className="logo-img"
                                src="images/airbnb-logo.svg"
                                alt="Logo"
                            />
                        </div>
                        <nav className="airbnb-header-container_contain_nav-one">
                            <ul
                                className={`ul ${
                                    handleScroll ? "" : "dsp-none"
                                }`}
                            >
                                <li
                                    className={`li pointer ${
                                        menuActive === "Stays"
                                            ? "active"
                                            : "gray"
                                    }`}
                                    onClick={() => setMenuActive("Stays")}
                                >
                                    Stays
                                </li>
                                <li
                                    onClick={() => setMenuActive("Experiences")}
                                    className={`li pointer ${
                                        menuActive === "Experiences"
                                            ? "active"
                                            : "gray"
                                    } `}
                                >
                                    Experiences
                                </li>
                                <li
                                    onClick={() => {
                                        navigate("/experiences");
                                        setMenuActive("OnlineExp");
                                    }}
                                    className={`li pointer ${
                                        menuActive === "OnlineExp"
                                            ? "active"
                                            : "gray"
                                    }`}
                                >
                                    Online Experiences
                                </li>
                            </ul>
                            <div
                                className={`search-bar-box ${
                                    handleScroll ? "default" : "scroll"
                                }`}
                            >
                                <div
                                    className={`menu-serach-bar ${
                                        handleScroll ? "dsp-none" : ""
                                    }`}
                                >
                                    <button className="anywherep-box">
                                        <h6 className="anywhere-text black">
                                            Anywhere
                                        </h6>
                                    </button>
                                    <div className="border-line"></div>
                                    <button className="anywherep-box">
                                        <h6 className="anywhere-text black">
                                            Any week
                                        </h6>
                                    </button>
                                    <div className="border-line"></div>
                                    <button className="anywherep-box">
                                        <h6 className="anywhere-text gray">
                                            Add guests
                                        </h6>
                                        <div className="search-box">
                                            <img
                                                className="search-img"
                                                src="images/search-icon.svg"
                                                alt="search"
                                            />
                                        </div>
                                    </button>
                                </div>
                                <div
                                    className={`main-menu-search ${
                                        handleScroll ? "" : "dsp-none"
                                    } ${ [ 'Destination', 'CheckIn', 'CheckOut', 'Dates', 'Guest'].includes(searchMenu) ? "click-gray" : ""}`}
                                >
                                    <div className="search-destination-box">
                                        <label onClick={()=>setSearchMenu("Destination")} className={`label pointer ${searchMenu === 'Destination' ? 'active' : 'hover'}`}>
                                            <h6 className="where-text">
                                                Where
                                            </h6>
                                            <input
                                                className="search-ip"
                                                type="search"
                                                placeholder="Search destintions"
                                            />
                                        </label>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="check-in-out-date-box">
                                        {menuActive === "Stays" ? (
                                            <div className="stays-box">
                                                <label onClick={()=>setSearchMenu("CheckIn")} className={`label pointer ${searchMenu === 'CheckIn' ? 'active' : 'hover'}`}>
                                                    <h6 className="check-text">
                                                        Check in
                                                    </h6>
                                                    <h6 className="add-date-text">
                                                        Add dates
                                                    </h6>
                                                </label>
                                                <div className="border-line"></div>
                                                <label onClick={()=>setSearchMenu("CheckOut")} className={`label pointer ${searchMenu === 'CheckOut' ? 'active' : 'hover'}`}>
                                                    <h6 className="check-text">
                                                        Check out
                                                    </h6>
                                                    <h6 className="add-date-text">
                                                        Add dates
                                                    </h6>
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="experience-box">
                                                <label onClick={ ()=>setSearchMenu("Dates") } className={`label pointer ${searchMenu === 'Dates' ? 'active' : 'hover'}`}>
                                                    <h6 className="date-text">
                                                        Date
                                                    </h6>
                                                    <h6 className="add-date-text">
                                                        Add dates
                                                    </h6>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`border-line ${['CheckOut', 'Guest', 'Dates'].includes(searchMenu) ? 'hidden' : '' }`}></div>
                                    <div onClick={()=>setSearchMenu("Guest")} className={`add-guest-box pointer ${searchMenu === 'Guest' ? 'active' : 'hover'}`}>
                                        <label className="label">
                                            <h6 className="who-text">Who</h6>
                                            <h6 className="guestes-text">
                                                Add guests
                                            </h6>
                                        </label>
                                        <div className="search-box">
                                            <img
                                                className="search-img"
                                                src="images/search-icon.svg"
                                                alt="search"
                                            />
                                        </div>
                                    </div>
                                    {
                                        searchMenu === 'Destination'  &&
                                        (<DestinationPopup/>) 
                                    }
                                    {
                                        ['CheckIn', 'CheckOut', 'Dates'].includes(searchMenu)  && 
                                        (<DatesPopup/>)
                                    }
                                    {
                                        searchMenu === 'Guest'  && 
                                        (<GuestPopup/>)
                                    }
                                </div>
                            </div>
                        </nav>
                        <div className="airbnb-header-container_contain_nav-two">
                            <h6
                                onClick={() => {
                                    navigate("/home");
                                }}
                                className="airbnb-home-text pointer"
                            >
                                Airbnb your home
                            </h6>
                            <button className="language-world-btn pointer">
                                <img
                                    className="world-language-img"
                                    src="images/world-language.svg"
                                    alt="World"
                                />
                            </button>
                            <button className="hamburger-menu-btn pointer">
                                <img
                                    className="hamburger-img"
                                    src="images/hamburger-menu.svg"
                                    alt="World"
                                />
                                <img
                                    className="profile-img"
                                    src="images/default-profile.svg"
                                    alt="World"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airbnb-header-container_two">
                <div className="box-container">
                    <div className="second-menu-box">
                        <div className="menu-slider-box">
                            <Slider {...settings}>
                                {
                                    HEADERS_MENU_CONSTANTS.map((i)=>{
                                        return (
                                            <div className="menu-img-label-box">
                                                <div className="img-box">
                                                    <img
                                                        className="menu-img"
                                                        src={i.img}
                                                        alt="Menu"
                                                    />
                                                </div>
                                                <h5 className="label">{i.label}</h5>
                                            </div>
                                        );
                                    })
                                }
                            </Slider>
                        </div>
                        <div className="filters-taxes-box">
                            <div className="filter-box">
                                <img
                                    className="filter-img"
                                    src="images/filter-icon.svg"
                                    alt="filter"
                                />
                                <h6 className="filters-text">Filters</h6>
                            </div>
                            <div className="display-tax-box">
                                <h6>Display total before taxes</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
