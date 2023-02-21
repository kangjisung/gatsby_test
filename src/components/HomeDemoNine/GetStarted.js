import React from 'react';
import { Link } from "gatsby"

import GetStartedImg from '../../assets/images/home-8-9-10/get-started/get-started.png';

const GetStarted = () => {
    return (
        <>
            <div className="dibiz-get-started-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-get-started-image">
                                <img src={GetStartedImg} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-get-started-content">
                                <span>GET STARTED</span>
                                <h3>We Like to Start Your Project With Us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                                <div className="get-started-btn">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Get Started <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted;