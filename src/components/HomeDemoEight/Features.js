import React from 'react';
import { Link } from "gatsby"

import FeatureImg1 from "../../assets/images/home-8-9-10/features/features-1.png";
import FeatureImg2 from "../../assets/images/home-8-9-10/features/features-2.png";
import FeatureImg3 from "../../assets/images/home-8-9-10/features/features-3.png";

const Features = () => {
    return (
        <>
            <div className="dibiz-features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg1} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">금융을 즐기다</Link>
                                </h3>
                                <p>현실 기반의 여러 가지 금융상황을 가상공간에서 부담없이 경험해 볼  수 있습니다. 경험을 통해 보다 나은 금융습관과 태도를 키웁니다.</p>
                                <Link to="/single-services" className="features-btn">
                                #finance <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg2} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">금융을 배우다</Link>
                                </h3>
                                <p>실생활에 필요한 살아있는 금융지식을 배웁니다. 다양하고 풍부한 금융교육 콘텐츠를 통해 스스로의 금융 이해와 역량을 높일 수 있습니다. </p>
                                <Link to="/single-services" className="features-btn">
                                #education <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="dibiz-features-card">
                                <div className="features-image">
                                    <Link to="/single-services">
                                        <img src={FeatureImg3} alt="image" />
                                    </Link>
                                </div>
                                <h3>
                                    <Link to="/single-services">금융을 나누다</Link>
                                </h3>
                                <p>자신의 금융선택과 금융경험을 타인과 공유할 수 있습니다. 서로를 통해 배우고 함께 성장하는 기술 기반 금융 소셜네트워크를 만듭니다.</p>
                                <Link to="/single-services" className="features-btn">
                                #technology <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;