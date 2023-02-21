import React from 'react';
import { Link } from "gatsby"

const Services = () => {
    return (
        <>
            <div className="dibiz-services-area bg-F3ECEA pt-100 pb-75">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">SERVICES</span>
                        <h2>Let’s Check Our Services</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-megaphone"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Social Media Marketing
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-keywords"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Keyword Research
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-content-management"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Content Marketing
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-competitor"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Competitor Research
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-ppc"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        PPC Advertising
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
                                    View More <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-services-box">
                                <div className="icon">
                                    <i className="flaticon-startup"></i>
                                </div>
                                <h3>
                                    <Link to="/single-services">
                                        Skyrocketing Growth
                                    </Link>
                                </h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat sed porttitor lectus nibh. Proin eget tortor risus nulla quis lorem ut libero.</p>
                                <Link to="/single-services" className="services-btn">
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

export default Services;