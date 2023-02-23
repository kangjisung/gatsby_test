import React from 'react';
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo.png"
import ShapeImg from "../../assets/images/home-8-9-10/footer/shape.png"

const FooterStyle2 = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link to="/" className="logo">
                                <h3>playfin</h3>
                            </Link>
                            <p>안녕하세요</p>

                            <ul className="social-link">
                                <li><a href="https://www.instagram.com/financier.official/" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="https://www.linkedin.com/company/플래잇/" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    서울특별시 마포구 공덕동 백범로31길 21
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:connecton.official@gmail.com">connecton.official@gmail.com</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright <i className='bx bx-copyright'></i>{currentYear} <strong>CONNECT</strong> Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src={ShapeImg} alt="Shape" />
            </div>
        </footer>
    );
}

export default FooterStyle2;