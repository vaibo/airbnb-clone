import React from "react";
import "./Homepage.scss";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Card from "../../components/Card";
import { CARDS_CONSTANTS } from "../../constants/cardsConstants";

const Homepage = () => {
    return (
        <div className="homepage-main-container">
            <Header />
            <div className="homepage-main-container_contain">
                <div className="box-container">
                    <div className="cards-container">
                        {CARDS_CONSTANTS.map((el) => {
                            return <Card element={el} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
