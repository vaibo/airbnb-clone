import React, {useEffect, useState} from "react";
import "./Header.scss";

const Header = () => {

    const [ handleScroll, setHandleScroll] = useState(true)

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
        <header className="airbnb-header-container">
            <div className="box-container">
                <div className="airbnb-header-container_contain">
                    <div className="airbnb-header-container_contain_logo-box">
                        <img 
                            src="images/airbnb-logo.svg" 
                            alt="Logo" 
                        />
                    </div>
                    <nav className="airbnb-header-container_contain_nav-one">
                        <ul className={`ul ${handleScroll ? '' : 'dsp-none'}`}>
                            <li className="li pointer">Stays</li>
                            <li className="li pointer">Experiences</li>
                            <li className="li pointer">Online Experiences</li>
                        </ul>
                        <div className={`search-bar-box ${handleScroll ? 'dsp-none' : ''}`}>
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
                        <h6 className="airbnb-home-text pointer">
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
        </header>
    );
};

export default Header;