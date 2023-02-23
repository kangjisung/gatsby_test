import React from 'react';
import { Link } from "gatsby"

import BannerImg from "../../assets/images/home-8-9-10/banner/banner.png";
import BannerShape1 from "../../assets/images/home-8-9-10/banner/shape-1.png";
import BannerShape2 from "../../assets/images/home-8-9-10/banner/shape-2.png";

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-content">
                                <span className="sub-title">금융을 플레이하다</span>
                                <h1>아이부터 어른까지 모두가 즐기는 똑똑하고 슬기로운 금융생활</h1>
                                <p>지루하고 어렵기만 한 금융은 이제 그만! 메타버스 금융생활 플랫폼 ‘플레이핀’에서 쉽고 재미있게 배우는 금융을 만나보세요.</p>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Get Started <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-image">
                                <img src={BannerImg} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="new-main-banner-shape-1">
                    <img src={BannerShape1} alt="image" />
                </div>
                <div className="new-main-banner-shape-2">
                    <img src={BannerShape2} alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;