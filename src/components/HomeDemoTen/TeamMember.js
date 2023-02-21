import React from 'react';
import { Link } from "gatsby"

import TeamImg1 from '../../assets/images/home-8-9-10/team/team-5.png'
import TeamImg2 from '../../assets/images/home-8-9-10/team/team-6.png'
import TeamImg3 from '../../assets/images/home-8-9-10/team/team-7.png'
import TeamImg4 from '../../assets/images/home-8-9-10/team/team-8.png'
import TeamImg5 from '../../assets/images/home-8-9-10/team/team-5.png'
import TeamImg6 from '../../assets/images/home-8-9-10/team/team-6.png'
import TeamImg7 from '../../assets/images/home-8-9-10/team/team-7.png'
import TeamImg8 from '../../assets/images/home-8-9-10/team/team-8.png'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 25,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const TeamMember = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="dibiz-team-area pt-100 pb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">OUR TEAM</span>
                        <h2>We Help to Acheive Your Business Goal</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="dibiz-team-slides owl-carousel owl-theme"
                        {...options}
                    >  
                        <div className="dibiz-team-card text-center">
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
                        
                        <div className="dibiz-team-card text-center">
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
                                <h3>Alina Smith</h3>
                                <span>Marketing Lead</span>
                            </div>
                        </div>

                        <div className="dibiz-team-card text-center">
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
                                <h3>Sarah Taylor</h3>
                                <span>Advisor</span>
                            </div>
                        </div>

                        <div className="dibiz-team-card text-center">
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

                        <div className="dibiz-team-card text-center">
                            <div className="team-image">
                                <img src={TeamImg5} alt="image" />

                                <ul className="social-link">
                                    <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                    <li><a href="https://www.twitter.com/" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                    <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                    <li><a href="https://www.linkedin.com/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3>Alina Smith</h3>
                                <span>CEO</span>
                            </div>
                        </div>
                        
                        <div className="dibiz-team-card text-center">
                            <div className="team-image">
                                <img src={TeamImg6} alt="image" />

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

                        <div className="dibiz-team-card text-center">
                            <div className="team-image">
                                <img src={TeamImg7} alt="image" />

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

                        <div className="dibiz-team-card text-center">
                            <div className="team-image">
                                <img src={TeamImg8} alt="image" />
                                
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
                    </OwlCarousel> : ''}
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