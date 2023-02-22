import React from 'react';
import { Link } from "gatsby"

import FeatureImg1 from "../../assets/images/home-8-9-10/features/features-1.png";
import FeatureImg2 from "../../assets/images/home-8-9-10/features/features-2.png";
import FeatureImg3 from "../../assets/images/home-8-9-10/features/features-3.png";

const Features = () => {
    return (
        <>
            <div className="dibiz-features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg1} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Marketing Analysis
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <Link to="/single-services" className="features-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg2} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Website Optimization
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <Link to="/single-services" className="features-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg3} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Email Marketing
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <Link to="/single-services" className="features-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;