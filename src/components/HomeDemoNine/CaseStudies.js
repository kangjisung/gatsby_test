import React from 'react';
import { Link } from "gatsby"

import CaseStudies1 from '../../assets/images/home-8-9-10/case-studies/case-studies-1.jpg';
import CaseStudies2 from '../../assets/images/home-8-9-10/case-studies/case-studies-2.jpg';
import CaseStudies3 from '../../assets/images/home-8-9-10/case-studies/case-studies-3.jpg';

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
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
};

const CaseStudies = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="dibiz-case-studies-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="dibiz-case-studies-section-content">
                                <span>CASE STUDIES</span>
                                <h3>Check of Our Some Recent Works & Case Studies</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            {display ? <OwlCarousel 
                                className="dibiz-case-studies-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="dibiz-case-studies-card">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies1} alt="image" />
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

                                <div className="dibiz-case-studies-card">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies2} alt="image" />
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

                                <div className="dibiz-case-studies-card">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies3} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <h3>
                                            <Link to="/single-portfolio">Detection Project</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link to="/single-portfolio">
                                                <i className="flaticon-next-button"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="dibiz-case-studies-card">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies1} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <h3>
                                            <Link to="/single-portfolio">Data Scientist</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link to="/single-portfolio">
                                                <i className="flaticon-next-button"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="dibiz-case-studies-card">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies2} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <h3>
                                            <Link to="/single-portfolio">Data Analysis</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link to="/single-portfolio">
                                                <i className="flaticon-next-button"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="dibiz-case-studies-card ">
                                    <Link to="/single-portfolio">
                                        <img src={CaseStudies3} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <h3>
                                            <Link to="/single-portfolio">Detection Project</Link>
                                        </h3>
                                        <div className="icon">
                                            <Link to="/single-portfolio">
                                                <i className="flaticon-next-button"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies;