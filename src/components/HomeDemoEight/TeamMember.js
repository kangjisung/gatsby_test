import React from 'react';
import { Link } from "gatsby"

import TeamImg1 from "../../assets/images/home-8-9-10/team/team-1.png";
import TeamImg2 from "../../assets/images/home-8-9-10/team/team-2.png";
import TeamImg3 from "../../assets/images/home-8-9-10/team/team-3.png";
import TeamImg4 from "../../assets/images/home-8-9-10/team/team-4.png";

const TeamMember = () => {
    return (
        <>
            <div className="dibiz-team-area ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">OUR TEAM</span>
                        <h2>We Help to Acheive Your Business Goal</h2> x
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg1} alt="image" />

                                    <ul className="social-link">
                                        <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="https://www.twitter.com/" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="https://www.linkedin.com/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>James Anderson</h3>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg2} alt="image" />

                                    <ul className="social-link">
                                        <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="https://www.twitter.com/" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="https://www.linkedin.com/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg3} alt="image" />

                                    <ul className="social-link">
                                        <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="https://www.twitter.com/" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="https://www.linkedin.com/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Alina Smith</h3>
                                    <span>Advisor</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg4} alt="image" />

                                    <ul className="social-link">
                                        <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="https://www.twitter.com/" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="https://www.linkedin.com/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>David Warner</h3>
                                    <span>Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dibiz-team-bottom-text">
                    <Link to="/team-1">
                        See All Our Team Member
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TeamMember;