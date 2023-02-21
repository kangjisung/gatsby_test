import React from 'react';

import ShapeImg1 from "../../assets/images/home-8-9-10/subscribe/shape-1.png"
import ShapeImg2 from "../../assets/images/home-8-9-10/subscribe/shape-2.png"

const Newsletter = () => {
    return (
        <>
            <div className="dibiz-subscribe-area bg-F7F8FF ptb-100">
                <div className="container">
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
                <div className="dibiz-subscribe-shape-1">
                    <img src={ShapeImg1} alt="image" />
                </div>
                <div className="dibiz-subscribe-shape-2">
                    <img src={ShapeImg2} alt="image" />
                </div>
            </div>
        </>
    )
}

export default Newsletter;