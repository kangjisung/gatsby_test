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
                        <span className="sub-title">WHAT WE DO</span>
                        <h2>우리는 금융을 가르치지 않습니다. 금융에 대한 습관과 태도를 만듭니다.</h2>
                        <p>일방적으로 전달하기만 하는 교육을 지양합니다. 자연스럽게 익히는 금융 경험을 통해 스스로의 금융 지능과 역량을 만들어 나갑니다.</p>
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
                                <Link to="/#">
                                저축
                                </Link>
                            </h3>
                            <p>은행의 종류와 역할, 단리와 복리, 예금 및 적금, 대출 그리고 원리금 상환 등 은행에서 이루어지는 모든 금융활동을 경험합니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                투자
                                </Link>
                            </h3>
                            <p>CMA, 주식, 재무제표, 기업공개(IPO), 채권, 펀드, 파생상품 등 증권사에서 다루는 각종 금융상품과 금융경험에 대해 다룹니다.</p>
                            {/* <Link to="/single-services" className="services-btn">
                                View More <i className="flaticon-next-button"></i>
                            </Link> */}
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    보험
                                </Link>
                            </h3>
                            <p>생명보험 및 손해보험, 그리고 보장성 보험과 저축성 보험 등 보험 자체의 필요성과 다양한 보험의 종류를 이해할 수 있습니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    부동산
                                </Link>
                            </h3>
                            <p>청약, 부동산 거래, 수익구조, 각종 법규, 관련 세금 등을 배우며 내 집 마련부터 부동산 투자까지 경험할 수 있습니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    달러와 금
                                </Link>
                            </h3>
                            <p>기축통화로서의 달러와 금본위제도에 대해 이해하며, 원자재 등 관련 투자 방법에 대해서도 배울 수 있습니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    디지털 자산
                                </Link>
                            </h3>
                            <p>가상자산에 대해 이해하는 것은 물론 비트코인이나 블록체인 기술 등에 대한 금융활동을 경험할 수 있습니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    금리와 환율
                                </Link>
                            </h3>
                            <p>원화와 외화, 그리고 금리와 환율의 개념 및 영향 등에 대해 배웁니다. 금리변동, 통화정책, 경제위기의 상관관계에 대해 이해하고 경험할 수 있습니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    경제위기
                                </Link>
                            </h3>
                            <p>한국 IMF 외환위기, 일본의 잃어버린 20년, 서브프라임 모기지 사태 등 경제순환과 위기에 대해 이해하고 경제위기에 어떻게 대응할 수 있을 지를 고찰합니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    세금
                                </Link>
                            </h3>
                            <p>납세의 의무를 이해하고 과세표준, 연말정산, 소득공제 및 세액공제, 공제 상품, 증여 및 상속 공제 등 세금의 다양한 영역에 대해 경험합니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-two">
                                <i className="flaticon-keywords"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    자산관리
                                </Link>
                            </h3>
                            <p>개인의 생애주기와 투자성향에 맞는 합리적 재무목표를 설정하고 금융 선택을 할 수 있습니다. 수입, 지출, 신용, 부채, 투자, 기부까지의 자산관리경험을 다룹니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-three">
                                <i className="flaticon-content-management"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    창업
                                </Link>
                            </h3>
                            <p>소득 또는 부를 창출하고 사회에 기여하기 위한 방법으로서의 창업에 대해 이해하고, 창업에 필요한 각종 지식과 경험에 대해 배우고 익힙니다.</p>
                            
                        </div>

                        <div className="dibiz-services-card">
                            <div className="icon color-four">
                                <i className="flaticon-competitor"></i>
                            </div>
                            <h3>
                                <Link to="/#">
                                    따뜻한 금융
                                </Link>
                            </h3>
                            <p>크라우드 펀딩, 무이자 은행, 커뮤니티 개발은행, 사회성과연계채권 등 세상에 보탬이 되는 금융의 올바른 역할과 나아갈 방향에 대해 생각하고 경험합니다.</p>
                            
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