import React from 'react';
import { Link } from "gatsby"

import BannerImg from '../../assets/images/home-8-9-10/banner/banner-2.png';

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-area banner-with-gradient-color">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-content">
                                <span className="sub-title">SEO MARKETING</span>
                                <h1>Boots Your Website Traffic</h1>
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
            </div>
        </>
    )
}

export default MainBanner;