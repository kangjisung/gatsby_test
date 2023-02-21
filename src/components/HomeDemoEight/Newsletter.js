import React from 'react';

import SubscribeImg from "../../assets/images/home-8-9-10/subscribe/subscribe.png";
import VectorShapeImg from "../../assets/images/home-8-9-10/subscribe/vector-shape.png";

const Newsletter = () => {
    return (
        <>
            <div className="dibiz-subscribe-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="dibiz-subscribe-content">
                                <span className="sub-title">DIBIZ UPDATES</span>
                                <h2>Subscribe To Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <form className="newsletter-form">
                                    <input 
                                        type="text" 
                                        className="input-newsletter" 
                                        placeholder="Enter your email address" 
                                        name="EMAIL" 
                                        required
                                    />
                                    <button 
                                        type="submit" 
                                        className="default-btn-with-radius"
                                    >
                                        Subscribe Now <i className="flaticon-next-button"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="dibiz-subscribe-image">
                                <img src={SubscribeImg} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dibiz-subscribe-vector-shape">
                    <img src={VectorShapeImg} alt="image" />
                </div>
            </div>
        </>
    )
}

export default Newsletter;