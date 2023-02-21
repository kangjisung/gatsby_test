import React from 'react';
import { Link } from "gatsby"

import BannerImg from "../../assets/images/home-8-9-10/banner/banner-3.png"
import circleShape from "../../assets/images/home-8-9-10/banner/circle-shape.png"
import shape3 from "../../assets/images/home-8-9-10/banner/shape-3.png"

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-wrap-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-wrap-content">
                                <span className="sub-title">GROWTH YOUR BUSINESS</span>
                                <h1>Digital <span>Marketing</span> Specialists</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Get Started <i className="flaticon-next-button"></i>
                                    </Link>
                                    <a href="tel:11234567890" className="phone-btn">
                                        <i className='bx bxs-phone-call'></i> +1 (123) 456 7890
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-wrap-image">
                                <img src={BannerImg} alt="image" />

                                <div className="wrap-circle-shape">
                                    <img src={circleShape} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="new-main-banner-wrap-shape">
                    <img src={shape3} alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;