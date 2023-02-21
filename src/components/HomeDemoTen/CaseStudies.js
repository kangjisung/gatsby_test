import React from 'react';
import { Link } from "gatsby"

import CaseStudiesImg1 from "../../assets/images/home-8-9-10/case-studies/case-studies-1.jpg"
import CaseStudiesImg2 from "../../assets/images/home-8-9-10/case-studies/case-studies-2.jpg"
import CaseStudiesImg3 from "../../assets/images/home-8-9-10/case-studies/case-studies-3.jpg"
import CaseStudiesImg4 from "../../assets/images/home-8-9-10/case-studies/case-studies-4.jpg"

const CaseStudies = () => {
    return (
        <>
            <div className="dibiz-case-studies-area-without-color ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">CASE STUDIES</span>
                        <h2>Check of Our Some Recent Works & Case Studies</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="dibiz-case-studies-card with-style-two">
                                <Link to="/single-portfolio">
                                    <img src={CaseStudiesImg1} alt="image" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Data Scientist
                                        </Link>
                                    </h3>
                                    <div className="icon">
                                        <Link to="/single-portfolio">
                                            <i className="flaticon-next-button"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="dibiz-case-studies-card with-style-two">
                                <Link to="/single-portfolio">
                                    <img src={CaseStudiesImg2} alt="image" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Data Analysis
                                        </Link>
                                    </h3>
                                    <div className="icon">
                                        <Link to="/single-portfolio">
                                            <i className="flaticon-next-button"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="dibiz-case-studies-card with-style-two">
                                <Link to="/single-portfolio">
                                    <img src={CaseStudiesImg3} alt="image" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Detection Project
                                        </Link>
                                    </h3>
                                    <div className="icon">
                                        <Link to="/single-portfolio">
                                            <i className="flaticon-next-button"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="dibiz-case-studies-card with-style-two">
                                <Link to="/single-portfolio">
                                    <img src={CaseStudiesImg4} alt="image" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Benefits Research
                                        </Link>
                                    </h3>
                                    <div className="icon">
                                        <Link to="/single-portfolio">
                                            <i className="flaticon-next-button"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dibiz-case-studies-bottom-text">
                    <Link to="/portfolio-1">
                        See All Case Studies
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CaseStudies;