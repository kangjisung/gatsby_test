import React from 'react';

import ClientImg1 from '../../assets/images/home-8-9-10/clients/clients-1.png'
import ClientImg2 from '../../assets/images/home-8-9-10/clients/clients-2.png'
import ClientImg3 from '../../assets/images/home-8-9-10/clients/clients-3.png'
import ClientImg4 from '../../assets/images/home-8-9-10/clients/clients-4.png'

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
        1024: {
            items: 3,
        },
        1200: {
            items: 3,
        }
    }
};

const TestimonialStyleThree = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="dibiz-clients-area ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">TESTIMONIALS</span>
                        <h2>What Our Clients Are Saying?</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="dibiz-clients-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="dibiz-clients-card wow fadeInUp">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>Blair</h3>
                                        <span>Python Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg3} alt="image" />
                                    <div className="title">
                                        <h3>Ian</h3>
                                        <span>Marketing Lead</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg4} alt="image" />
                                    <div className="title">
                                        <h3>Colin</h3>
                                        <span>Support</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg1} alt="image" />
                                    <div className="title">
                                        <h3>John Smith</h3>
                                        <span>Python Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>Sarah Taylor</h3>
                                        <span>Marketing Lead</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg3} alt="image" />
                                    <div className="title">
                                        <h3>David Warner</h3>
                                        <span>Support</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg1} alt="image" />
                                    <div className="title">
                                        <h3>John Smith</h3>
                                        <span>Python Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>Sarah Taylor</h3>
                                        <span>Marketing Lead</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg3} alt="image" />
                                    <div className="title">
                                        <h3>David Warner</h3>
                                        <span>Support</span>
                                    </div>
                                </div>
                            </div>
                            <p>“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula donec rutrum congue leo eget malesuada.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleThree;