import React from 'react';
import { Link } from "gatsby"

import VectorShape from "../../assets/images/home-8-9-10/services/vector-shape.png";

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 25,
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
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const Services = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="dibiz-services-area ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">SERVICES</span>
                        <h2>Let’s Check Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    {display ? <OwlCarousel 
                        className="dibiz-services-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="dibiz-services-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Social Media Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Keyword Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Content Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Competitor Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Social Media Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Keyword Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Content Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Competitor Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Social Media Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Keyword Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Content Marketing
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Competitor Research
                                </Link>
                            </h3>
                            <p>Nulla porttitor accumsan tincidunt xed porttitor lectus nibh xed porttitor lectus nibh.</p>
                            <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="dibiz-services-shape">
                    <img src={VectorShape} alt="image" />
                </div>
            </div>
        </>
    )
}

export default Services;