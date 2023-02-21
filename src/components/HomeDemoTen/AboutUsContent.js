import React from 'react';
import { Link } from "gatsby"

import AboutImg from "../../assets/images/home-8-9-10/about/about-3.png"

const AboutUsContent = () => {
    return (
        <>
            <div className="dibiz-about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-about-image">
                                <img src={AboutImg} alt="image" />

                                <div className="wrap-content">
                                    <p>“Praesent sapien massa convallis a pellentesque nec egestas non nisi.”</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-about-content">
                                <span>ABOUT US</span>
                                <h3>Enjoy Full-Service Digital Marketing Expertise</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <ul className="about-list">
                                    <li>
                                        <span>376</span> Completed Projects
                                    </li>
                                    <li>
                                        <span>7548</span> Working Hours Were Spent
                                    </li>
                                    <li>
                                        <span>570</span> Expert Team Members
                                    </li>
                                </ul>
                                <div className="about-btn">
                                    <Link to="/about-us-1" className="default-btn-with-radius">
                                        More About Us <i className="flaticon-next-button"></i>
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

export default AboutUsContent;