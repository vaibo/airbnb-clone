import React from "react";
import './AirbnbYourHome.scss';
import Footer from "../../layouts/Footer";

const AirbnbYourHome = () => {
    return (
        <div className="airbnb-your-home-main-container">
            <header className="airbnb-your-home-header-box">
                <div className="box-container">
                    <div className="header-container">
                        <div className="logo-box">
                            <img
                                className="logo-img"
                                src="images/airbnb-your-home-logo.svg"
                                alt="Airbnb"
                            />
                        </div>
                        <div className="airbnb-setup-main-box">
                            <h5 className="raedy-airbnb-text">Ready to Airbnb it?</h5>
                            <div className="airbnb-setup-box">
                                <img
                                    className="home-img"
                                    src="images/home-icon.svg"
                                    alt="Airbnb"
                                />
                                <h5 className="airbnb-setup-text">Airbnb Setup</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </div>
    );
};

export default AirbnbYourHome;
