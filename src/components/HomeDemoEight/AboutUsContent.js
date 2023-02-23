import React from 'react';
import { Link } from "gatsby"

import AboutImg from "../../assets/images/home-8-9-10/about/about.png";

const AboutUsContent = () => {
    return (
        <>
            <div className="dibiz-about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-about-image">
                                <img src={AboutImg} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-about-content">
                                <span>ABOUT US</span>
                                <h3>금융을 기술로 이야기하는 핀테크 스타트업 CONNECT입니다.</h3>
                                <p>금융은 중요하다고 생각하는 청년들이 모여, 금융을 이야기하는 스타트업을 만들었습니다.<br/>
                                금융으로 바꾸는 보다 나은 세상을 꿈꾸며, 금융으로 모두가 연결되는 또 하나의 미래를 추구합니다.
                                </p>
                                <ul className="about-list">
                                    <li>
                                        <span>WHY NOW</span> 지금은 금융이 중요한 자본의 시대입니다.
                                    </li>
                                    <li>
                                        <span>WHY HERE</span> 이곳의 모두가 생존을 위해 금융을 알아야 합니다.
                                    </li>
                                    <li>
                                        <span>WHY WE</span> 우리는 금융이 세상을 변화시킬 수 있다고 생각합니다.
                                    </li>
                                </ul>
                                <div className="about-btn">
                                    <Link to="/about-us-1" className="default-btn-with-radius">
                                        More About Us <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsContent;