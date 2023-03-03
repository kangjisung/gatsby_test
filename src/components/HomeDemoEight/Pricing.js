import React from 'react';
import { Link } from "gatsby"

const Pricing = () => {
    return (
        <>
            <div className="dibiz-pricing-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">SERVICES</span>
                        <h2>금융을 즐기는 3가지 방법</h2>
                        <p>메타버스부터 카드연계, 소셜네트워크까지 다양하게 금융을 경험하고 즐길 수 있는 서비스를 만듭니다.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card">
                                <div className="pricing-header">
                                    <h3>SERVICE 1</h3>
                                    <span>메타버스 금융생활 플랫폼</span>
                                </div>
                                <div className="pricing-price">
                                플레이핀<br/><span>금융을 플레이하다</span>
                                </div>
                                <span>플레이핀은 가상공간에서의 금융활동을 경험함으로써 고객이 실생활에서의 금융선택 및 활동에 보다 유연하게 대응할 수 있도록 하기 위해 만들어졌습니다. 플레이핀은 각종 금융콘텐츠를 경험할 수 있는 곳이며, 다른 참여자들과의 관계 맺기를 통한 소셜 커뮤니티 기능까지 포함되어 있습니다.</span>
                                {/* <ul className="pricing-list">
                                    <li><i className='bx bx-check'></i> 10GB Bandwidth Internet</li>
                                    <li><i className='bx bx-check'></i> Business & Financ Analysing</li>
                                    <li><i className='bx bx-check'></i> 25 Social Media Reviews</li>
                                    <li><i className='bx bx-check'></i> Customer Managemet</li>
                                    <li><i className='bx bx-check'></i> 24/7 Support</li>
                                </ul>
                                <div className="pricing-btn">
                                    <Link to="/contact" className="default-btn-with-radius">
                                        Book Now <i className="flaticon-next-button"></i>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card active">
                                <div className="pricing-header">
                                    <h3>SERVICE 2</h3>
                                    <span>똑똑한 카드사용습관</span>
                                </div>
                                <div className="pricing-price">
                                굿샤일록<br/> <span>카드 사용을 통한 행동 변화</span>
                                </div>
                                <span>현대사회에서 사용하지 않을 수 없는 체크/선불/신용카드의 사용을 통해 개인의 행동 및 습관 변화를 유도하고, 나아가 세상에 이로운 변화를 일으킬 수 있도록 하기 위한 프로젝트입니다. 일례로, 카드사용내역으로부터 탄소배출량을 도출하여 기후위기에 대응할 수 있는 행동변화를 도출합니다.</span>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-pricing-card">
                                <div className="pricing-header">
                                    <h3>SERVICE 3</h3>
                                    <span>맛있는 금융 소셜네트워크</span>
                                </div>
                                <div className="pricing-price">
                                피낭시에<br/> <span>기분 좋은 금융디저트 한 입</span>
                                </div>
                                <span> 피낭시에는 프랑스로 금융이라는 뜻을 지닌 디저트입니다. 19세기 프랑스에서 바쁜 금융인들을 위해 먹기 쉬운 크기로 개발된 피낭시에는, 재물운을 가져다 주는 디저트로도 불립니다. 작고 귀여운 피낭시에처럼 한 번에 하나씩, 인스타그램을 통해 쉽고 재미있는 금융지식을 전해드립니다.</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;