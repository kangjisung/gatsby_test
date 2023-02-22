import React from 'react';
import { Link } from "gatsby"

import BannerImg from "../../assets/images/home-8-9-10/banner/banner.png";
import BannerShape1 from "../../assets/images/home-8-9-10/banner/shape-1.png";
import BannerShape2 from "../../assets/images/home-8-9-10/banner/shape-2.png";

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-content">
                                <span className="sub-title">GROWTH YOUR BUSINESS</span>
                                <h1>We Provide Best Digital Marketing Solutions</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Get Started <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-image">
                                <img src={BannerImg} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="new-main-banner-shape-1">
                    <img src={BannerShape1} alt="image" />
                </div>
                <div className="new-main-banner-shape-2">
                    <img src={BannerShape2} alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;