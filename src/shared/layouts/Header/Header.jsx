import React, { useEffect, useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [handleScroll, setHandleScroll] = useState(true);

    const [menuActive, setMenuActive] = useState("Stays")

    const navigate = useNavigate();

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
            <div className={` airbnb-header-container_one ${ handleScroll ? 'default' : 'scroll' }`}>
                <div className="box-container">
                    <div className="airbnb-header-container_contain">
                        <div className="airbnb-header-container_contain_logo-box">
                            <img className="logo-img" src="images/airbnb-logo.svg" alt="Logo" />
                        </div>
                        <nav className="airbnb-header-container_contain_nav-one">
                            <ul
                                className={`ul ${
                                    handleScroll ? "" : "dsp-none"
                                }`}
                            >
                                <li 
                                    className={`li pointer ${ menuActive === 'Stays' ? 'active' : 'gray'}`}
                                    onClick={() => setMenuActive('Stays')}
                                >Stays</li>
                                <li 
                                    onClick={() => setMenuActive('Experiences')} 
                                    className={`li pointer ${ menuActive === 'Experiences' ? 'active' : 'gray'} `}
                                >Experiences</li>
                                <li
                                    onClick={() => {
                                        navigate("/experiences");
                                        setMenuActive('OnlineExp')
                                    }}
                                    className={`li pointer ${ menuActive === 'OnlineExp' ? 'active' : 'gray'}`}
                                >
                                    Online Experiences
                                </li>
                            </ul>
                            <div className={`search-bar-box`}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div className="add-guest-box">
                                    <div className="search-box">
                                        <img
                                            className="search-img"
                                            src="images/search-icon.svg"
                                            alt="search"
                                        />
                                    </div>
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
                        <div className="menu-slider-box"></div>
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
