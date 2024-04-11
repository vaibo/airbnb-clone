import React, { useState } from "react";
import "./Footer.scss";
import { FOOTER_DES_MENU, FOOTER_FUTURE_GATEWAY_MENU, FOOTER_MENU_CONSTANTS } from "../../constants/footerConstats";

const Footer = () => {

  const [mainMenu, setMainMenu] = useState("Popular")
    return (
        <footer className="airbnb-footer-container">
            <div className="airbnb-footer-container_footer-one">
                <div className="box-container">
                    <div className="footer-future-gateway-menu-box">
                        <h2 className="title">
                            Inspiration for future getaways
                        </h2>
                        <div className="menu-list-box">
                            <div className="main-menu-box">
                                {FOOTER_FUTURE_GATEWAY_MENU.map((i) => {
                                    return (
                                        <div onClick={()=>setMainMenu(i.label)} className={`main-menu-label  pointer ${ i.label === mainMenu ? 'active' : ''}`}>
                                            <h6 className="text">{i.label}</h6>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="border-line"></div>
                            <div className="submenu-box">
                              {
                                FOOTER_FUTURE_GATEWAY_MENU.find(m => m.label === mainMenu).menu.map((el)=>{
                                  return(
                                    <div className="submenu-text-box">
                                      <h6 className="submenu-lebel">{el.label}</h6>
                                      <h6 className="submenu-sublabel">{el.subLabel}</h6>
                                    </div>
                                  )
                                })
                              }  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airbnb-footer-container_footer-two">
                <div className="box-container">
                    <div className="airbnb-footer-container_footer-two_contain">
                        <div className="menu-box">
                            <div className="each-menu-box">
                                <h6 className="title">Support</h6>
                                <ul className="ul">
                                    {FOOTER_MENU_CONSTANTS.Support.map(
                                        (i, index) => {
                                            return (
                                                <li key={index} className="li">
                                                    {i.label}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="each-menu-box">
                                <h6 className="title">Hosting</h6>
                                <ul className="ul">
                                    {FOOTER_MENU_CONSTANTS.Hosting.map(
                                        (i, index) => {
                                            return (
                                                <li key={index}>{i.label}</li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="each-menu-box">
                                <h6 className="title">Airbnb</h6>
                                <ul className="ul">
                                    {FOOTER_MENU_CONSTANTS.Airbnb.map(
                                        (i, index) => {
                                            return (
                                                <li key={index}>{i.label}</li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="footer-des">
                            <div className="footer-des-menu">
                                <h6 className="airbnb-inc-text">
                                    © 2024 Airbnb, Inc.
                                </h6>
                                <ul className="menu-list">
                                    {FOOTER_DES_MENU.map((i, index) => {
                                        return (
                                            <li key={index} className="menu">
                                                <span className="dot-span">
                                                    ·
                                                </span>
                                                <h6 className="menu-text">
                                                    {i.label}
                                                </h6>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="footer-des-menu-two">
                                <button className="language-btn">
                                    <img
                                        className="world-language-img"
                                        src="images/world-language.svg"
                                        alt="World"
                                    />
                                    <h6 className="lan-text">English</h6>
                                </button>
                                <button className="current-type">
                                    <h6 className="currency-type-text">
                                        £ GBP
                                    </h6>
                                </button>
                                <div className="social-meida-box">
                                    <img
                                        className="social-media-img"
                                        src="images/facebook-logo.svg"
                                        alt="Facebook"
                                    />
                                    <img
                                        className="social-media-img"
                                        src="images/twitter-logo.svg"
                                        alt="Twitter"
                                    />
                                    <img
                                        className="social-media-img"
                                        src="images/insta-logo.svg"
                                        alt="Instagram"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
