import React from 'react';
import { Link } from "gatsby"

import FeaturesImg1 from "../../assets/images/home-8-9-10/features/features-4.png"
import FeaturesImg2 from "../../assets/images/home-8-9-10/features/features-5.png"
import FeaturesImg3 from "../../assets/images/home-8-9-10/features/features-6.png"

const Features = () => {
    return (
        <>
            <div className="dibiz-features-area">
                <div className="container">
                    <div className="dibiz-features-inner-box">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="dibiz-features-box">
                                    <div className="features-image">
                                        <Link to="/single-services">
                                            <img src={FeaturesImg1} alt="image" />
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link to="/single-services">
                                            Marketing Analysis
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="dibiz-features-box">
                                    <div className="features-image">
                                        <Link to="/single-services">
                                            <img src={FeaturesImg2} alt="image" />
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link to="/single-services">
                                            Website Optimization
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="dibiz-features-box">
                                    <div className="features-image">
                                        <Link to="/single-services">
                                            <img src={FeaturesImg3} alt="image" />
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link to="/single-services">
                                            Email Marketing
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;