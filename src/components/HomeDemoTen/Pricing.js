import React from 'react';
import { Link } from "gatsby"

const Pricing = () => {
    return (
        <>
            <div className="dibiz-pricing-area pb-75">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">PRICING</span>
                        <h2>Our Flexible Pricing Plan</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card with-border-style">
                                <div className="pricing-header">
                                    <h3>Starter Plan</h3>
                                </div>
                                <div className="pricing-price">
                                    $49.99 <span>Per Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Book Now <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                                <ul className="pricing-list">
                                    <li><i className='bx bx-check'></i> 10GB Bandwidth Internet</li>
                                    <li><i className='bx bx-check'></i> Business & Financ Analysing</li>
                                    <li><i className='bx bx-check'></i> 25 Social Media Reviews</li>
                                    <li><i className='bx bx-check'></i> Customer Managemet</li>
                                    <li><i className='bx bx-check'></i> 24/7 Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card with-border-style">
                                <div className="pricing-header">
                                    <h3>Advance Plan</h3>
                                </div>
                                <div className="pricing-price">
                                    $69.99 <span>Per Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Book Now <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                                <ul className="pricing-list">
                                    <li><i className='bx bx-check'></i> 10GB Bandwidth Internet</li>
                                    <li><i className='bx bx-check'></i> Business & Financ Analysing</li>
                                    <li><i className='bx bx-check'></i> 25 Social Media Reviews</li>
                                    <li><i className='bx bx-check'></i> Customer Managemet</li>
                                    <li><i className='bx bx-check'></i> 24/7 Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card with-border-style">
                                <div className="pricing-header">
                                    <h3>Premium Plan</h3>
                                </div>
                                <div className="pricing-price">
                                    $99.99 <span>Per Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Book Now <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                                <ul className="pricing-list">
                                    <li><i className='bx bx-check'></i> 10GB Bandwidth Internet</li>
                                    <li><i className='bx bx-check'></i> Business & Financ Analysing</li>
                                    <li><i className='bx bx-check'></i> 25 Social Media Reviews</li>
                                    <li><i className='bx bx-check'></i> Customer Managemet</li>
                                    <li><i className='bx bx-check'></i> 24/7 Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;